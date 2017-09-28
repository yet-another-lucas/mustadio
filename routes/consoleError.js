module.exports = function consoleError(req, res) {
    var seconds = req.query.seconds || 1;

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
};
