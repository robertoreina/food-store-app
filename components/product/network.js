const express = require('express'),
    controller = require('./controller'),
    optionController = require('../productOption/controller'),
    {validateData} = require('./middleware')
    multer = require('multer');

const router = express.Router(),
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/files/')
        },
        filename: function (req, file, cb) {
            cb(null, new Date().toISOString() + file.originalname.replace(/\s/g, ''))
        }
    }),
    upload = multer({storage: storage})

router.get('/', controller.getAll);
router.delete('/:id', controller.deleteProduct);
router.post('/', upload.single('avatar'), validateData, controller.postProduct);
router.put('/:id', upload.single('avatar'), validateData, controller.putProduct);

router.post('/:productId/option', optionController.postOption);

module.exports = router;
