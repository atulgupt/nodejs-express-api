class Exception {

    constructor(statusCode, error) {
        this.statusCode = statusCode;
        this.error = error;
        return { message: this.error, status: this.statusCode };
    }
}

module.exports = Exception;
