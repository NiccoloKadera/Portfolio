
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);


// Change this to your repository name
var GHPATH = '/Portfolio/';
 
// Choose a different app prefix name
var APP_PREFIX = 'NK';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/main.css`,
  `${GHPATH}/indexEng.html`,
  `${GHPATH}/manifest.json`,
  `${GHPATH}/BlurrEditorENG.js`,
  `${GHPATH}/BlurrEditorITA.js`,
]
