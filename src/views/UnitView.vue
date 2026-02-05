<template>
  <div class="level-view">
    <section class="page-header">
      <div class="breadcrumb">
        <router-link to="/levels">课程体系</router-link>
        <span class="separator">/</span>
        <router-link :to="`/levels/${stage}`">{{ stageInfo.name }}</router-link>
        <span class="separator">/</span>
        <span class="current">{{ levelInfo.name }}</span>
      </div>
      <h1>{{ levelInfo.name }}</h1>
      <p>{{ levelInfo.description }}</p>
    </section>

    <section class="lessons">
      <router-link
        v-for="lesson in lessons"
        :key="lesson.id"
        :to="`/lesson/${stage}/${level}/${lesson.id}`"
        class="lesson-card"
      >
        <div class="lesson-number">{{ lesson.id }}</div>
        <h3>{{ lesson.title }}</h3>
        <p>{{ lesson.description }}</p>
        <div class="lesson-meta">
          <span class="meta-item">📖 知识点</span>
          <span class="meta-item">⌨️ 打字练习</span>
          <span class="meta-item">✏️ 课后习题</span>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getStageName, getUnitInfo } from '@/config/courses.config.js'

const route = useRoute()
const stage = computed(() => route.params.stage)
const level = computed(() => route.params.unit)

// 加载单元内的课程数据
const lessons = ref([])
const isLoading = ref(true)

async function loadLessons() {
  const unitId = level.value
  const lessonIds = ['1', '2', '3', '4'].map(num => `${unitId}-${num}`)

  const loadedLessons = []

  for (const lessonId of lessonIds) {
    try {
      // 使用相对路径而不是 @ 别名
      const module = await import(
        `../data/courses/${stage.value}/lessons/${lessonId}/lesson-data.js`
      )
      const meta = module.lessonMeta
      loadedLessons.push({
        id: lessonId,
        title: meta.title,
        description: meta.subtitle
      })
    } catch (error) {
      // 如果 lesson-data.js 不存在，使用默认值
      loadedLessons.push({
        id: lessonId,
        title: `课时 ${lessonId.split('-')[1]}`,
        description: '知识点讲解、打字练习与课后习题'
      })
    }
  }

  lessons.value = loadedLessons
  isLoading.value = false
}

onMounted(() => {
  loadLessons()
})

const stageInfo = computed(() => ({ name: getStageName(stage.value) }))
const levelInfo = computed(() => getUnitInfo(level.value))
</script>

<style scoped>
.level-view {
  min-height: 100vh;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: var(--primary-color);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb .separator {
  color: #999;
}

.breadcrumb .current {
  color: #666;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 1.1rem;
  color: #666;
  min-height: 1.6em;
}

.lessons {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
}

.lesson-card {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.lesson-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.lesson-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.lesson-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
  min-height: 1.2em;
}

.lesson-card p {
  color: #666;
  margin-bottom: 15px;
  min-height: 1.6em;
}

.lesson-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
}

.meta-item {
  background: #f5f5f5;
  color: #666;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .lesson-card {
    padding: 22px;
  }
}

@media (max-width: 768px) {
  .level-view {
    padding: 30px 15px;
  }

  .page-header {
    margin-bottom: 40px;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .lesson-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .level-view {
    padding: 20px 12px;
  }

  .page-header {
    margin-bottom: 30px;
  }

  .page-header h1 {
    font-size: 1.5rem;
  }

  .page-header p {
    font-size: 0.9rem;
  }

  .lesson-card {
    padding: 18px;
  }

  .lesson-number {
    font-size: 1.3rem;
  }

  .lesson-card h3 {
    font-size: 1.1rem;
  }

  .lesson-card p {
    font-size: 0.9rem;
  }

  .meta-item {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
}
</style>
