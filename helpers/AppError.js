class AppError extends Error {
    constructor(statusCode, message) {
        console.log("inside AE");
        
        super(message); // calling the the parent class. Error's constructor just accept a message.
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;

/**
 * this class is to handle OPERATIONAL errors.
 */