'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  submission.init({
    username: DataTypes.STRING,
    postID: DataTypes.INTEGER,
    postTitle: DataTypes.STRING,
    postDesc: DataTypes.STRING,
    languages: DataTypes.STRING,
    collaborators: DataTypes.STRING,
    gitHub: DataTypes.STRING,
    hostLink: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'submission',
  });
  return submission;
};