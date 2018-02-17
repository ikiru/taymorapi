/*
  This references the the type of transaction.  Is it loan or a rental. 

  Jeff Winkler 2/11/2018
*/

module.exports = (sequelize, DataTypes) => {
  const TransactionType= sequelize.define('transactionType', {

    name: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  TransactionType.associate = (models) => {
  // 1:N
    transactionType.belongsTo(models.Invoice, {
     foreignKey: 'transactionTypeID'
   })
  }
  
  return TransactionType
}
