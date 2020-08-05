/* indent size: 2 */
'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('fields', {
    fieldId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    layerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    ENname: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CNname: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fieldType: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fieldSitua: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'fields',
  });

  Model.associate = function() {

  };

  return Model;
};
