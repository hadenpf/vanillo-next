<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  body {
    @apply bg-gray-100
  }
</style>