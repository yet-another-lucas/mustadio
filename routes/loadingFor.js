module.exports = function loadingFor(req, res) {
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
};
