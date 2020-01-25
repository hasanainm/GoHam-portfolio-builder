var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // findAll will give us all the records for the user
    db.User.findAll({}).then(function (results) {
      res.render("index", { data: results })
      // console.log(results[0].dataValues.id)
    })
  });


  // user's name and the page that gets loaded after user logins
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
      res.render("profileName", { data: results });
      // console.log(results);
    });
  });


  // user's skills
  app.get("/profileSkills/:id", function (req, res) {
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
      res.render("profileSkills", { data: results });
      // console.log(results);
    });
  });


  // user's projects
  app.get("/profileProjects/:id", function (req, res) {
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
      res.render("profileProjects", { data: results });
      // console.log(req.params.id);
    });
  });


  // user's links
  app.get("/profileLinks/:id", function (req, res) {
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
      res.render("profileLinks", { data: results });
      // console.log(results);
    });
  });


  // user's resume
  app.get("/profileResume/:id", function (req, res) {
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
      res.render("profileResume", { data: results });
      // console.log(results);
    });
  });


  // template choices
  app.get("/templates/:id", function (req, res) {
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
      res.render("profileTemplates", { data: results });
      // console.log(req.params.id);
    });
  });


  // deepDarkGalaxy template
  app.get("/dark/:id", function (req, res) {
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
      res.render("deepdarkgalaxy", {
        layout: "templateDark",
        data: results
      });
      // console.log(req.params.id);
    });
  });
  

  // mintyBlues template
  app.get("/minty/:id", function (req, res) {
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
      res.render("mintyblues", {
        layout: "templateMinty",
        data: results
      });
      console.log(results);
    });
  });

};

