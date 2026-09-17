self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 何もしない（キャッシュ制御はしないが、Service Worker自体の登録が必要なため用意）
});
