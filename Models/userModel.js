import mongoose from "mongoose";
import slugify from "slugify";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Any user must have a name !"], // validator
      unique: true,
      trim: true,
      minLnegth: [6, "your username must be at least 6 characters"],
      maxLength: [15, "your username must be 15 characters at maximum"]
    },
    email: {
      type: String,
      required: [true, "Any user must have an email !"], // validator
      unique: true,
      trim: true,
      validate: {
        validator: function(field) {
          return validator.isEmail(field);
        },
        message: "Please provide a valid email"
      }
    },
    slug: {
        type: String,
        select: false
    },
    userType: {
        type: String,
        enum: ["user", "roaster-master", "admin"],
        default: "user"
    },
    isMaster: {
      type: Boolean,
      default: false
    },
    masterOf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roaster"
    },
    password: {
        type: String,
        required: [true, "you must have a password"],
        minlength: [1, "your password must be at least 8 charecters"],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "you must enter the same password to confirm it"],
        validate: {
          // the validator is called when the new doc is created, WHICH MEANS ONLY ON CREATE() AND SAVE() NOT UPDATE().
         // NEVER use arrow func in validator.
         // validator only returns true/false.
          validator: function(field) {
            return field === this.password;
          },
          message: "make sure the entered passwords are matching"
        }
    },
    image: {
        type: String,
        default: "default.jpg",
    },
    isBlocked: {
      type: Boolean,
      default: false
    },
    socialMedia: [String],
    favouriteRoasters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roaster" }], 
    favouriteBeans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bean" }],
    // myReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    // WHY i COMMENTED myReviews ?
    /*
      The above is an example of bad schema design. Why? 
      Suppose you have an extremely prolific user that writes over 10k reviews! 
      That author document will be huge, over 12kb, and large documents lead to 
      performance issues on both server and client. one-to-many relationships, like user to reviews,
      should be stored on the "many" (review) side. 
      In other words, reviews should store their user, users should not store all their reviews.
     */

    // these three fields are related to auth-auth functionalities in controllerAuth.js file
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    strictQuery: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

/*
  // REMEMMBER: populate-virtuals Won't work because the foreign field `author` is not selected in find().
*/

userSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "user"
});

userSchema.pre("save", function(next) {
    this.slug = slugify(this.username, {lower: true});
    next();
});

userSchema.pre("save", async function(next) {
  // this here is refereing to the doc, because this is a document md
  // so here we're checking if THIS -doc- user is modified or not to decide if we have to encrype the password again or leave it.
  if(!this.isModified("password")) return next(); // the field name must be insid qoutes.

  this.password = await bcrypt.hash(this.password, 13);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function(next) {
          // !flase => true || new document => true , these two conditions must be tested before setting passwordChangedAt property on each pre("save"); 
  if(!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  // a small hack  to ensure that the token was created before changing the password (this small detail is important for protect() md).

  next();
});

userSchema.methods.comparePasswords = async function(commingPassword, currentPassword) {
   /* 
    instanced methods are available on the document, 
    so, this keyword points to the current document. then why we're not using this.password?
    actually in this case, since we have set the password to select false, 
    this.password will not be available. So we will pass it from the controllerAuth since we've ot it there.
  */
  return await bcrypt.compare(commingPassword, currentPassword)
}

userSchema.methods.changedPasswordAfter = function(jwtTimeStamp) {

  if(this.passwordChangedAt) {
    // because the passwordChangedAt is of type Date, we've to change its format to be identical of the seconde format of jwtTimeStamp
    const changedtTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return jwtTimeStamp < changedtTimeStamp;

  }
  return false;

}

userSchema.methods.generateRandomToken = function() {
  const randomToken = crypto.randomBytes(36).toString("hex");
  // save the encrypted version in or database.
  this.passwordResetToken = crypto.createHash("sha256").update(randomToken).digest("hex");
  this.passwordResetExpires = Date.now() + 15 * 60 * 1000; // I want the token to last for 15m .
                                        // min * sec * ms
  return randomToken; // return the encrypted version to the controller to decrypt it to send it via email.

}

// mongoose.set("sanitizeFilter", true); // throws TypeError: mongoose__WEBPACK_IMPORTED_MODULE_0___default(...).set is not a function

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;