self.addEventListener('install', (event) => {
  //console.log('👷', 'install', event);
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  //console.log('👷', 'activate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // console.log('👷', 'fetch', event);
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    return;
  }
  event.respondWith(fetch(event.request));
});
