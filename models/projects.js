'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.projects, {foreignKey: "id"})
      models.comment.belongsTo(models.projects, {foreignKey: "projectID"})
    }
  };
  projects.init({
    userID: DataTypes.INTEGER,
    postTitle: DataTypes.STRING,
    postDesc: DataTypes.STRING,
    languages: DataTypes.ARRAY(DataTypes.STRING),
    collaborators: DataTypes.BOOLEAN,
    githubUsername: DataTypes.STRING,
    githubRepo: DataTypes.STRING,
    hostLink: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};