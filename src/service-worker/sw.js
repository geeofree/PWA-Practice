importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js');

if (workbox) {
  console.log('[Workbox] Successfully loaded');
  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

  workbox.routing.registerRoute(
    /.*\.js/,
    workbox.strategies.cacheFirst()
  )
} else {
  console.log('[Workbox] Failed to load');
}
