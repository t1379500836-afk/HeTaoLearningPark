<template>
  <div class="stage-view">
    <!-- StageLocked content shown when stage is not unlocked -->
    <div v-if="!isUnlocked" class="stage-locked">
      <div class="locked-icon">🔒</div>
      <h2>课程未解锁</h2>
      <p>您当前的学习阶段尚未解锁 {{ stageInfo.name }}。请完成当前阶段学习后再继续。</p>
      <button @click="goToLevels" class="back-btn">
        返回课程体系
      </button>
    </div>

    <!-- Normal content when stage is unlocked -->
    <template v-else>
    <section class="page-header">
      <div class="breadcrumb">
        <router-link to="/levels">课程体系</router-link>
        <span class="separator">/</span>
        <span class="current">{{ stageInfo.name }}</span>
      </div>
      <h1>{{ stageInfo.name }}</h1>
      <p>{{ stageInfo.description }}</p>
    </section>

    <section class="levels">
      <router-link
        v-for="level in stageInfo.levels"
        :key="level.id"
        :to="`/levels/${stage}/${level.id}`"
        class="level-card"
      >
        <div class="level-icon">{{ level.icon }}</div>
        <h3>{{ level.name }}</h3>
        <p>{{ level.description }}</p>
        <div class="level-lessons">
          <span v-for="lesson in level.lessons" :key="lesson" class="lesson-tag">{{ lesson }}</span>
        </div>
      </router-link>
    </section>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { isStageUnlocked } from '@/config/stages.config.js'

const route = useRoute()
const router = useRouter()
const stage = computed(() => route.params.stage)

// 课程阶段数据框架 - 数据将从配置文件加载
const stageData = {
  PY1: {
    name: 'Python 入门基础',
    description: '学习Python基础知识，掌握编程入门技能',
    levels: [
      { id: 'L1', name: 'Level 1', icon: '1️⃣', description: '基础语法入门', lessons: ['L1-1', 'L1-2', 'L1-3', 'L1-4'] },
      { id: 'L2', name: 'Level 2', icon: '2️⃣', description: '变量与数据类型', lessons: ['L2-1', 'L2-2', 'L2-3', 'L2-4'] },
      { id: 'L3', name: 'Level 3', icon: '3️⃣', description: '条件判断', lessons: ['L3-1', 'L3-2', 'L3-3', 'L3-4'] },
      { id: 'L4', name: 'Level 4', icon: '4️⃣', description: '循环结构', lessons: ['L4-1', 'L4-2', 'L4-3', 'L4-4'] },
      { id: 'L5', name: 'Level 5', icon: '5️⃣', description: '列表与字符串', lessons: ['L5-1', 'L5-2', 'L5-3', 'L5-4'] },
      { id: 'L6', name: 'Level 6', icon: '6️⃣', description: '综合练习', lessons: ['L6-1', 'L6-2', 'L6-3', 'L6-4'] }
    ]
  },
  PY2: {
    name: 'Python 进阶编程',
    description: '深入学习Python进阶概念，提升编程能力',
    levels: [
      { id: 'L7', name: 'Level 7', icon: '7️⃣', description: '字符串与列表操作', lessons: ['L7-1', 'L7-2', 'L7-3', 'L7-4'] },
      { id: 'L8', name: 'Level 8', icon: '8️⃣', description: '字典、集合与文本处理', lessons: ['L8-1', 'L8-2', 'L8-3', 'L8-4'] },
      { id: 'L9', name: 'Level 9', icon: '9️⃣', description: '循环控制与枚举法', lessons: ['L9-1', 'L9-2', 'L9-3', 'L9-4'] },
      { id: 'L10', name: 'Level 10', icon: '🔟', description: '二维列表', lessons: ['L10-1', 'L10-2', 'L10-3'] },
      { id: 'L11', name: 'Level 11', icon: '1️⃣1️⃣', description: '函数基础', lessons: ['L11-1', 'L11-2', 'L11-4'] },
      { id: 'L12', name: 'Level 12', icon: '1️⃣2️⃣', description: 'Pygame 游戏开发', lessons: ['L12-1', 'L12-2', 'L12-3', 'L12-4'] }
    ]
  },
  PY3: {
    name: 'Python 高级应用',
    description: '掌握Python高级特性，进行实战项目开发',
    levels: [
      { id: 'L13', name: 'Level 13', icon: '1️⃣3️⃣', description: '面向对象编程', lessons: ['L13-1', 'L13-2', 'L13-3', 'L13-4'] },
      { id: 'L14', name: 'Level 14', icon: '1️⃣4️⃣', description: '类与对象进阶', lessons: ['L14-1', 'L14-2', 'L14-3', 'L14-4'] },
      { id: 'L15', name: 'Level 15', icon: '1️⃣5️⃣', description: '常用算法', lessons: ['L15-1', 'L15-2', 'L15-3', 'L15-4'] },
      { id: 'L16', name: 'Level 16', icon: '1️⃣6️⃣', description: '数据结构', lessons: ['L16-1', 'L16-2', 'L16-3', 'L16-4'] },
      { id: 'L17', name: 'Level 17', icon: '1️⃣7️⃣', description: '项目实战（上）', lessons: ['L17-1', 'L17-2', 'L17-3', 'L17-4'] },
      { id: 'L18', name: 'Level 18', icon: '1️⃣8️⃣', description: '项目实战（下）', lessons: ['L18-1', 'L18-2', 'L18-3', 'L18-4'] }
    ]
  }
}

const stageInfo = computed(() => stageData[stage.value] || { name: '', description: '', levels: [] })

// Check if current stage is unlocked
const isUnlocked = computed(() => isStageUnlocked(stage.value))

// Navigate back to course levels page
function goToLevels() {
  router.push('/levels')
}
</script>

<style scoped>
.stage-locked {
  text-align: center;
  padding: 80px 20px;
  max-width: 600px;
  margin: 40px auto;
}

.locked-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.stage-locked h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
}

.stage-locked p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.back-btn {
  background: var(--primary-color);
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.3s;
}

.back-btn:hover {
  opacity: 0.9;
}

.stage-view {
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

.levels {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.level-card {
  background: #fff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

.level-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.level-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.level-card h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 8px;
  min-height: 1.3em;
}

.level-card p {
  color: #666;
  margin-bottom: 20px;
  min-height: 1.6em;
}

.level-lessons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.lesson-tag {
  background: #f5f5f5;
  color: #666;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .levels {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .level-card {
    padding: 25px;
  }
}

@media (max-width: 768px) {
  .stage-view {
    padding: 30px 15px;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .levels {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .level-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .stage-view {
    padding: 20px 12px;
  }

  .page-header {
    margin-bottom: 30px;
  }

  .page-header h1 {
    font-size: 1.5rem;
  }

  .level-icon {
    font-size: 2.5rem;
  }

  .level-card h3 {
    font-size: 1.1rem;
  }

  .lesson-tag {
    font-size: 0.75rem;
    padding: 3px 8px;
  }

  /* 触控优化：返回按钮 */
  .back-btn {
    padding: 12px 24px;
    min-height: var(--touch-target-min);
  }
}
</style>
