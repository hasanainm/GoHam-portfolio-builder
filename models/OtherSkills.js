module.exports = function (sequelize, DataTypes) {
  var OtherSkills = sequelize.define("OtherSkills", {
    nameOfSkill: {
        type: DataTypes.STRING,
    }
});

OtherSkills.associate = function(models) {
  // We're saying that a Skills should belong to a User
  // A Skills can't be created without a User due to the foreign key constraint
  OtherSkills.belongsTo(models.User);
};

  return OtherSkills;
};
