let router = require('express').Router(),
    userAccountController = require('../controllers/user-account');

router.route('/registration').post(userAccountController.registration);
module.exports = router;
