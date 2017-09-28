var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser())
var port = 3000;
var routes = require("./routes");

app.get('/fields', routes.fields);
app.get('/slow', routes.slow);
app.get('/wait', routes.wait);
app.get('/consoleError', routes.consoleError);
app.get('/loadingFor', routes.loadingFor);
app.get('/cookies', routes.cookies);
app.get('/notClickable', routes.notClickable);
app.get('/theStaleMaker', routes.theStaleMaker);
app.get('/alert', routes.alert);
app.get('/hover', routes.hover);
app.get('/range', routes.range);
app.get('/buttons-links', routes.buttonLinks);

var server = app.listen(port, function () {
	console.log(`Running! on http://localhost:%s`, port);
	console.log(`Invoke like this http://localhost:%s/fields`, port)
	console.log(`Invoke like this http://localhost:%s/slow?seconds=10`, port)
	console.log(`Invoke like this http://localhost:%s/notClickable`, port)
	console.log(`Invoke like this http://localhost:%s/wait?seconds=5`, port)
	console.log(`Invoke like this http://localhost:%s/cookies`, port)
  console.log(`Invoke like this http://localhost:%s/alert`, port)
  console.log(`Invoke like this http://localhost:%s/hover`, port)
  console.log(`Invoke like this http://localhost:%s/range?min=100&max=1000&defaultValue=500`, port)
  console.log(`Invoke like this http://localhost:%s/buttons-links`, port)
});
