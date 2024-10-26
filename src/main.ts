import { createApp } from 'vue'
import { createRouter } from '@kitbag/router'
import { routes } from './routes'
import './style.css'
import App from './App.vue'

const router = createRouter(routes)

const app = createApp(App)

app.use(router)
app.mount('#app')

declare module '@kitbag/router' {
    interface Register {
        router: typeof router
    }
}