var casper = require('casper').create();
var links;

var x = require('casper').selectXpath;
casper.userAgent('Mozilla/4.0 (comptible; MSIE 6.0; Windows NT 5.1)');

casper.start('http://www.collectsoftware.org/contact');

casper.then(function ()){
	this.sendKeys('#Email', "ngattuso@test.com");

});

casper.run();