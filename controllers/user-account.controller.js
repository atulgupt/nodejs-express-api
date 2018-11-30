const hashingAlgo = require('password-hash'),
    constantMessage = require('../utils/constant.message'),
    CustomException = require('../exceptions/custom.exception'),
    UserAccountService = require('../services/user-account.service'),
    userService = new UserAccountService();
class UserAccountController {

    constructor() { }

    /**
     * @description For creating the new user
     * @param {Object} req
     * @param {Object} res
     */
    async registration(req, res) {
        try {
            if (!req.body.first_name || !req.body.email || !req.body.password) {
                throw CustomException.resourceNotFound(res, constantMessage.REQUIRED);
            } else {
                const user = await userService.getUserDoc({ email: req.body.email });
                if (!user) {
                    const result = await userService.createUser(req);
                    if (result) {
                        res.status(200).send(result);
                    }
                } else {
                    throw CustomException.resourceAlreadyExists(res, constantMessage.ACCOUNT_EXIST);
                }
            }
        } catch (error) { }
    }

    /**
     * @description for authorization the user
     * @param {*} req
     * @param {*} res
     */
    async login(req, res) {

    }
}
module.exports = new UserAccountController();
