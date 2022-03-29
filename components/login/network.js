const express = require('express'),
    controller = require('./controller');

const router = express.Router();

router.post('/login', controller.postCategory)
router.post('/login/sendcode', controller.postCategory)

module.exports = router;