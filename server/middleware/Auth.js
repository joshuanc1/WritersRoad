const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

const isAuthenticated = async(req, res, next) => {
    const {token} = req.cookies;

    if(!token){
        return next(res.status(401).json({ 'message': 'You have to be Logged In'}))
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(data.id);
    next();
}