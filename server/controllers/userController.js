
const User = require('../model/userModel');
const bcrypt = require('bcrypt');

const register = async(req, res, next) => {
    const {name, username, password} = req.body;
    const user = await User.findOne({username});
    if(user.username === username){
        return res.status(400).json({'message': "Username is already taken"});
    }
    const newUser = await User.create({
        name,
        username,
        password
    })
}


const login = async(req, res, next) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if(!user && user.username != username){
        return res.status(400).json({message: "Username does not exist"});
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if(!passwordValid){
        return res.status(400).json({message: "Invalid Username or Password"});
    }

}

module.exports = {login, register};