const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
        cb(null , Date.now()+file.originalname);
    }
});
var upload=multer({storage: storage});
const categoryController = require('../controller/categoryController');

router.post('/add-category',upload.single('catImage'),categoryController.addCategory);
router.post('/update-category',upload.single('catImage'),categoryController.updateCategory);
router.post('/view-category',categoryController.ViewCategory);
router.delete('/delete-category',categoryController.deleteCategory);

module.exports = router;
