const db = require('../config/db');

exports.placeOrder = (req, res) => {
    const user_id = req.user.id;
    const { total } = req.body;

    db.query(
        "INSERT INTO orders (user_id,total) VALUES (?,?)",
        [user_id, total],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Order Placed Successfully" });
        }
    );
};