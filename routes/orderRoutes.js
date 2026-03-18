const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, orderController.placeOrder);

module.exports = router;