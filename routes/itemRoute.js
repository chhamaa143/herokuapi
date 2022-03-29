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
const itemController = require('../controller/itemController');


router.post('/add-item',upload.single("itemImage"),itemController.addItem);
router.get('/item-list',itemController.itemList);
router.post('/update-item',upload.single("itemImage"),itemController.updateItem);
router.delete('/delete-item',itemController.deleteItem);



module.exports=router;
