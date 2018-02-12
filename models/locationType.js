/*
  This table refers to the type of location.  Is it the primary or the secondary location.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const LocationType = sequelize.define('location_type', {
    name: {
      type: Sequelize.INTEGER
    }
  })

  LocationType.associate = (models) => {
  // 1:N
     LocationType.belongsTo(models.Location, {
     foreignKey: 'LocationTypeID'
   })
  }
  return LocationType
}
