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
        return getException(401, constants.MESSAGES.intrnlSrvrErr, err);
    }

    async badRequest(errMsg) {
        return getException(400, constants.MESSAGES.intrnlSrvrErr, err);
    }

    async resourceAlreadyExists(errMsg) {
        return new ThrownException(409, errMsg);
    }
}

module.exports = new CustomException();

