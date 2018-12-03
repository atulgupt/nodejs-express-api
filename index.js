const express = require('express'),
    dotenv = require('dotenv').config(),
    bodyParser = require('body-parser'),
    config = require("./config/index.config"),
    cors = require('cors'),
    morgan = require('morgan');
/**
 * @description database configuration and connection
 */
config.dbManager.connectMongo(config.env).then(() => {
    console.log('successfully connected with database');
    const path = require('path'),
        mobileRouter = require('./routes/mobile-router'),
        CommonUtil = require("./utils/common.utils"),
        app = express();

    app.use(morgan('combined'));
    app.use(cors());

    // create application/x-www-form-urlencoded parser
    app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

    // create application/json parser
    app.use(bodyParser.json({ limit: "5mb" }));

    //Application-level middleware
    app.use(function (req, res, next) {
        console.log(new Date(), req.method, req.url);
        res.setHeader('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-API-KEY');
        res.header('Content-Type', 'application/json; charset=utf-8');
        next();
    });

    //Extend the router file
    app.use('/mobile', mobileRouter);

    app.listen(config.env.appPort, function () {
        console.log("Your node js server is running on PORT:" + config.env.appPort);
    });
});
