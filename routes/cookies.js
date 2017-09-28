module.exports = function cookies(req, res) {
	//make a default cookie
	default_cookie_name = "IAmJacksDefaultCookie";
	default_cookie_value = "i_am_jacks_cookie_value";
	res.cookie(default_cookie_name, default_cookie_value,{ maxAge: 900000, httpOnly: true, signed: false });

	//show all cookies
	tabulated_cookies = []
	for (var cookie in req.cookies){
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
};
