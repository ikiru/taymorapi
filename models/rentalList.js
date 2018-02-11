export default (sequelize, DataTypes) => {
  const RentalList= sequelize.define('rentalList', {

    name: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  RentalList.associate = (models) => {
  // 1:N
    rentalList.belongsTo(models.Invoice, {
     foreignKey: 'rentalListID'
   })
  }
  
  return RentalList
}