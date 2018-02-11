export default (sequelize, DataTypes) => {
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
