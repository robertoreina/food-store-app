const express = require('express'),
    controller = require('./controller');

const router = express.Router();

router.get('/', controller.getAll)
router.post('/', controller.postCategory)

module.exports = router;