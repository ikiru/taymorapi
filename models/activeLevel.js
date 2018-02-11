export default (sequelize, DataTypes) => {
  const ActiveLevel = sequelize.define('active_level', {

    txtActiveLevelName: {
      type: Sequelize.STRING,
      unique: true,
    }

  })

    ActiveLevel.associate = (models) => {
    // 1:N
       ActiveLevel.belongsTo(models.business, {
       foreignKey: 'ActiveLevelID'
     })
    }


  };

  return ActiveLevel
}
