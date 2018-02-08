export default (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    txtLocationName: {
      type: Sequelize.STRING
    },
    txtLocationAddress: {
      type: Sequelize.STRING
    },
    txtLocationCity: {
      type: Sequelize.STRING
    },
    txtLocationState: {
      type: Sequelize.STRING
    },
    txtLocationZip: {
      type: Sequelize.STRING
    },
    txtLocationPhone: {
      type: Sequelize.STRING
    },
    txtLocationEmail: {
      type: Sequelize.STRING
    },
    intLocationType: {
      type: Sequelize.INTEGER
    },
    intEmployees: {
      type: Sequelize.INTEGER
    },
  
  })

  

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task)
  // }

  return User
}
