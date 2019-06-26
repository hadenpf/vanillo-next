import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/components/app/AppContainer'

Vue.config.productionTip = false

Vue.component('AppButton', () => import('@/components/app/Button'))

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
