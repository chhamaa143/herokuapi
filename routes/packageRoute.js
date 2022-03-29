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
const packageController = require('../controller/packageController');

router.post('/add-package',upload.single('packageImage'),packageController.addPackage);
router.get('/package-list',packageController.packageList);
router.post('/package-update',upload.single('packageImage'),packageController.packageUpdate);
router.delete('/package-delete',packageController.packageDelete);
router.get("/available-packages",packageController.availablePackages);
router.get("/today-meal-option",packageController.todayMealOption);

module.exports = router;