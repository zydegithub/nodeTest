/* indent size: 2 */
'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('layers', {
    layerId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    layerName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    showName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    layerUser: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    layerState: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    layerType: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    layerIntro: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    layerGeojson: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    startTime: {
      type: DataTypes.STRING(24),
      allowNull: true,
    },
    updateTime: {
      type: DataTypes.STRING(24),
      allowNull: true,
    },
  }, {
    tableName: 'layers',
  });

  Model.associate = function() {

  };

  return Model;
};
