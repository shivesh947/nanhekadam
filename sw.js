const CACHE_NAME = 'kids-learning-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/sounds/select.mp3',
  '/sounds/close.mp3',
  '/sounds/wrong_ans.mp3',
  '/sounds/correct_ans.mp3',
  '/sounds/next_stage.mp3',
  '/sounds/open.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
