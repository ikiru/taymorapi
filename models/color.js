export default (sequelize, DataTypes) => {
  const Color = sequelize.define('color', {
    txtColorName: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return User;
}

