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
app.use(urlencoded({extended: false}));   //extended is usually false
app.use(logger);
app.use(errorEvent);
app.use(express.static(path.resolve(__dirname, '..', '/public')));

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config({path: './config/.env'});
}



const userRouter = require('./routes/userRoute');
const searchRouter = require('./routes/booksRoute');

app.use('/user', userRouter);
app.use('/search', searchRouter);





connectToDatabase();

app.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));
