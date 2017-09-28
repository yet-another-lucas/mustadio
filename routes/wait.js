module.exports = function wait(req, res) {
    var seconds = req.query.seconds || 1;

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <script>
          function hide() {
            (new Promise((resolve) => setTimeout(resolve, ${seconds*1000}))).then(() => { document.getElementById("will-vanish").style.display = "none"}
          );}
          function show() {
            (new Promise((resolve) => setTimeout(resolve, ${seconds*1000}))).then(() => { document.getElementById("will-appear").style.display = "block"}
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
};
