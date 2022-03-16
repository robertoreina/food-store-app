const express = require('express'),
    controller = require('./controller'),
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
router.post('/', upload.single('avatar'), controller.postProduct);
router.delete('/:id', controller.deleteProduct);
router.put('/:id', upload.single('avatar'), controller.putProduct);

module.exports = router;
