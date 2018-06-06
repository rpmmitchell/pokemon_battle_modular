// Require the Express Module
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var request = require('request');
mongoose.connect('mongodb://localhost/pokemon_battle');
// Use native promises
mongoose.Promise = global.Promise;


var Schema = mongoose.Schema;
var PokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    wins: {type: Number, required: false},
});

mongoose.model('Pokemon', PokemonSchema);

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
	request("http://pokeapi.co/api/v2/move/" + req.params.id, {json: true}, (err, response, body) => {
		if(err){
			return console.log(err)
		}
		else{
			res.json({message: "SUCCESS", data: body});
		}
	})
})

app.post('/pokemon/player/win', (req, res) => {
	console.log(req.body.name)
})





app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"));
})


app.listen(8000, () => {
    console.log("listening on port 8000");
})
