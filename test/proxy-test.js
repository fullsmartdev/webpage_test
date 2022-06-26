/**
 * Copyright (c) 2013, Twitter Inc.
 * Copyright (c) 2014, Google Inc.
 * Copyright (c) 2014, Marcel Duran and other contributors
 * Released under the MIT License
 */

var assert = require('assert'),
	http = require('http'),
	url = require('url'),
  WebPageTest = require('../lib/webpagetest'),
  wpt = new WebPageTest();

// proxy for test on 5432 port
http.createServer(function(req, res) {
  var requestUrl = url.parse(req.url);
  var body = [];

  req.on('data', function(data) {
    body.push(data);
  });
  req.on('end', function() {
    var orgreq = http.request({
      host:    req.headers.host,
      port:    requestUrl.port || 80,
      path:    requestUrl.path,
      method:  req.method,
      headers: req.headers
    },
    function(orgres) {
      res.writeHead(orgres.statusCode, orgres.headers);
      orgres.on('data', function(chunk) {
        res.write(chunk);
      });
      orgres.on('end', function() {
        res.end();
      });
    });
    if(body.length > 0) {
      orgreq.write(body.join(''));
    }
    orgreq.end();
  });
}).listen(5432);

describe('Run via proxy', function() {
  describe('An Example WebPageTest Server', function() {

    it('gets a test status request', function(done) {
      wpt.getTestStatus('120816_V2_2', {
      	proxy: 'localhost:5432'
      }, function (err, data) {
        if (err) return done(err);
        assert.equal(data.data.id, '120816_V2_2');
        done();
      });
    });
  });
});
