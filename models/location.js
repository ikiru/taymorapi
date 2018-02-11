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
  })

  Location.associate = (models) => {
  // 1:N
     location.belongsTo(models.Business, {
     foreignKey: 'locationID'
   })
  }
  return User
}
