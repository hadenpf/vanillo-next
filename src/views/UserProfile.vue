<template>
    <div class="profile">
        <div class="banner -mt-4">
            <img src="@/assets/testbanner.jpg" alt>
        </div>
        <div class="user-bar-container container mx-auto">
            <div class="user-bar">
                <div class="left">
                    <user-avatar :user="user"/>
                    <span class="user-info">
                        <span class="username">{{ user.name }}</span>
                        <h4>98 and a half followers</h4>
                    </span>
                </div>
                <div class="right">
                    <app-button class="friend-request">Add Friend</app-button>
                    <app-button class="follow">Follow</app-button>
                </div>
            </div>
        </div>
        <div class="content container mx-auto">
            <div class="pb-32">
                <video-player/>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
.profile {
    .banner {
        @apply flex overflow-hidden relative w-full;

        padding-bottom: 25%;

        @screen lg {
            padding-bottom: 15%;
        }

        img {
            @apply absolute inline-block m-auto w-auto h-auto min-w-full min-h-full;

            left: -9999px;
            right: -9999px;
            top: -9999px;
            bottom: -9999px;
        }
    }

    .user-bar-container {
        .user-bar {
            @apply flex flex-row mx-2 justify-between;

            .left,
            .right {
                @apply bg-gray-200 rounded-full shadow-md relative -mt-10 mb-4;
            }

            .left {
                @apply flex flex-row items-center pr-8 overflow-visible h-20;

                img {
                    @apply w-24 shadow-lg;
                }

                .user-info {
                    @apply flex flex-col ml-4 text-left items-start;

                    line-height: calc(theme("lineHeight.tight") - 0.1);

                    .username {
                        @apply text-3xl font-semibold;
                    }

                    h4 {
                        @apply text-sm font-medium text-gray-600;
                    }
                }
            }

            .right {
                @apply flex flex-row mr-6 h-16 px-4 -mt-8;

                button {
                    @apply my-auto;

                    &:not(:first-of-type) {
                        @apply ml-2;
                    }

                    &.follow {
                        @apply bg-blue-300;
                    }

                    &.friend-request {
                        @apply bg-gray-400;
                    }
                }
            }
        }
    }

    .content {
        @apply bg-gray-500;
    }
}
</style>

<script>
// TODO: request user not from cache, but from api, on load (cache-first then api probably)

export default {
    data() {
        return {
            user: {}
        }
    },
    components: {
        UserAvatar: () => import('@/components/user/UserAvatar'),
        VideoPlayer: () => import('@/components/content/VideoPlayer')
    },
    mounted() {
        const requestedUsername = this.$route.params.username
        const userQuery = this.$store.state.userCache.filter((user) =>
            user.name.toLowerCase() === requestedUsername.toLowerCase())

        if(userQuery.length >= 1) {
            this.user = userQuery[0]
            return
        }

        this.$router.push('/')
    }
}
</script>
