module.exports = function range(req, res) {
  var min = req.query.min || 1;
  var max = req.query.max || 100;
  var default_value = req.query.defaultValue || 50;
  var input_id = 'range-input'
  var output_id = 'range-output'
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
};
