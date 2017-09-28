module.exports = function slow(req, res) {
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
}
