function registerSW() {
  const {serviceWorker} = navigator
  if (serviceWorker) {
    self.addEventListener('load', function() {
      console.log('testing')
    })
  }
}

export default registerSW