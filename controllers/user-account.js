const hashingAlgo = require('password-hash'),
    constantMessage = require('../utils/constant.message'),
    CustomException = require('../exceptions/custom.exception'),
    userService = require('../services/user-account.service'),
    validator = require('../validator/user-account.validator');
class UserAccountController {

    constructor() { }

    /**
     * @description To registered the new user
     * @param {*} req
     * @param {*} res
     */
    async registration(req, res) {
        try {
            if (!req.body.first_name || !req.body.email || !req.body.password) {
                throw CustomException.resourceNotFound(res, constantMessage.REQUIRED);
            } else {
                const result = await userService.createUser(req);
                if (result) {
                    res.status(200).send(result);
                }

            }
        } catch (error) {
            console.log(error);
        }

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
