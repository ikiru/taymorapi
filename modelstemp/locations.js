/*
  This table refers to the locations of the businesses.  Business can have multiple locations.  One must be chosen as the primary.

  Jeff Winkler 2/11/18
*/

export default (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    taxRate: {
      type: Sequelize.INTEGER
    },
  
  })

  Location.associate = (models) => {
  // 1:N
  
  location.belongsTo(models.Business, {
    foreignKey: 'locationID'
  })

  LocationType.hasMany(models.Location, {
    foreignKey: 'LocationID'
  })
}
  return User
}
