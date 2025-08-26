const CACHE_NAME = 'gallery-cache-v2';
const urlsToCache = [
    '/',
    'index.html',
    'manifest.json',
    'js/lightbox.js',
    'js/bootstrap.js',
    'js/pwa.js',
    'favicon.png',
    'css/root.css',
    'css/lightbox.min.css',
    'css/font-awesome.all.min.css',
    'css/font-awesome.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('已打开缓存');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});



