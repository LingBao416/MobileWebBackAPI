var mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({
    name:String,
    desc:String,
});

var Teacher = module.exports = mongoose.model('Teacher',teacherSchema);


module.exports.getTeachers = function(callback,limit){
    Teacher.find(callback).limit(limit);
}