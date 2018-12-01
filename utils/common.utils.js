
const Mongoose = require("mongoose");
module.exports = {

    /**
     * @description verifying the databse connection created or not
     */
    async isDBReadyState() {
        if (Mongoose.connection.readyState == 1 || Mongoose.connection.readyState == 2) {
            return true;
        }
        return false;
    }
};
