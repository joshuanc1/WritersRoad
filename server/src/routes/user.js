import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../model/User.js';

const router = express.Router();

router.post("/register", async(req, res) =>{
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if(user){
        res.status(400).json({message: "The Username is already taken"});
    }
    const hashedPassword = await bcrypt.hash(password, 20);
    const newUser = new UserModel({username, password: hashedPassword});
    await newUser.save();
    res.json({message: "User succesfully registered"})

})

router.post("/login", async(req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if(!user){
        res.status(400).json({message: "Username or password is incorrect"});
    }
    const validPassword = bcrypt.compare(password, user.password);
    if(!validPassword) {
        return res.status(400).json({message: "Username of Password is incorrect"});
    }
    const token = jwt.sign({id: user._id}, "secret");
    res.json({token, userID: user._id});
});



export {router as userRouter};