'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    title: DataTypes.STRING
  }, {});

  List.associate = function(models) {
    models.List.hasMany(models.Card);
  };
  return List;
};