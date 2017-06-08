var casper = require('casper').create();
var links;

var x = require('casper').selectXPath;
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11');

casper.start('http://jira.icims.net:8080/login.jsp');

casper.then(function (){
	this.sendKeys('#login-form-username', "");
	//MAKE SURE TO HIDE THIS LOL
	this.sendKeys('#login-form-password', "");
});


casper.thenClick(x('//*[@id="login-form-submit"]'), function(){
	casper.capture("the_testimage.png");
	console.log("done");
});

// casper.wait(2000, function() {
// 	var the_text = casper.fetchText(x('//*[@id="content"]/p'));
// 	console.log(the_text);
// });

casper.run();
