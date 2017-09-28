//check out this gem https://jsfiddle.net/pwdst/rf3nrnzo/
module.exports = function alert(req, res) {
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
};
