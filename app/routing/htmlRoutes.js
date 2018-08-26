// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================
// Route to the Survey Page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Basic route to the home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});


// Starts the listener
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
