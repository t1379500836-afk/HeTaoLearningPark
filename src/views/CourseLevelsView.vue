<template>
  <div class="course-levels-view">
    <section class="page-header">
      <h1>课程体系</h1>
      <p>选择你的学习阶段</p>
    </section>

    <section class="stages">
      <div
        v-for="stage in stagesWithUnlock"
        :key="stage.id"
        class="stage-card"
        :class="{ locked: !stage.unlocked }"
        :style="{ '--stage-color': stage.color }"
      >
        <router-link
          v-if="stage.unlocked"
          :to="`/levels/${stage.id}`"
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isStageUnlocked } from '@/config/stages.config.js'
// StageLocked component used via /locked route

const router = useRouter()

// 课程阶段配置 - 数据将从后端或配置文件加载
const baseStages = [
  {
    id: 'PY1',
    name: 'Python 入门基础',
    description: '',
    color: '#ff9f00',
    levels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6']
  },
  {
    id: 'PY2',
    name: 'Python 进阶编程',
    description: '',
    color: '#4facfe',
    levels: ['L7', 'L8', 'L9', 'L10', 'L11', 'L12']
  },
  {
    id: 'PY3',
    name: 'Python 高级应用',
    description: '',
    color: '#6c5ce7',
    levels: ['L13', 'L14', 'L15', 'L16', 'L17', 'L18']
  }
]

// 添加解锁状态
const stagesWithUnlock = baseStages.map(stage => ({
  ...stage,
  unlocked: isStageUnlocked(stage.id)
}))

// 显示锁定提示对话框
const showLockedMessage = (stageName) => {
  router.push({ path: '/locked', query: { stage: stageName } })
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
