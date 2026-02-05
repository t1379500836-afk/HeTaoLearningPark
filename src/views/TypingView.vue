<template>
  <div class="typing-view">
    <section class="page-header">
      <h1>打字练习</h1>
      <p>提高打字速度和准确率，为编程学习打下基础</p>
      <p v-if="mode === 'word'" class="current-level">
        当前练习：{{ currentWordLevel.id }}
      </p>
    </section>

    <!-- 模式切换 -->
    <div class="mode-selector">
      <button
        :class="{ active: mode === 'word' }"
        @click="switchMode('word')"
        class="selector-btn"
      >
        📝 单词练习
      </button>
      <button
        :class="{ active: mode === 'code' }"
        @click="switchMode('code')"
        class="selector-btn"
      >
        💻 代码练习
      </button>
    </div>

    <!-- 难度选择（代码模式） -->
    <div v-if="mode === 'code'" class="difficulty-selector">
      <button
        v-for="level in difficultyLevels"
        :key="level.value"
        :class="{ active: difficulty === level.value }"
        @click="setDifficulty(level.value)"
        class="difficulty-btn"
      >
        {{ level.emoji }} {{ level.label }}
      </button>
    </div>

    <!-- 打字练习组件 -->
    <TypingPractice
      :mode="mode"
      :custom-words="currentWords"
      :custom-templates="currentTemplates"
      :score-history="scoreHistory"
      @update:score-history="handleScoreHistoryUpdate"
      @complete="handleComplete"
      @restart="handleRestart"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import TypingPractice from '@/components/course/TypingPractice.vue'
import { getRandomTemplates } from '@/data/courses/PY2/typing-templates-pool.js'

// 课程单词关卡数据（PY2 L7-L8单元）
const wordLevels = [
  { id: 'L7-1', title: 'L7-1: split, encode, decode, print', words: ['split', 'encode', 'decode', 'print', 'string', 'traversal', 'hello', 'world'] },
  { id: 'L7-2', title: 'L7-2: weather, float, max, index', words: ['weather', 'float', 'maximum', 'minimum', 'index', 'find', 'number', 'list'] },
  { id: 'L7-3', title: 'L7-3: sum, sort, player, record', words: ['sum', 'sort', 'player', 'record', 'score', 'game', 'add', 'total'] },
  { id: 'L7-4', title: 'L7-4: initial, power, claw, detect', words: ['initial', 'power', 'claw', 'detect', 'robot', 'action', 'move', 'sensor'] },
  { id: 'L8-1', title: 'L8-1: power, note, dict, get', words: ['power', 'note', 'dict', 'dictionary', 'value', 'key', 'pair', 'data'] },
  { id: 'L8-2', title: 'L8-2: set, add, in, score', words: ['set', 'add', 'insert', 'score', 'append', 'remove', 'pop', 'count'] },
  { id: 'L8-3', title: 'L8-3: line, sensor, wait, time', words: ['line', 'sensor', 'wait', 'time', 'while', 'loop', 'break', 'continue'] },
  { id: 'L8-4', title: 'L8-4: reverse, count, sorted, slice', words: ['reverse', 'count', 'sorted', 'slice', 'order', 'range', 'step', 'index'] }
]

// 使用课程单词关卡（移除基础指法关卡）
const allWordLevels = wordLevels

// 练习模式
const mode = ref('word')  // 'word' | 'code'
const difficulty = ref('all')  // 'all' | 'easy' | 'medium' | 'hard'
const currentWordLevel = ref({ id: '', title: '' })  // 当前单词关卡
const currentWords = ref([])  // 当前使用的单词列表
const scoreHistory = ref([])  // 排行榜数据（持久化）

// 难度选项
const difficultyLevels = [
  { value: 'all', label: '全部', emoji: '📚' },
  { value: 'easy', label: '基础', emoji: '🟢' },
  { value: 'medium', label: '进阶', emoji: '🟡' },
  { value: 'hard', label: '挑战', emoji: '🔴' }
]

// 每次练习抽取5个模板
const practiceCount = 5

// 当前使用的代码模板
const currentTemplates = ref([])
const lastLevelIndex = ref(-1)  // 上次选择的关卡索引，避免连续重复

// Fisher-Yates 洗牌算法 - 随机打乱数组
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// 随机选择一个单词关卡（确保不与上次相同，并打乱单词顺序）
const pickRandomWordLevel = () => {
  let randomIndex
  // 如果只有一个关卡，直接使用
  if (allWordLevels.length === 1) {
    randomIndex = 0
  } else {
    // 确保不选择与上次相同的关卡
    do {
      randomIndex = Math.floor(Math.random() * allWordLevels.length)
    } while (randomIndex === lastLevelIndex.value)
  }

  lastLevelIndex.value = randomIndex
  const selectedLevel = allWordLevels[randomIndex]
  currentWordLevel.value = selectedLevel
  // 打乱单词顺序，让每次练习都不同
  currentWords.value = shuffleArray(selectedLevel.words)
}

// 刷新内容
const refreshContent = () => {
  if (mode.value === 'code') {
    // 代码模式：从模板池随机抽取
    currentTemplates.value = getRandomTemplates(practiceCount, difficulty.value)
    currentWords.value = []
    currentWordLevel.value = { title: '' }
  } else {
    // 单词模式：随机选择一个关卡
    pickRandomWordLevel()
    currentTemplates.value = []
  }
}

// 设置难度
const setDifficulty = (level) => {
  difficulty.value = level
  refreshContent()
}

// 切换模式
const switchMode = (newMode) => {
  if (mode.value !== newMode) {
    mode.value = newMode
    refreshContent()
  }
}

// 处理练习完成事件
const handleComplete = () => {
  // 练习完成后，显示完成报告
  // 用户点击"返回"或"重新开始"后，会触发 handleRestart
}

// 处理排行榜数据更新
const handleScoreHistoryUpdate = (newHistory) => {
  scoreHistory.value = newHistory
}

// 处理重新开始/返回事件（用户点击按钮后刷新内容）
const handleRestart = () => {
  // 从课程题库中随机选择新的内容
  refreshContent()
}

// 监听模式变化
watch(mode, () => {
  refreshContent()
})

// 初始化
refreshContent()
</script>

<style scoped>
.typing-view {
  min-height: 100vh;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
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

.current-level {
  margin-top: 15px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 2px solid #f39c12;
  border-radius: 24px;
  color: #d68910;
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
}

/* 模式选择器 */
.mode-selector {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.selector-btn {
  padding: 12px 24px;
  border: 2px solid #e0e0e0;
  background: #fff;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.selector-btn:hover {
  border-color: var(--primary-color);
  background: #fff8f0;
}

.selector-btn.active {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: #fff;
}

/* 难度选择器 */
.difficulty-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.difficulty-btn {
  padding: 10px 18px;
  border: 2px solid #e0e0e0;
  background: #fff;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.95rem;
}

.difficulty-btn:hover {
  border-color: var(--primary-color);
  background: #fff8f0;
}

.difficulty-btn.active {
  border-color: var(--primary-color);
  background: var(--primary-color);
  color: #fff;
}

/* Responsive */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .mode-selector {
    gap: 10px;
  }

  .selector-btn {
    padding: 10px 18px;
    font-size: 0.9rem;
  }

  .difficulty-selector {
    gap: 8px;
  }

  .difficulty-btn {
    padding: 8px 14px;
    font-size: 0.85rem;
  }

  .current-level {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>
