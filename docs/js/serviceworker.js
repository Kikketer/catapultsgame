/**
 * Chris Weed (chris@cjweed.com)
 * Copyright 2018
 */

var cacheName = 'catapults-app'
var filesToCache = [
  '/app',
  '/app/',
  '/app/index.html',
  '/js/app.js',
  '/css/app.css',
  '/css/fonts/Supercell-Magic.eot',
  '/sounds/game-start.mp3',
  '/sounds/end-game.mp3',
  '/sounds/warning-sound.mp3'
]

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request)
    })
  )
})
