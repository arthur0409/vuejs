import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Use the published package name from npm README
import TscUI from 'tsc-ui-components'
// PrimeVue base styles (required by tait-ui-components) and its icons
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
// tait-ui-components styles (explicit path ensures Vite resolves the CSS)
import 'tsc-ui-components/styles'
import { createPinia } from 'pinia'

createApp(App).use(router).use(TscUI).use(createPinia()).mount('#app')
