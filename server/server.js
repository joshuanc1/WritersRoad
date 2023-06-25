const express = require('express');
const PORT = process.env.PORT || 3001;
const cookie = require('cookie-parser');
const cors = require('cors');
const { urlencoded } = require('express');
const {logger} = require('./middleware/logEvent');
const connectToDatabase = require('./config/database');
const path = require('path');




const app = express();


app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cookie());
app.use(cors({origin: "*", credentials: true}));
app.use('/public', express.static('public'));
app.use(logger);

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config({path: './config/.env'});
}



if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, '/build', 'index.html'));
    })

} else {
    app.use(express.static(path.resolve(__dirname, '..', '/public')));
}





const userRouter = require('./routes/userRoute');
const searchRouter = require('./routes/booksRoute');
const reviewRouter = require('./routes/reviewRoute');


app.use('/user', userRouter);
app.use('/api', searchRouter);
app.use('/api', reviewRouter);






connectToDatabase();

app.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));
