
const dbValidationErrorHandler = (error) => {
    console.log("dbValidationErrorHandler");
    // Object.values used to loop over an object of arrayes or then map to loop over the array itself .
    const allErrorsMesgs = Object.values(error.errors).map((element) => element.message);
                                        // inside the error obj we have errors property which is also an obj.
                                        // errors has got the validation messages we wrote on the mongoose schema.
    const message = `${allErrorsMesgs.join(". ")}`;

    return message;
    
  };

  const dbDuplicateKeyHandler = (error) => {
        /*
      {
      index: 0,
      code: 11000,
      errmsg: 'E11000 duplicate key error collection: MCL.users index: userName_1 dup key: { userName: null }',
      keyPattern: { userName: 1 },
      keyValue: { userName: null }
    }
    */
    // console.log("dbDuplicateKeyHandler", error);
    // console.log("error.keyPattern.key IS ==> ", error.keyPattern.key);
    // console.log("error.keyValue.key IS ==> ", error.keyValue.key);
    // console.log("error.keyValue IS ==> ", error.keyValue);
    // console.log(Object.keys(error.keyValue)); ✅
    
  
    const message = `Duplicated field value: (${Object.values(error.keyValue)}) at field: (${Object.keys(error.keyValue)}). Please use another value .`;
    return message;

  };

export function errorController(error) {
    console.log("displayErrorToast");
    let message;
    // if (error.name === "CastError") message = dbCastErrorHandler(error); // these type of errors will be marked as isOperational .

    // this type of error does't have a name property because it wasn't caused by mongoose but by 
    // mongoDB driver , so, we're going to use code property .
    if (error?.errorResponse.code === 11000) message = dbDuplicateKeyHandler(error.errorResponse);

    if (error.name === "ValidationError") message = dbValidationErrorHandler(error);

    // if (error.name === "JsonWebTokenError") message = jwtInvalidToken();

    // if (error.name === "TokenExpiredError") message = jwtTokenExpiredError(error);

    console.log("✉",message);    
    return {error: {message}};
}