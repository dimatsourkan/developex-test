export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register(process.env.PUBLIC_URL+'/my-service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.error('ServiceWorker registration failed: ', err);
      }).catch(function(err) {
        console.error('err', err)
      });
    });
  } else {
    console.log('service worker is not supported');
  }
}