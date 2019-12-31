module.exports = function (sequelize, DataTypes) {
  var Framework = sequelize.define("Framework", {
    nameOfSkill: {
        type: DataTypes.STRING,
    }
});

Framework.associate = function(models) {
  // We're saying that a framework should belong to a User
  // A framework can't be created without a User due to the foreign key constraint
  Framework.belongsTo(models.User);
};

  return Framework;
};
