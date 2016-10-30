'use strict';
var controllername = 'notification';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.notification'];

    function controller(notification) {
        var vm = this;
        vm.controllername = fullname;
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
