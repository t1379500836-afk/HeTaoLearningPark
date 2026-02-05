<template>
  <div class="ycl-zone-view">
    <section class="page-header">
      <h1>YCL 考级专区</h1>
      <p>YCL 考级冲刺练习，助力考试通关</p>
    </section>

    <section class="ycl-content">
      <div class="placeholder">
        <p>YCL 专区开发中...</p>
        <router-link to="/levels" class="btn">去课程学习</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.ycl-zone-view {
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

.ycl-content {
  max-width: 800px;
  margin: 0 auto;
}

.placeholder {
  background: #fff;
  border-radius: 12px;
  padding: 60px 20px;
  text-align: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.placeholder p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.btn:hover {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
