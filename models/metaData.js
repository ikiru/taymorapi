export default (sequelize, DataTypes) => {
  const MetaData = sequelize.define('meta_data', {
    textMetaData: {
      type: Sequelize.STRING
    }
  })

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
