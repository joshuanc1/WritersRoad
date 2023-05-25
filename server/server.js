const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const { urlencoded } = require('express');
const {logger} = require('./middleware/logEvent');
const connectToDatabase = require('./config/database');
const path = require('path');
const errorEvent = require('./middleware/eventHandler');



const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({extended: false}));
app.use(logger);
app.use(errorEvent);

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config({path: './config/.env'});
}



const userRouter = require('./routes/userRoute');

app.use('/user', userRouter);
app.use(express.static(path.resolve(__dirname, '..', 'files')));



connectToDatabase();

app.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));
