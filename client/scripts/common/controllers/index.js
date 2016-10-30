'use strict';

module.exports = function(app) {
    // inject:start
    require('./notification')(app);
    // inject:end
};