'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.profile, {foreignKey: "userID"})
    }
  };
  profile.init({
    // roleType: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    postTotal: DataTypes.INTEGER,
    userScorePY: DataTypes.INTEGER,
    userScoreJS: DataTypes.INTEGER,
    userScoreCsharp: DataTypes.INTEGER,
    userScoreHTML: DataTypes.INTEGER,
    userScoreCSS: DataTypes.INTEGER,
    userScoreJAVA: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};