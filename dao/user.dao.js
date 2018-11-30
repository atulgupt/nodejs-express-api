const BaseDao = require("./base"),
    UserModel = require("../models/user-account-schema"),
    UserDao = new BaseDao(UserModel);
class UserAccountDAO {
    constructor() { }

    /**
     * @description add new document of credential
     * @param {Object} userInfo
     */
    async createUser(userInfo) {
        console.log(userInfo);
        const user = new UserModel(userInfo);
        const userData = await user.save();
        return userData;
    }

    /**
     * @description finding the one document
     * @param {Object} query
     */
    async getUser(query) {
        const result = await UserDao.findOne(query);
        return result
    }
}

module.exports = new UserAccountDAO();
