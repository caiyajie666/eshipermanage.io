'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e70f73ca451b393ab1084029485bfb31",
"version.json": "c72dd9007e6fa6ce5029cbe514299506",
"index.html": "4b0a593aaab98bb57686744a08f8c959",
"/": "4b0a593aaab98bb57686744a08f8c959",
"main.dart.js": "3b926334ca867429906067d48fc67c45",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff76c42a616753b794b4a1c58a572fcf",
"assets/images/tab_info.png": "3ad3d571a2d7850f9ab46ccd190d9866",
"assets/images/no_messages.png": "333930b18990aef785797885c23e6c49",
"assets/images/tab_price.png": "38e40373eaff34d893c1c280d13234b2",
"assets/images/agreen.png": "ba6991ee3b16c73c4c3e702b8c181433",
"assets/images/no_message.png": "df451afed4614570c29273f6b925cf81",
"assets/images/arrowright.png": "04bf6e2d60e54e55c9e0dd0dc36e6dc0",
"assets/images/tab_customer.png": "65d94569adf39a2c49ced86d21d6d459",
"assets/images/tab_infos.png": "644b0a44fad8f697914a7b55d4f75caf",
"assets/images/tab_my.png": "74888a51a89356249bc4f6910301100a",
"assets/images/app_icon.png": "8660e28bfb4d2def1b00d44ce9acb350",
"assets/images/searchIcon.png": "f36bc4948d7cbe8596de91d696a5d63c",
"assets/images/shaixuan.png": "5eaaf4363342d6d4d8eb04877841e9fa",
"assets/images/tab_mys.png": "fc8abb995180d45ec3d36d48b0d996eb",
"assets/images/trackbg2.png": "6aa244090da21ad15a56d08599941520",
"assets/images/arrowrightm.png": "92528d5e7cbba2fb01eec1aa76952b01",
"assets/images/customer.png": "ac62d1c93cf76b6d2a314ff3b2f63c52",
"assets/images/tab_customers.png": "4606efe0e90bde34cb65d0d5d8384a9c",
"assets/images/tab_tracks.png": "0715f80f6f308f174fcd81748126fe7a",
"assets/images/my_set.png": "e4d9073405528db088f03d0a77003b1b",
"assets/images/tab_order.png": "2258ea6bdfd867bcfdd747f72d459191",
"assets/images/trackbg.png": "d8394e97f9b104272ce36d1180c3e1b0",
"assets/images/tab_orders.png": "eb97eddcc0534ea774287f4bc23fd02f",
"assets/images/agrees.png": "e25150a6b67471761e20e37af2450b11",
"assets/images/my_defaultAvatar.png": "29148dbeb27d39a94ed285e3cef1aef0",
"assets/images/tab_track.png": "087facf39a591b24a2186ec71a703d3e",
"assets/images/back.png": "4acbe8c42053eb2d2425e5739e773c55",
"assets/images/defaultAvatar.png": "bf2d06f0cb025140556fe82bdb9e531b",
"assets/images/shut_down_day.png": "e358b342be447fcbcb9acdd7b813d37f",
"assets/images/tab_prices.png": "c7d2c2625da7662d4f82505323c563c7",
"assets/images/mic.png": "3a2d21743836974f0d9ea2a770ce9696",
"assets/AssetManifest.json": "0d5b7bff3d48b89753ff1a91b8ec4935",
"assets/NOTICES": "748bc8542f40f3520afed795c31e58e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "01e5c72dbd7afe59699679961af7bd36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "20163ff8b1d491d9ef66bda83888618d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4d1f8ef707f448f86045cdf9521c3175",
"assets/fonts/MaterialIcons-Regular.otf": "74ba478debeea828059cca2c938db57e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
