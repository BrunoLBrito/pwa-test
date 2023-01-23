const CACHE_NAME = 'cacheV1'
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon.png',
  '/images/game1.jpg',
  '/images/game2.jpg',
  '/images/game3.jpg',
  '/images/game4.jpg',
  '/images/game5.jpg',
  '/images/game6.jpg'
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})
