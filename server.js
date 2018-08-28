// Dependencies
// ===========================================================

var express = require("express");
var bodyParser = require("body-parser");

// Create an "express" server
var app = express();

// Set an initial port.
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
