/**
 * Created by mdemo on 14/11/28.
 */
var cheerio = require('cheerio');
var request = require('request');
request('https://cnodejs.org', function (err, res, body) {
  if (err) {
    throw err; // you need to handle error
  }
  var $ = cheerio.load(body);
  $('script').each(function(index,value){
    console.log($(value).text())
  });
});


