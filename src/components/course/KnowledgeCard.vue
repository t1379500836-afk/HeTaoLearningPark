<template>
  <div class="knowledge-card">
    <!-- 卡片头部 -->
    <div class="card-header">
      <span class="emoji">{{ kp.emoji }}</span>
      <h3 class="title">{{ kp.title }}</h3>
      <DifficultyBadge :level="currentLevel" />
    </div>

    <!-- 概述 -->
    <p class="summary">{{ kp.summary }}</p>

    <!-- 难度选择器 -->
    <div class="level-selector">
      <button
        v-for="level in levels"
        :key="level.value"
        :class="{ active: currentLevel === level.value }"
        @click="currentLevel = level.value"
        class="level-btn"
      >
        {{ level.emoji }} {{ level.label }}
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="content-area">
      <!-- 故事/场景 -->
      <div class="section story-section">
        <h4>📖 故事时间</h4>
        <p>{{ content.story }}</p>
      </div>

      <!-- 概念讲解 -->
      <div class="section concept-section">
        <h4>💡 核心概念</h4>
        <p>{{ content.concept }}</p>
      </div>

      <!-- 语法 -->
      <div class="section syntax-section">
        <h4>🔧 语法格式</h4>
        <pre class="syntax-code">{{ content.syntax }}</pre>
      </div>

      <!-- 示例 -->
      <div class="section example-section">
        <h4>📝 代码示例：{{ content.example.title }}</h4>
        <div class="code-block">
          <pre><code>{{ content.example.code }}</code></pre>
          <button @click="copyCode" class="copy-btn" title="复制代码">
            {{ copied ? '✓ 已复制' : '📋 复制' }}
          </button>
        </div>
        <div class="output-box">
          <span class="output-label">输出：</span>
          <code>{{ content.example.output }}</code>
        </div>
        <p class="explanation">{{ content.example.explanation }}</p>
      </div>

      <!-- 小练习 -->
      <div class="section practice-section">
        <h4>🎯 小练习</h4>
        <ul class="practice-list">
          <li v-for="(item, index) in content.practice" :key="index">
            <span class="question">{{ item.question }}</span>
            <span class="answer" @click="showAnswer(index)">
              {{ revealedAnswers[index] ? item.answer : '点击查看答案 ▶' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DifficultyBadge from './DifficultyBadge.vue'

const props = defineProps({
  kp: {
    type: Object,
    required: true
  },
  defaultLevel: {
    type: String,
    default: 'easy'
  }
})

const currentLevel = ref(props.defaultLevel)
const copied = ref(false)
const revealedAnswers = ref({})

const levels = [
  { value: 'easy', label: '1-2年级', emoji: '🟢' },
  { value: 'medium', label: '3-4年级', emoji: '🟡' },
  { value: 'hard', label: '5-6年级', emoji: '🔴' }
]

const content = computed(() => {
  return props.kp[currentLevel.value] || props.kp.easy || {}
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(content.value.example.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const showAnswer = (index) => {
  revealedAnswers.value[index] = !revealedAnswers.value[index]
}
</script>

<style scoped>
.knowledge-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.emoji {
  font-size: 2rem;
}

.title {
  font-size: 1.3rem;
  color: #333;
  margin: 0;
  flex: 1;
}

.summary {
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.level-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.level-btn {
  padding: 8px 16px;
  border: 2px solid #e0e0e0;
  background: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.level-btn:hover {
  border-color: var(--primary-color);
  background: #fff8f0;
}

.level-btn.active {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: #fff;
}

.content-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section {
  background: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
}

.section h4 {
  margin: 0 0 12px 0;
  font-size: 1rem;
  color: #444;
}

.section p {
  margin: 0;
  line-height: 1.7;
  color: #555;
}

.syntax-code {
  background: #2d3436;
  color: #a8b3c1;
  padding: 12px;
  border-radius: 8px;
  margin: 0;
  font-size: 0.9rem;
  overflow-x: auto;
}

.code-block {
  position: relative;
  background: #2d3436;
  border-radius: 8px;
  overflow: hidden;
}

.code-block pre {
  margin: 0;
  padding: 16px;
  color: #a8b3c1;
  overflow-x: auto;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.3s;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.output-box {
  background: #1a1d21;
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.output-label {
  color: #888;
  font-size: 0.85rem;
}

.output-box code {
  color: #61dafb;
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
}

.explanation {
  margin-top: 12px;
  padding: 12px;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
  font-size: 0.9rem;
  color: #1565c0;
}

.practice-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.practice-list li {
  background: #fff;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.practice-list .question {
  color: #333;
  flex: 1;
}

.practice-list .answer {
  color: var(--primary-color);
  cursor: pointer;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.3s;
}

.practice-list .answer:hover {
  color: #e65100;
}

@media (max-width: 768px) {
  .knowledge-card {
    padding: 20px;
  }

  .card-header {
    flex-wrap: wrap;
  }

  .level-selector {
    gap: 8px;
  }

  .level-btn {
    padding: 6px 12px;
    font-size: 0.85rem;
  }

  .practice-list li {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
