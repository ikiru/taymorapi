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
