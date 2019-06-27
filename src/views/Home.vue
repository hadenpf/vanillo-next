<template>
    <div class="home container mx-auto">
        <div class="wrapper left">
            <user-card :user="$store.state.userCache[1]"/>
            <contest-card/>
            <trending-card/>
        </div>
        <div class="wrapper main">
            <div
                class="card dark bg-gray-700 hover:bg-gray-600 cursor-pointer uppercase text-base text-center text-gray-400 py-2 font-bold"
            >
                <p>3 New Posts - Click To Refresh</p>
            </div>
            <template v-for="(post, index) in posts">
                <user-post :key="index" :user="post.user">
                    <template v-slot:text v-if="post.text">{{ post.text }}</template>
                    <template v-slot:embed v-if="post.image">
                        <img :src="post.image" alt>
                    </template>
                </user-post>
            </template>
        </div>
        <!-- <div class="wrapper right">
            
        </div>-->
    </div>
</template>

<style lang="postcss">
.home {
    @apply flex flex-col flex-wrap pt-4;

    @screen lg {
        @apply flex-row flex-no-wrap;
    }

    .wrapper {
        @apply w-full px-2 mx-auto;

        @screen lg {
            &.left,
            &.right {
                @apply w-2/5;
            }
        }
    }
}
</style>

<script>

export default {
    data: () => ({
        posts: [
            {
                text: 'Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby!',
                user: 1
            },
            {
                text: 'I love gaming!',
                user: 1
            },
            {
                text: 'Post with comment',
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg',
                user: 2
            },
            {
                text: `Post with long comment
Post with long comment
Post with long comment
Post with long comment
Post with long comment
Post with long comment`,
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg',
                user: 2
            },
            {
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg',
                user: 1
            }
        ]
    }),
    components: {
        UserPost: () => import('@/components/content/Post'),
        UserCard: () => import('@/components/user/UserCard'),
        TrendingCard: () => import('@/components/app/TrendingList'),
        ContestCard: () => import('@/components/content/ContestCard')
    }
}
</script>

