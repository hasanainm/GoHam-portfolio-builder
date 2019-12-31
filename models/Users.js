module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    userID: {
      type: DataTypes.STRING
    }
  });

  // User table will be acquring all the attributes from each of the tables it refeerences down below. The foreign key "userID" will be used to reference the primary key(unique) ids 
  User.associate = function (models) {
    User.hasOne(models.Links, {
      onDelete: "cascade"
    });
    User.hasOne(models.ProfileName, {
      onDelete: "cascade"
    });
    User.hasOne(models.Project, {
      onDelete: "cascade"
    });
    User.hasOne(models.OtherSkills, {
      onDelete: "cascade"
    });
    User.hasOne(models.BackEndSkills, {
      onDelete: "cascade"
    });
    User.hasOne(models.FrontEndSkills, {
      onDelete: "cascade"
    });
    User.hasOne(models.Framework, {
      onDelete: "cascade"
    });
  }
  return User;
};