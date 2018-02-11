export default (sequelize, DataTypes) => {
  const DescriptionKeyWords = sequelize.define('descriptionKeyWords', {
    
    word: {
      type: Sequelize.STRING
    }
  })
  DescriptionKeyWords.associate = (models) => {
  // 1:N
     DescriptionKeyWords.belongsTo(models.Costumes, {
     foreignKey: 'DescriptionKeyWordID'
   })
  }

  return DescriptionKeyWords
}
