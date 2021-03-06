module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    userid: {
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
    User.hasMany(models.Project, {
      onDelete: "cascade"
    });
    User.hasMany(models.OtherSkills, {
      onDelete: "cascade"
    });
    User.hasMany(models.BackEndSkills, {
      onDelete: "cascade"
    });
    User.hasMany(models.FrontEndSkills, {
      onDelete: "cascade"
    });
    User.hasMany(models.Framework, {
      onDelete: "cascade"
    });
    User.hasOne(models.Resume, {
      onDelete: "cascade"
    });
  }
  return User;
};