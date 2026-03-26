<template>
  <div id="app">
    <Navigation />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
    <!-- 全局 Loading 动画覆盖层 -->
    <LoadingOverlay :is-loading="isLoading" :text="loadingText" />
    <!-- 口令验证弹窗 -->
    <AuthModal :show="needAuth" @success="onAuthSuccess" />
    <!-- 彩带庆祝动画（独立于弹窗） -->
    <CelebrationEffect :show="showCelebration" />
  </div>
</template>

<script setup>
import Navigation from './components/shared/Navigation.vue'
import Footer from './components/shared/Footer.vue'
import LoadingOverlay from './components/shared/LoadingOverlay.vue'
import AuthModal from './components/shared/AuthModal.vue'
import CelebrationEffect from './components/shared/CelebrationEffect.vue'
import { useLoading } from './composables/useLoading.js'
import { useAuth } from './composables/useAuth.js'
import { ref } from 'vue'

const { isLoading, loadingText } = useLoading()
const { needAuth, teacherName } = useAuth()

const showCelebration = ref(false)

// 验证成功回调
const onAuthSuccess = () => {
  // 显示彩带动画
  showCelebration.value = true
  console.log(`欢迎，${teacherName.value}的班级！`)

  // 4秒后隐藏彩带
  setTimeout(() => {
    showCelebration.value = false
  }, 4000)
}
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
