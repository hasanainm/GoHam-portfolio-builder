require("dotenv").config();

var express = require("express");
// var exphbs = require("express-handlebars");
var db = require("./models");


var app = express();
var PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// starting the server
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:" + PORT);
  });
});

module.exports = app;