var casper = require('casper').create();
var links;

var x = require('casper').selectXPath;
casper.userAgent('Mozilla/4.0 (comptible; MSIE 6.0; Windows NT 5.1)');

casper.start('http://www.collectsoftware.org/contact');

casper.then(function (){
	this.sendKeys('#Email', "ngattuso@test.com");
	
	this.sendKeys('#EmailName', "ngattuso");

	this.sendKeys('#message' , "This is my test message");
	
});

casper.thenClick(x('//*[@id="content"]/form/button'), function(){
	casper.capture("the_testimage.png");
	console.log("done");
	});


casper.run();