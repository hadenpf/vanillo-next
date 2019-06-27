<template>
    <button class="icon-button" @click="$emit('click', $event)">
        <slot/>
    </button>
</template>

<style lang="postcss">
.icon-button {
    @apply flex border-solid border-2 border-gray-100 text-gray-600 rounded-full h-10 outline-none;

    min-width: theme("width.10");

    transition: all 0.125s ease;

    .text {
        @apply my-auto ml-2;
    }

    i {
        @apply m-auto;
    }

    &:hover {
        @apply bg-gray-200 cursor-pointer;
    }

    &:focus {
        @apply bg-gray-200 border-2 border-gray-400 outline-none;
    }

    &:active {
        @apply bg-gray-300;
    }
}
</style>

<script>
export default {
    
}
</script>
