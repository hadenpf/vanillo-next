<template>
    <img :src="user.avatarUrl" :alt="`${user.name}'s avatar`" class="avatar" :class="classString">
</template>

<style lang="postcss">
.avatar {
    @apply rounded-full;

    &.status {
        @apply border-gray-400 border-2 border-solid;

        transition: all 0.125s ease;

        &.online {
            @apply border-green-600;
        }

        &.offline {
            @apply border-gray-400;

            &:not(.no-offline-dim) {
                filter: grayscale(1);

                &:hover {
                    filter: grayscale(0.6);
                }
            }
        }

        &.away {
            @apply border-yellow-500;
        }

        &.dnd {
            @apply border-red-600;
        }
    }
}
</style>

<script>
export default {
    props: {
        user: Object,
        showStatus: {
            type: Boolean,
            default: true
        },
        removeColorOffline: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classString() {
            let string = ''

            if(this.showStatus) {
                string += 'status'
            } else {
                return ''
            }

            if(this.user.status === 'offline' && !this.removeColorOffline) {
                string += ' no-offline-dim'
            }

            string += ` ${this.user.status}`

            return string
        }
    }
}
</script>
