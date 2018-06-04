// Require the Express Module
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var request = require('request');
mongoose.connect('mongodb://localhost/pokemon');
// Use native promises
mongoose.Promise = global.Promise;


var Schema = mongoose.Schema;
var PokemonSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    health: {type: Number, required: true},
    abilities: {type: String, required: true}
});

var MoveSchema = new mongoose.Schema({
	id: {type: Number, required: true},
	name: {type: String, required: true},
	accuracy: {type: Number, required: true},
	power: {type: Number, required: true},
	description: {type: String, required: true},
	pp: {type: Number, required: true}
})
mongoose.model('Pokemon', PokemonSchema);
mongoose.model('Move', MoveSchema);

var Move = mongoose.model('Move');
var Pokemon = mongoose.model("Pokemon");

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/client/dist'));

var cors = require('cors');
app.use(cors());



app.get('/pokemon1/:id', (req, res) => {
	console.log("IN POEKMON REQYEST 1")
	request("http://pokeapi.co/api/v2/pokemon/" + req.params.id, {json: true}, (err, response, body) => {
		if(err){
			return console.log(err)
		}
		else{
			res.json({message: "SUCCESS", data: body});
		}
		
	})
});

app.get('/pokemon2/:id', (req, res) => {
	console.log("IN POEKMON REQYEST 2")
	request("http://pokeapi.co/api/v2/pokemon/" + req.params.id, {json: true}, (err, response, body) => {
		if(err){
			return console.log(err)
		}
		else{
			res.json({message: "SUCCESS", data: body});
		}
		
	})
});

app.get('/pokemon/grab/moves/:id', (req, res) => {
	console.log("HELLO IN SERVER", req.params);
	request("http://pokeapi.co/api/v2/move/" + req.params.id, {json: true}, (err, response, body) => {
		if(err){
			return console.log(err)
		}
		else{
			res.json({message: "SUCCESS", data: body});
		}
	})
})




app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"));
})


app.listen(8000, () => {
    console.log("listening on port 8000");
})
