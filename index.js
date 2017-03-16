var express = require('express');
var app = express();
var port = 3000;

app.get('/fields', function (req, res) {
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h1 automation="halp">i am jack's form</h1>
                <form>
				<input id="input_1" type="text" value="foo">input_1</input> <br />
				<input id="input_2" type="text" value="bar">input_2</input> <br />
				<input id="input_3" type="text" value="baz">input_3</input> <br />
				<input id="input_4" type="text" value="qux">input_4</input> <br />
				<input id="input_5" type="text" value="quux">input_5</input> <br />
				<input id="input_6" type="text" value="quuz">input_6</input> <br />
				<input id="input_7" type="text" value="wibble">input_7</input> <br />
				<input id="input_8" type="text" value="wobble">input_8</input> <br />
				<input id="input_9" type="text" value="flob">input_9</input> <br />
				<input id="input_10" type="text">input_10</input> <br />
				<input id="input_11" type="text">input_11</input> <br />
				<input id="input_submit" type="submit">input_submit</input> <br />
				<input id="input_disabled" type="text" disabled>input_disabled</input> <br />
				</form>
            </body>
        </html>
    `);
});

app.get('/slow', function (req, res) {
    var seconds = req.query.seconds || 1;

    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h1 automation="halp">Loading for ${seconds} second${seconds > 1 ? 's' : ''}</h1>
                <img alt="I am jack's slow loading resource" src="/loadingFor?seconds=${seconds}" />
            </body>
        </html>
    `);
});


app.get('/loadingFor', function (req, res) {
	var startTime = Date.now();
	var wait = (req.query.seconds) ? req.query.seconds * 1000 : 1000 * 60;

	var intervalID = setInterval(function () {
		var endTime = Date.now();
		var timeElapsed = endTime - startTime;

		if (timeElapsed > wait) {
			res.send({ hello: 'there', startTime, endTime });
			return clearInterval(intervalID);
		}
	}, 1000);
});

app.get('/notClickable', function (req, res) {
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h1 automation="halp">I am jack's obscured element</h1>
					<form id="form">
						<button id="button_1" type="submit">button_1</button>
						<div id="blocker_1" style="position: absolute; display: inline; left: 0; padding-left: 100px;">I should block the button</div>
						<br />
						<button id="button_2" type="submit">button_2</button> 
						<div id="blocker_2" style="position: absolute; display: inline; left: 0; padding-left: 100px;" onClick="document.getElementById(&quot;form&quot;).removeChild(document.getElementById(&quot;blocker_2&quot;));">I should unblock the button after one click</div>
					</form>
            </body>
        </html>
    `);
});
var server = app.listen(port, function () {
	console.log(`Running! on http://localhost:%s`, port);
	console.log(`Invoke like this http://localhost:%s/fields`, port)
	console.log(`Invoke like this http://localhost:%s/slow?seconds=10`, port)
	console.log(`Invoke like this http://localhost:%s/notClickable`, port)
});
