import { createApp } from 'vue'
import App from './App.vue'
// import router vue
import router from './router'
// import store state management
import store from './store'
// import styles
import './assets/styles/main.scss'

createApp(App).use(store).use(router).mount('#app')
