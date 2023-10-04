import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../src/routes/index.js'
import { loadFonts } from './plugins/webfontloader'
import VueToastify from 'vue-toastify'
import store from './store'

loadFonts()



createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .use(VueToastify, {
    position: 'bottom-right', // Set the desired position for toasts
    theme: 'light', // Choose 'light' or 'dark' theme
  })
  .mount('#app')
