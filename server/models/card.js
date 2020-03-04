'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    models.Card.belongsTo(models.List);
  };
  return Card;
};