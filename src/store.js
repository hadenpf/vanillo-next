import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userCache: {

        }
    },
    mutations: {
        cacheUser(state, user) {
            state.userCache[user.id.toString()] = Object.assign({}, user)
        },
        updateCachedUser(state, user) {
            state.userCache[user.id.toString()] = Object.assign({}, state.userCache[user.id], user)
        }
    },
    actions: {

    }
})