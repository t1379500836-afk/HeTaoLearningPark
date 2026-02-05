# Course Components 目录

课程相关组件，包含打字练习和Python编辑器。

## 文件列表

| 组件 | 说明 | 文档 |
|------|------|------|
| TypingPractice.vue | 打字练习组件（英文+代码模式） | 见下方详细说明 |
| CodeEditor.vue | Python在线编辑器，基于CodeMirror 5 | CodeEditor.claude.md |

---

## TypingPractice.vue - 打字练习组件

### 功能特性

#### 1. 双练习模式
- **单词模式** (word): 练习英文单词和关键词汇
- **代码模式** (code): 练习Python代码片段（支持多行、Tab缩进）

#### 2. 虚拟键盘反馈
- 完整 QWERTY 键盘布局显示
- 按键实时高亮反馈
  - 按下按键：橙色高亮（核桃橙 #ff9f00）
  - 输入正确：绿色渐变高亮
  - 输入错误：红色渐变高亮
- 高亮持续时间：300ms 自动恢复

#### 3. 内置关卡系统
- Home Row（基准行）：A S D F J K L ;
- Top Row（上排键）：Q W E R T Y U I O P
- Bottom Row（下排键）：Z X C V B N M
- Python Keywords：print, input, if, else, while, for, def, class...
- 代码模板：Print语句、变量赋值、条件语句

#### 4. 实时统计系统
- **速度统计**: 字母/分钟 (LPM)
- **准确率**: 正确字符数 / 总字符数 × 100%
- **用时**: 分:秒格式计时
- **成绩榜**: 保存前5名历史成绩

#### 5. 儿童友好设计
- 鼓励性完成祝贺界面（随机鼓励话术）
- 与上次练习成绩对比（儿童友好版提示词）
- 错误提示温和，不伤自尊
- 虚拟键盘帮助记忆按键位置

### Props API

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `id` | String | - | 组件唯一标识 |
| `mode` | `'word' \| 'code'` | `'word'` | 练习模式：单词/代码 |
| `customWords` | `Array` | `[]` | 自定义单词列表（word模式） |
| `customTemplates` | `Array` | `[]` | 自定义代码模板（code模式） |
| `showLevelSelector` | `Boolean` | `false` | 是否显示关卡选择按钮 |
| `autoFocus` | `Boolean` | `false` | 是否自动聚焦输入框 |
| `embedded` | `Boolean` | `false` | 嵌入式模式（移除固定宽度） |

### Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `complete` | `{ lettersPerMinute, accuracy, ... }` | 练习完成时触发 |

### 使用示例

```vue
<!-- 单词模式 - 自定义关键词 -->
<TypingPractice
  :custom-words="['print', 'input', 'if', 'else', 'while']"
  mode="word"
/>

<!-- 代码模式 - 自定义模板 -->
<TypingPractice
  :custom-templates="['print(\"Hello\")', 'age = 10', 'if x > 0:']"
  mode="code"
/>

<!-- 显示关卡选择器 -->
<TypingPractice
  :show-level-selector="true"
/>

<!-- 课时内嵌模式 -->
<TypingPractice
  :custom-words="['for', 'in', 'range']"
  mode="word"
  :embedded="true"
/>
```

### 实现原理

#### 按键检测机制
```javascript
// 监听 keydown 事件
@keydown="handleKeyDown"

// 判断输入正确性
const targetChar = target[inputValue.value.length]
if (char === targetChar) {
  correctChars.value++
  showKeyFeedback(char, 'correct')  // 绿色反馈
} else {
  errorChars.value++
  showKeyFeedback(char, 'error')    // 红色反馈
}
```

#### 虚拟键盘状态管理
```javascript
const activeKey = ref('')      // 当前激活的按键
const keyStatus = ref('default') // 状态: default | correct | error
const keyTimer = ref(null)     // 高亮计时器

// 按键反馈函数
const showKeyFeedback = (key, status) => {
  activeKey.value = mapKeyToDisplay(key)
  keyStatus.value = status

  // 300ms 后恢复
  keyTimer.value = setTimeout(() => {
    activeKey.value = ''
    keyStatus.value = 'default'
  }, 300)
}
```

#### 统计计算
```javascript
// 字母/分钟
lettersPerMinute = correctChars / (elapsedSeconds / 60)

// 准确率
accuracy = (correctChars / (correctChars + errorChars)) * 100
```

### 样式文件
- 组件样式：`<style scoped>` 内联样式
- CSS变量：`src/assets/styles/variables.css`

### 响应式设计
| 设备 | 虚拟键盘 | 按键尺寸 |
|------|---------|---------|
| 桌面 (≥768px) | 完整显示 | 40×40px |
| 平板 (≤768px) | 简化显示 | 24-32px |
| 手机 (≤480px) | 最小化显示 | 20-28px |

---

## CodeEditor.vue - Python在线编辑器

支持通过 props 传入初始代码和预期输出：
```vue
<CodeEditor
  :initial-code="# Starter code"
  :expected-output="Hello World"
/>
```
详细文档见 CodeEditor.claude.md
