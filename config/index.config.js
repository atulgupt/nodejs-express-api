const dbManager = require("./db.manager.config"),
    hostIP = process.env.HOST_IP || "localhost",
    appPort = process.env.PORT || 3001,
    apiVersion = process.env.API_VERSION || "v1",
    dbName = process.env.DB_NAME,
    dbPort = process.env.DB_PORT || 27017

const env = {
    // Server port
    appPort: appPort,
    // Server IP
    hostIP: hostIP,

    apiVersion: apiVersion,

    dbConfig: {
        // MongoDB connection configs
        mongoDB: {
            dbName: dbName,
            dbUrl: `mongodb://${hostIP}:${dbPort}/${dbName}`
        }
    },

    pageLimit: 10
}

// Export config module
module.exports = {
    env,
    dbManager
};
