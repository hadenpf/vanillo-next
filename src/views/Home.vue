<template>
    <div class="container mx-auto">
        <br>
        <div class="flex lg:flex-row flex-wrap lg:flex-no-wrap">
            <div class="w-full lg:w-3/5 p-2">
                <User/>
            </div>
            <div class="mx-auto w-full p-2">
                <Post/>
            </div>
            <div class="w-full lg:w-3/5 p-2"></div>
        </div>
    </div>
</template>

<style lang="postcss">
</style>

<script>
import Post from '@/components/content/Post.vue'
import User from '@/components/user/UserCard.vue'

export default {
    components: {
        Post,
        User
    }
}
</script>