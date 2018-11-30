const BaseDao = require("./base"),
    UserModel = require("../models/user-account-schema"),
    UserDao = new BaseDao(UserModel);
class UserAccountDAO {
    constructor() { }

    async createUser(userInfo) {
        console.log(userInfo);
        const user = new UserModel(userInfo);
        const userData = await user.save();
        return userData;
    }
}

module.exports = new UserAccountDAO();
