const express = require('express');

const cookie = require('cookie-parser');
const cors = require('cors');
const { urlencoded } = require('express');
const {logger} = require('./middleware/logEvent');
const path = require('path');


require('dotenv').config();

const connectToDatabase = require('./database');
const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cookie());
app.use(cors({origin: "*", credentials: true}));
app.use('/public', express.static(path.join(__dirname, '..' , '/public')));









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

  if(process.env.NODE_ENV === 'production') {
   
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
  }





connectToDatabase();

app.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));
