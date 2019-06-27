<template>
    <app-modal @close="close()">
        <template v-slot:title>Compose</template>
        <template v-slot:content>
            <textarea
                @keydown.enter.ctrl.exact.stop
                type="text"
                ref="post-input"
                v-model="postContent"
                :class="charCountClass"
            />
        </template>
        <template v-slot:footer>
            <span class="left-group">
                <icon-button title="Add photo or video">
                    <i class="fas fa-camera"></i>
                </icon-button>
                <icon-button title="Embed external content">
                    <i class="fas fa-external-link-square-alt"></i>
                </icon-button>
            </span>
            <span class="right-group">
                <span class="char-counter" :class="charCountClass">{{ remainingCharacters }}</span>
                <app-button class="cancel" @click="close()">Cancel</app-button>
                <app-button class="submit" type="submit">Post</app-button>
            </span>
        </template>
    </app-modal>
</template>

<style lang="postcss">
.modal-backdrop {
    .modal {
        section {
            input,
            textarea {
                @apply rounded bg-gray-100 p-2 resize-none h-auto text-xl font-medium outline-none border-2 border-gray-300;

                width: calc(theme("width.64") * 2);
                min-height: theme("height.32");
                transition: all 0.125s ease;

                &:hover {
                    @apply bg-gray-200;
                }

                &:focus {
                    @apply bg-gray-200 border-2 border-gray-400;
                }

                &.normal-text {
                    @apply text-base font-normal;
                }

                &.warn {
                    @apply text-orange-700;
                }

                &.close {
                    @apply text-red-800;
                }

                &.over {
                    @apply text-red-700;
                }
            }
        }

        footer {
            @apply cursor-default;

            .left-group {
                @apply flex flex-row mr-auto;
            }

            .right-group {
                @apply flex flex-row ml-auto items-center;
            }

            .char-counter {
                @apply text-base font-medium tracking-tighter align-middle mr-3;

                transition: color 0.2s ease;

                &.warn {
                    @apply text-orange-400;
                }

                &.close {
                    @apply text-red-500;
                }

                &.over {
                    @apply text-red-700;
                }
            }

            button {
                &:not(:first-of-type) {
                    @apply ml-1;
                }

                &.cancel {
                    @apply bg-inherit;
                }
            }
        }
    }
}
</style>

<script>
const maxCharCount = 280 // this is temporary
// TODO: team: discuss what we should set this at

export default {
    data() {
        return {
            postContent: ''
        }
    },
    components: {
        AppModal: () => import('@/components/app/Modal'),
        IconButton: () => import('@/components/app/IconButton')
    },
    computed: {
        remainingCharacters() {
            return (maxCharCount - this.postContent.trim().length)
        },
        charCountClass() {
            const breakpoints = {
                50: 'warn',
                20: 'close',
                0: 'over'
            }
            
            for(const limit in breakpoints) {
                if(this.remainingCharacters <= limit) {
                    return breakpoints[limit]
                }
            }
            
            return ''
        }
    },
    methods: {
        close() {
            this.$emit('close')
            // this.postContent  = '' // clear post content on close
        }
    },
    watch: {
        postContent() {
            if(this.postContent.trim().length > 50) {
                this.$refs['post-input'].classList.add('normal-text')
            } else {
                this.$refs['post-input'].classList.remove('normal-text')
            }
        }
    }
}
</script>
