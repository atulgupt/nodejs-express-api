let router = require('express').Router(),
    userAccountController = require('../controllers/user-account.controller');

router.route('/registration').post(userAccountController.registration);
module.exports = router;
