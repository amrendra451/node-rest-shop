const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        msg: "Order GET request"
    })
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        msg: "Order created."
    })
});

router.get("/:orderId", (req, res, next) => {
    res.status(200).json({
        msg: "order fetched",
        id: req.params.orderId
    })
});

module.exports = router;