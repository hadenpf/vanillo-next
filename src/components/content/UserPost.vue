<template>
    <div class="card post" :class="{padded: allPadded, reverse: reverseElements, dark}">
        <div class="post-header" :class="{padded: headerPadded}">
            <div class="post-meta">
                <user-avatar :user="userObject" :showStatus="true"/>
                <div class="post-meta-text">
                    <span class="username">
                        {{ userObject.name }}
                        <span
                            class="handle"
                        >@{{ userObject.name.toLowerCase() }}</span>
                        <span class="repost-info">
                            <i class="fas fa-retweet"></i>
                            <span class="username">
                                {{ userObject.name }}
                                <span
                                    class="handle"
                                >@{{ userObject.name.toLowerCase() }}</span>
                            </span>
                        </span>
                    </span>
                    <span>
                        <span class="timestamp">{{ formattedTime }}</span>
                        <span class="location">
                            <i class="fas fa-map-marker-alt"></i> Gaming, KS
                        </span>
                    </span>
                </div>
            </div>
            <div class="post-button-group">
                <icon-button class="post-button">
                    <i class="fas fa-ellipsis-v"></i>
                </icon-button>
            </div>
        </div>
        <div class="post-content" :class="{ 'big-text': bigText }">
            <slot name="text"/>
            <div :class="{ 'pt-1': isCombined }">
                <slot name="embed"/>
            </div>
            <div class="post-button-group mt-2">
                <span class="left-group">
                    <icon-button
                        class="post-button has-text like"
                        :class="{ active: liked }"
                        @click="like()"
                        :title="!liked ? 'Like' : 'Unlike'"
                    >
                        <i class="fas fa-heart"></i>
                        <span class="text">{{ abbreviator(post.likes, 1).toUpperCase() }}</span>
                    </icon-button>
                    <icon-button
                        class="post-button has-text repost"
                        :class="{ active: reposted }"
                        @click="repost()"
                        :title="!reposted ? 'Repost' : 'Undo Repost'"
                    >
                        <i class="fas fa-share"></i>
                        <span class="text">{{ `${abbreviator(post.reposts, 1)}`.toUpperCase() }}</span>
                    </icon-button>
                </span>
                <span class="right-group">
                    <icon-button class="post-button has-text">
                        <i class="far fa-envelope"></i>
                        <span class="text">Share</span>
                    </icon-button>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
.post {
    @apply flex flex-col;

    &.dark {
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

            .post-button-group {
                @apply px-3 pt-2;
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
                    @apply text-lg font-semibold flex flex-row items-baseline;

                    .handle {
                        @apply ml-1 text-base text-gray-600 font-medium;
                    }

                    .repost-info {
                        @apply ml-2 text-sm text-blue-400 font-medium flex flex-row items-center;

                        .username {
                            @apply text-base ml-2 font-bold;

                            .handle {
                                @apply text-xs text-blue-500;

                                font-weight: inherit;
                            }
                        }
                    }
                }

                .timestamp {
                    @apply uppercase text-xs text-gray-600 tracking-wider;
                }

                .location {
                    @apply uppercase text-xs text-blue-400 tracking-wider ml-3;

                    i {
                    }
                }
            }
        }
    }

    .post-button-group {
        @apply flex items-center justify-between mx-auto text-base;

        @screen sm {
            @apply pt-0 mx-0;
        }

        .left-group,
        .right-group {
            @apply flex flex-row;
        }

        .post-button {
            &.has-text {
                @apply px-3;
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

                    &:focus {
                        @apply border-red-800;
                    }

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

                    &:focus {
                        @apply border-blue-700;
                    }
                }
            }

            &:not(:last-of-type) {
                @apply mr-2;
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
import moment from 'moment'
import abbreviator from 'number-abbreviate'

export default {
    props: [
        'post'
    ],
    data: () => ({
        liked: false,
        reposted: false,
        abbreviator
    }),
    components: {
        UserAvatar: () => import('@/components/user/UserAvatar'),
        IconButton: () => import('@/components/app/IconButton')
    },
    methods: {
        like() {
            this.liked = !this.liked

            if(this.liked) {
                this.post.likes++
            } else {
                this.post.likes--
            }
        },
        repost() {
            this.reposted = !this.reposted

            if(this.reposted) {
                this.post.reposts++
            } else {
                this.post.reposts--
            }
        }
    },
    computed: {
        type() {
            let type = 'normal'
            let text = this.$slots['text']
            let embed = this.$slots['embed']

            if(embed && !text) {
                type = 'content'
            }

            if(text && text[0].text.length < 50) {
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
            if(this.$store.state.userCache[this.post.user]) {
                return this.$store.state.userCache[this.post.user]
            }

            return { }
        },
        formattedTime() {
            const relative = this.post.posted.format('MMM DD YYYY')
            const diff = moment.duration(this.post.posted.diff(moment()))

            if(diff.hours() < 24 && (
                moment().isSame(this.post.posted, 'day') ||
                moment().isSame(this.post.posted, 'week') &&
                moment.duration(moment().diff(this.post.posted)).days() <= 1
            )) {
                return this.post.posted.format('h:MM a')
            }

            return `${relative}`
        },
        formattedLongTime() {
            return this.post.posted.format('h:MM A - MMM DD YYYY')
        }
    }
}
</script>
