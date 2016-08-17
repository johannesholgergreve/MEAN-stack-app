var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('skills', ['skillsets']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


// Send all contacts to controller.js
app.get('/skillsets', function(request, response){
	console.log('I recieved a get request');

	db.skillsets.find(function(err, docs){
		console.log(docs);
		response.json(docs)
	});


});


// Listening for request of skillsets
app.post('/skillsets', function(request, response){
	console.log(request.body);
	// Save item in DB
	db.skillsets.insert(request.body, function(err, doc){
		// Send respond back to controller.js 
		response.json(doc)
	});
});

// Delete Contact
app.delete('/skillsets/:id', function(request, response){
	// Getting id value from controller
	var id = request.params.id;
	console.log(id);
	db.skillsets.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		response.json(doc);
	});

});

// Insert contact info in input fields
app.get('/skillsets/:id', function(request, response){
	var id = request.params.id;
	console.log(id);
	db.skillsets.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		response.json(doc);
	});
});


// Update contact
app.put('/skillsets/:id', function(request, response){
	var id = request.params.id;
	console.log(request.body.technology);
	db.skillsets.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {technology: request.body.technology, copsOfCoffee: request.body.copsOfCoffee, level: request.body.level}},
		new: true}, function(err, doc) {
			response.json(doc);
	});
});



app.listen(3000);
console.log('Server running on port 3000');