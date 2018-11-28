const hashingAlgo = require('password-hash'),
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
        if (!req.body.first_name || !re.body.email || !req.body.password) {
            res.status(404).send({ message: 'Something is missing. Please send required filed.' });
        } else {

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
