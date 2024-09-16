'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c58638e893bb3055a57e0dfaaf1ecf0b",
"version.json": "cbfe3cec8d2c7272aeb7dab665a3cdcb",
"index.html": "5d71e250e2c8202817903b0ea5d5908d",
"/": "5d71e250e2c8202817903b0ea5d5908d",
"main.dart.js": "f09a1db132a5d1361963cd93671c69eb",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "f7657164f997c809ff1ed569e293ec29",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f134a0d9a1f451a99a37f7597fd1cf9f",
"accubrew1.webp": "747f90871020762a0720564454baef17",
"assets/AssetManifest.json": "1fc02b3f5f3a12d72f3d839fa79441b1",
"assets/loading.gif": "b37d1e2a2b1e0a4100272e8a0def6a71",
"assets/NOTICES": "ecb8d0fb026828b6653fea8ffa540615",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "6ba9ba3601c1f8857e018615f1cafd9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fd0f9f3a1c1163c442dbcbf4b82ecc8a",
"assets/fonts/MaterialIcons-Regular.otf": "c851ca5c174f2d943f65bce3a7792644",
"assets/assets/images/cloudLightGreen.svg": "a00ba7042dfad3a2ed52a6292f0934db",
"assets/assets/images/wezoomart2.png": "d45f9387be5b0525afea726fea34d7a0",
"assets/assets/images/joblinx4.png": "f3817fa0be9f137ab38536ccf48229f4",
"assets/assets/images/wezoomart3.png": "655b805147439692368462419c4e69f7",
"assets/assets/images/wezoomart1.png": "d988c61df962f817162fef07ef8e1a89",
"assets/assets/images/wezoomart4.png": "9ae0de272d5c99fe0defd3e9b20249f7",
"assets/assets/images/joblinx3.png": "ca53aea36d5c8ac5ea0a5e06cdab3b77",
"assets/assets/images/joblinx2.png": "296516854f024ae58eeed4b68699c957",
"assets/assets/images/joblinx1.png": "b347fbcb3c2e8813e3b92edcb2dcb08d",
"assets/assets/images/accubrew4.png": "79473ec84e0ce895f27f1e356a905421",
"assets/assets/images/clozy5.png": "418aa2055edc91cdb12da8f17bd53b31",
"assets/assets/images/clozy4.png": "ba9a6745da3946656bce906101a19502",
"assets/assets/images/accubrew2.png": "d09665f34c5089566008ebc2177f4d1a",
"assets/assets/images/clozy1.png": "773410eaedfe75741b96a93f6901e050",
"assets/assets/images/loading.gif": "b37d1e2a2b1e0a4100272e8a0def6a71",
"assets/assets/images/accubrew3.png": "92bfbb969b1bf8a93578777aec2d16f2",
"assets/assets/images/accubrew1.png": "ee709bbb67c8a0f148188aed182fb90a",
"assets/assets/images/clozy3.png": "ea05a2dff77b509b7b660d14ac03ff80",
"assets/assets/images/clozy2.png": "c9c63d5dd8a1015b22312028ef1bd58e",
"assets/assets/images/cloudLightBlue.svg": "98416f8b4108fb4b5f55ccb35ef16fb7",
"assets/assets/images/cloudLightPink.svg": "149ae1c5647a1dcbab691bbef8e72bbe",
"assets/assets/images/hirepro2.png": "6faf3adc3d0e89c70aed666ce4525009",
"assets/assets/images/hirepro3.png": "355cc90bb973917e841541042d4e21e0",
"assets/assets/images/hirepro1.png": "ae4058d537b0a191a69e0086f98bd1df",
"assets/assets/images/hirepro4.png": "8b6838ce9c152f07626021db750fab69",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/images/transparentProfile.png": "7b8a6c3ecf7874c2e8b2cef2bce312b6",
"assets/assets/images/cashew1.png": "6395df85328418502bf2dc48f0e07d5a",
"assets/assets/images/mego6.png": "5955f74399bcbe2b1c941895dc9dfd1b",
"assets/assets/images/cloudCornflowerBlue.svg": "94c25e8e272ebf3e4b8468b0cd9e4515",
"assets/assets/images/mego4.png": "d3508fae42c13bd55c442753096e461c",
"assets/assets/images/cashew3.png": "a040771034e5d8b6d72d7f48e70dc28c",
"assets/assets/images/cloudSlateBlue.svg": "26c9a89cb1a23998988528bd0fce5390",
"assets/assets/images/cloudCyan.svg": "6393ef78a0ad3136a830ddfc4611edce",
"assets/assets/images/cashew2.png": "6cf9811cb415f2a341e3b70bffb8f9f6",
"assets/assets/images/mego5.png": "5b3ee64ab99c9fd0731b4a0783644f3f",
"assets/assets/images/mego1.png": "340450f37943fc9bb2d5f0bdb26b550f",
"assets/assets/images/cloudLavender.svg": "f39502b2ae50433c7d3914b2c4383c95",
"assets/assets/images/1479.gif": "7af587a38343e885e4345667ad2fe87c",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/mego2.png": "5e6c08ed048b7f74e69f4e059f077b7a",
"assets/assets/images/cloudAqua.svg": "ea6929aea5690ec38ec5cc97910638ce",
"assets/assets/images/cashew4.png": "771101b5c68dcdd60cdb05d222abf572",
"assets/assets/images/mego3.png": "507a2a35d2d7ba98d4e4efc768a0a20a",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/assets/icons/github.png": "d276d54d1d11f2fb2ea5edee28fc7950",
"assets/assets/icons/shot90.png": "563dec052415bbd279db8de760c9459b",
"assets/assets/icons/shot91.png": "d0dee58994ffab1b682d04e157ebfcd0",
"assets/assets/icons/linkedInPng.png": "07fc726475115bb0415e1b3e30572599",
"assets/assets/icons/shot92.png": "82590f653b061f785785cd4fc4dda1ab",
"assets/assets/icons/resume.png": "e06d3510859ce28ce5d57f610cfa2e49",
"assets/assets/icons/upwork.png": "54ba6f7c1cb5f6370f771a5dba384884",
"assets/assets/icons/history.png": "8bd7ffbd004eba5e0d51fd05f3a4429c",
"assets/assets/icons/shot89.png": "eaee189f14d973538b15e7496ebacaf2",
"assets/assets/icons/portfolio.png": "b9e1766a41c01803dc16024a294da74c",
"assets/assets/icons/linkedin.png": "38b43a4765f23ffbfc50c129642f8e67",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/playStore.png": "5bd6488d8fb68d710af11ed95959abea",
"assets/assets/icons/education.png": "0839a927ad2cc7b8fc7a4aad00aeac6d",
"assets/assets/icons/skills.png": "f6e9121571133d7416fdfdccac51675f",
"assets/1479.gif": "7af587a38343e885e4345667ad2fe87c",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
