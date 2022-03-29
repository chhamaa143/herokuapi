const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/place-order",orderController.placeOrder);
router.get("/view-order/:uid",orderController.viewOrder);
router.get('/order-history',orderController.orderHistory);
module.exports = router;