var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

mongoose.connect('mongodb://localhost/test');

var BlogPostSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    bio: String,
    age: String
});

var bps = mongoose.model('blogPosts', BlogPostSchema, 'blogPosts'); //model name, schema, collection name

/* GET home page. */
router.get('/', function(req, res, next) {
    bps.find({}, function(err, post) {
        res.json(post);
        // res.render('index', {
        //     title: 'Express',
        //     test: 'poop ' + post.name.first
        // });
    });
});

module.exports = router;
