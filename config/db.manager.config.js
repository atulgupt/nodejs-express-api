const mongoose = require("mongoose");
let mongoConnection;

/**
 * @description Connect with MongoDB
 * @param {*} config
 */
async function connectMongo(conf) {
    if (mongoConnection === undefined) {
        mongoose.set("debug", true);
        mongoose.set("useCreateIndex", true);
        mongoConnection = await mongoose.connect(conf.dbConfig.mongoDB.dbUrl, { useNewUrlParser: true });
    }
}

module.exports = {
    connectMongo
};
