const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const { urlencoded } = require('express');
const {logger} = require('./middleware/logEvent');


const app = express();

const corsOption = {
    origin: 'http://localhost:3000'
}

const userRouter = require('./routes/userRoute');

app.use(express.json());
app.use(cors(corsOption));
app.use(urlencoded({extended: false}));
app.use(logger);

app.use('/api', userRouter);











app.listen(PORT, ()=>console.log(`Server has started on port ${PORT}`));
