<template>
    <div class="modal-backdrop" @click="closeModal()">
        <div class="modal" role="dialog" @click.stop>
            <header>
                <slot name="header">
                    <span class="title">
                        <slot name="title">Modal</slot>
                    </span>
                    <icon-button class="close-button" @click="closeModal()" title="Close">
                        <i class="fas fa-times"></i>
                    </icon-button>
                </slot>
            </header>
            <section class="modal-body">
                <slot name="content">This is a modal.</slot>
            </section>
            <footer v-show="!!this.$slots['footer'].length">
                <slot name="footer" />
            </footer>
        </div>
    </div>
</template>

<style lang="postcss">
.modal-backdrop {
    @apply fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50;

    background-color: rgba(0, 0, 0, 0.25);

    .modal {
        @apply bg-white overflow-x-auto flex flex-col px-4 py-3 rounded-lg shadow-md;

        header {
            @apply flex flex-row justify-between items-center border-gray-200;

            .title {
                @apply text-lg mr-4 pb-0 font-semibold;

                border-bottom-width: theme("borderWidth.2");
            }

            .close-button {
                @apply h-8 w-8 min-w-0;
            }
        }

        section.modal-body {
            @apply flex pt-3;
        }

        footer {
            @apply flex border-gray-200 pt-2 mt-3 w-full;

            border-top-width: theme("borderWidth.2");
        }
    }
}
</style>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
    components: {
        IconButton: () => import('@/components/app/IconButton')
    }
}
</script>
