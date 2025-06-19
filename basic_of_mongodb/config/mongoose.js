const mongoose= require('mongoose');
const debuglog = require('debug')('development:mongooseconfig');

mongoose.connect('mongodb+srv://nadeemsiddiqui0390:yR5hKn4MOb3WsWTW@cluster0.6gxzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

db.on('error',(err)=>{
    debuglog(err)
});

db.on('open', ()=>{
    debuglog("connection is successfully done")
})

module.exports = db;
