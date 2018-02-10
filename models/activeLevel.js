export default (sequelize, DataTypes) => {
  const ActiveLevel = sequelize.define('active_level', {

    txtActiveLevelName: {
      type: Sequelize.STRING,
      unique: true,
    }

  })

    ActiveLevel.associate = (models) => {
     // 1:N
      activeLevel.belongsTo(models.business, {
        foreignKey: 'activeLevelID'
    })
  }


  return User;
}
