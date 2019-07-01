<template>
    <div class="video-player">
        <video class="video-js" controls autoplay muted loop ref="vanilloplayer">
            <source src="@/assets/test/videotest.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style lang="postcss">
.video-player {
    @apply w-full h-full;

    & > div.video-js {
        @apply max-w-full max-h-full flex;
    }
}
</style>

<script>
export default {
    mounted() {
        this.initializePlayer(this.$refs['vanilloplayer'])
    }
}
</script>
