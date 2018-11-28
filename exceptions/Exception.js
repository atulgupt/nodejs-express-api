class Exception {

    constructor(statusCode, response, error) {
        this.statusCode = statusCode;
        this.response = response;
        this.error = error;
        this.response.status(this.statusCode).json({ message: this.error });
    }
}

module.exports = Exception;
