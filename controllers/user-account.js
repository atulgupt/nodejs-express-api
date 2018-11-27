class UserAccountController {

    constructor() { }

    /**
     * @description To registered the new user
     * @param {*} req
     * @param {*} res
     */
    registration(req, res) {
        res.status(200).json({ message: 'Controller calling...' });
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
