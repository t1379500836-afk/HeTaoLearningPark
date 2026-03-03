<template>
  <div class="home-view">
    <HeroSection />

    <!-- 快速入口卡片 -->
    <section class="quick-access">
      <h2>开始学习</h2>
      <div class="cards">
        <router-link to="/levels" class="card">
          <div class="card-icon">📚</div>
          <h3>课程体系</h3>
          <p>选择你的学习阶段</p>
        </router-link>
        <router-link to="/typing" class="card">
          <div class="card-icon">⌨️</div>
          <h3>打字练习</h3>
          <p>提高打字速度和准确率</p>
        </router-link>
        <router-link to="/python" class="card">
          <div class="card-icon">🐍</div>
          <h3>Python IDE</h3>
          <p>在线 Python 代码编辑器</p>
        </router-link>
        <router-link to="/ycl" class="card">
          <div class="card-icon">🏆</div>
          <h3>YCL 专区</h3>
          <p>考级冲刺练习</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/shared/HeroSection.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

.quick-access {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.quick-access h2 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.card h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
}

.card p {
  color: #666;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .card {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .quick-access {
    padding: 40px 20px;
  }

  .quick-access h2 {
    font-size: 1.5rem;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .quick-access {
    padding: 30px 15px;
  }

  .quick-access h2 {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .card {
    padding: 20px;
  }

  .card-icon {
    font-size: 2.5rem;
  }

  .card h3 {
    font-size: 1.1rem;
  }

  .card p {
    font-size: 0.9rem;
  }
}
</style>
