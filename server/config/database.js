const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongoose Connected")
    }).catch((error) => {
        console.log(error);
    })
   
}


module.exports = connectToDatabase;