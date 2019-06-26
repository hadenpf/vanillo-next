<template>
    <div class="card trending-list">
        <span class="card-title">Trending</span>
        <template v-for="(item, index) in items">
            <div class="trending-item" :key="index">
                <span class="item-title">{{ item.title }}</span>
                <span class="item-description">{{ item.description }}</span>
                <span class="item-promoted" v-if="item.promoted">
                    <i class="fas fa-arrow-alt-circle-up"></i>
                    <span class="promoter-info">
                        Promoted by
                        <span class="promoter-name">{{ item.promoter }}</span>
                    </span>
                </span>
            </div>
        </template>
    </div>
</template>

<style lang="postcss">
.trending-list {
    @apply p-3 flex flex-col;

    .card-title {
        @apply text-2xl font-bold pb-2 pl-1 inline-block;
    }

    .trending-item {
        @apply p-3 bg-gray-100 rounded leading-tight flex flex-col;

        transition: all 0.125s ease;

        &:hover {
            @apply bg-gray-200 cursor-pointer;
        }

        &:active,
        &:focus {
            @apply bg-gray-300;
        }

        &:not(:first-of-type) {
            @apply mt-2;
        }

        .item-title {
            @apply flex text-lg font-bold text-blue-700;
        }

        .item-description {
            @apply text-sm text-gray-800;
        }

        .item-promoted {
            @apply mt-1 text-xs text-gray-600 font-medium;

            i {
                @apply text-blue-600;

                margin-right: calc(theme("spacing.1") / 2);
            }
        }
    }
}
</style>

<script>
export default {
    data: function() {
        return {
            items: [
                {
                    title: '#EpicMode',
                    description: 'Check out the hottest movie of the summer, Epic Mode.',
                    promoted: true,
                    promoter: 'Contoso LLC.'
                },
                {
                    title: '#RIPEtika',
                    description: 'YouTuber Etika was found deceased.'
                },
                {
                    title: 'SECRET PLATFORM',
                    description: 'SECRET PLATFORM has been re-released and is better than ever!'
                },
                {
                    title: 'Etika',
                    description: 'YouTuber Etika was found deceased.'
                },
                {
                    title: 'Gaming',
                    description: 'Gaming has become the most posted-about topic on SECRET PLATFORM.'
                }
            ]
        }
    }
}
</script>
