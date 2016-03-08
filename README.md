# IonicPinTester
Cordova/Ionic app to test Pins on Raspberry Pi 2
The var baseUrl in the services.js file needs to be changed to point to the ip address of the node.js server 
The code for the node.js server can be found here: https://github.com/jennparise/win10iot-nodejsserver-sample. Also, the Content Security Policy is very generic. You can tailor it to your needs in the index.html.
meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; connect-src *; media-src *"
