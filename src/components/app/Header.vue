<template>
    <nav>
        <div ref="header" class="header container">
            <div class="header-brand">
                <img src="@/assets/logo.png">
            </div>
            <div class="header-main">
                <div class="search-bar-wrapper" ref="search-wrapper" @click="expandSearch()">
                    <i class="search-icon fas fa-search"></i>
                    <input
                        ref="search-bar"
                        class="search-bar"
                        :placeholder="search_placeholder"
                        v-model="query"
                    >
                    <i class="search-collapse-icon fas fa-times" @click.stop="collapseSearch()"></i>
                </div>
            </div>
            <div class="header-right">
                <router-link class="auth-link" to>
                    <app-button class="auth-button signup" nofocus="true">Sign up</app-button>
                </router-link>
                <router-link class="auth-link" to>
                    <app-button class="auth-button login" nofocus="true">Log in</app-button>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss">
nav {
    @apply bg-white p-3 shadow-lg;

    .header {
        @apply flex flex-col align-middle mx-auto;

        min-height: theme("height.12");

        @screen sm {
            @apply flex-row;
        }

        .header-brand {
            @apply flex items-center flex-shrink-0 mr-6 w-full mb-1;

            @screen sm {
                @apply w-auto;
            }

            img {
                @apply h-12 m-auto;
            }
        }

        &.search-open {
            .header-brand,
            .header-right {
                @apply hidden;
            }

            .header-main {
                .search-bar-wrapper {
                    &.open {
                        @apply w-full;
                    }
                }
            }
        }

        .header-main {
            @apply w-full flex content-end justify-center pb-2;

            @screen sm {
                @apply pb-0;
            }

            transition: all 0.125s ease;

            .search-bar-wrapper {
                @apply flex align-middle h-8 w-8 my-auto bg-gray-200 rounded-full overflow-hidden cursor-pointer;

                @screen md {
                    @apply w-1/2 cursor-text;
                }

                &.open {
                    @apply w-1/2 cursor-text;
                }

                transition: all 0.125s ease;

                .search-icon {
                    @apply my-auto ml-2 mr-3;

                    @screen md {
                        @apply ml-4;
                    }
                }

                .search-collapse-icon {
                    @apply my-auto mr-3 cursor-pointer inline-block;

                    @screen md {
                        @apply invisible;
                    }
                }

                &.has-text {
                    .search-collapse-icon {
                        @apply visible;
                    }
                }

                .search-bar {
                    @apply bg-inherit h-full w-full;

                    transition: all 0.125s ease;

                    &:focus {
                        @apply outline-none;
                    }
                }
            }
        }

        .header-right {
            @apply flex flex-row align-bottom content-end justify-center;

            @screen lg {
                @apply justify-center;
            }

            min-width: 11rem;

            .auth-link {
                @apply mr-0 ml-1 p-0 flex;

                .auth-button {
                    @apply my-auto;

                    &.signup {
                        @apply bg-gray-300;
                    }
                    &.login {
                        @apply bg-yellow-400;
                    }
                }
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return { 
            open: false,
            search_placeholder: 'Search',
            query: ''
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        },
        expandSearch() {
            this.$refs['search-wrapper'].classList.add('open')
            this.$refs['header'].classList.add('search-open')
            this.$refs['search-bar'].focus()
        },
        collapseSearch() {
            this.$refs['search-wrapper'].classList.remove('open')
            this.$refs['header'].classList.remove('search-open')
            this.query = ''
        }
    },
    watch: {
        query: function() {
            if(this.query.length > 0) {
                this.$refs['search-wrapper'].classList.add('has-text')
            } else {
                this.$refs['search-wrapper'].classList.remove('has-text')
            }
        }
    }
}
</script>