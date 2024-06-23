import nodemailer from "nodemailer";

const sendEmail = async(options) => {
    // 1- Create a Transporter: 
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT, //587 if secure is false, 465 if true
        secure: false,
        auth: {
            user: process.env.TRAP_USERNAME,
            pass: process.env.TRAP_PASSWORD
        }
    });

    // 2- Define email's options :
    const mailOptions = {
        from: "M.h.",
        to: options.receiver,
        subject: options.title,
        text: options.body,
        // they must be subject and text or the sent email won't have the title and email's body information.
    }

    // 3- Send:
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;