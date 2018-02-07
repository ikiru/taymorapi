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

const Location = sequelize.define('location', {
  locationID: {
    type: Sequelize.BIGINT
  },
  txtLocationName: {
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

const RentalTimes= sequelize.define('rental_times', {
  rentalTimesID: {
    type: Sequelize.BIGINT
  },
  intRentalTimes: {
    type: Sequelize.INTEGER
  }
});

const SecurityLevel= sequelize.define('security_level', {
  SecurityLevelID: {
    type: Sequelize.BIGINT
  },
  txtSecurityLevelName: {
    type: Sequelize.STRING
  }
});

