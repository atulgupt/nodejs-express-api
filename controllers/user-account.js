const hashingAlgo = require('password-hash'),
    constantMessage = require('../utils/constant.message'),
    CustomException = require('../exceptions/custom.exception'),
    validator = require('../validator/user-account.validator');
class UserAccountController {

    constructor() { }

    /**
     * @description To registered the new user
     * @param {*} req
     * @param {*} res
     */
    async registration(req, res) {
        const { first_name, last_name, username, email, password, phone_number } = req.body;
        console.log(first_name, last_name, username, email, password, phone_number);
        try {
            if (!req.body.first_name || !req.body.email || !req.body.password) {
                throw CustomException.resourceNotFound(res, constantMessage.REQUIRED);
            } else {
                console.log("all good");
            }
        } catch (error) {

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
