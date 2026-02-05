<template>
  <section class="hero" id="home">
    <h1>开启孩子的编程探索之旅</h1>
    <p>课前预习 · 课后复习 · 趣味打字 · 在线编程 · YCL考级冲刺</p>
    <a href="#typing" class="cta-btn">开始学习</a>
  </section>
</template>

<script setup>
// Hero横幅组件 - 无需额外逻辑
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, #ff6b6b 100%);
  color: white;
  padding: 4rem 20px;
  text-align: center;
  border-radius: 0 0 50% 50% / 40px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.cta-btn {
  display: inline-block;
  background-color: white;
  color: var(--primary-color);
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: transform 0.2s;
}

.cta-btn:hover {
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 20px;
    border-radius: 0 0 30% 30% / 30px;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .hero p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.5rem;
  }

  .hero p {
    font-size: 0.9rem;
  }

  .cta-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
