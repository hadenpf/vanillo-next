<template>
    <div class="card user-card">
        <div class="banner">
            <router-link
                class="banner-link"
                :to="{
                    name: 'profile',
                    params: {
                        username: user.name
                    }
                }"
            >
                <img src="@/assets/testbanner.jpg" alt>
            </router-link>
        </div>
        <router-link
            class="avatar-link"
            :to="{
                name: 'profile',
                params: {
                    username: user.name
                }
            }"
        >
            <user-avatar :user="user" :status="false" :link="true"/>
        </router-link>
        <div class="content">
            <div class="user-meta">
                <router-link
                    :to="{
                    name: 'profile',
                    params: {
                        username: user.name
                    }
                }"
                >
                    <span class="username">{{ user.name }}</span>
                    <span class="status-indicator" :class="`${user.status}`"></span>
                </router-link>
            </div>
            <select class="status-selector" name="status-selector" v-model="user.status">
                <option value="online" class="online">Online</option>
                <option value="away" class="away">Away</option>
                <option value="dnd" class="dnd">Do Not Disturb</option>
                <option value="offline">Invisible</option>
            </select>
            <h4>150 posts</h4>
            <h4>2.3K followers</h4>
        </div>
    </div>
</template>

<style lang="postcss">
.user-card {
    @apply flex flex-col bg-white text-gray-800 shadow-lg rounded-lg;

    .banner {
        @apply flex bg-gray-400 rounded-t-lg overflow-hidden relative;

        padding-bottom: 25%;

        img {
            @apply absolute m-auto w-auto h-auto min-w-full min-h-full;

            top: -9999px;
            bottom: -9999px;
            left: -9999px;
            right: -9999px;
        }
    }

    .avatar-link {
        @apply relative flex -mt-10 mx-auto bg-gray-400 rounded-full;

        .avatar {
            @apply h-24 w-24 border-green-500 border-2 border-solid;
        }
    }

    .content {
        @apply flex flex-col text-center p-3 pt-0;

        .username {
            @apply text-2xl font-normal;
        }

        .status-selector {
            @apply w-32 mx-auto text-gray-700 bg-gray-300 rounded-full px-2 py-1 cursor-pointer my-1;

            option {
                @apply text-gray-100 p-3;

                &.online {
                    @apply bg-green-500;
                }

                &.away {
                    @apply bg-yellow-500 text-gray-800;
                }

                &.dnd {
                    @apply bg-red-600;
                }

                &.offline {
                    @apply bg-gray-700;
                }
            }
        }

        h4 {
            @apply text-gray-600 text-sm m-0 font-medium;
        }
    }
}

.status-indicator {
    @apply ml-2 bg-gray-600 inline-block p-1 h-3 w-3 mb-2 rounded-full align-middle;

    &.online {
        @apply bg-green-500;
    }

    &.away {
        @apply bg-yellow-500;
    }

    &.dnd {
        @apply bg-red-600;
    }
}
</style>

<script>
export default {
    props: [
        'user'
    ],
    components: {
        UserAvatar: () => import('@/components/user/UserAvatar')
    },
    computed: {

    }
}
</script>
