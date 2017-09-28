const request = require("supertest");
const app = require("../index");

describe(
  "Routing",
  function(){
    const routes = [
      "/fields",
      "/slow",
      "/wait",
      "/consoleError",
      "/cookies",
      "/notClickable",
      "/theStaleMaker",
      "/alert",
      "/hover",
      "/range",
      "/buttons-links"
    ];

    routes.forEach(
      function(route) {
        it(
          `[GET] ${route}`, function (done) {
            request(app)
              .get(route)
              .expect(200, done);
          }
        )
      }
    )
  }
);
