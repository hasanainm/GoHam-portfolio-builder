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
      // userID:req.body.userID
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


  // CRUD - OtherSkills 
  // create route for user's other skills
  app.post("/api/otherskills/:userid", function (req, res) {
    var nameOfSkill = req.body.nameOfSkill;

    db.OtherSkills.create({
      nameOfSkill: nameOfSkill,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  // update route for user's other skills
  app.put("/api/updateotherskills/:userid", function (req, res) {
    db.OtherSkills.update({
      nameOfSkill: req.body.nameOfSkill

    }, {
      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  // delete route for user's other skills
  app.delete("/api/deleteotherskills/:userid", function (req, res) {
    db.OtherSkills.destroy({

      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result);
    });
  });


  // CRUD - ProfileName 
  // create route for user's project title
  app.post("/api/project/:userid", function (req, res) {
    var title = req.body.title;

    db.Project.create({
      title: title,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

  // update route for user's project title
  app.put("/api/updateprojecttitle/:userid", function (req, res) {
    db.Project.update({
      title: req.body.title

    }, {
      where: {
        id: req.params.userid
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  // CRUD - Project 


  // CRUD - Resume 
  // create route for user's resume
  app.post("/api/resume/:userid", function (req, res) {
    var PDF = req.body.PDF;

    db.Resume.create({
      PDF: PDF,
      UserId: req.params.userid
    }).then(function (result) {
      res.json(result);
    });
  });

};


