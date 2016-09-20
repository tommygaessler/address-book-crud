(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const index = require('../routes/index');
    const addresses = require('../routes/addresses');

    // *** register routes *** //
    app.use('/', index);
    app.use('/addresses', addresses);

  };

})(module.exports);
