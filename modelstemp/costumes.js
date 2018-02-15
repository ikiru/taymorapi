/*
    This table is the main costume table.  It defines what is a costume, rental price and description.  It also includes the QR code for the costume.

    Jeff Winkler 2/11/2018
*/

export default (sequelize, DataTypes) => {
  const Costumes = sequelize.define('costume', {
    name: {
      type: Sequelize.STRING
    },
    qrCode: {
      type: Sequelize.STRING,
      unique: true,
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

    Costumes.belongsTo(models.RentalList, {
      foreignKey: 'CostumeID'
    })

    Costumes.belongsTo(models.Business, {
      foreignKey: 'CostumeID'
    })

    Color.hasMany(this.Costumes, {
      foreignKey: 'CostumeID'
    })

    Image.hasMany(this.Costumes, {
      foreignKey: 'CostumeID'
    })

    Size.hasMany(this.Costumes, {
      foreignKey: 'CostumeID'
    })

    KeyWord.hasMany(this.Costumes, {
      foreignKey: 'CostumeID'
    })

    TimePeriod.hasMany(this.Costumes, {
      foreignKey: 'CostumeID'
    })

    Show.hasMany(this.Costumes, {
      foreignKey: 'CostumeID'
    })
  }

  return Costumes
}
