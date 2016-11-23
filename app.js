var dotenv = require('dotenv');
dotenv.config(); //read in .env file and parse it.

var express = require('express')
var app = express()
var Sequelize = require('sequelize');
var cors = require('cors');
var bodyParser = require('body-parser');
var Yelp = require('yelp');
var yelp = require('./api/yelp');


app.use(cors());
app.use(bodyParser());

// app.get('/yelp/:City', function (request, response){
// 	var aYelp = new Yelp({
//   	consumer_key: process.env.consumer_key,
//   	consumer_secret: process.env.consumer_secret,
//   	token: process.env.token,
//   	token_secret: process.env.token_secret
// 	});


// 	// See http://www.yelp.com/developers/documentation/v2/search_api 
// 	var params = {term: 'food', location: request.params.City};
// 	aYelp.search(params)
// 	.then(function (data) {
// 		var formattedYelp = data.businesses.map(function(result){
// 			return{
// 				rating: result.rating,
// 				name: result.name,
// 				phone: result.phone,
// 				is_closed: result.is_closed,
// 				city: result.location.city
// 			};
// 		});
//  	 response.json(formattedYelp);
// 	})
// 	.catch(function (err) {
//  	response.error(err);
// 	});
// }) 


app.get('/yelp/:location', function (request, response){
	yelp.search(request.params.location).then(function(yelprequests){
		response.json(yelprequests);
	});
});



app.listen(3000)