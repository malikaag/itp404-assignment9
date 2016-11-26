var Yelp = require('yelp');

var aYelp = new Yelp({
  	consumer_key: process.env.consumer_key,
  	consumer_secret: process.env.consumer_secret,
  	token: process.env.token,
  	token_secret: process.env.token_secret
	});

var yelp = {

	search: function(searchTerm) {
		return new Promise(function(resolve, reject){
			var params = {term: 'food', location: searchTerm};
			aYelp.search(params)
			.then(function (data) {
			var formattedYelp = data.businesses.map(function(result){
				return{
					rating: result.rating,
					name: result.name,
					phone: result.phone,
					address: result.location.address,
					city: result.location.city,
					state: result.location.state_code,
					zipCode: result.location.postal_code
					};
				});
 	 		resolve(formattedYelp);
			})
			.catch(function (err) {
 			reject(err);
			});
		});
	}

};

 
module.exports = yelp;