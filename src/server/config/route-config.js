(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const index = require('../routes/index');

    // *** register routes *** //
    app.use('/', index);

  };

})(module.exports);
