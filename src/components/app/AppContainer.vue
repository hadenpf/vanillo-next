<template>
    <div id="app">
        <site-header/>
        <router-view/>
    </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

body {
    @apply bg-gray-100;
}
</style>

<script>
export default {
    components: {
        SiteHeader: () => import('./Header')
    }
}
</script>
