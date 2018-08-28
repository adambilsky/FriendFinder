// Dependencies
// =============================================================
var path = require("path");

// Routes
module.exports = function (app) {

  // ((( *** note : listener, express were removed to simplify this code;
  // when troubleshooting, try re-inserting *** )))
   
  // =============================================================
  // Route to the Survey Page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Basic route to the home Page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
