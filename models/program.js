var mongoose = require('mongoose');

var programSchema = mongoose.Schema({
    name:String,
    code:String,
    school:String,
    length:String,
    deadline:String
});

var Program = module.exports = mongoose.model('Program',programSchema);

//Get Program

module.exports.getPrograms = function(callback,limit){
    Program.find(callback).limit(limit);
}