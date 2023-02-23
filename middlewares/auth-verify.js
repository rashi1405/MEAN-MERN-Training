const jwt = require('jsonwebtoken');

TOKEN_KEY = "KfiAJHr92JKJ7Z-ao6V3PikoYlEeujsW2QCI_YgtJ8k";

const verifyToken = (req, res, next) => {

    const token = req.header("auth-token");

    if(!token)
        return res.status(401).send("Access Denied");

    try{
        const verified = jwt.verify(token, TOKEN_KEY);
        req.user = verified;
        next();
    }
    catch (err)
    {
        res.status(400).send("Invalid Token");
    }
}

 module.exports = { verifyToken };