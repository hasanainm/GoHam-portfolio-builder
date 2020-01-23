var db = require("../models");

module.exports = function (app) {
  // Get route for getting all of our users
  app.get("/api/useraccount", function (req, res) {
    // findAll will give us all the records for the user
    db.User.findAll({}).then(function (data) {
      res.json(data)
    })
  })

  //POST route for user account creation
  app.post("/api/useraccount", function (req, res) {
    //create takes an argument of an object descriving the item we want to insert into our table. In this case we must pass in an object with user name, email and pass
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      userid: req.body.userid
    }).then(function (results) {
      //we have access to the new User as an arguement inside of the callback function
      res.json(results)
    })
      .catch(function (err) {
        // when something goes wrong, an error is thrown
        // catch prevents our node app from crashing
        res.json(err)
      })
  })

  app.post("/api/frontendskills/:userid", function (req, res) {
    var nameOfSkill = req.body.nameOfSkill;

    db.FrontEndSkills.create({
      nameOfSkill: nameOfSkill,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  app.delete("/api/deletefrontendskills/:userid", function (req, res) {
    db.FrontEndSkills.destroy({

      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  app.post("/api/backendskills/:userid", function (req, res) {
    var nameOfSkill = req.body.nameOfSkill;

    db.BackEndSkills.create({
      nameOfSkill: nameOfSkill,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  app.delete("/api/deletebackendskills/:userid", function (req, res) {
    db.BackEndSkills.destroy({

      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  app.post("/api/framework/:userid", function (req, res) {
    db.Framework.create({
      nameOfSkill: req.body.nameOfSkill,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  app.delete("/api/deleteframework/:userid", function (req, res) {
    db.Framework.destroy({
      where: {
        id: req.params.userid
      }
    })
      .then(function (result) {
        res.json(result);
      });
  });

  app.post("/api/otherskills/:userid", function (req, res) {
    db.OtherSkills.create({
      nameOfSkill: req.body.nameOfSkill,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  app.delete("/api/deleteotherskills/:userid", function (req, res) {
    db.OtherSkills.destroy({
      where: {
        id: req.params.userid
      }
    })
      .then(function (result) {
        res.json(result);
      });
  });


  app.post("/api/links/:userid", function (req, res) {
    var linkedin = req.body.linkedin;
    var github = req.body.github;
    var facebook = req.body.facebook;
    var twitter = req.body.twitter;

    db.Links.create({
      linkedin: linkedin,
      github: github,
      facebook: facebook,
      twitter: twitter,
      UserId: req.params.userid

    }).then(function (result) {
      res.json(result);
      console.log(result);
    });
  });

  app.delete("/api/deletelinks/:userid", function (req, res) {
    db.Links.destroy({
      where: {
        id: req.params.userid
      }
    })
      .then(function (result) {
        res.json(result);
      });
  });


  app.post("/api/resume/:userid", function (req, res) {
    db.Resume.create({
      PDF: req.body.PDF,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  app.delete("/api/deleteresume/:userid", function (req, res) {
    db.Resume.destroy({
      where: {
        id: req.params.userid
      }
    })
      .then(function (result) {
        res.json(result);
      });
  });


  app.post("/api/profilename/:userid", function (req, res) {
    db.ProfileName.create({
      fname: req.body.fname,
      lname: req.body.lname,
      title: req.body.title,
      bio: req.body.bio,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
      console.log(result);
    });
  });

};
