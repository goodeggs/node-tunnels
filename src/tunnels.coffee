fs = require  'fs'
http = require 'http'
https = require 'https'
httpProxy = require 'http-proxy'

module.exports = ({path, forwardPort}) ->
  
  options =
    https:
      key: fs.readFileSync("#{path}/server.key")
      cert: fs.readFileSync("#{path}/server.crt")
      ca: [fs.readFileSync("#{path}/ca.crt")]
      ciphers: 'ALL:!LOW:!DSS:!EXP'
  
  server = httpProxy.createServer forwardPort, 'localhost', options
    
  return server

