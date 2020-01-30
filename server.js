require("dotenv").config();

var express = require("express");
var exphbs = require("express-handlebars");
var sassMiddleware = require('node-sass-middleware');
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// SASS middleware
app.use(
  sassMiddleware({
    src: __dirname + '/sass',
    dest: __dirname + '/public',
    debug: true,
  })
);

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// empties out DB upon starting node server.js
var syncOptions = { force: true };

// starting the server
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log("Server is listening on: http://localhost:" + PORT);
  });
});

module.exports = app;