<template>
    <div class="card trending-list">
        <span class="card-title">Trending for you</span>
        <router-link
            v-for="(item, index) in items"
            :to="{ name: 'search', query: { query: item.title } }"
            class="trending-item"
            :key="index"
        >
            <span class="item-title">{{ item.title }}</span>
            <span class="item-description" v-if="item.description" v-text="item.description"/>
            <span class="item-description" v-else>{{ item.postCount.toLocaleString() }} posts</span>
            <span class="item-promoted" v-if="item.promoted">
                <i class="fas fa-arrow-alt-circle-up"></i>
                <span class="promoter-info">
                    Promoted by
                    <span class="promoter-name">{{ item.promoter }}</span>
                </span>
            </span>
        </router-link>
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
                    postCount: 203456
                },
                {
                    title: 'Keemstar',
                    postCount: 25290
                },
                {
                    title: '#FreeGamer',
                    postCount: 2345
                },
                {
                    title: 'Gaming',
                    description: 'Gaming has become the most posted-about topic on [redacted].'
                }
            ]
        }
    }
}
</script>
