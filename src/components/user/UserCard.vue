<template>
    <div class="card user-card">
        <div class="banner">
            <img src="@/assets/testbanner.jpg" alt>
        </div>
        <user-avatar :user="user" :status="false"/>
        <div class="content">
            <span class="text-2xl font-semibold">{{ user.name }}</span>
            <span class="status" :class="`${user.status}`"></span>
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

        padding-bottom: 25%; /* 20:7 aspect ratio */

        img {
            @apply absolute m-auto w-auto h-auto min-w-full min-h-full;

            top: -9999px;
            bottom: -9999px;
            left: -9999px;
            right: -9999px;
        }
    }

    .avatar {
        @apply relative mx-auto bg-gray-400 rounded-full h-24 w-24 -mt-10 border-green-500 border-2 border-solid;
    }

    .content {
        @apply block text-center p-3 pt-0;

        h1 {
            @apply m-1 mt-1 font-normal;

            .status {
                @apply ml-2 bg-gray-600 inline-block p-1 h-1 w-1 mb-1 rounded-full align-middle;

                &.online {
                    @apply bg-green-500;
                }
            }
        }

        h4 {
            @apply text-gray-600 text-sm m-0 font-medium;
        }
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
