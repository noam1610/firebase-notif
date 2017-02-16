'use strict';
var servicename = 'notification';

module.exports = function(app) {

    var dependencies = ['$window'];

    function service($window) {

        console.log('PushNotification', PushNotification);
        console.log('window', window);
        console.log('$window', $window);

        var options = {
            android: {
                // 'senderID': '1052982738902',
                // 'icon': 'images/app/logo.png',
                'iconColor': 'yellow',
                'vibrate': true,
                'sound': true,
                'forceShow': true
            }
        };

        var push = PushNotification.init(options);

        // console.log('push', push);

        push.on('registration', function(data) {
            console.log('registration', data);
        });

        push.on('notification', function(data) {
            console.log(data.message);
            console.log(data.title);
            console.log(data.count);
            console.log(data.sound);
            console.log(data.image);
            console.log(data.additionalData);
        });

        var add = function() {
            return 3;
        };

        return {
            add: add
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};
