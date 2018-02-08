const MetaData = sequelize.define('meta_data', {
  metaDataID: {
    type: Sequelize.BIGINT
  },
  textMetaData: {
    type: Sequelize.STRING
  }
});