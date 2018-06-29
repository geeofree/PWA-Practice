function registerSW() {
  const {serviceWorker} = navigator
  if (serviceWorker) {
    window.addEventListener('load', function() {
      serviceWorker.register('/sw.js')
        .then(function() {
          console.log('[Service Worker] Successfully Registered')
        })
        .catch(function(err) {
          console.log('[Service Worker] Failed to Register', err)
        })
    })
  }
}

export default registerSW
