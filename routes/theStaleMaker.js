//check out this gem https://jsfiddle.net/pwdst/rf3nrnzo/
module.exports = function theStaleMaker(req, res) {
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
};
