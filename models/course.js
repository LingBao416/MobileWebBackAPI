var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    name:String,
    code:String,
    desc:String,
    length:String
});

var Course = module.exports = mongoose.model('Course',courseSchema);


module.exports.getCourses = function(callback,limit){
    Course.find(callback).limit(limit);
}

module.exports.getCourseById = function(id,callback){
    Course.findById(id,callback);
}