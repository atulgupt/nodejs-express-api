const passwordHash = require('password-hash'),
    constantMessage = require('../utils/constant.message'),
    CustomException = require('../exceptions/custom.exception'),
    UserAccountService = require('../services/user-account.service'),
    mongoose = require('mongoose'),
    userService = new UserAccountService();
class UserAccountController {

    constructor() { }

    /**
     * @description For creating the new user
     * @param {Object} req
     * @param {Object} res
     */
    async addNewAccount(req, res) {
        try {
            if (!req.body.first_name || !req.body.email || !req.body.password) {
                throw await CustomException.resourceNotFound(constantMessage.REQUIRED);
            } else {
                const user = await userService.getUserDoc({
                    email: req.body.email
                });
                console.log(user, '<--- user');
                if (!user) {
                    const result = await userService.createUser(req);
                    if (result) {
                        res.status(200).send(result);
                    }
                } else {
                    throw await CustomException.resourceAlreadyExists(constantMessage.ACCOUNT_EXIST);
                }

            }
        } catch (error) {
            console.log(error, '<-----');
            res.status(error.status).json(error);
        }
    }

    /**
     * @description for authorization the user
     * @param {*} req
     * @param {*} res
     */
    async loginAccount(req, res) {
        try {
            const {
                email,
                password
            } = req.body;
            if (!email || !password) {
                throw await CustomException.resourceNotFound(constantMessage.REQUIRED);
            } else {
                const user = await userService.getUserDoc({
                    email: email
                });
                console.log(user, '<--- user');
                if (user && passwordHash.verify(password, user.password)) {
                    res.status(200).send(user);
                } else {
                    throw await CustomException.resourceNotFound(constantMessage.INVALID_CREDENTIALS);
                }
            }
        } catch (error) {
            console.log(error, '<-----');
            res.status(error.status).json(error);
        }
    }

    async updateProfile(req, res) {
        try {
            if (!req.body.id || req.body.address || req.body.city || req.body.pincode) {
                throw await CustomException.resourceNotFound(constantMessage.REQUIRED);
            } else {
                const address = await userService.updateprofile(req);
            }
        } catch (error) {
            console.log(error, '<-----');
            res.status(error.status).json(error);
        }
    }
}
module.exports = new UserAccountController();
