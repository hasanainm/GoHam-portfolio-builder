var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // findAll will give us all the records for the user
    db.User.findAll({}).then(function (results) {
      res.render("index", { data: results })
      // console.log(results[0].dataValues.id)
    })
  });

  app.get("/deep", function (req, res) {
      res.render("deepdarkgalaxy", {
        layout: "templates"
      });
  });

  app.get("/cmsPage", function (req, res) {
    res.render("sideNav");
  });
  
  app.get("/userName", function (req, res) {
    res.render("sideNav");
  });
  app.get("/userSkills", function (req, res) {
    res.render("sideNav");
  });
  app.get("/userProjects", function (req, res) {
    res.render("sideNav");
  });
  app.get("/userLinks", function (req, res) {
    res.render("sideNav");
  });
  app.get("/userResume", function (req, res) {
    res.render("sideNav");
  });

  app.get("/cmsPage/:id", function (req, res) {
    db.User.findOne({
      include: [
        db.BackEndSkills,
        db.Framework,
        db.FrontEndSkills,
        db.OtherSkills,
        db.ProfileName,
        db.Project,
        db.Links,
        db.Resume
      ],
      where: { id: req.params.id }
    }).then(function (results) {
      res.render("sideNav", { data: results });
      console.log(req.params.id);
    });
  });
}

