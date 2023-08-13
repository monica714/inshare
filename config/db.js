require('dotenv').config() 
const mongoose = require('mongoose');


function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,  useUnifiedTopology: true});
    const connection = mongoose.connection;

    connection.once('open',()=>{
        console.log('Database connected');
    }).on('error',()=>{
       console.log('connection failed');
    })
}

module.exports=connectDB;

