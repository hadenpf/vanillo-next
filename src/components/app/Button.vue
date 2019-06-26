<template>
    <button class="button">
        <span class="button-content">
            <slot/>
        </span>
    </button>
</template>

<style lang="postcss">
.button {
    @apply bg-gray-200 text-gray-800 font-medium rounded-full flex overflow-hidden;

    .button-content {
        @apply w-full h-full py-1 px-4 flex;

        transition: all 0.125s ease;
    }

    &:hover {
        @apply cursor-pointer;

        .button-content {
            background-color: rgba(128, 128, 128, 0.075);
        }
    }

    &:active {
        .button-content {
            background-color: rgba(128, 128, 128, 0.15);
        }
    }
}
</style>

<script>
export default {
    
}
</script>
