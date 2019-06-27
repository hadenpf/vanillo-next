<template>
    <div class="modal-backdrop" @click="closeModal">
        <div class="modal" role="dialog" @click.stop>
            <header class="modal-header">
                <slot name="header">
                    Default title!
                    <button
                        type="button"
                        class="btn-close"
                        @click="closeModal"
                        aria-label="Close modal"
                    >x</button>
                </slot>
            </header>
            <section class="modal-body">
                <slot name="content">Default content!</slot>
            </section>
            <footer class="modal-footer">
                <slot name="footer">Default footer!</slot>
            </footer>
        </div>
    </div>
</template>

<style lang="postcss">
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}

.modal {
    background: #ffffff;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}
</style>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>
