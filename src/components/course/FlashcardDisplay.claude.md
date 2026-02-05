# FlashcardDisplay.vue - 单词卡展示组件

## 功能特性

- **翻转卡片**：点击卡片翻转查看中文释义
- **TTS发音**：使用有道 TTS API 播放单词发音
- **难度筛选**：按 easy/medium/hard 筛选单词
- **打字练习入口**：滚动到下方打字练习区域
- **视觉反馈**：播放中按钮动画效果

---

## Props API

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `vocab` | Array | `[]` | 单词卡数据数组 |
| `typingWords` | Object | `{}` | 打字练习单词对象（按难度分组） |

### vocab 数据结构

```javascript
{
  word: 'split',              // 单词
  pronunciation: '[split]',   // 音标
  meaning: '分割；分裂',      // 中文释义
  level: 'easy',              // 难度：easy/medium/hard
  example: 'The big apple...',           // 例句
  exampleTranslation: '这个大苹果...'     // 例句翻译
}
```

### typingWords 数据结构

```javascript
{
  easy: ['split', 'join', ...],
  medium: ['append', 'extend', ...],
  hard: ['recursive', 'iterate', ...]
}
```

---

## Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `scroll-to-typing` | - | 滚动到打字练习区域 |

---

## 难度级别

| 级别 | Emoji | 标签 | CSS类 |
|------|-------|------|-------|
| all | 📚 | 全部 | - |
| easy | 🟢 | 简单 | level-easy |
| medium | 🟡 | 中等 | level-medium |
| hard | 🔴 | 困难 | level-hard |

---

## 使用示例

```vue
<template>
  <FlashcardDisplay
    :vocab="lessonData.vocab"
    :typing-words="lessonData.typingWords"
    @scroll-to-typing="scrollToTyping"
  />
</template>

<script setup>
import FlashcardDisplay from '@/components/course/FlashcardDisplay.vue'

const scrollToTyping = () => {
  document.querySelector('.typing-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
```

---

## 代码位置

- [FlashcardDisplay.vue:70-83](src/components/course/FlashcardDisplay.vue#L70-L83) - Props和Emits定义
- [FlashcardDisplay.vue:98-111](src/components/course/FlashcardDisplay.vue#L98-L111) - 筛选逻辑
- [FlashcardDisplay.vue:118-148](src/components/course/FlashcardDisplay.vue#L118-L148) - TTS发音功能

---

## TTS API

使用有道词典 TTS API：

```
https://dict.youdao.com/dictvoice?type=2&audio={word}
```

---

## 卡片状态

| 状态 | 说明 | 样式 |
|------|------|------|
| 正面 | 显示单词、音标、难度徽章 | 白色背景 |
| 背面 | 显示中文释义、例句 | 紫色渐变背景 |
| 悬停 | 向上平移4px | 阴影加深 |

---

## 响应式设计

| 断点 | 网格列数 |
|------|----------|
| > 768px | `repeat(auto-fill, minmax(280px, 1fr))` |
| ≤ 768px | 1列 |

---

## 已知问题 & 待办

- [ ] TTS API依赖第三方服务，可考虑备用方案
- [ ] 卡片翻转3D动画可优化
