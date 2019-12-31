module.exports = function (sequelize, DataTypes) {
  var ProfileName = sequelize.define("ProfileName", {
    fname: {
      type: DataTypes.STRING
    },
    lname: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    }
  });
  
  // ProfileName belongs to a User; the attribute ProfileName can only exist if a User exists. The foreign key in the User table will eventually pull and join data from the ProfileName table by referencing the primary key.
  ProfileName.associate = function(models) {
    ProfileName.belongsTo(models.User);
  };

  return ProfileName;
}

