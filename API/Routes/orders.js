const express = require('express');
const router = express.Router();

// Handle Incoming GET Requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were Fetched'
    });
});
// 201-post Status code for Everything Successful
// Parsing the Body  
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was Created',
        order: order
    });
});

router.get('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'Order was Details',
        ordersId: req.params.ordersId
    });
});

router.delete('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'Order was Deleted',
        ordersId: req.params.ordersId
    });
});

module.exports = router;