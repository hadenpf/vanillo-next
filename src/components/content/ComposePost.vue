<template>
    <app-modal>
        <div v-slot:content>gaming</div>
    </app-modal>
</template>

<style lang="postcss">
</style>

<script>
export default {
    components: {
        AppModal: () => import('@/components/app/Modal')
    }
}
</script>
