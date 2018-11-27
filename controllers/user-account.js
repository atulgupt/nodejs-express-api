const UserAccount = require('../table-schema/user-account-schema');
class UserAccountController {

    constructor() { }

    /**
     * @description To registered the new user
     * @param {*} req
     * @param {*} res
     */
    registration(req, res) {
        console.log(req.body);
        res.status(200).json({ message: 'Controller calling...' });
        // Create a Note
        const account = new UserAccount({
            username: 'dsfsdsdf',
            email: 'asas@sfdsf.dsfd'
        });
        account.save()
    }

    /**
     * @description for authorization the user
     * @param {*} req
     * @param {*} res
     */
    login(req, res) {

    }
}
let user = new UserAccountController();
module.exports = user;
