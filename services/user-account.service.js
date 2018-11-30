
const UserDao = require("../dao/user.dao"),
    passwordHash = require("password-hash"),
    constants = require("../utils/constant.message"),
    _ = require("lodash");

class UserAccountService {

    /**
     *
     * @param {*} req
     */
    async createUser(req) {
        const { first_name, last_name, username, email, password, phone_number } = req.body;
        const result = await UserDao.createUser({ first_name, last_name, username, email, password, phone_number });
        return result;
    }

    async getUserByEmail(req) {
        // const { email } = req.body;
        // const result = await UserDao.createUser({ email: email }, SchemaName);
    }
}
module.exports = UserAccountService;
