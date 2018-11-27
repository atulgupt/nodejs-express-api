const express = require('express'),
    dotenv = require('dotenv').config(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    router = require('./router'),
    app = express(),
    PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }).then(() => {
    console.log('Your database is connected.');
}, err => {
    console.log('Can not connect with the database', err);
});

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

// create application/json parser
app.use(bodyParser.json({ limit: "5mb" }));

//Application-level middleware
app.use(function (req, res, next) {
    console.log(new Date(), req.method, req.url);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/mobile', router);

app.listen(PORT, function () {
    console.log("Your node js server is running on PORT:" + PORT);
});
