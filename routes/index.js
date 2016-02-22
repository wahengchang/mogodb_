var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');

var Schema = new mongoose.Schema({
	_id : String,
	name : String, 
	age : Number
});

var user = mongoose.model('myuser',Schema);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/new', function(req, res) {
	new user ({
		_id : req.body.email,
		name : req.body.name,
		age : req.body.age
	}).save(function(err, doc){
		if(err){
			res.json(err);
		}
		else{
			res.send('success'+doc);
		}
	});

});

module.exports = router;
