<template>
    <button :tabindex="nofocus ? '-1' : ''" @click="$emit('click')" class="button">
        <span tabindex="-1" class="button-content">
            <slot/>
        </span>
    </button>
</template>

<style lang="postcss">
.button {
    @apply bg-gray-200 text-gray-800 font-medium rounded-full flex overflow-hidden appearance-none;

    .button-content {
        @apply w-full h-full inline-block relative outline-none py-1 px-4;

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
    props: [
        'nofocus'
    ]
}
</script>
