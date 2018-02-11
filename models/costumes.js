export default (sequelize, DataTypes) => {
  const Costumes = sequelize.define('costume', {
    name: {
      type: Sequelize.STRING
    },
    qrCode: {
      type: Sequelize.STRING,
      unique: true,
    },
    size: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    onlineRental: {
      type: Sequelize.BOOLEAN
    },
    rentalPrice: {
      type: Sequelize.INTEGER
    },
  })
  
  Costumes.associate = (models) => {
  // 1:N
     Costumes.belongsTo(models.Invoice, {
     foreignKey: 'CostumeID'
   })
  }

  return Costumes
}
