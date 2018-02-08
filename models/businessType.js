export default (sequelize, DataTypes) => {
  const Business_Type = sequelize.define('business_type', {

    txtBusinessType: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return User;
}