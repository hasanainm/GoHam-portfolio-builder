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

  app.post("/api/profilename/:userid", function (req, res) {
    db.ProfileName.create({
      fname: req.body.fname,
      lname: req.body.lname,
      title: req.body.title,
      bio: req.body.bio,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
      // console.log(result);
    });
  });

  app.put("/api/updateprofile/:userid", function (req, res) {
    db.ProfileName.update({
      fname: req.body.fname,
      lname: req.body.lname,
      title: req.body.title,
      bio: req.body.bio
    }, {
      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result)
    })
  })

  app.post("/api/profilelinks/:userid", function (req, res) {
    db.Links.create({
      linkedin: req.body.linkedin,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result)
      // console.log(result)
    })
  })

  app.put("/api/updatelinks/:userid", function (req, res) {
    db.Links.update({
      linkedin: req.body.linkedin,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      twitter: req.body.twitter
    }, {
      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result)
    })
  })
  // This route is responsible for uploading a file inside the upload folder. Once file picked and submitted, the result will be saved in the database and profileResume handlebars template will recieve the relative id for submissions.
  app.post("/api/profileResume/:userid", function (req, res) {
    if (req.files) {
      console.log(req.files)
      var file = req.files.file;

      var filename = file.name;
      // console.log(filename)
      file.mv('public/img/uploads/' + filename, function (err) {

      })
    }
    db.Resume.create({
      PDF: filename,
      UserId: req.params.userid
    }).then(function (result) {
      res.render("profileResume", { data: result })
      console.log(result)
    })
  })



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


  app.post("/api/project/:userid", function (req, res) {
    db.Project.create({
      title: req.body.title,
      description: req.body.description,
      githublink: req.body.githublink,
      demolink: req.body.demolink,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
      // console.log(result);
    });
  });

  app.put("/api/updateproject/:userid", function (req, res) {
    db.Project.update({
      title: req.body.title,
      description: req.body.description,
      githublink: req.body.githublink,
      demolink: req.body.demolink
    }, {
      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result)
    })
  })

};
