import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userCache: [{
            id: 2,
            name: 'hando',
            avatarUrl: 'https://cdn.discordapp.com/avatars/377638029008830466/4aace11f310fbec19bc950656cf626cb.png',
            status: 'dnd'
        },
        {
            id: 1,
            name: 'Sock',
            avatarUrl: 'https://cdn.discordapp.com/attachments/487853954185822208/592912660492976128/unknown.png',
            status: 'online'
        }],
        currentUser: 2
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