'use strict';

const os = require('os');
const express = require('express');

var counter = 0;

const app = express();
app.get('/', function (req, res) {
  var response = 
  response += 'image version' + ' - ' + 1 + '<br/>';
  response += 'counter' + ' - ' + counter + '<br/>';
  response += 'os.hostname()' + ' - ' + os.hostname() + '<br/>';
  response += 'os.type()' + ' - ' + os.type() + '<br/>';
  response += 'os.platform()' + ' - ' + os.platform() + '<br/>';
  response += 'os.arch()' + ' - ' + os.arch() + '<br/>';
  response += 'os.release()' + ' - ' + os.release() + '<br/>';
  response += 'os.uptime()' + ' - ' + os.uptime() + '<br/>';
  response += 'os.loadavg()' + ' - ' + os.loadavg() + '<br/>'
  response += 'os.totalmem()' + ' - ' + os.totalmem() + '<br/>';
  response += 'os.freemem()' + ' - ' + os.freemem() + '<br/>';
  response += 'os.cpus()' + ' - ' + os.cpus().length + '<br/>';
  response += 'os.networkInterfaces()' + ' - ' + os.networkInterfaces() + '<br/>';
  res.send(response);
  counter++;
});



app.listen(8080);
console.log('Running...');
