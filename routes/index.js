var fs = require("fs");

var ignore = [
  "index.js"
];

var files = fs.readdirSync(__dirname);
const routes = {};
files.forEach(
  function(file) {
    if(ignore.indexOf(file) !== -1) return;
    var moduleName = file.split(".js")[0];
    routes[moduleName] = require(__dirname + "/" + file);
  }
)

module.exports = routes;
