# 02-功能需求文档

> 本文档记录项目的所有功能及细节要求、限制条件，便于后期项目损坏时复现重构。

---

## 目录

- [技术选型](#技术选型)
- [核心功能](#核心功能)
- [功能限制](#功能限制)
- [开发进度](#开发进度)

---

## 技术选型

| 技术 | 版本 | 说明 | 官网 |
|------|------|------|------|
| 前端框架 | Vue 3.4.0 | 组件化开发，Composition API | https://vuejs.org |
| 路由 | Vue Router 4.6.4 | 多页面应用路由 | https://router.vuejs.org |
| 构建工具 | Vite 5.0.0 | 快速开发，热更新 | https://vitejs.dev |
| 代码编辑器 | CodeMirror 5.65.13 | Python语法高亮 | 通过CDN引入 |
| 代码执行 | Skulpt 1.2.0 | 浏览器内Python运行时 | https://skulpt.org |

### 依赖安装

```bash
npm install
```

**package.json 关键依赖**:

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.6.4"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^5.0.0"
  }
}
```

---

## 核心功能

### 1. Python在线编辑器

**组件**: [CodeEditor.vue](../src/components/course/CodeEditor.vue)

#### 功能清单

| 功能 | 说明 | 状态 |
|------|------|------|
| 代码编辑 | CodeMirror 5，Python语法高亮、行号、括号匹配 | ✅ |
| 代码执行 | 通过 Skulpt 在浏览器本地执行 Python 代码 | ✅ |
| 输入支持 | 使用浏览器原生 `window.prompt()` 实现 input() 交互 | ✅ |
| 代码模板 | 提供5个预设模板 | ✅ |

#### 技术实现

**Skulpt 运行时加载**:
```javascript
// 动态加载 Skulpt 核心库
const script = document.createElement('script')
script.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js'
const stdlib = document.createElement('script')
stdlib.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js'
```

**代码执行配置**:
```javascript
Sk.configure({
  output: (text) => { output.value += text },
  inputfun: (prompt) => window.prompt(prompt || '> ') || '',
  inputfunTakesPrompt: true
})
```

参考：[CodeEditor.vue:100-150](../src/components/course/CodeEditor.vue#L100-L150)

---

### 2. 打字练习模块

**组件**: [TypingPractice.vue](../src/components/course/TypingPractice.vue)

#### 功能特性

| 功能 | 说明 | 状态 |
|------|------|------|
| 双模式练习 | 单词模式 / 代码模式 | ✅ |
| 虚拟键盘 | QWERTY 5行标准布局，实时按键反馈 | ✅ |
| 进度追踪 | 字母/分钟、准确率、用时统计 | ✅ |
| 排行榜 | 保存前5名，支持跨练习持久化 | ✅ |
| 成绩对比 | 与上次练习对比，儿童友好提示 | ✅ |
| 完成祝贺 | 随机鼓励话术、基于表现的标题 | ✅ |

#### 双模式系统

| 模式 | 练习内容 | 数据来源 |
|------|----------|----------|
| 单词模式 | 练习PY2课程单词（L7-1 至 L9-4） | lesson-data.js |
| 代码模式 | 练习Python代码模板语法 | typing-templates-pool.js |

#### 虚拟键盘交互

- **布局**: QWERTY 5行标准键盘
- **按键反馈**:
  - 按下：橙色高亮 (#ff9f00)
  - 正确：绿色渐变
  - 错误：红色渐变
- **自动恢复**: 300ms

详细文档：[04-打字练习文档](./04-TYPING-PRACTICE.md)

---

### 3. 课程体系

#### 阶段划分

| 阶段 | 单元范围 | 课次数量 | 内容描述 |
|------|---------|---------|---------|
| PY1 | L1 ~ L6 | 24课 | Python入门基础 |
| PY2 | L7 ~ L12 | 24课 | Python进阶编程 |
| PY3 | L13 ~ L18 | 24课 | Python高级应用 |

**总计**: 18个单元，72次课

#### 难度分层

| 年级 | 颜色 | 说明 |
|------|------|------|
| 1-2年级 | 🟢 green | 基础版，故事场景导入 |
| 3-4年级 | 🟡 yellow | 进阶版，实际应用场景 |
| 5-6年级 | 🔴 red | 挑战版，综合运用场景 |

#### 课时页面内容

每节课包含以下模块：

| 模块 | 组件 | 说明 |
|------|------|------|
| 单词卡 | FlashcardDisplay | 英语单词 + 中文释义，TTS发音 |
| 知识点 | KnowledgeCard | 3个难度版本，支持切换 |
| 打字练习 | TypingPractice | 课程相关单词/代码练习 |
| 课后习题 | ExerciseCard | 选择题，编程×数学融合 |

---

### 4. 阶段锁定功能

#### 概述

不同阶段的老师可以自行部署时，通过配置文件控制显示哪些阶段。学生只能看到已解锁的阶段内容，未解锁的阶段在导航中仍可见，点击后显示"课程未解锁"提示。

#### 配置文件

**文件**: [config/stages.config.js](../src/config/stages.config.js)

```javascript
export const stagesConfig = {
  PY1: {
    unlocked: true,    // PY1阶段默认解锁
    unlockCode: null
  },
  PY2: {
    unlocked: false,   // PY2阶段默认锁定
    unlockCode: null
  },
  PY3: {
    unlocked: false,   // PY3阶段默认锁定
    unlockCode: null
  }
}
```

#### 使用方法

**开发阶段**: 所有阶段已解锁，方便开发和测试。

**生产部署**: 老师部署时修改 `src/config/stages.config.js`，重新构建后部署。

```bash
npm run build
```

#### 相关文件

| 文件 | 说明 |
|------|------|
| [config/stages.config.js](../src/config/stages.config.js) | 阶段解锁配置 |
| [components/shared/StageLocked.vue](../src/components/shared/StageLocked.vue) | 锁定提示组件 |
| [views/CourseLevelsView.vue](../src/views/CourseLevelsView.vue) | 显示锁定状态 |
| [views/StageView.vue](../src/views/StageView.vue) | 解锁检查 |

---

## 功能限制

### Python编辑器 (Skulpt)

| 限制项 | 说明 |
|--------|------|
| 支持的标准库 | print、input、math、random、json、turtle 等 |
| 不支持的库 | numpy、pandas 等第三方库 |
| 特殊情况 | 在 `while True` 等无限循环中使用 input() 可能导致无法停止 |

### 响应式设计

| 要求 | 说明 |
|------|------|
| 响应式断点 | 1024px, 768px, 480px |
| 设备支持 | 电脑、手机、平板、学习机 |
| 触控优化 | 按钮最小 44×44px |

### 浏览器兼容性

| 类型 | 要求 |
|------|------|
| 现代浏览器 | 支持 ES6+、Grid、Flexbox |
| 移动浏览器 | Safari iOS 14+、Chrome Android 最新版 |
| 国产浏览器 | 微信、QQ、UC 浏览器需实际测试 |

---

## 开发进度

### 已完成 ✅

| 模块 | 说明 |
|------|------|
| 核心组件 | CodeEditor、TypingPractice、Navigation、HeroSection、Footer |
| 路由系统 | 10个路由，9个页面视图 |
| 课程体系框架 | 阶段 → 单元 → 课时选择流程 |
| 阶段锁定功能 | stages.config.js 配置系统 |
| 数据驱动架构 | lesson-data.js 数据结构 |
| 课程组件 | FlashcardDisplay、KnowledgeCard、ExerciseCard、DifficultyBadge |
| PY2内容 | L7-1 至 L9-4 数据文件完成 |

### 待开发 📋

| 模块 | 说明 |
|------|------|
| PY2内容 | L10-L12 课次数据 |
| PY1/PY3内容 | 阶段内容待开发 |
| 用户进度 | 用户进度跟踪功能 |

---

## 运行项目

### 开发模式

```bash
npm run dev
# 访问 http://localhost:5173
```

### 构建生产版本

```bash
npm run build
# 输出目录: dist/
```

### 预览构建结果

```bash
npm run preview
```

---

## 相关文档

- [01-项目结构](./01-PROJECT-STRUCTURE.md) - 目录结构、路由配置
- [03-前端布局](./03-FRONTEND-LAYOUT.md) - CSS变量、响应式设计
- [04-打字练习](./04-TYPING-PRACTICE.md) - 打字练习详细文档
- [05-课程资料](./05-COURSE-MATERIALS.md) - 课程资料开发指南
