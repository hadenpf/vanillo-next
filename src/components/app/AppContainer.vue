<template>
    <div id="app">
        <site-header/>
        <router-view></router-view>
    </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    @apply bg-gray-100;
}
</style>

<script>
export default {
    name: 'app',
    components: {
        SiteHeader: () => import('@/components/Header')
    }
}
</script>
