angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('GPIOPinsCtrl', function ($scope, $http, GPIOPins) {

    $scope.pins = GPIOPins.all();

    $scope.removeError = function (pinNum) {
        GPIOPins.removeError($http, pinNum);
    };
    $scope.addPin = function (pinNum) {
        GPIOPins.addPin($http, pinNum);
    };
    $scope.deletePin = function (pin) {
        GPIOPins.deletePin($http, pin);
    };
    $scope.updatePin = function (pin) {
        GPIOPins.updatePin($http, pin);
    };

});
