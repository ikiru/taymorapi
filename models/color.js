export default (sequelize, DataTypes) => {
  const Colors = sequelize.define('color', {
    txtColorName: {
      type: Sequelize.STRING,
      unique: true,
    }
  })

  Color.associate = (models) => {
  // 1:N
      color.belongsTo(models.Costume, {
      foreignKey: 'primaryColorID'
   })

      color.belongsTo(models.Costume, {
      foreignKey: 'secondaryColorID'
  })
  }

  return Colors
}

