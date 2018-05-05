// 2. Your`server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Instance of express
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the port for the app
var PORT = process.env.PORT || 8080;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

// Routes
// =============================================================

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});