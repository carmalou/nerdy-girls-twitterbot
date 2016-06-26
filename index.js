var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);
var quotes = require('./quotes.json');

var pickQuote = function() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log('quote', quote);
  return quote;
}

var postToTwitter = function() {
  var tempQuote = pickQuote();
  if(tempQuote.length >= 141) {
    console.log('greater than 140 characters!');
    tempQuote = pickQuote();
  }
  twitter.post('statuses/update', { status: tempQuote }, function(err, data, response) {
    if(err) {
      console.log('err', err);
    }
    console.log('data', data);
  });
};

postToTwitter();
