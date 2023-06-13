const User  = require('../model/userModel');
const bcrypt = require('bcrypt');
const sendCookie = require('../utils/cookie');

exports.register = async(req, res, next) => {

    const { name, username, password } = req.body;
    
    
    const user = await User.findOne({username});
    if(user){
        if(user.username === username){
            return next(res.status(400).json({message: "Username is already taken"}));
        }
    }
   
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = await User.create({
        name,
        username,
        password : hashedPassword
    })

    sendCookie(newUser, 201, res);

}


exports.login = async(req, res, next) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    console.log(user);

    if(user?.username != username){
        return next(res.status(400).json({message: "Username does not exist"}));
    }
    
 
    const passwordValid = await user.comparePassword(password);

    if(!passwordValid){
        return next(res.status(400).json({message: "Invalid Username or Password"}));
    }

    sendCookie(user, 201, res);

}

exports.logout = async(req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({success: true, message: "Logged out"})

}


exports.loadUser = async(req, res, next) => {
    const user = await User.findOne(req.user._id).populate({
        path: 'userLibrary',
    })

    console.log(user);

    res.status(200).json({
        success: true,
        user,
    })
}

