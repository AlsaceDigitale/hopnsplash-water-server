const express = require('express')
const app = express()
var SerialPort = require("serialport");

var port = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600
});

app.get('/1', function (req, res) {
  port.write('p:1\r\n');
  console.log("mouille 1");
})

app.get('/2', function (req, res) {
  port.write('p:2\r\n');
  console.log("mouille 2");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
