const commonDao = require('../dao/common.dao');

class UserAccountService {

    /**
     *
     * @param {*} req
     */
    async createUser(req) {
        const { first_name, last_name, username, email, password, phone_number } = req.body;
        const result = await commonDao.saveRecord({ first_name, last_name, username, email, password, phone_number });
        console.log(result, '---');
        return result;
    }
}
module.exports = new UserAccountService();
