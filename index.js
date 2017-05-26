const express = require('express')
const app = express()
var SerialPort = require("serialport");

var port = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600
});

app.get('/:team', function (req, res) {
  var team = req.params.team;
  console.log("h");
  if(team == "1" || team == "2") {
    port.write("p:"+team+"\r\n");
    console.log("mouille" + team);
    res.send("mouille" + team);
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
