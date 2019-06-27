<template>
    <div class="card post" :class="{padded: allPadded, reverse: reverseElements, dark}">
        <div class="post-header" :class="{padded: headerPadded}">
            <div class="post-meta">
                <user-avatar :user="userObject" :showStatus="true"/>
                <div class="post-meta-text">
                    <span class="username">{{ userObject.name }}</span>
                    <span>
                        <span class="timestamp">2 days ago</span>
                        <span class="location">
                            <i class="fas fa-map-marker-alt"></i> Gaming, KS
                        </span>
                    </span>
                </div>
            </div>
            <div class="post-button-group">
                <span class="post-button like" :class="{ active: liked }" @click="liked = !liked">
                    <i class="fas fa-heart"></i>
                    <span class="count">2.3K</span>
                </span>
                <span
                    class="post-button repost"
                    :class="{ active: reposted }"
                    @click="reposted = !reposted"
                >
                    <i class="fas fa-share"></i>
                    <span class="count">2</span>
                </span>
                <span class="post-button">
                    <i class="fas fa-ellipsis-v"></i>
                </span>
            </div>
        </div>
        <div class="post-content" :class="{ 'big-text': bigText }">
            <slot name="text"/>
            <div :class="{ 'pt-1': isCombined }">
                <slot name="embed"/>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
.post {
    @apply flex flex-col;

    &.dark {
        .post-header {
            .post-button-group {
                .post-button {
                    @apply border-gray-700 text-gray-400;

                    &:hover {
                        @apply bg-gray-600;
                    }

                    &:active {
                        @apply bg-gray-700;
                    }
                }
            }
        }
    }

    .padded,
    &.padded {
        @apply px-4 py-3;

        .post-header {
            @apply pb-2;
        }
    }

    &.reverse {
        @apply flex-col-reverse;

        .post-content {
            img,
            video {
                @apply rounded-b-none;
            }
        }
    }

    .post-header {
        @apply flex flex-col justify-between;

        @screen sm {
            @apply flex-row;
        }

        .post-meta {
            @apply flex flex-row items-center mx-auto;

            @screen sm {
                @apply mx-0;
            }

            .avatar {
                @apply bg-gray-400 rounded-full h-12 w-12;
            }

            .post-meta-text {
                @apply flex flex-col align-top pl-2 leading-tight;

                .username {
                    @apply text-lg font-semibold;
                }

                .timestamp {
                    @apply uppercase text-xs text-gray-600 tracking-wider;
                }

                .location {
                    @apply uppercase text-xs text-blue-500 tracking-wider ml-3;

                    i {
                    }
                }
            }
        }

        .post-button-group {
            @apply flex items-center float-right pt-2 mx-auto;

            @screen sm {
                @apply pt-0 mx-0;
            }

            .post-button {
                @apply flex border-solid border-2 border-gray-100 px-3 text-gray-600 rounded-full h-10;

                min-width: theme("width.10");

                transition: all 0.125s ease;

                .count {
                    @apply my-auto ml-2;
                }

                i {
                    @apply m-auto;
                }

                &.like {
                    &:hover {
                        @apply text-red-700;
                    }

                    &:active {
                        @apply bg-gray-300;
                    }

                    &.active {
                        @apply bg-red-600 text-gray-100;

                        i {
                            animation: 0.4s ease like-animation;
                        }
                    }
                }

                &.repost {
                    &:hover {
                        @apply text-blue-500;
                    }

                    &:active {
                        @apply bg-gray-300;
                    }

                    &.active {
                        @apply bg-blue-500 text-gray-100;
                    }
                }

                &:hover {
                    @apply bg-gray-200 cursor-pointer;
                }

                &:active {
                    @apply bg-gray-300;
                }

                &:not(:last-of-type) {
                    @apply mr-2;
                }
            }
        }
    }

    .post-content {
        @apply font-normal;

        &.big-text {
            @apply text-2xl;
        }

        img,
        video {
            @apply rounded-lg;
        }
    }
}

@keyframes like-animation {
    0% {
        @apply text-inherit;
    }

    50% {
        @apply text-red-400;
    }

    100% {
        @apply text-inherit;
    }
}
</style>

<script>
export default {
    props: [
        'user'
    ],
    data: () => ({
        liked: false,
        reposted: false
    }),
    components: {
        UserAvatar: () => import('@/components/user/UserAvatar')
    },
    computed: {
        type() {
            let type = 'normal'
            let text = this.$slots['text']
            let embed = this.$slots['embed']

            if(embed && !text) {
                type = 'content'
            }

            if(text && text[0].text.length <= 20) {
                type = 'bigtext'
            }

            return type
        },
        allPadded() {
            if(this.type === 'content') {
                return false
            }

            return true
        },
        headerPadded() {
            if(this.type === 'content') {
                return true
            }

            return false
        },
        reverseElements() {
            if(this.type ==='content') {
                return true
            }

            return false
        },
        bigText() {
            return this.type === 'bigtext'
        },
        dark() {
            return this.type === 'content'
            // return false
        },
        reverse() {
            return this.type === 'content'
            // return false
        },
        isCombined() {
            if(this.$slots['text'] && this.$slots['embed']) {
                return true
            }

            return false
        },
        userObject() {
            if(this.$store.state.userCache[this.user]) {
                return this.$store.state.userCache[this.user]
            }

            return { }
        }
    }
}
</script>
