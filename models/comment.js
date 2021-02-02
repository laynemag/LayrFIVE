'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.comment, {foreignKey: "userID"})
      models.projects.hasMany(models.comment, {foreignKey: "projectID"})
      models.users.hasMany(models.comment, {foreignKey: "username"})
      
    }
  };
  comment.init({
    userID: DataTypes.INTEGER,
    username: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};