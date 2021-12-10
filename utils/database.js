var mongoose = require('mongoose');
require("dotenv").config();

var MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {  useNewUrlParser: true}).then(() => {
    console.log("Connected to Mongo DB");
    console.log("App is running ... \n");
    console.log("Press CTRL + C to stop the process. \n");

}).catch((err) => {
    console.log(err);
    process.exit(1);
})

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});

conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;