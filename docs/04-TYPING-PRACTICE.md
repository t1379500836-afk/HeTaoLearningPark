# 04-打字练习实现文档

> 本文档详细记录打字练习组件的实现方式、功能需求和代码位置。

---

## 目录

- [功能特性](#功能特性)
- [英文打字练习组件](#英文打字练习组件-typingpracticevue)
- [中文打字练习组件](#中文打字练习组件-chinesetypingpracticevue)
- [代码模板池](#代码模板池-typing-templates-pooljs)
- [使用示例](#使用示例)
- [技术实现](#技术实现)
- [内置关卡](#内置关卡)

---

## 功能特性

### 三种练习系统

| 组件 | 练习内容 | 数据来源 | 适用场景 |
|------|---------|----------|----------|
| **TypingPractice** | 单词模式 + 代码模式（英文） | lesson-data.js + typing-templates-pool.js | Python代码语法练习 |
| **ChineseTypingPractice** | 古诗 + 成语（中文） | chinese-typing-pool.js | 中文输入练习 |
| **代码模板池** | 难度分级代码模板 | typing-templates-pool.js | 随机代码练习 |

### 虚拟键盘交互

- **布局**: QWERTY 5行标准键盘
- **按键状态**:
  - 按下：橙色高亮 (#ff9f00)
  - 正确：绿色渐变
  - 错误：红色渐变
- **自动恢复**: 300ms
- **响应式**: 支持桌面/平板/手机多端适配

### 进度追踪

| 统计项 | 说明 | 单位 |
|--------|------|------|
| 字母/分钟 | `(正确字符数 / 用时秒数) × 60` | 英文打字 |
| 字/分钟 | `(正确字符数 / 用时秒数) × 60` | 中文打字 |
| 准确率 | `(正确字符数 / 总字符数) × 100%` | % |
| 用时 | `分:秒` 格式 | - |

### 排行榜系统

- 保存前5名成绩
- 支持跨练习持久化
- 成绩对比（与上次练习）
- 儿童友好版提示词

### 完成祝贺

- 随机鼓励话术
- 基于表现的祝贺标题
- 进步对比显示

---

## 英文打字练习组件 (TypingPractice.vue)

### 组件位置

**文件**: [components/course/TypingPractice.vue](../src/components/course/TypingPractice.vue)

### 双模式练习系统

| 模式 | 说明 | 数据来源 |
|------|------|----------|
| **单词模式** | 练习PY2课程单词（L7-1 至 L9-4） | lesson-data.js |
| **代码模式** | 练习Python代码模板语法，支持Tab缩进（4空格） | typing-templates-pool.js |

### 虚拟键盘交互

- **布局**: QWERTY 5行标准键盘
- **按键状态**:
  - 按下：橙色高亮 (#ff9f00)
  - 正确：绿色渐变
  - 错误：红色渐变
- **自动恢复**: 300ms

### 进度追踪

| 统计项 | 说明 |
|--------|------|
| 字母/分钟 | `(正确字符数 / 用时秒数) × 60` |
| 准确率 | `(正确字符数 / 总字符数) × 100%` |
| 用时 | `分:秒` 格式 |

### 排行榜系统

- 保存前5名成绩
- 支持跨练习持久化
- 成绩对比（与上次练习）
- 儿童友好版提示词

### 完成祝贺

- 随机鼓励话术
- 基于表现的祝贺标题

### Props 完整列表

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `id` | String | - | 组件唯一标识 |
| `mode` | `'word' \| 'code'` | `'word'` | 练习模式 |
| `customWords` | `Array` | `[]` | 自定义单词列表 |
| `customTemplates` | `Array` | `[]` | 自定义代码模板 |
| `showLevelSelector` | `Boolean` | `false` | 显示关卡选择器 |
| `autoFocus` | `Boolean` | `false` | 自动聚焦输入框 |
| `embedded` | `Boolean` | `false` | 嵌入式模式（隐藏排行榜） |
| `wordCount` | `Number` | `8` | 每轮练习的单词/模板数量 |
| `scoreHistory` | `Array` | `[]` | 外部管理的排行榜数据（持久化） |

### Events

| Event | 参数 | 说明 |
|-------|------|------|
| `complete` | 成绩对象 | 练习完成时触发 |
| `restart` | - | 用户点击"返回"或"重新开始"时触发 |
| `update:scoreHistory` | 新排行榜数据 | 排行榜数据更新时触发 |

---

## 中文打字练习组件 (ChineseTypingPractice.vue)

### 组件位置

**文件**: [components/course/ChineseTypingPractice.vue](../src/components/course/ChineseTypingPractice.vue)

### 功能说明

中文打字练习组件支持古诗和成语练习，采用整体匹配方式（而非逐字符匹配），适合学生练习中文输入。

### 练习内容类型

| 类型 | 数据格式 | 示例 |
|------|---------|------|
| **古诗** | `{ text: "静夜思床前明月光...", type: "poem", title: "静夜思", author: "李白" }` | 显示标题和作者 |
| **成语** | `{ text: "一心一意", type: "idiom" }` | 显示"成语"标签 |

### Props 完整列表

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `items` | `Array` | `[]` | 练习内容列表（古诗/成语对象） |
| `embedded` | `Boolean` | `false` | 嵌入式模式（隐藏排行榜） |
| `scoreHistory` | `Array` | `[]` | 外部管理的排行榜数据（持久化） |

### Events

| Event | 参数 | 说明 |
|-------|------|------|
| `complete` | 成绩对象 | 练习完成时触发 |
| `restart` | - | 用户点击"返回"或"再练一次"时触发 |
| `update:scoreHistory` | 新排行榜数据 | 排行榜数据更新时触发 |

### 界面特点

- **字符状态显示**: 已输入（灰色背景）、当前（黄色闪烁）、正确（绿色）、错误（红色删除线）
- **光标动画**: 闪烁光标指示当前输入位置
- **进度条**: 实时显示练习进度
- **儿童友好**: 鼓励语和祝贺界面

### 统计单位

- **速度**: 字/分钟
- **准确率**: 百分比
- **用时**: 分:秒格式

---

## 代码模板池 (typing-templates-pool.js)

### 文件位置

**文件**: [data/courses/PY2/typing-templates-pool.js](../src/data/courses/PY2/typing-templates-pool.js)

### 功能说明

代码模板池聚合了PY2阶段L7-L12所有课程的代码模板，按难度分级，提供随机抽取功能。

### 难度分级

| 难度 | 模板数量 | 说明 |
|------|---------|------|
| `easy` | 131条 | 单行代码、基础语法 |
| `medium` | 120条 | 多行代码、常见操作 |
| `hard` | 97条 | 复杂逻辑、嵌套结构 |

### 使用方式

```javascript
import { getRandomTemplates } from '@/data/courses/PY2/typing-templates-pool.js'

// 随机抽取8个基础难度模板
const templates = getRandomTemplates(8, 'easy')

// 随机抽取5个全部难度模板
const templates = getRandomTemplates(5, 'all')
```

### 模板内容示例

**基础难度 (easy)**:
- `for i in s:`
- `s.split(" ")`
- `max(scores)`
- `sum(numbers)`
- `{"name": "Tom"}`

**中等难度 (medium)**:
- `for char in s:\n    print(char)`
- `items = text.split(",")`
- `result = max(numbers)`
- `for key in dict:`

**高难度 (hard)**:
- `for i, char in enumerate(s):`
- `sorted([int(x) for x in text.split()])`
- `[n * 2 for n in range(1, 6) if n % 2 == 0]`
- `def func(x):\n    if x > 0:\n        return x`

### 覆盖课程范围

| 单元 | 课程数量 | 模板来源 |
|------|---------|---------|
| L7 | 4次课 | 遍历、split、max/min、排序、求和、机器人控制 |
| L8 | 4次课 | 字典、集合、while循环、列表操作、循环嵌套 |
| L9 | 4次课 | 二维列表、函数定义与调用 |
| L10 | 4次课 | 函数进阶（参数、返回值）、random模块 |
| L11 | 4次课 | Pygame游戏开发基础 |
| L12 | 4次课 | Pygame游戏开发进阶 |

---

## 使用示例

### 英文打字 - 单词模式

## 使用示例

### 单词模式 - 自定义关键词

```vue
<TypingPractice
  :custom-words="['print', 'input', 'if', 'else', 'while']"
  mode="word"
/>
```

### 代码模式 - 自定义模板

```vue
<TypingPractice
  :custom-templates="['print(\"Hello\")', 'age = 10', 'if x > 0:']"
  mode="code"
/>
```

### 显示关卡选择器

```vue
<TypingPractice
  :show-level-selector="true"
/>
```

### 课时内嵌模式

```vue
<TypingPractice
  :custom-words="['for', 'in', 'range']"
  mode="word"
  :embedded="true"
  :word-count="5"
/>
```

### 公共区域模式（带持久化排行榜）

```vue
<template>
  <TypingPractice
    :mode="mode"
    :custom-words="currentWords"
    :custom-templates="currentTemplates"
    :score-history="scoreHistory"
    @update:score-history="handleScoreHistoryUpdate"
    @restart="handleRestart"
  />
</template>

<script setup>
import { ref } from 'vue'

const scoreHistory = ref([])

function handleScoreHistoryUpdate(newHistory) {
  scoreHistory.value = newHistory
  // 持久化到 localStorage
  localStorage.setItem('typingScores', JSON.stringify(newHistory))
}

function handleRestart() {
  // 刷新题目
  refreshContent()
}
</script>
```

---

## 技术实现

### 关键代码位置

| 功能 | 文件位置 | 说明 |
|------|----------|------|
| 键盘布局定义 | [TypingPractice.vue:443-449](../src/components/course/TypingPractice.vue#L443-L449) | 5行QWERTY布局 |
| 按键反馈函数 | [TypingPractice.vue:666-679](../src/components/course/TypingPractice.vue#L666-L679) | 高亮状态控制 |
| Tab键处理 | [TypingPractice.vue:776-812](../src/components/course/TypingPractice.vue#L776-L812) | 4空格缩进 |
| 统计计算 | [TypingPractice.vue:516-528](../src/components/course/TypingPractice.vue#L516-L528) | 速度/准确率 |
| 成绩对比 | [TypingPractice.vue:576-641](../src/components/course/TypingPractice.vue#L576-L641) | 进步对比 |
| 排行榜持久化 | [TypingPractice.vue:438,860](../src/components/course/TypingPractice.vue#L438) | emit同步 |

### 按键检测与反馈

```javascript
// 监听键盘输入
@keydown="handleKeyDown"

// 按键到键盘布局的映射
mapKeyToDisplay(key) {
  // 返回按键在键盘布局中的位置
}

// 显示按键反馈
showKeyFeedback(key, type) {
  // type: 'press', 'correct', 'error'
  // 300ms后自动恢复
}
```

### 统计计算公式

```javascript
// 字母/分钟
lettersPerMinute = correctChars / (elapsedSeconds / 60)

// 准确率
accuracy = (correctChars / (correctChars + errorChars)) * 100

// 计时显示
timerDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`
```

### 排行榜持久化

- 父组件（TypingView）管理 `scoreHistory` 状态
- 组件初始化时从 props 接收历史数据
- 完成练习时通过 `update:scoreHistory` emit 同步更新
- 内容变化时使用 `watch` 监听并重置练习（保留排行榜）

---

## 内置关卡

### 课程内嵌关卡

| 关卡名称 | 练习内容 | 类型 |
|---------|---------|------|
| L7-1 单词 | split, encode, decode, print... | word |
| L7-2 单词 | weather, float, max, index... | word |
| L7-3 单词 | sum, sort, player, record... | word |
| L7-4 单词 | initial, power, claw, detect... | word |
| L8-1 单词 | power, note, dict, get... | word |
| L8-2 单词 | set, add, insert, score... | word |
| L8-3 单词 | line, sensor, wait, time... | word |
| L8-4 单词 | reverse, count, sorted, slice... | word |
| L7-1: 遍历与split | for i in s:, s.split(" ")... | code |
| L7-2: 查找与列表 | max(scores), min(numbers)... | code |
| L7-3: 排序与求和 | sum(numbers), list.sort()... | code |
| L8-1: 字典基础 | {"name": "Tom"}, dict.get()... | code |
| L8-2: 列表操作 | list.append(), list.insert()... | code |
| L8-3: 循环结构 | while x > 0:, for i in range()... | code |
| L8-4: 列表高级 | list.reverse(), sorted(list)... | code |

### 公共区域打字练习 (`/typing`)

- **单词模式**: 从8个课程关卡中随机选题
- **代码模式**: 从模板池随机抽取（支持难度选择：全部/基础/进阶/挑战）
- 点击"返回"或"重新开始"后自动刷新题目
- 排行榜数据持久化（使用props传递和emit同步）

---

## 响应式设计

### 虚拟键盘尺寸

| 屏幕宽度 | 键盘状态 | 按键尺寸 |
|---------|---------|---------|
| ≥768px | 完整5行 | 40×40px |
| ≤768px | 简化布局 | 24-32px |
| ≤480px | 最小化 | 20-28px |

### 移动端优化

- 容器支持水平滚动
- Space键弹性伸缩
- 按键添加 `max-width` 限制

---

## 相关文档

- [02-功能需求](./02-FUNCTIONALITY.md) - 功能清单、已知限制
- [03-前端布局](./03-FRONTEND-LAYOUT.md) - 虚拟键盘布局、响应式设计
- [05-课程资料](./05-COURSE-MATERIALS.md) - 课程资料提取、命名规范
