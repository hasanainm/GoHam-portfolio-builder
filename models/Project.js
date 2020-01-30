module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    githublink: {
        type: DataTypes.STRING,
    },
    demolink: {
        type: DataTypes.STRING,
    }
});

Project.associate = function(models) {
  // We're saying that a project should belong to a User
  // A project can't be created without a User due to the foreign key constraint
  Project.belongsTo(models.User);
};

  return Project;
};
