<template>
    <div class="routelist container mx-auto">
        <h1>All available routes:</h1>
        <ul>
            <li v-for="(route, key) in $router.options.routes" :key="key">
                <router-link :to="route">
                    <pre>{{ JSON.stringify(route, null, 2) }}</pre>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="postcss">
.routelist {
    @apply flex flex-col flex-wrap pt-4 px-4;

    li {
        @apply bg-gray-300 rounded overflow-hidden my-2;

        a {
            pre {
                @apply p-2;
            }
        }
    }
}
</style>

<script>
export default {
    
}
</script>

