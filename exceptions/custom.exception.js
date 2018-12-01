const constantMessages = require('../utils/constant.message'),
    ThrownException = require('./Exception');

class CustomException {

    constructor() { }

    async resourceNotFound(errMsg) {
        return await new ThrownException(404, errMsg);
    }

    async internalServerError(errMsg) {
        return await new ThrownException(500, errMsg);
    }


    async authenticationError(errMsg) {
        return await new ThrownException(401, errMsg);
    }

    async badRequest(errMsg) {
        return await new ThrownException(400, errMsg);
    }

    async resourceAlreadyExists(errMsg) {
        return await new ThrownException(409, errMsg);
    }
}

module.exports = new CustomException();

