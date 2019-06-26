<template>
    <img :src="user.avatarUrl" :alt="`${user.name}'s avatar`" class="avatar">
</template>

<style lang="postcss">
.avatar {
    @apply rounded-full;
}
</style>

<script>
export default {
    props: [
        'user'
    ]
}
</script>
