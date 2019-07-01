import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/components/app/AppContainer'
import videojs from 'video.js'

Vue.config.productionTip = false

Vue.component('AppButton', () => import('@/components/app/Button'))
Vue.mixin({
    methods: {
        initializePlayer: (...args) => videojs(...args)
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
