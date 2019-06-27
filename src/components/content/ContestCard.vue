<template>
    <div class="monthly-contest card dark">
        <div class="banner">
            <img src="@/assets/contest/2019june/bannerimg.jpg">
        </div>
        <div class="theme card dark">
            <span class="sub">June's Theme</span>
            <span class="title">Gaming</span>
        </div>
        <div class="info-container">
            <div class="contest-info">This month's theme is simply epic.</div>
            <footer>
                <app-button class="add-submission">Submit</app-button>
                <app-button class="vote">Vote</app-button>
            </footer>
        </div>
    </div>
</template>

<style lang="postcss">
.monthly-contest {
    @apply flex flex-col relative overflow-hidden;

    .banner {
        @apply flex overflow-hidden relative w-full;

        padding-bottom: 125px;

        img {
            @apply absolute inline-block m-auto w-auto h-auto min-w-full min-h-full;

            left: -9999px;
            right: -9999px;
            top: -9999px;
            bottom: -9999px;
        }
    }

    .theme {
        @apply bg-gray-900 text-gray-200 flex flex-col relative pb-3 pt-2 px-4 justify-center text-center mx-auto -mt-4 leading-none mb-2 mx-auto;

        .title {
            @apply text-2xl font-semibold;
        }

        .sub {
            @apply text-gray-500 uppercase text-sm font-medium;
        }
    }

    .info-container {
        @apply flex flex-col p-3 pt-0;

        .contest-info {
            @apply flex mx-auto;
        }

        footer {
            @apply flex flex-row w-full pt-2 justify-center;

            button {
                &:not(:first-of-type) {
                    @apply ml-2;
                }

                &.add-submission {
                }

                &.vote {
                    @apply bg-inherit text-inherit;
                }
            }
        }
    }
}
</style>

<script>
export default {
    
}
</script>
