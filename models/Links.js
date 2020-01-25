module.exports = function (sequelize, DataTypes) {
  var Links = sequelize.define("Links", {
    linkedin: {
      type: DataTypes.STRING
    },
    instagram: {
      type: DataTypes.STRING
    },
    facebook: {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    }
  });
  
  // Links belongs to a User; the attribute Links can only exist if a User exists. The foreign key in the User table will eventually pull and join data from the Links table by referencing the primary key.
  Links.associate = function(models) {
    Links.belongsTo(models.User);
  };

  return Links;
}

