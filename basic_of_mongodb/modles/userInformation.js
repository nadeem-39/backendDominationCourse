const mongoose = require('mongoose');

let infoSchema  = mongoose.Schema({
    aboutUs:String
})

module.exports = mongoose.model('infomation', infoSchema);

