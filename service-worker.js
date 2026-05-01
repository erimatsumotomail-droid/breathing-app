self.addEventListener('fetch', function (event) {
  // PWAとして認識させるための最低限の記述
  event.respondWith(fetch(event.request));
});
