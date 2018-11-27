const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }).then(() => {
    console.log('Your database is connected.');
}, err => {
    console.log('Can not connect with the database', err);
});
app.use(bodyParser.json());
app.listen(PORT, function () {
    console.log("Your node js server is running on PORT:" + PORT);
});
