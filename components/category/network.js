const express = require('express'),
    controller = require('./controller');

const router = express.Router();

router.get('/', controller.getAll)
router.post('/', controller.postCategory)
router.put('/:id', controller.updateCategory)

module.exports = router;