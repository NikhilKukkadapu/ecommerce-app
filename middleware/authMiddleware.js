const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: "No token" });

    jwt.verify(token, "SECRETKEY", (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid Token" });
        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;