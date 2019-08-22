<template>
    <footer class="app-footer">
        <div class="container">
            <div class="content">
                <span class="copyright">
                    Vanillo is a
                    <router-link :to="{ name: 'cosmic' }">CosmicMedia LLC</router-link>&nbsp;project.
                </span>
            </div>
        </div>
    </footer>
</template>

<style lang="postcss">
footer.app-footer {
    @apply flex py-4 bg-gray-200 text-gray-800 border-t-2 border-gray-300 mt-auto;

    .container {
        @apply mx-auto px-4;
    }
}
</style>

<script>
export default {
    
}
</script>
