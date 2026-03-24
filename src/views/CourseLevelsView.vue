<template>
  <div class="course-levels-view">
    <section class="page-header">
      <h1>课程体系</h1>
      <p>选择你的学习阶段</p>
    </section>

    <section class="stages">
      <div
        v-for="stage in visibleStages"
        :key="stage.id"
        class="stage-card"
        :class="{ locked: !stage.accessible }"
        :style="{ '--stage-color': stage.color }"
      >
        <router-link
          v-if="stage.accessible"
          :to="prefixedPath(`/levels/${stage.id}`)"
          class="stage-link"
        >
          <div class="stage-header">
            <h2>{{ stage.id }}</h2>
            <span class="stage-badge">{{ stage.levels.length }} 个 Level</span>
          </div>
          <h3>{{ stage.name }}</h3>
          <p>{{ stage.description }}</p>
          <div class="stage-levels">
            <span v-for="level in stage.levels" :key="level" class="level-tag">{{ level }}</span>
          </div>
        </router-link>
        <div v-else class="locked-content" @click="showLockedMessage(stage.name)">
          <div class="stage-header">
            <h2>{{ stage.id }}</h2>
            <span class="stage-badge">{{ stage.levels.length }} 个 Level</span>
            <span class="lock-icon">🔒</span>
          </div>
          <h3>{{ stage.name }}</h3>
          <p>{{ stage.description }}</p>
          <div class="stage-levels">
            <span v-for="level in stage.levels" :key="level" class="level-tag">{{ level }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { stageConfig } from '@/config/courses.config.js'
import { getCurrentPrefix, getAllowedStages, prefixedPath as buildPrefixedPath } from '@/composables/useRoutePrefix.js'

const router = useRouter()
const route = useRoute()

// 获取当前路由前缀
const prefix = computed(() => getCurrentPrefix(route))

// 获取允许访问的阶段
const allowedStages = computed(() => getAllowedStages(prefix.value))

// 课程阶段颜色配置
const stageColors = {
  PY1: '#ff9f43', // 橙色 - 入门阶段
  PY2: '#4facfe', // 蓝色 - 进阶阶段
  PY3: '#fd79a8'  // 玫粉色 - 高级阶段
}

// 从配置文件加载课程阶段数据
const baseStages = Object.values(stageConfig).map(stage => ({
  id: stage.id,
  name: stage.name,
  description: stage.description,
  color: stageColors[stage.id] || '#666',
  levels: stage.units
}))

// 根据前缀过滤可见阶段，并添加可访问状态
const visibleStages = computed(() => {
  return baseStages.map(stage => ({
    ...stage,
    accessible: allowedStages.value.includes(stage.id)
  }))
})

// 生成带前缀的路径
function prefixedPath(path) {
  return buildPrefixedPath(prefix.value, path)
}

// 显示锁定提示对话框
const showLockedMessage = (stageName) => {
  router.push({ path: prefixedPath('/locked'), query: { stage: stageName } })
}
</script>

<style scoped>
.course-levels-view {
  min-height: 100vh;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
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

.stages {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.stage-card {
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border-top: 4px solid var(--stage-color);
}

.stage-card:not(.locked):hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.stage-card.locked {
  opacity: 0.8;
  cursor: pointer;
}

.stage-card.locked:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.stage-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.locked-content {
  display: block;
}

.stage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.stage-header h2 {
  font-size: 1.8rem;
  color: var(--stage-color);
  margin: 0;
}

.stage-badge {
  background: var(--stage-color);
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.lock-icon {
  font-size: 1.2rem;
}

.stage-card h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
}

.stage-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 1.6em;
}

.stage-levels {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.level-tag {
  background: #f5f5f5;
  color: #666;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .stages {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .stage-card {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .course-levels-view {
    padding: 30px 15px;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .stages {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stage-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .course-levels-view {
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

  .stage-card {
    padding: 18px;
  }

  .stage-header h2 {
    font-size: 1.5rem;
  }

  .stage-card h3 {
    font-size: 1.1rem;
  }

  .level-tag {
    font-size: 0.75rem;
    padding: 3px 8px;
  }
}
</style>
