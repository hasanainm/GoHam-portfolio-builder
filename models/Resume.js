module.exports = function (sequelize, DataTypes) {
    var Resume = sequelize.define("Resume", {
      PDF: {
        type: DataTypes.STRING
      }
    });
    
    // Resume belongs to a User; the attribute Resume can only exist if a User exists. The foreign key in the User table will eventually pull and join data from the Resume table by referencing the primary key.
    Resume.associate = function(models) {
      Resume.belongsTo(models.User);
    };
  
    return Resume;
  }
  
  