const Promise = require('bluebird');
const Sequelize = require('sequelize');
const cls = require('continuation-local-storage');
const ns = cls.createNamespace('transaction-namespace');
const clsBluebird = require('cls-bluebird');

/*
*
* Connectionscx
*
*/

clsBluebird(ns, Promise);
Sequelize.useCLS(ns);

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

/*
*
* Models
*
*
*/

const Active_level = sequelize.define('active_level', {
  activeLevelId: {
    type: Sequelize.BIGINT
  },
  txtActiveLevelName: {
    type: Sequelize.STRING
  }
});

const Business = sequelize.define('busiuness', {
  businessID: {
    type: Sequelize.BIGINT
  },
  txtBusinessName: {
    type: Sequelize.STRING
  },
  intRentalDistance: {
    type: Sequelize.INTEGER
  },
  intActiveLevel: {
    type: Sequelize.INTEGER
  },
  intBusinessType: {
    type: Sequelize.INTEGER
  },
  intLocation: {
    type: Sequelize.INTEGER
  },
  intTaxRate: {
    type: Sequelize.INTEGER
  },
  intTaxExempt: {
    type: Sequelize.INTEGER
  }
});

const Business_Type = sequelize.define('busiuness_type', {
  businessTypeId: {
    type: Sequelize.BIGINT
  },
  txtBusinessType: {
    type: Sequelize.STRING
  }
});

const Color = sequelize.define('color', {
  colorID: {
    type: Sequelize.BIGINT
  },
  txtColorName: {
    type: Sequelize.STRING
  }
});

const Costume = sequelize.define('costume', {
  costumeID: {
    type: Sequelize.BIGINT
  },
  txtCostumeName: {
    type: Sequelize.STRING
  },
  txtQRCode: {
    type: Sequelize.STRING
  },
  txtSize: {
    type: Sequelize.STRING
  },
  txtDescription: {
    type: Sequelize.TEXT
  },
  boolRental: {
    type: Sequelize.BOOLEAN
  },
  intPrimaryColor: {
    type: Sequelize.INTEGER
  },
  intSecondaryColor: {
    type: Sequelize.INTEGER
  },
  intRentalCost: {
    type: Sequelize.INTEGER
  },
  intTimePeriod: {
    type: Sequelize.INTEGER
  },
  intImage: {
    type: Sequelize.INTEGER
  },
  intMetaData: {
    type: Sequelize.INTEGER
  },
  intShows: {
    type: Sequelize.INTEGER
  },
  txtCostumeName: {
    type: Sequelize.STRING
  }
});

const Employees = sequelize.define('employess', {
  employeeID: {
    type: Sequelize.BIGINT
  },
  txtEmployeeFName: {
    type: Sequelize.STRING
  },
  txtEmployeeLName: {
    type: Sequelize.STRING
  },
  intRole: {
    type: Sequelize.INTEGER
  },
  intActivityLevel: {
    type: Sequelize.INTEGER
  },
});

const Images = sequelize.define('images', {
  imageID: {
    type: Sequelize.BIGINT
  },
  txtImageName: {
    type: Sequelize.STRING
  }
});

const Invoice = sequelize.define('invoice', {
  invoiceID: {
    type: Sequelize.BIGINT
  },
  dateCheckOut: {
    type: Sequelize.DATEONLY
  },
  dateCheckIn: {
    type: Sequelize.DATEONLY
  },
  intSubTotal: {
    type: Sequelize.INTEGER
  },
  intTax: {
    type: Sequelize.INTEGER
  },
  intTotal: {
    type: Sequelize.INTEGER
  },
  intCostume: {
    type: Sequelize.INTEGER
  },
  intDeposit: {
    type: Sequelize.INTEGER
  },

});

const Location = sequelize.define('location', {
  locationID: {
    type: Sequelize.BIGINT
  },
  txtLocationName: {
    type: Sequelize.STRING
  },
  txtLocationAddress: {
    type: Sequelize.STRING
  },
  txtLocationCity: {
    type: Sequelize.STRING
  },
  txtLocationState: {
    type: Sequelize.STRING
  },
  txtLocationZip: {
    type: Sequelize.STRING
  },
  txtLocationPhone: {
    type: Sequelize.STRING
  },
  txtLocationEmail: {
    type: Sequelize.STRING
  },
  intLocationType: {
    type: Sequelize.INTEGER
  },
  intEmployees: {
    type: Sequelize.INTEGER
  },
 
});

const LocationType = sequelize.define('location_type', {
  locationTypeID: {
    type: Sequelize.BIGINT
  },
  intRentalDistance: {
    type: Sequelize.INTEGER
  }
});

const MetaData = sequelize.define('meta_data', {
  metaDataID: {
    type: Sequelize.BIGINT
  },
  textMetaData: {
    type: Sequelize.STRING
  }
});

const RentalDistance = sequelize.define('rental_distance', {
  rentalDistanceID: {
    type: Sequelize.BIGINT
  },
  intRentalDistance: {
    type: Sequelize.INTEGER
  }
});

const RentalRate = sequelize.define('rental_rate', {
  rentalRateID: {
    type: Sequelize.BIGINT
  },
  intRentalRate: {
    type: Sequelize.INTEGER
  }
});

const RentalTerms= sequelize.define('rental_terms', {
  rentalTermsID: {
    type: Sequelize.BIGINT
  },
  intRentalTerms: {
    type: Sequelize.INTEGER
  }
});

const RentalTimePeriod= sequelize.define('rental_time_period', {
  rentalTimesID: {
    type: Sequelize.BIGINT
  },
  txtRentalTimePeriod: {
    type: Sequelize.STRING
  },
  intRentalTimePeriod: {
    type: Sequelize.INTEGER
  }
});

const Renter= sequelize.define('renter', {
  renterID: {
    type: Sequelize.BIGINT
  },
  txtBusinessName: {
    type: Sequelize.STRING
  },
  txtFName: {
    type: Sequelize.STRING
  },
  txtLName: {
    type: Sequelize.STRING
  },
  txtAddress: {
    type: Sequelize.STRING
  },
  txtCity: {
    type: Sequelize.STRING
  },
  txtState: {
    type: Sequelize.STRING
  },
  txtPhone: {
    type: Sequelize.STRING
  },
  txtEmail: {
    type: Sequelize.STRING
  },
  txtTaxID: {
    type: Sequelize.STRING
  },
});

const SecurityLevel= sequelize.define('security_level', {
  SecurityLevelID: {
    type: Sequelize.BIGINT
  },
  txtSecurityLevelName: {
    type: Sequelize.STRING
  }
});

const Shows= sequelize.define('shows', {
  showID: {
    type: Sequelize.BIGINT
  },
  txtSecurityLevelName: {
    type: Sequelize.STRING
  }
});

const TaxExemptNumber= sequelize.define('tax_exempt_number', {
  taxExemptID: {
    type: Sequelize.BIGINT
  },
  txtTaxExemptNumber: {
    type: Sequelize.STRING
  }
});

const TaxRate= sequelize.define('tax_rate', {
  taxRateID: {
    type: Sequelize.BIGINT
  },
  intTaxRate: {
    type: Sequelize.INTEGER
  }
});

const TimePeriod= sequelize.define('time_period', {
  timePeriodID: {
    type: Sequelize.BIGINT
  },
  txtTimePeriodName: {
    type: Sequelize.STRING
  }
});

