// TODO: Fix asap. Its awful.
<template>
    <div class="post_card">
        <div class="post_content">
            <div class="flex flex-row">
                <img
                    class="pfp"
                    src="https://cdn.discordapp.com/attachments/487853954185822208/592912660492976128/unknown.png"
                    alt
                >
                <div class="flex justify-center items-center pl-1">
                    <h2>
                        <span>Sock</span>
                    </h2>
                </div>
            </div>

            <!--
            <div class="flex justify-center items-center float-right">
                <i class="fas fa-ellipsis-v"></i>
            </div>
            -->
        </div>

        <img
            src="https://cdn.discordapp.com/attachments/487853954185822208/592911420811771938/maxresdefault_1.jpg"
            class="px-3 pb-3"
        >
    </div>
</template>

<style lang="postcss">
.post_card {
    @apply flex bg-white text-gray-800 flex-col shadow-lg;

    .post_content {
        @apply flex flex-row p-3;
    }

    h1 {
        @apply m-1 mt-1 font-normal;

        .status {
            @apply ml-2 bg-gray-600 inline-block p-1 h-1 w-1 mb-1 rounded-full align-middle;

            &.online {
                @apply bg-green-500;
            }
        }
    }

    .pfp {
        @apply bg-gray-400 rounded-full h-12 w-12 border-green-500 border-2 border-solid;
    }
}
</style>

<script>
export default {
    
}
</script>
