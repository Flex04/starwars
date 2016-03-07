var React = require('react');
var ReactDOM = require('react-dom');
//var app = express();
//var bodyParser = require('body-parser');
var lengthData; 
var indexQuote; 

'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];


lengthData = quotes.length; 

var randomQuote= function(){

  indexQuote = parseInt(Math.random()*lengthData);
  console.log("random quote:  " + quotes[indexQuote].quote);
  console.log(" by " +quotes[indexQuote].author);


//Display quote
/*  ReactDOM.render(
  React.createElement('<h3>', null, quotes[indexQuote].quote),document.getElementById('randQuote'));

  //Display quote's character 
  ReactDOM.render(
  React.createElement('<h3>', null, quotes[indexQuote].author),  document.getElementById('authorQuote'));
   */
};

var quoteAuthor= function(author){
var authorTmp;
var tabAuth = [];
var j=0;
  for (var i = 0; i < quotes.length; i++) 
  {
    if(quotes[i].author.search(author)!= -1)
    {
      authorTmp = quotes[i].author;
      tabAuth[j]=quotes[i].quote;
      j++
    } 
  }


  var lengthDataAuth = tabAuth.length; 
   indexQuote = parseInt(Math.random()*lengthDataAuth);
  console.log(authorTmp+": "+tabAuth[indexQuote]);

 };
 
 //button random
randomQuote();
//multiple button author
quoteAuthor("Dooku");
