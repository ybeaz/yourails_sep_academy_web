import { initializeBrowserApp } from './initializeBrowserApp'

window.addEventListener('load', function () {
  document.getElementById('root').innerHTML = ''
  document.getElementsByTagName('body')[0].style.display = 'none'
  setTimeout(() => {
    document.getElementsByTagName('body')[0].style.display = 'block'
  }, 2000)
  initializeBrowserApp()
  /* The main display = 'block' happens in src/DataLayer/sagas/getAuthDataSaga.ts*/
})
