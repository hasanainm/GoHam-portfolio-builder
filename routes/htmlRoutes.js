var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index");
  });


  app.get("/profilePage", function (req, res) {
    res.render("profilePage");
  });

  // 
  app.get("/account/:id", function (req, res) {
    db.User.findOne({
      include: [
        db.BackEndSkills,
        db.Framework,
        db.FrontEndSkills,
        db.OtherSkills,
        db.ProfileName,
        db.Project
      ],
      where: { id: req.params.id }
    }).then(function (results) {
      res.render("profilePage", { data: results });
      console.log(results)
    });
  });
}
