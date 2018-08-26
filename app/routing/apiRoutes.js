// FRIEND FINDER APP ASSIGNMENT WEEK 13

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends, etc.
// ===============================================================================

var friendData = require("../data/friends");
var survey = require("../data/survey");

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
// Route to the Friends API displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friendData);
});

// Post route will handle incoming survey results and the compatibility logic.
app.post("/api.friends", function(req, res) {
     friends.push(req.body);



})
