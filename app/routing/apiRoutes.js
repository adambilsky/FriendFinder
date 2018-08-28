// FRIEND FINDER APP ASSIGNMENT WEEK 13

// ===============================================================================
// LOAD DATA
// Link our routes to a series of "data" sources.
// ===============================================================================
var express = require("express");
var friends = require("../data/friends");

// var survey = require("../data/survey");
var path = require("path");
var app = express();

// Dependencies
// =============================================================
var bodyParser = require("body-parser");

module.exports = function (app) {
    // API GET Requests

    // Routes
    // =============================================================
    // Route to the Friends API displays all friends
    app.get("/data/friends", function (req, res) {
        return res.json(friends);
    });

    // Post route will handle incoming survey results and the compatibility logic.
    app.post("/data/friends", function (req, res) {

        // Create array to hold comparison results
        // the 'smallest' variable is an unrealistically high ceiling 
        // for differences between answer values.
        var smallest = 10000000;

        // the 'bestFriend' variable will change each time a smaller 
        // total difference is found. 
        var bestFriend;

        //For loop through each friend in friends
        for (var i = 0; i < friends.length; i++) {
            // Array to total the differences in scores for potential matches
            var compArray = [];

            // Loops through each set of scores between two potential matches
            // and calculates the absolute value of the difference between each 
            // score pair
            for (var j = 0; j < friends[i].scores.length; j++) {
                compArray.push(Math.abs(friends[i].scores[j] - req.body.scores[j]));

            }
            // The 'reduce' method using the arrow function reduces (sums) the array 
            // to a single value. The Arrow function (ES6) eliminates the need to use 
            // the 'function' delcaration and 'return' statement

            var matchScore = compArray.reduce((a, b) => a + b, 0);

            if (matchScore < smallest) {
                smallest = matchScore;
                bestFriend = friends[i];
            }
        }

        // Return best match to client
        res.json(bestFriend);

        // Add current user to friendsArray
        friends.push(req.body);



    });
}
