if ('serviceWorker' in navigator) {
  window.addEventListener('load', _ => {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log('ServiceWorker registration successful')
      },
      err => {
        console.log('ServiceWorker registration failed: ', err)
      }
    )
  })
}
