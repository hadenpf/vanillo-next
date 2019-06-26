<template>
    <div class="home container mx-auto">
        <div class="wrapper left">
            <user-card :user="$store.state.userCache[1]"/>
            <trending-card/>
        </div>
        <div class="wrapper main">
            <user-post>
                <template
                    v-slot:text
                >Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby! Gaming is my hobby!</template>
            </user-post>
            <user-post type="short">
                <template v-slot:text>I love gaming!</template>
            </user-post>
            <user-post type="short">
                <template v-slot:text>Post with comment</template>
                <template v-slot:embed>
                    <img
                        src="https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg"
                    >
                </template>
            </user-post>
            <user-post>
                <template v-slot:text>
                    Post with long comment
                    Post with long comment
                    Post with long comment
                    Post with long comment
                    Post with long comment
                    Post with long comment
                </template>
                <template v-slot:embed>
                    <img
                        src="https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg"
                    >
                </template>
            </user-post>
            <user-post type="content">
                <template v-slot:embed>
                    <img
                        src="https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg"
                    >
                </template>
            </user-post>
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
    components: {
        UserPost: () => import('@/components/content/Post'),
        UserCard: () => import('@/components/user/UserCard'),
        TrendingCard: () => import('@/components/app/TrendingList')
    }
}
</script>