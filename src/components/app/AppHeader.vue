<template>
    <nav>
        <div ref="header" class="header container">
            <div class="header-left">
                <router-link to="/">
                    <img src="@/assets/logo.png" @click="scrollTop()" />
                </router-link>
            </div>
            <div class="header-main">
                <div
                    class="search-bar-wrapper"
                    ref="search-wrapper"
                    @click="expandSearch()"
                    @keyup.esc="collapseSearch()"
                    @keyup.enter="submitSearch()"
                >
                    <input
                        ref="search-bar"
                        class="search-bar"
                        :placeholder="search_placeholder"
                        v-model="query"
                    />
                    <button class="search-collapse-button" @click.stop="collapseSearch()">
                        <i class="search-collapse-icon fas fa-times"></i>
                    </button>
                    <button class="search-button" title="Search" @click.stop="submitSearch()">
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
    @apply bg-white p-3 shadow-md fixed w-full z-40;

    .header {
        @apply flex flex-col align-middle mx-auto px-2 justify-between;

        min-height: theme("height.12");

        @screen sm {
            @apply flex-row;
        }

        &.search-open {
            .header-left,
            .header-right {
                @apply hidden;

                @screen md {
                    @apply flex;
                }
            }

            > [class^="header-"],
            > [class*=" header-"] {
                @apply w-full;

                @screen md {
                    @apply w-1/3;
                }
            }
        }

        > [class^="header-"],
        > [class*=" header-"] {
            @apply w-full;

            @screen sm {
                @apply w-1/3;
            }
        }

        .header-left {
            @apply flex flex-shrink-0 mb-2 justify-center;

            @screen sm {
                @apply mb-0;
            }

            @screen md {
                @apply justify-start;
            }

            a,
            a img {
                @apply h-10 my-auto;
            }
        }

        .header-main {
            @apply flex content-end justify-end py-2;

            transition: all 0.125s ease;

            @screen sm {
                @apply py-1;
            }
        }

        .header-right {
            @apply flex flex-row align-bottom content-end justify-center;

            @screen sm {
                @apply justify-end;
            }

            .header-button {
                @apply my-auto mr-0 ml-1;

                &.signup {
                    @apply bg-gray-300;
                }

                &.login {
                    @apply bg-primary-600;
                }

                &.compose {
                    @apply bg-primary-600 text-gray-100;
                }
            }
        }

        .search-bar-wrapper {
            @apply flex align-middle h-8 w-8 m-auto bg-gray-200 rounded-full overflow-hidden cursor-pointer;

            transition: all 0.125s ease;

            @screen md {
                @apply cursor-text w-full;

                .search-bar {
                    @apply inline-block;
                }
            }

            &.open {
                @apply cursor-text w-full;

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

                @screen md {
                    @apply inline-block;
                }

                &:focus {
                    @apply outline-none;
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
        submitSearch() {
            this.expandSearch()

            const trimmedQuery = this.query.trim().replace(/\s{2,}/g, ' ')

            if(!trimmedQuery.length) { return }

            this.$router.push({
                name: 'search',
                query: {
                    query: this.query.trim().replace(/\s{2,}/g, ' ')
                }
            })
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