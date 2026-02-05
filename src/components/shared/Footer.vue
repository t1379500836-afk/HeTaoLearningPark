<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        <span style="color: #fff;">核桃学习站</span>
      </div>
      <p class="slogan">让每个孩子爱上编程，在快乐中成长。</p>
      <div class="footer-links">
        <a href="#">关于我们</a>
        <a href="#levels">课程介绍</a>
        <a href="#practice">练习题库</a>
        <a href="#">联系客服</a>
      </div>
      <p class="copyright">&copy; {{ currentYear }} 核桃编程学习资料站. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}

.slogan {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-links a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

.copyright {
  font-size: 0.8rem;
  color: #666;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 30px 20px;
    margin-top: 40px;
  }

  .footer-links {
    gap: 15px;
  }

  .footer-links a {
    font-size: 0.9rem;
  }
}
</style>
