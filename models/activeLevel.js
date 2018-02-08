export default (sequelize, DataTypes) => {
  const Active_level = sequelize.define('active_level', {

    txtActiveLevelName: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  // Business.associate = function(models) {
  //   models.Business.hasMany(models.Task);
  // };

  return User;
}
