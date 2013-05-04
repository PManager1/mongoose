/*
* More details here http://mongoosejs.com/docs/guide.html
*/

var mongoose = require("mongoose");

//connect to database
var db = mongoose.createConnection('192.168.16.128');


db.on('connected', function() {
  console.log("Connected to database")
});


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
module.exports = db.model('blog', blogSchema)


//compile schema to model
/*
var Blog = db.model('blog', blogSchema)
console.log("Created model");
*/