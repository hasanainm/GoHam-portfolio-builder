module.exports = function (sequelize, DataTypes) {
  var FrontEndSkills = sequelize.define("FrontEndSkills", {
    nameOfSkill: {
        type: DataTypes.STRING,
    }
});

FrontEndSkills.associate = function(models) {
  // We're saying that a Front end skill should belong to a User
  // A skill can't be created without a User due to the foreign key constraint
  FrontEndSkills.belongsTo(models.User);
};

  return FrontEndSkills;
};
