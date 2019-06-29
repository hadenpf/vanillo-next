<template>
    <app-modal @close="close()">
        <template v-slot:title>New Post</template>
        <template v-slot:content>
            <div class="input-group">
                <label for="post-title">Title</label>
                <input
                    @keydown.enter.ctrl.exact.stop
                    type="text"
                    ref="post-title"
                    id="post-title"
                    placeholder="Add a title"
                    v-model="postContent"
                    :class="charCountClass"
                >
            </div>
            <div class="input-group">
                <label for="post-content">Content</label>
                <div class="post-content" id="post-content">
                    <div class="post-options" v-show="true">
                        <div class="post-option">
                            <icon-button>
                                <i class="fas fa-align-left"></i>
                            </icon-button>
                            <span class="label">Text Post</span>
                        </div>
                        <div class="post-option">
                            <icon-button>
                                <i class="fas fa-camera"></i>
                            </icon-button>
                            <span class="label">Photo or Video</span>
                        </div>
                        <div class="post-option">
                            <icon-button>
                                <i class="fas fa-link"></i>
                            </icon-button>
                            <span class="label">Link Content</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <span class="left-group">
                <span class="char-counter" :class="charCountClass">{{ remainingCharacters }}</span>
            </span>
            <span class="right-group">
                <app-button class="cancel" @click="close()">Cancel</app-button>
                <app-button class="submit" type="submit">Post</app-button>
            </span>
        </template>
    </app-modal>
</template>

<style lang="postcss">
.modal-backdrop {
    @apply p-3;

    .modal {
        @apply w-full;

        /* transition: all 0.2s ease; */

        @screen sm {
            @apply w-auto;

            min-width: calc(theme("width.64") * 2);
        }

        header {
            .close-button {
                @apply h-10 w-10;

                @screen md {
                    @apply h-8 w-8;
                }
            }
        }

        section {
            @apply flex-col;

            .input-group {
                @apply flex flex-col;

                &:not(:first-of-type) {
                    @apply mt-2;
                }

                label {
                    @apply font-medium pl-1 uppercase text-gray-500;
                }

                .post-content {
                    @apply rounded bg-gray-100 text-gray-500 p-1 px-2 resize-none h-auto text-lg font-normal border-2 border-gray-300 flex;

                    min-height: theme("height.40");

                    .post-options {
                        @apply flex m-auto flex-row;

                        .post-option {
                            @apply flex flex-col items-center;

                            &:not(:first-of-type) {
                                @apply ml-4;
                            }

                            button {
                                @apply bg-gray-200 w-16 h-16 text-2xl border-gray-300 mb-1;

                                &:hover {
                                    @apply bg-gray-300;
                                }

                                &:focus {
                                    @apply bg-gray-300 border-gray-400;
                                }

                                &:active {
                                    @apply bg-gray-400 border-gray-500;
                                }
                            }

                            .label {
                                @apply text-sm;
                            }
                        }
                    }
                }

                input,
                textarea {
                    @apply rounded bg-gray-100 p-1 px-2 resize-none h-auto text-lg font-normal outline-none border-2 border-gray-300;
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
                @apply text-base font-medium tracking-tighter align-middle m-2 ml-1;

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
const maxCharCount = 50 // this is temporary

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
                20: 'warn',
                10: 'close',
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
            // if(this.postContent.trim().length > 50) {
            //     this.$refs['post-title'].classList.add('normal-text')
            // } else {
            //     this.$refs['post-title'].classList.remove('normal-text')
            // }
        }
    }
}
</script>
