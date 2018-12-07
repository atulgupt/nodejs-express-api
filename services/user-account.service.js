const UserDao = require("../dao/user.dao"),
    passwordHash = require("password-hash"),
    constants = require("../utils/constant.message"),
    _ = require("lodash");

class UserAccountService {

    /**
     * @description calling the dao method for registering the new user
     * @param {Object} req
     */
    async createUser(req) {
        req.body.password = passwordHash.generate(req.body.password);
        const { first_name, last_name, username, email, password, phone_number } = req.body;
        const result = await UserDao.createUser({ first_name, last_name, username, email, password, phone_number });
        return result;
    }

    /**
     * @description For getting the user data on the basis of query
     * @param {Object} query
     */
    async getUserDoc(query) {
        const result = await UserDao.getUser(query);
        return result;
    }

    /**
     * @description
     * @param {*} req
     */
    async updateprofile(req) {
        const { address, city, pincode } = req.body;
        const result = await UserDao.updateProfile({ address, city, pincode });
    }
}
module.exports = UserAccountService;
