import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userCache: []
    },
    mutations: {
        cacheUser(state, user) {
            state.userCache.push(Object.assign({}, user))
        },
        updateCachedUser(state, user) {
            const existingUser = state.userCache.find((user) => user.id === user.id) || false

            state.userCache = state.userCache.filter((user) => user.id !== user.id) || []

            state.userCache.push(Object.assign({}, existingUser, user))
        }
    },
    actions: {

    }
})