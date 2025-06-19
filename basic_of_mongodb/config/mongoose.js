const mongoose= require('mongoose');
const debuglog = require('debug')('development:mongooseconfig');

mongoose.connect('mongodb');

const db = mongoose.connection;

db.on('error',(err)=>{
    debuglog(err)
});

db.on('open', ()=>{
    debuglog("connection is successfully done")
})

module.exports = db;
