const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const port = 3000;

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
  const seconds = req.query.seconds || 1;

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

app.get('/wait', function (req, res) {
  const seconds = req.query.seconds || 1;

  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <script>
          function hide() {
            (new Promise((resolve) => setTimeout(resolve, ${seconds * 1000}))).then(() => { document.getElementById("will-vanish").style.display = "none"}
          );}
          function show() {
            (new Promise((resolve) => setTimeout(resolve, ${seconds * 1000}))).then(() => { document.getElementById("will-appear").style.display = "block"}
          );}
        </script>
      </head>
      <body onLoad="hide();show();">
        <h1 automation="halp">Loading for ${seconds} second${seconds > 1 ? 's' : ''}</h1>
        <div id="will-vanish" >I am Jack's display:none after ${seconds} seconds</div>
        <br />
        <div id="will-appear" style="display: none">After ${seconds} seconds I am Jack's display:block</div>
      </body>
      </html>
    `);
});

app.get('/consoleError', function (req, res) {
  const seconds = req.query.seconds || 1;

  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <script>
          function foo() {
          //trigger Uncaught ReferenceError: bar is not defined
          bar
          }
        </script>
      </head>
      <body onLoad="foo()">
        <h1 automation="halp">I am Jack's onload console error</h1>
      </body>
      </html>
    `);
});

app.get('/loadingFor', function (req, res) {
  const startTime = Date.now();
  const wait = (req.query.seconds) ? req.query.seconds * 1000 : 1000 * 60;

  const intervalID = setInterval(function () {
    const endTime = Date.now();
    const timeElapsed = endTime - startTime;

    if (timeElapsed > wait) {
      res.send({hello: 'there', startTime, endTime});
      return clearInterval(intervalID);
    }
  }, 1000);
});

app.get('/cookies', function (req, res) {
  //make a default cookie
  default_cookie_name = "IAmJacksDefaultCookie";
  default_cookie_value = "i_am_jacks_cookie_value";
  res.cookie(default_cookie_name, default_cookie_value, {maxAge: 900000, httpOnly: true, signed: false});

  //show all cookies
  tabulated_cookies = []
  for (const cookie in req.cookies) {
    tabulated_cookies.push("<tr id=" + cookie + "><td role=\"name\">" + cookie + "</td><td role=\"value\">" + req.cookies[cookie] + "</td></tr>")
  }

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    </head>
      <body>
        <h1 automation="halp">I am Jack's Cookie</h1>
        <table>
          ${tabulated_cookies.join("")}
        </table>
      </body>
    </html>
    `);
})


//look at this to make the button and covering div always the same size, because of browser specific issues
//http://stackoverflow.com/questions/1205159/html-css-making-two-floating-divs-the-same-height
//http://stackoverflow.com/questions/2997767/how-do-i-keep-two-divs-that-are-side-by-side-the-same-height
//http://stackoverflow.com/questions/16317497/make-floating-divs-the-same-height
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
          <br />
          <button id="button_3" type="submit" disabled>no click for you</button>
        </form>
      </body>
      </html>
    `);
});

//check out this gem https://jsfiddle.net/pwdst/rf3nrnzo/
app.get('/theStaleMaker', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1 automation="halp">Stale Element</h1>
        <form id="form">
          <button id="nuke" type="submit" onClick="document.getElementById(&quot;container&quot;).removeChild(document.getElementById(&quot;stale&quot;));">make it gone!</button>
          <button id="makeStale" type="submit" onClick="$('#stale').detach()">make it stale!</button>
          <button id="makeFresh" type="submit" onClick="$('#stale').attach()">make it fresh!</button>
      </form>
      <div id="container">
        <span id="ordinary">I am jack's ordinary element</span><br />
        <span id="stale">I am jack's stale element</span><br />
      </div>
      </body>
    </html>
	`);
});

//check out this gem https://jsfiddle.net/pwdst/rf3nrnzo/
app.get('/alert', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1 automation="halp">Spawn Alert</h1>
        <form id="form" onSubmit="return false;">
          <button id="alert" type="submit" onClick="window.alert('i am jacks alert')">summon the alert</button>
      </form>
      </body>
    </html>
	`);
});

app.get('/hover', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        #will-appear {
            display: none;
        }

        a:hover + #will-appear {
            display: block;
        }
      </style>
    </head>
    <body>
      <h1 automation="halp">Hover Action</h1>
      <br />
      <div id="content">
        <a id="hover-target">I am Jack's hover action</a>
          <div id="will-appear">I am Jack's smirking div</div>
      </div>
    </body>
    </html>
	`);
});

app.get('/range', function (req, res) {
  const min = req.query.min || 1;
  const max = req.query.max || 100;
  const default_value = req.query.defaultValue || 50;
  const input_id = 'range-input'
  const output_id = 'range-output'
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <script>
      function updateValue(val) {
        input = document.getElementById("${input_id}");
        output = document.getElementById("${output_id}");
        output.innerText = val;
        output.setAttribute("value", val);
        input.setAttribute("value", val);
      }
  </script>
  </head>
  <body>
    <h1 automation="halp">I am Jack's range input</h1>
    <input type="range" name="range" id="${input_id}" min="${min}" max="${max}" defaultValue="${default_value}" value="${default_value}" onchange="updateValue(this.value)">
    <br />
    <output id="${output_id}" value="${default_value}">${default_value}</output>
  </form>
  </body>
  </html>

  `);
});

app.get('/buttons-links', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
          <meta charset="utf-8">
          <title>Duplicate button/link text</title>
          <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
      </head>
      <body>
        <h2 automation="halp">Multi Buttons</h1>
        <form id="btn-form">
          <button id="button-1" type="button" onClick="$('#btn-text-1').show();">Do it!</button>
          <button id="button-2" type="button" onClick="$('#btn-text-2').show();">Do it!</button>
          <button id="button-3" type="button" onClick="$('#btn-text-3').show();">Do it!</button>
        </form>
        <div id="btn-container">
          <span id="btn-text-1">Button 1 clicked...</span><br />
          <span id="btn-text-2">Button 2 clicked...</span><br />
          <span id="btn-text-3">Button 3 clicked...</span><br />
        </div>

        <h2 automation="halp">Multi Links</h1>
          <form id="link-form">
            <a href="#" id="link-1" onClick="$('#link-text-1').show();">Do it!</a>
            <a href="#" id="link-2" onClick="$('#link-text-2').show();">Do it!</a>
            <a href="#" id="link-3" onClick="$('#link-text-3').show();">Do it!</a>
          </form>
        <div id="link-container">
          <span id="link-text-1">Link 1 clicked...</span><br />
          <span id="link-text-2">Link 2 clicked...</span><br />
          <span id="link-text-3">Link 3 clicked...</span><br />
        </div>

        <script>
            const spans = ["btn-text-1", "btn-text-2", "btn-text-3", "link-text-1", "link-text-2", "link-text-3"];
            $.each(spans, function( i, val ) {
              const id = '#' + val
              console.log("Hiding " + id);
              $(id).hide();
            });
        </script>
      </body>
    </html>
  `);
});

app.get('/hidden', function (req, res) {
  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>Hidden div</title>
      </head>
      <body>
      <div hidden>
          This is a hidden element
      </div>
      </body>
      </html>
  `);
});


const server = app.listen(port, function () {
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
  console.log(`Invoke like this http://localhost:%s/hidden`, port)
});
