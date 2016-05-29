var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);

var postToTwitter = function() {
  twitter.post('statuses/update', {status: 'Nerdy Girls First Tweet!' }, function(err, data, response) {
    if(err) {
      console.log('err', err);
    }
    console.log('data', data);
  });
};

postToTwitter();
