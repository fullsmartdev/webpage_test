var fs = require('fs');

var webPageTest = require('../lib/webpagetest');

//webPageTest.config({paths: {testStatus: 'testStatus.php'}});

var wpt = webPageTest('localhost');
//var wpt = webPageTest('www.webpagetest.org');

/*
wpt.getTestStatus('120816_V2_2', {dryRun: !true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getTestResults('120816_V2_2', {dryRun: !true, requestId: '676767676'}, function (err, data) {
  if (err) throw err;
  console.log(data);
  //console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getLocations({dryRun: true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.runTest('http://foo.com', {dryRun: true, location:'blah', connectivity: 'custom'},
function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getPageSpeedData('120815_56_6', {dryRun: !true}, function (err, data) {
  if (err) err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getHARData('120816_V2_3', {dryRun: !true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getUtilizationData('120816_V2_2', {dryRun: !true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getRequestData('120816_V2_2', {dryRun: true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getTimelineData('120920_Q7_4', {dryRun: !true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getNetLogData('120920_Q7_4', {dryRun: !true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

//*
wpt.getConsoleLogData('121009_B1_4', {dryRun: !true}, function (err, data) {
  if (err) throw err;
  console.log(JSON.stringify(data, null, 4));
});
//*/

/*
wpt.getWaterfallImage('120816_V2_2', {dryRun: !true, dataURI: !true, thumbnail: true}, function (err, data) {
  if (err) throw err;
  console.log(data);
});
//*/

/*
wpt.getScreenshotImage('120816_V2_2', {dryRun: !true, dataURI: true, thumbnail: !true, fullResolution: !true}, function (err, data, mimeType) {
  if (err) throw err;
  console.log(data);
});
//*/

/*
var srv = wpt.listen(8081, {
  ikey: fs.readFileSync('test/fixtures/test-key.pem'),
  icert: fs.readFileSync('test/fixtures/test-cert.pem')
});
console.log(srv, srv.toString());
//console.log(srv);

setTimeout(function () {
  var x = wpt.stopListening(function(){console.log('done');});
  console.log(x);
}, 5000);
//*/
