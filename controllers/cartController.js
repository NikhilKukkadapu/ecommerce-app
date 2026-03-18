const db = require('../config/db');

exports.addToCart = (req, res) => {
    const { product_id, quantity } = req.body;
    const user_id = req.user.id;

    db.query(
        "INSERT INTO cart (user_id,product_id,quantity) VALUES (?,?,?)",
        [user_id, product_id, quantity],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Added to Cart" });
        }
    );
};

exports.getCart = (req, res) => {
    db.query(
        "SELECT * FROM cart WHERE user_id=?",
        [req.user.id],
        (err, result) => {
            res.json(result);
        }
    );
};