<template>
    <nav>
        <div ref="header" class="header container">
            <div class="header-brand">
                <router-link to="/">
                    <img src="@/assets/logo.png" @click="scrollTop()">
                </router-link>
            </div>
            <div class="header-main">
                <div
                    class="search-bar-wrapper"
                    ref="search-wrapper"
                    @click="expandSearch()"
                    @keyup.esc="collapseSearch()"
                >
                    <input
                        ref="search-bar"
                        class="search-bar"
                        :placeholder="search_placeholder"
                        v-model="query"
                    >
                    <button class="search-collapse-button" @click.stop="collapseSearch()">
                        <i class="search-collapse-icon fas fa-times"></i>
                    </button>
                    <button class="search-button" title="Search">
                        <i class="search-icon fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="header-right">
                <!-- <app-button class="header-button signup">Sign up</app-button>
                <app-button class="header-button login">Log in</app-button>-->
                <app-button class="header-button compose" @click="showCompose()">Compose</app-button>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss">
nav {
    @apply bg-white p-3 shadow-lg fixed w-full z-40;

    .header {
        @apply flex flex-col align-middle mx-auto px-2;

        min-height: theme("height.12");

        @screen sm {
            @apply flex-row;
        }

        .header-brand {
            @apply flex items-center flex-shrink-0 mr-6 w-full mb-2;

            @screen sm {
                @apply w-auto mb-0;
            }

            a,
            a img {
                @apply h-10 m-auto;
            }
        }

        &.search-open {
            .header-brand,
            .header-right {
                @apply hidden;

                @screen md {
                    @apply flex;
                }
            }

            .header-main {
                .search-bar-wrapper {
                    &.open {
                        @apply w-full;

                        @screen md {
                            @apply w-1/2;
                        }
                    }
                }
            }
        }

        .header-main {
            @apply w-full flex content-end justify-center py-2;

            @screen sm {
                @apply py-1;
            }

            transition: all 0.125s ease;

            .search-bar-wrapper {
                @apply flex align-middle h-8 w-8 my-auto bg-gray-200 rounded-full overflow-hidden cursor-pointer;

                transition: all 0.125s ease;

                &.open {
                    @apply w-1/2 cursor-text;

                    .search-bar {
                        @apply inline-block;
                    }

                    .search-collapse-button {
                        @apply inline-block;

                        @screen md {
                            @apply hidden;
                        }
                    }
                }

                &.has-text {
                    .search-collapse-button {
                        @apply inline-block;
                    }
                }

                .search-icon {
                    @apply my-auto mr-3 ml-2;
                }

                .search-collapse-button {
                    @apply py-1 px-2 cursor-pointer hidden;

                    @screen md {
                        @apply hidden;
                    }
                }

                .search-bar {
                    @apply bg-inherit h-full w-full pl-3 hidden;

                    transition: all 0.125s ease;

                    &:focus {
                        @apply outline-none;
                    }
                }

                @screen md {
                    @apply w-1/2 cursor-text;

                    .search-bar {
                        @apply inline-block;
                    }
                }
            }
        }

        .header-right {
            @apply flex flex-row align-bottom content-end justify-center;

            @screen sm {
                @apply justify-end;
            }

            min-width: 11rem;

            .header-button {
                @apply my-auto mr-0 ml-1;

                &.signup {
                    @apply bg-gray-300;
                }

                &.login {
                    @apply bg-yellow-400;
                }

                &.compose {
                    @apply bg-blue-400 text-gray-100;
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
            this.$refs['search-bar'].focus()
            this.query = ''
        },
        showCompose() {
            this.$emit('open-compose')
        },
        scrollTop() {
            window.scrollTo({top: 0, animate: 'smooth'})
        }
    },
    watch: {
        query: function() {
            if(this.query.length > 0) {
                this.$refs['search-wrapper'].classList.add('has-text', 'open')
            } else {
                this.$refs['search-wrapper'].classList.remove('has-text')
            }
        }
    }
}
</script>