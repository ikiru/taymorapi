/*
    This tablereference the different type of business.(i.e. Professional Costume shop, Community Theatre, High School, Individual)

    Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const BusinessType = sequelize.define('businessType', {

    name: {
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