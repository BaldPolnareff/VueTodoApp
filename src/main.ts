import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import PrimeVue from 'primevue/config'
// import WaveUI from 'wave-ui'
// import 'wave-ui/dist/wave-ui.css'
import antdv from 'ant-design-vue'


import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(PrimeVue)
// app.use(WaveUI, {
    // theme: 'auto'
// })

app.use(antdv)
app.use(createPinia())
app.use(router)

app.mount('#app')
