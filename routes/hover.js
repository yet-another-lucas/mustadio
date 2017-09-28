module.exports = function hover(req, res) {
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
};
