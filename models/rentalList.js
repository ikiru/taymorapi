/*
  This is the list of costumes that will go onto a single invoice.

  Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const RentalList= sequelize.define('rentalList', {

    name: {
      type: Sequelize.STRING,
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