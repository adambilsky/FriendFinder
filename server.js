// Dependencies
// ===========================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ===========================================================
