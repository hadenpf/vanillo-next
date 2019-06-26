<template>
    <div class="home container mx-auto">
        <div class="wrapper left">
            <user-card :user="$store.state.userCache[1]"/>
            <trending-card/>
        </div>
        <div class="wrapper main">
            <template v-for="(post, index) in posts">
                <user-post
                    :key="index"
                    :type="(post.text && post.text.length <= 20 ? 'short' : '')
                    + (!post.text && post.image ? 'content' : '')"
                >
                    <template v-slot:text v-if="post.text">{{ post.text }}</template>
                    <template v-slot:embed v-if="post.image">
                        <img :src="post.image" alt>
                    </template>
                </user-post>
            </template>
        </div>
        <div class="wrapper right">right side content!</div>
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
                @apply w-3/5;
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
                text: 'Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby!'
            },
            {
                text: 'I love gaming!'
            },
            {
                text: 'Post with comment',
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg'
            },
            {
                text: `Post with long comment
Post with long comment
Post with long comment
Post with long comment
Post with long comment
Post with long comment`,
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg'
            },
            {
                image: 'https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg'
            }
        ]
    }),
    components: {
        UserPost: () => import('@/components/content/Post'),
        UserCard: () => import('@/components/user/UserCard'),
        TrendingCard: () => import('@/components/app/TrendingList')
    }
}
</script>

