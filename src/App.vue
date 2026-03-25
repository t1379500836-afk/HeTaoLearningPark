<template>
  <div id="app">
    <Navigation />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
    <!-- 全局 Loading 动画覆盖层 -->
    <LoadingOverlay :is-loading="isLoading" :text="loadingText" />
  </div>
</template>

<script setup>
import Navigation from './components/shared/Navigation.vue'
import Footer from './components/shared/Footer.vue'
import LoadingOverlay from './components/shared/LoadingOverlay.vue'
import { useLoading } from './composables/useLoading.js'

const { isLoading, loadingText } = useLoading()
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
