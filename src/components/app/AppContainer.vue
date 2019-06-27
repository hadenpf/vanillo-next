<template>
    <div id="app">
        <site-header ref="appHeader" :style="{'z-index': 100}" @openCompose="viewCompose(true)"/>
        <app-modal v-show="showCompose" @close="viewCompose(false)"/>
        <router-view :style="topPadding"/>
    </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

body {
    @apply font-body bg-gray-100 text-gray-800;
}

.card {
    @apply mb-4 rounded-lg shadow-lg bg-white text-gray-800;

    &.dark {
        @apply bg-gray-800 text-gray-200;
    }
}
</style>

<script>
export default {
    components: {
        SiteHeader: () => import('./Header'),
        AppModal: () => import('@/components/app/Modal')
    },
    data() {
        return {
            topPadding: 'padding-top: 5.5rem;',
            showCompose: false
        }
    },
    methods: {
        viewCompose(value) {
            if(value !== undefined) {
                this.showCompose = value
            } else {
                this.showCompose = !this.showCompose
            }
        }
    },
    mounted() {
        this.$store.commit('cacheUser', {
            id: 1,
            name: 'Sock',
            avatarUrl: 'https://cdn.discordapp.com/attachments/487853954185822208/592912660492976128/unknown.png',
            status: 'online'
        })
        this.$store.commit('cacheUser', {
            id: 2,
            name: 'hando',
            avatarUrl: 'https://cdn.discordapp.com/avatars/377638029008830466/e2362dfd4167c5b1189012b46ded3d92.png',
            status: 'dnd'
        })
    }
}
</script>
