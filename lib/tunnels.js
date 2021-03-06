// Generated by CoffeeScript 1.6.3
(function() {
  var fs, http, httpProxy, https;

  fs = require('fs');

  http = require('http');

  https = require('https');

  httpProxy = require('http-proxy');

  module.exports = function(_arg) {
    var forwardPort, options, path, server;
    path = _arg.path, forwardPort = _arg.forwardPort;
    options = {
      https: {
        key: fs.readFileSync("" + path + "/server.key"),
        cert: fs.readFileSync("" + path + "/server.crt"),
        ca: [fs.readFileSync("" + path + "/ca.crt")],
        ciphers: 'ALL:!LOW:!DSS:!EXP'
      }
    };
    server = httpProxy.createServer(forwardPort, 'localhost', options);
    return server;
  };

}).call(this);
