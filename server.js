/*
* More details here http://mongoosejs.com/docs/index.html
*/

//require mongoose node module
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.createConnection('192.168.16.128');

//attach lister to connected event
db.on('connected', function() {
	console.log("Connected to database")
});










