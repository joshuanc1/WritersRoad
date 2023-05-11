import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {userRouter} from './routes/user.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter)

mongoose.connect("mongodb+srv://joshuanc1:Writerpassword123@writer.skrelts.mongodb.net/Writer?retryWrites=true&w=majority")



app.listen(3001, () => console.log("server has started"));
