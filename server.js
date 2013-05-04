

/*
* More details here http://mongoosejs.com/docs/guide.html
*/

var mongoose = require("mongoose");

//connect to database
var db = mongoose.createConnection('192.168.16.128');

//create schema for blog post
var blogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

//compile schema to model
var Blog = db.model('blog', blogSchema)
console.log("Created model");




/*
* More details here http://mongoosejs.com/docs/index.html


//require mongoose node module
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.createConnection('192.168.16.128');

//attach lister to connected event
db.on('connected', function() {
	console.log("Connected to database")
});


*/







