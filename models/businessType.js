export default (sequelize, DataTypes) => {
  const BusinessType = sequelize.define('business_type', {

    txtBusinessType: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  BusinessType.associate = (models) => {
  // 1:N
     BusinessType.belongsTo(models.Business, {
     foreignKey: 'Business_TypeID'
   })
  }

  return BusinessType
}