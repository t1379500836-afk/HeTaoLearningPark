<template>
  <div class="typing-view">
    <section class="page-header">
      <h1>打字练习</h1>
      <p>提高打字速度和准确率，为编程学习打下基础</p>
    </section>

    <TypingPractice />
  </div>
</template>

<script setup>
import TypingPractice from '@/components/course/TypingPractice.vue'
</script>

<style scoped>
.typing-view {
  min-height: 100vh;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 1.1rem;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
