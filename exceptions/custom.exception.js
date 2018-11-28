const constantMessages = require('../utils/constant.message'),
    ThrownException = require('./Exception');

class CustomException {

    constructor() { }

    async resourceNotFound(response, errMsg) {
        return await new ThrownException(404, response, errMsg);
    }

    async internalServerError(response, errMsg) {
        return await new ThrownException(500, response, errMsg);
    }


    async authenticationError(response, errMsg) {
        return getException(401, constants.MESSAGES.intrnlSrvrErr, err);
    }

    async badRequest(response, errMsg) {
        return getException(400, constants.MESSAGES.intrnlSrvrErr, err);
    }

    async resourceAlreadyExists(response, errMsg) {
        return getException(409, constants.MESSAGES.intrnlSrvrErr, err);
    }
}

module.exports = new CustomException();

