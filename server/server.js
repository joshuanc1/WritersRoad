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





const userRouter = require('./routes/userRoute');
const searchRouter = require('./routes/booksRoute');
const reviewRouter = require('./routes/reviewRoute');


app.use('/user', userRouter);
app.use('/api', searchRouter);
app.use('/api', reviewRouter);




app.use((err, req, res, next) => {
    // Log the error
    console.error(err);
  
    // Set the response status code
    res.status(500).json({message: `${err}`});
  
    // Send an error response

  });






connectToDatabase();

app.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));
