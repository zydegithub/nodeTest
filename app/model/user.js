/* indent size: 2 */
'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize;

  const user = app.model.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    introduction: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'user',
  });

  user.associate = function() {
    app.model.User.hasMany(app.model.Layers, { foreignKey: 'layerUser', targetKey: 'username' });
  };

  return user;
};
