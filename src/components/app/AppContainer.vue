<template>
    <div id="app" @keyup.esc="viewCompose(false)">
        <compose-modal v-show="showCompose" @close="viewCompose(false)" />
        <app-header ref="appHeader" @open-compose="viewCompose(true)" />
        <router-view :style="topPadding" />
        <app-footer ref="appFooter" />
    </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

html,
body,
:root {
    @apply font-body bg-gray-100 text-gray-800 flex w-full min-h-full m-0;
}

#app {
    @apply flex mx-auto flex-col w-full min-h-full;
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
        AppHeader: () => import('./AppHeader'),
        AppFooter: () => import('./AppFooter'),
        ComposeModal: () => import('@/components/content/ComposePost')
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
        
    }
}
</script>
