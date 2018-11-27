class UserAccountController {

    constructor() { }

    registration(req, res) {
        res.status(200).json({ message: 'Controller calling...' });
    }
}
let user = new UserAccountController();
module.exports = user;
