const db = require('../config/db');

exports.getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        res.json(result);
    });
};

exports.addProduct = (req, res) => {
    const { name, price, image } = req.body;
    db.query(
        "INSERT INTO products (name,price,image) VALUES (?,?,?)",
        [name, price, image],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Product Added" });
        }
    );
};