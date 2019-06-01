const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        msg: "Order GET request"
    })
});

router.post("/", (req, res, next) => {
    const order = {
        product: req.body.productId,
        quantity: req.body.qty
    }
    res.status(201).json({
        msg: "Order created.",
        orderCreated: order
    })
});

router.get("/:orderId", (req, res, next) => {
    res.status(200).json({
        msg: "order fetched",
        id: req.params.orderId
    })
});

module.exports = router;