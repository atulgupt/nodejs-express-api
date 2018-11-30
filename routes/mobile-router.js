let router = require('express').Router(),
    userAccountController = require('../controllers/user-account.controller');

router.route('/addNewAccount').post(userAccountController.addNewAccount);
module.exports = router;
