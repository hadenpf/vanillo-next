<template>
    <nav class="page-header">
        <div class="header-container container">
            <div class="header-brand">
                <img src="@/assets/logo.png">
            </div>
            <div class="lg:hidden">
                <button
                    @click="toggle"
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    <svg
                        class="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div
                :class="open ? 'block': 'hidden'"
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto block"
            >
                <div
                    class="flex items-center flex-shrink-0 text-grey-200 lg:flex-grow lg:justify-center"
                >
                    <input
                        class="border border-gray-300 bg-grey-100 focus:bg-white w-full text-gray-900 appearance-none inline-block border py-1 px-4 focus:outline-none lg:w-3/6 text-center"
                        :placeholder="search_placeholder"
                        style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji','Font Awesome 5 Free';
    font-weight: 600;"
                    >
                </div>
                <div class="w-32">
                    <router-link to>
                        <app-button class="login-button">Log in</app-button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss">
.page-header {
    @apply bg-white p-3 shadow-lg;

    .header-container {
        @apply flex items-center justify-between flex-wrap mx-auto;

        .header-brand {
            @apply flex items-center flex-shrink-0 text-yellow-500 mr-6 w-32;
        }

        .login-button {
            @apply bg-yellow-400;
        }
    }
}
</style>

<script>
export default {
    data() {
        return { 
            open: false,
            search_placeholder: '\uf002 Search'
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>