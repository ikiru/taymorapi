/*
  This table refers to the short Key workds that can be applied to a costume that a renter could use to search.

  Jeff Winkler 2/11/2018
*/
export default (sequelize, DataTypes) => {
  const KeyWords = sequelize.define('keyWords', {
    
    word: {
      type: Sequelize.STRING,
      unique: true,
    }
  })
  keyWords.associate = (models) => {
  // 1:N
     keyWords.belongsTo(models.Costumes, {
     foreignKey: 'keyWordID'
   })
  }

  return KeyWords
}
