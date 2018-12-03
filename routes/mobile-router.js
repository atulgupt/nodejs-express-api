let router = require('express').Router(),
    userAccountController = require('../controllers/user-account.controller');

router.route('/addNewAccount').post(userAccountController.addNewAccount);
router.route('/loginAccount').post(userAccountController.loginAccount);
module.exports = router;
