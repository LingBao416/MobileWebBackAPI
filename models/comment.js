var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    comment:String,

});

var Comment = module.exports = mongoose.model('Comment',commentSchema);


module.exports.getComments = function(callback,limit){
    Comment.find(callback).limit(limit);
}
module.exports.addComment = function(comment,callback){
    Comment.create(comment);
}