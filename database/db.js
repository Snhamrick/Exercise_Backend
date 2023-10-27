const mongoose = require('mongoose');

const { DB_STRING } = process.env;

const connectDB = async() => {
    try {
        await mongoose.connect(DB_STRING,
           {useUnifiedTopology: true});
        console.log("Succesfully connected to Exercise_App DB");
    } catch (err) {
        console.log(err.message);
    }
}


module.exports = connectDB;