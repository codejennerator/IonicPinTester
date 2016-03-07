angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('GPIOPinsCtrl', function ($scope, $http, GPIOPins) {

    $scope.addPin = function (pinNum) {
        GPIOPins.addPin($http, pinNum);
    };
    $scope.deletePin = function (pinNum) {
        GPIOPins.deletePin($http, pinNum);
    };
    $scope.updatePin = function (pinNum) {
        GPIOPins.updatePin($http, pinNum);
    };

});
