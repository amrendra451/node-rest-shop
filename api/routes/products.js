const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        msg: "Handling GET product request"
    })
});

router.post("/", (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        msg: "Handling POST product request",
        createdProduct: product
    })
});

router.get("/:productID", (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            msg: "You have found the product",
            id: id
        });
    } else {
        res.status(200).json({
            msg: "You passed an Id."
        });
    }
});

router.patch("/:productID", (req, res, next) => {
    res.status(200).json({
        msg: "Updated product!"
    });
});

router.delete("/:productID", (req, res, next) => {
    res.status(200).json({
        msg: "Deleted product!"
    });
});


module.exports = router;