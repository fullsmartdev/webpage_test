/**
 * Copyright (c) 2012, Twitter Inc. and other contributors
 * Released under the MIT License
 */

var reBool = /^0|false|no|off$/i;

var options = {
  common: {
    'server': {
      name: 'server',
      key: 's',
      param: 'server',
      info: 'the WPT server URL [%s]'
    },
    'dryrun': {
      name: 'dryRun',
      key: 'd',
      bool: true,
      info: 'just return the RESTful API URL'
    }
  },
  test: {
    'key': {
      name: 'key',
      key: 'k',
      api: 'k',
      param: 'api_key',
      info: 'API key (if assigned). Contact the WebPageTest server administrator for a key if required'
    },
    'location': {
      name: 'location',
      key: 'l',
      api: 'location',
      param: 'location',
      info: 'location to test from'
    },
    'runs': {
      name: 'runs',
      key: 'r',
      api: 'runs',
      param: 'number',
      info: 'number of test runs [1]'
    },
    'first': {
      name: 'firstViewOnly',
      key: 'f',
      api: 'fvonly',
      bool: true,
      info: 'skip the Repeat View test'
    },
    'label': {
      name: 'label',
      key: 'L',
      api: 'label',
      param: 'label',
      info: 'label for the test'
    },
    'private': {
      name: 'private',
      key: 'p',
      api: 'private',
      bool: true,
      info: 'keep the test hidden from the test log'
    },
    'video': {
      name: 'video',
      key: 'v',
      api: 'video',
      bool: true,
      info: 'capture video'
    },
    'connectivity': {
      name: 'connectivity',
      key: 'y',
      api: 'connectivity',
      param: 'profile',
      info: 'connectivity profile (DSL|FIOS|Dial|custom) [DSL]'
    },
    'dom': {
      name: 'domElement',
      key: 'm',
      api: 'domelement',
      param: 'element',
      info: 'DOM element to record for sub-measurement'
    },
    'connections': {
      name: 'connections',
      key: 'c',
      api: 'connections',
      param: 'number',
      info: 'override the number of concurrent connections'
    },
    'onload': {
      name: 'stopAtDocumentComplete',
      key: 'i',
      api: 'web10',
      bool: true,
      info: 'force the test to stop at window.onload'
    },
    'sensitive': {
      name: 'sensitive',
      key: 't',
      api: 'sensitive',
      bool: true,
      info: 'discard script and http headers in the result'
    },
    'block': {
      name: 'block',
      key: 'b',
      api: 'block',
      param: 'urls',
      info: 'space-delimited list of urls to block (substring match)'
    },
    'login': {
      name: 'login',
      key: 'g',
      api: 'login',
      param: 'username',
      info: 'username for authenticating tests (http authentication)'
    },
    'password': {
      name: 'password',
      key: 'w',
      api: 'password',
      param: 'password',
      info: 'password for authenticating tests (http authentication)'
    },
    'authtype': {
      name: 'authenticationType',
      key: 'a',
      api: 'authType',
      param: 'type',
      info: 'type of authentication: 0 = Basic, 1 = SNS [0]'
    },
    'request': {
      name: 'requestId',
      key: 'e',
      api: 'r',
      param: 'id',
      info: 'echo request ID, useful to track asynchronous requests'
    },
    'notify': {
      name: 'notifyEmail',
      key: 'n',
      api: 'notify',
      param: 'e-mail',
      info: 'e-mail address to notify with the test results'
    },
    'pingback': {
      name: 'pingback',
      key: 'B',
      api: 'pingback',
      param: 'url',
      info: 'URL to ping when the test is complete (the test ID will be passed as an "id" parameter)'
    },
    'bwdown': {
      name: 'bandwidthDown',
      key: 'D',
      api: 'bwDown',
      param: 'bandwidth',
      info: 'download bandwidth in Kbps (used when specifying a custom connectivity profile)'
    },
    'bwup': {
      name: 'bandwidthUp',
      key: 'U',
      api: 'bwUp',
      param: 'bandwidth',
      info: 'upload bandwidth in Kbps (used when specifying a custom connectivity profile)'
    },
    'latency': {
      name: 'latency',
      key: 'Y',
      api: 'latency',
      param: 'time',
      info: 'first-hop Round Trip Time in ms (used when specifying a custom connectivity profile)'
    },
    'plr': {
      name: 'packetLossRate',
      key: 'P',
      api: 'plr',
      param: 'percentage',
      info: 'packet loss rate - percent of packets to drop (used when specifying a custom connectivity profile)'
    },
    'tcpdump': {
      name: 'tcpDump',
      key: 'u',
      api: 'tcpdump',
      bool: true,
      info: 'enable tcpdump capture'
    },
    'noopt': {
      name: 'disableOptimization',
      key: 'z',
      api: 'noopt',
      bool: true,
      info: 'disable optimization checks (for faster testing)'
    },
    'noimages': {
      name: 'disableScreenshot',
      key: 'I',
      api: 'noimages',
      bool: true,
      info: 'disable screen shot capturing'
    },
    'noheaders': {
      name: 'disableHTTPHeaders',
      key: 'H',
      api: 'noheaders',
      bool: true,
      info: 'disable saving of the http headers (as well as browser status messages and CPU utilization)'
    },
    'full': {
      name: 'fullResolutionScreenshot',
      key: 'F',
      api: 'pngss',
      bool: true,
      info: 'save a full-resolution version of the fully loaded screen shot as a PNG'
    },
    'jpeg': {
      name: 'jpegQuality',
      key: 'j',
      api: 'iq',
      param: 'level',
      info: 'jpeg compression level (30-100) for the screen shots and video capture'
    },
    'noscript': {
      name: 'disableJavaScript',
      key: 'S',
      api: 'noscript',
      bool: true,
      info: 'disable javascript (IE, Chrome, Firefox)'
    },
    'ignoressl': {
      name: 'ignoreSSL',
      key: 'R',
      api: 'ignoreSSL',
      bool: true,
      info: 'ignore SSL certificate errors, e.g. name mismatch, self-signed certificates, etc'
    },
    'standards': {
      name: 'disableCompatibilityView',
      key: 'T',
      api: 'standards',
      bool: true,
      info: 'forces all pages to load in standards mode (IE only)'
    },
    'bodies': {
      name: 'saveResponseBodies',
      key: 'O',
      api: 'bodies',
      bool: true,
      info: 'save response bodies for text resources'
    },
    'keepua': {
      name: 'keepOriginalUserAgent',
      key: 'K',
      api: 'keepua',
      bool: true,
      info: 'do not add PTST to the original browser User Agent string'
    },
    'duration': {
      name: 'minimumDuration',
      key: 'N',
      api: 'time',
      param: 'seconds',
      info: 'minimum test duration in seconds'
    },
    'noads': {
      name: 'blockAds',
      key: 'A',
      api: 'blockads',
      bool: true,
      info: 'block ads defined by adblockrules.org'
    },
    'aft': {
      name: 'aftRenderingTime',
      key: 'E',
      api: 'aft',
      bool: true,
      info: '(experimental) measure above-the-fold rendering time'
    },
    'timeline': {
      name: 'timeline',
      key: 'M',
      api: 'timeline',
      bool: true,
      info: 'capture Developer Tools Timeline (Chrome only)'
    },
    'netlog': {
      name: 'netLog',
      key: 'G',
      api: 'netlog',
      bool: true,
      info: 'capture Network Log (Chrome only)'
    },
    'spof': {
      name: 'spof',
      key: 'Z',
      api: 'spof',
      param: 'domains',
      info: 'space-delimited list of domains to simulate failure by re-routing to blackhole.webpagetest.org to silently drop all requests'
    }
  },
  run: {
    'run': {
      name: 'run',
      key: 'r',
      param: 'number',
      info: 'which run number on a multiple runs test [1]'
    },
    'cached': {
      name: 'repeatView',
      key: 'c',
      bool: true,
      info: 'get the Repeat View (cached view) instead of default First View (primed cache)'
    }
  },
  image: {
    'thumbnail': {
      name: 'thumbnail',
      key: 't',
      bool: true,
      info: 'get the thumbnail of actual image'
    },
    'uri': {
      name: 'dataURI',
      key: 'u',
      bool: true,
      info: 'return the base64 string representation (inline) of actual image'
    }
  },
  screenshot: {
    'full': {
      name: 'fullResolution',
      key: 'f',
      bool: true,
      info: 'get full resolution screenshot in PNG format if available'
    },
    'render': {
      name: 'startRender',
      key: 'n',
      bool: true,
      info: 'get the page screenshot at the Start Render point (i.e.: when something was first displayed on screen)'
    },
    'complete': {
      name: 'documentComplete',
      key: 'p',
      bool: true,
      info: 'get the page screenshot at the Document Complete point (i.e.: when window.onload was fired)'
    }
  }
};

var commands = {
  'status': {
    name: 'getTestStatus',
    param: 'id',
    info: 'check test status'
  },
  'results': {
    name: 'getTestResults',
    param: 'id',
    info: 'get test results'
  },
  'locations': {
    name: 'getLocations',
    info: 'list locations and the number of pending tests'
  },
  'test': {
    name: 'runTest',
    param: 'url|script',
    options: [options.test],
    info: 'run test'
  },
  'cancel': {
    name: 'cancelTest',
    param: 'id',
    info: 'cancel running/pending test'
  },
  'har': {
    name: 'getHARData',
    param: 'id',
    info: 'get the HTTPS Archive (HAR) from test'
  },
  'pagespeed': {
    name: 'getPageSpeedData',
    param: 'id',
    options: [options.run],
    info: 'get the Google Page Speed results (if available) from test'
  },
  'utilization': {
    name: 'getUtilizationData',
    param: 'id',
    options: [options.run],
    info: 'get the CPU, bandwidth and memory utilizations data from test'
  },
  'request': {
    name: 'getRequestData',
    param: 'id',
    options: [options.run],
    info: 'get the request data from test'
  },
  'timeline': {
    name: 'getTimelineData',
    param: 'id',
    options: [options.run],
    info: 'get the Chrome Developer Tools Timeline data (if available) from test'
  },
  'netlog': {
    name: 'getNetLogData',
    param: 'id',
    options: [options.run],
    info: 'get the Chrome Developer Tools Net log data (if available) from test'
  },
  'console': {
    name: 'getConsoleLogData',
    param: 'id',
    options: [options.run],
    info: 'get the browser console log data (if available) from test'
  },
  'waterfall': {
    name: 'getWaterfallImage',
    param: 'id',
    options: [options.run, options.image],
    info: 'get the waterfall PNG image'
  },
  'screenshot': {
    name: 'getScreenshotImage',
    param: 'id',
    options: [options.run, options.image, options.screenshot],
    info: 'get the fully loaded page screenshot in JPG format (PNG if in full resolution)'
  },
  'listen': {
    name: 'listen',
    param: 'port',
    optional: true,
    info: 'start webpagetest-api server on port [%s]'
  }
};

// add options shorthands by referrencing flag through key
Object.keys(options).forEach(function eachType(type) {
  Object.keys(options[type]).forEach(function eachOption(option) {
    var obj = options[type][option];
    options[type][obj.key] = obj;
  });
});

// set valid options only per command
function setOptions(command, query) {
  var count, opts;

  command = commands[command];
  if (!command) {
    return;
  }

  opts = {};
  count = Object.keys(query).length;

  [options.common].concat(command.options).some(function someTypes(options) {
    Object.keys(options).some(function someOptions(key) {
      if (query.hasOwnProperty(key)) {
        opts[options[key].name] = options[key].bool ? !reBool.test(query[key]) :
          decodeURIComponent(query[key]);
        count -= 1;
      }

      return count === 0;
    });

    return count === 0;
  });

  return opts;
}

module.exports = {
  setOptions: setOptions,
  commands: commands,
  options: options
};
