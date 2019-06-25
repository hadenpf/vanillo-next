<template>
    <div class="cardy w-full">
        <div class="banner"></div>
        <img
            class="pfp"
            src="https://cdn.discordapp.com/attachments/487853954185822208/592912660492976128/unknown.png"
            alt
        >
        <div class="content">
            <h1>
                <span>Sock</span>
                <span class="status online"></span>
            </h1>
            <h4>150 posts</h4>
            <h4>2.3K followers</h4>
        </div>
    </div>
</template>

<style lang="postcss">
.cardy {
    @apply flex w-64 bg-white text-gray-800 flex-col shadow-lg;

    min-height: theme("spacing.32");

    .banner {
        @apply w-full pt-32 flex bg-gray-700;
    }

    .pfp {
        @apply mx-auto bg-gray-400 rounded-full h-20 w-20 -mt-10 border-green-500 border-2 border-solid;
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
    
}
</script>
