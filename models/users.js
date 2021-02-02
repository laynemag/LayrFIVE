
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.projects.belongsTo(models.users, {foreignKey: "id"})
      models.comment.belongsTo(models.users, {foreignKey: "id"})
      models.comment.belongsTo(models.users, {foreignKey: "username"})
    }
  };
  users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    github: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
