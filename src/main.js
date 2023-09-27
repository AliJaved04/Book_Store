import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../src/routes/index.js'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(router)
  .mount('#app')
