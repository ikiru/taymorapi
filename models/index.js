import Sequelize from 'sequelize'

const sequelize = new Sequelize('taymor', 'postgres', 'postgres')

const models= {
  activeLevel: sequelize.import('./activeLevel'),
  business: sequelize.import('./business'),
  businessType: sequelize.import('./businessType'),
  color: sequelize.import('./color'),
  costume: sequelize.import('./costume'),
  employee: sequelize.import('./employee'),
  images: sequelize.import('./images'),
  invoiceLoan: sequelize.import('./invoiceLoan'),
  invoiceRent: sequelize.import('./invoiceRent'),
  location: sequelize.import('./location'),
  locationType: sequelize.import('./locationType'),
  metaData: sequelize.import('./MetaData'),
  rentalDistance: sequelize.import('./rentalDistance'),
  rentalRate: sequelize.import('./rentalRate'),
  rentalTerms: sequelize.import('./rentalTerms'),
  rentalTimePeriod: sequelize.import('./rentalTimePeriod'),
  renters: sequelize.import('./renters'),
  securityLevel: sequelize.import('./securityLevel'),
  shows: sequelize.import('./shows'),
  shareInventory: sequelize.import('./shareInventory'),
  // taxExemptNumber: sequelize.import('./taxExemptNumber'),
  taxRate: sequelize.import('./taxRate'),
  timePeriod: sequelize.import('./timePeriod'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(builtinModules);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models
