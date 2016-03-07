angular.module('starter.services', [])

.factory('GPIOPins', function () {

    var baseUrl = 'http://192.168.1.139:1337';
    var deletePath = '/deletePin';
    var addPath = '/addPin';
    var updatePath = '/updatePin';

    return {
        addPin: function ($http, pinNum) {
            console.log('in add pins' + pinNum);
            $http({
                url: baseUrl + addPath,
                method: "POST",
                params: { "pin_num": pinNum }
            }).then(function (response) {
                console.log(response.data);
            });
        },

        updatePin: function ($http, pinNum) {
            console.log('in update pins' + pinNum);
            $http({
                url: baseUrl + updatePath,
                method: "PUT",
                params: { "pin_num": pinNum }
            }).then(function (response) {
                console.log(response.data);
            });

        },

        deletePin: function ($http, pinNum) {
            console.log('in delete pins' + pinNum);
            $http({
                url: baseUrl + deletePath,
                method: "DELETE",
                params: { "pin_num": pinNum }
            }).then(function (response) {
                console.log(response.data);
            });
        }
    };
});


