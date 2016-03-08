angular.module('starter.services', [])

.factory('GPIOPins', function () {
    //the baseUrl should be set to the ip address of the machine running the node.js server
    var baseUrl = 'http://192.168.1.139:1337';
    var deletePath = '/deletePin';
    var addPath = '/addPin';
    var updatePath = '/updatePin';
    var pins = {};

    return {
        //gets all currently open pins
        all: function () {
            return pins;
        },
        //adds a pin and opens it for update and deletion
        addPin: function ($http, pinNum) {
            var pin = {};
            pin.pinNum = pinNum;
            $http({
                url: baseUrl + addPath,
                method: "POST",
                params: { "pin_num": pinNum }
            }).then(function (response) {
                //we get a response.data.message when it is successfull and response.data.error when there is an error
                if (response.data.message) {
                    pin.status = 'success';
                    pin.message = 'GPIO Pin Number ' + pin.pinNum + ' is open';
                    pins[pinNum] = pin;
                    console.log('in add pin' + pin.pinNum);
                }
                if (response.data.error) {
                    pin.status = 'error';
                    pin.error = response.data.error;
                    console.log(response.data.error);
                    pin.pinNum = 'error' + pinNum;
                    pins['error' + pinNum] = pin;
                }
                console.log(response.data);
            }).catch(function (response) {
                pin.status = 'error';
                pin.error = response.data.error;
                console.log('Add Error ', response.status, response.data);
                pin.pinNum = 'error' + pinNum;
                pins['error' + pinNum] = pin;
            });
        },
        //changes the state of a pin to the opposite of the current state
        updatePin: function ($http, pin) {
            console.log('in update pins' + pin.pinNum);
            $http({
                url: baseUrl + updatePath,
                method: "PUT",
                params: { "pin_num": pin.pinNum }
            }).then(function (response) {
                //we get a response.data.message when it is successful and response.data.error when there is an error
                if (response.data.error) {
                    pin.status = 'error';
                    pin.error = response.data.error;
                    console.log(response.data.error);
                }
                console.log(response.data);
            }).catch(function (response) {
                pin.status = 'error';
                pin.error = response.data.error;
                console.log('Update Error ', response.status, response.data);
            });

        },
        //this deletes an open pin and closes it
        deletePin: function ($http, pin) {
            $http({
                url: baseUrl + deletePath,
                method: "DELETE",
                params: { "pin_num": pin.pinNum }
            }).then(function (response) {
                //we get a response.data.message when it is successful and response.data.error when there is an error
                if (response.data.message) {
                    delete pins[pin.pinNum];
                    console.log('in delete pin' + pin.pinNum);
                }
                if (response.data.error) {
                    pin.status = 'error';
                    pin.error = response.data.error;
                    console.log(response.data.error);
                }

                console.log(response.data);
            }).catch(function (response) {
                pin.status = 'error';
                pin.error = response.data.error;
                console.log('Delete Error ', response.status, response.data);
            });
        },
        //this is to remove the error message once user has acknowledged it
        removeError: function ($http, pin) {
            delete pins[pin.pinNum];
            console.log('Removing error num ' + pin.pinNum);
            console.log('Removing error' + pin.error);
        }
    };
});


