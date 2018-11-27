const router = require('express').Router();
router.get('/', function (req, res) {
    console.log('function calling...');
    res.status(200).json({ message: 'function execute...' });
});

module.exports = router;
