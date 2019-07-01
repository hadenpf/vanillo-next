<template>
    <div class="home container mx-auto">
        <div class="wrapper left">
            <user-card :user="$store.state.userCache[0]"/>
            <contest-card/>
            <trending-card/>
        </div>
        <div class="wrapper main">
            <user-post v-for="(post, index) in posts" :post="post" :key="index">
                <template v-slot:text v-if="post.text">{{ post.text }}</template>
                <template v-slot:embed v-if="post.image">
                    <img :src="post.image" alt>
                </template>
            </user-post>
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
import moment from 'moment'

export default {
    data: () => ({
        posts: [
            // {
            //     text: 'Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby!',
            //     user: 1,
            //     posted: new moment('2019-06-26'),
            //     likes: 22200,
            //     reposts: 3500
            // },
            {
                text: 'I love gaming!',
                user: 1,
                posted: new moment('2019-06-25'),
                likes: 2512835,
                reposts: 510521
            },
            {
                text: 'Post with comment',
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg',
                user: 2,
                posted: new moment('2019-05-26'),
                likes: 12949,
                reposts: 8
            },
            {
                // text: 'this is media',
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg',
                user: 1,
                posted: new moment('2017-10-18'),
                likes: 22035,
                reposts: 253
            }
        ]
    }),
    components: {
        ContestCard: () => import('@/components/content/ContestCard'),
        TrendingCard: () => import('@/components/app/TrendingList'),
        UserCard: () => import('@/components/user/UserCard'),
        UserPost: () => import('@/components/content/UserPost')
    }
}
</script>

