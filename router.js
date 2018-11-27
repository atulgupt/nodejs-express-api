const express = require('express'),
    app = express();
// Create the express router object for Photos
const mobileRouter = express.Router();
mobileRouter.get('/', function (req, res) {
    console.log('function calling...');
    res.send({
        message: 'function excute...'
    });
});

module.exports = mobileRouter;
