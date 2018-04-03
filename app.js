var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Program = require('./models/program')
Course = require('./models/course')
Teacher = require('./models/teacher')
Comment = require('./models/comment')

mongoose.connect('mongodb://localhost:27017/program')
var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // 获得express router对象


app.get('/',function(req,res){
    res.send('Hello World');
});
//get programs
app.get('/api/programs',function(req,res){
    Program.getPrograms(function(err,programs){
        if(err){
            throw err;
        }
        res.json(programs);
    });
});
//get courses
app.get('/api/courses',function(req,res){
    Course.getCourses(function(err,courses){
        if(err){
            throw err;
        }
        res.json(courses);
    });
});
//get teachers
app.get('/api/teachers',function(req,res){
    Teacher.getTeachers(function(err,teachers){
        if(err){
            throw err;
        }
        res.json(teachers);
    });
});
//get comments
app.get('/api/comments',function(req,res){
    Comment.getComments(function(err,comments){
        if(err){
            throw err;
        }
        res.json(comments);
    });
});

//get course by id
app.get('/api/courses/:_id',function(req,res){
    Course.getCourseById(req.params._id,function(err,course){
        if(err){
            throw err;
        }
        res.json(course);
    });
});
//add a comment
app.post('/api/comments',function(req,res){
    var comment = req.body;
    Comment.addComment(comment,function(err,comment){
        if(err){
            throw err;
        }
        res.json(comment);
    });
});


app.listen(port);
console.log('Running on port 8080...')



// db.teachers.insert({
//     name: 'Mobile Application Development Project', 
//     code: 'MAPD-726',
//     desc: 'Students will work on a project of his/her interest, or with an industry partner in areas of mobile computing. Possible areas of investigation can include mobile social networks, mobile Health Informatics, mobile game development, mobile cloud computing, mobile augmented reality, and context-awareness.',
//     length: '56 Hours',
//  })