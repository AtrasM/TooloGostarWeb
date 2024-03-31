'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "808fbecf6bf6fe540d801f1f232177c4",
"assets/AssetManifest.bin.json": "2b1804d508798f8fe4d1a6b47b44da9d",
"assets/AssetManifest.json": "782b437e6c3461c10b59d53e74baa8d2",
"assets/assets/fonts/vazirmatn_medium.ttf": "24d05392e628925dcb1722a1f20952d3",
"assets/assets/fonts/vazir_black_fd.ttf": "5fda05afe396b4008d360c1b5e954b0e",
"assets/assets/fonts/vazir_bold_fd.ttf": "5d949700eb21b48ff7bcc46daead57dd",
"assets/assets/fonts/vazir_medium_fd.ttf": "662b4bbae8103d61630b09a1813d4b56",
"assets/assets/fonts/vazir_regular_fd.ttf": "732f41451cb94338fe8ce7624961f8fd",
"assets/assets/ico/close_menu.png": "7e5d41c16681f55527d5288ce2058d4b",
"assets/assets/ico/icon-exit.png": "4aa73b36dbf20e479328cd856efb6fdd",
"assets/assets/ico/ic_calendar.png": "13edba6031fbd6005b4001b714754e31",
"assets/assets/ico/ic_cartable_not_selected.png": "3f4a8b31e56d3abac2b32249337383f5",
"assets/assets/ico/ic_cartable_selected.png": "35b2e77d1ae8762d3677a1c29ef35202",
"assets/assets/ico/ic_close_buttons.png": "f69bc23295d005e2c5a28519805c00c4",
"assets/assets/ico/ic_dashboard_not_selected.png": "367f25efc2d5c6ed87a3773f55092d43",
"assets/assets/ico/ic_dashboard_selected.png": "0bf71b7f89f265e34203f9bebd6d6a86",
"assets/assets/ico/ic_down_arrow.png": "d5259e4034fad5779937357257c20a44",
"assets/assets/ico/ic_exit.png": "03d20cfdc3254fe2d7a34fd227ff1655",
"assets/assets/ico/ic_logout.png": "78d9e6186cdcb2e0cba4d3f14c1adb9a",
"assets/assets/ico/ic_message.png": "094d507d08023b5e94b3138ec703515c",
"assets/assets/ico/ic_open_buttons.png": "1865aed829e09e947580f86d4cdb646a",
"assets/assets/ico/ic_pin_not_selected-1.png": "f4285b660ed6af7ad629d5b2762c2b52",
"assets/assets/ico/ic_pin_not_selected.png": "b7925b88bb8374b361c2f53592237784",
"assets/assets/ico/ic_pin_selected.png": "96d308689f2f1acffda7822dfe80b496",
"assets/assets/ico/ic_search.png": "4df0cd3aacfaa41cbbb3bda202faca4c",
"assets/assets/ico/ic_support_call.png": "ba4aca96efdc5d751eba9ceaddb932cd",
"assets/assets/ico/ic_support_email.png": "49f48db5048b44ec8261de6e611c0cba",
"assets/assets/ico/ic_time.png": "177c5bbf1fef47469fe71cd53a6d7bcc",
"assets/assets/ico/ic_top_arrow.png": "4463a86cd9174f101b6829777e67f3aa",
"assets/assets/ico/ic_website.png": "ea43e08b302bdda23f384c32c81db350",
"assets/assets/img/icn_toolo_padideh.png": "6ae4034d7e3d4d58e8c57be8d78b14b2",
"assets/assets/img/img_left.png": "6e4e82052e04be92a276562fcc773d3c",
"assets/assets/img/img_profile.png": "4ab779005f2e60a05198a41c5389f4df",
"assets/FontManifest.json": "b0370324382bef86057c0ad591505792",
"assets/fonts/MaterialIcons-Regular.otf": "3d639728b0b9ddc180cfd484622eca15",
"assets/NOTICES": "083ad7a0928b605ba6ccfec7a28cd2a5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5b9885a3c5f335b354b63599e542181",
"/": "d5b9885a3c5f335b354b63599e542181",
"main.dart.js": "cbd80e4d9b113be03adedd82eb9b94c2",
"manifest.json": "1cc9f50442dec58655ecb1cb68ba6502",
"version.json": "4020feee964c172445be2dac30f12f58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
