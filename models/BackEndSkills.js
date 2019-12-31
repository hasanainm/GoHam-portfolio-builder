module.exports = function (sequelize, DataTypes) {
  var BackEndSkills = sequelize.define("BackEndSkills", {
    nameOfSkill: {
        type: DataTypes.STRING,
    }
});

BackEndSkills.associate = function(models) {
  // We're saying that a backend skill should belong to a User
  // A skill can't be created without a User due to the foreign key constraint
  BackEndSkills.belongsTo(models.User);
};

  return BackEndSkills;
};
