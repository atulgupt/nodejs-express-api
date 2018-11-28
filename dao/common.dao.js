const indexController = require('./index');

class IndexDao {

    /**
     * @description
     * @param {*} obj
     */
    async saveRecord(obj, res) {
        console.log('-------->', obj);
        const o = new indexController.UserAccountModel(obj);
        return await o.save();
    }
}

module.exports = new IndexDao();
