const express = require('express');
const router = express.Router();
const userController  = require('../controller/userController.js')

router.post('/register',userController.register);
router.post('/login',userController.login);
router.get("/view",userController.view);
router.post("/add-to-fav-package",userController.addToFavPackage);
router.post("/add-to-fav-item",userController.addToFavItem);
router.post("/add-to-block",userController.addToBlock);
router.post("/remove-from-block",userController.removeFromBlock);
router.get("/verifyByEmail/:userId",userController.verified);
router.post("/fav-foods",userController.viewFoods);
router.post('/update-profile',userController.updateProfile);




module.exports = router;