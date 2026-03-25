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

#### 2.1 英文打字练习

**组件**: [TypingPractice.vue](../src/components/course/TypingPractice.vue)

**功能特性**:

| 功能 | 说明 | 状态 |
|------|------|------|
| 双模式练习 | 单词模式 / 代码模式 | ✅ |
| 虚拟键盘 | QWERTY 5行标准布局，实时按键反馈 | ✅ |
| 进度追踪 | 字母/分钟、准确率、用时统计 | ✅ |
| 排行榜 | 保存前5名，支持跨练习持久化 | ✅ |
| 成绩对比 | 与上次练习对比，儿童友好提示 | ✅ |
| 完成祝贺 | 随机鼓励话术、基于表现的标题 | ✅ |

**双模式系统**:

| 模式 | 练习内容 | 数据来源 |
|------|----------|----------|
| 单词模式 | 练习PY2课程单词（L7-1 至 L9-4） | lesson-data.js |
| 代码模式 | 练习Python代码模板语法 | typing-templates-pool.js |

#### 2.2 中文打字练习

**组件**: [ChineseTypingPractice.vue](../src/components/course/ChineseTypingPractice.vue)

**功能特性**:

| 功能 | 说明 | 状态 |
|------|------|------|
| 练习类型 | 古诗 / 成语 | ✅ |
| 匹配方式 | 整体匹配（非逐字符） | ✅ |
| 字符反馈 | 已输入/当前/正确/错误状态 | ✅ |
| 进度追踪 | 字/分钟、准确率、用时统计 | ✅ |
| 排行榜 | 保存前5名，支持跨练习持久化 | ✅ |
| 儿童友好 | 鼓励语和祝贺界面 | ✅ |

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

#### 课程体系页面（CourseLevelsView）

**组件**: [views/CourseLevelsView.vue](../src/views/CourseLevelsView.vue)

采用横向轮播式布局，展示完整学习路径：**图形化 → Python → C++**

##### 页面结构

```
┌─────────────────────────────────────────────────────┐
│ Hero 区域                                           │
│ ┌─────────────────────────────────────────────────┐ │
│ │     图形化 → Python → C++                       │ │
│ │                                                 │ │
│ │   🌱 PY1  🌿 PY2  🌳 PY3  （Python阶段入口）    │ │
│ └─────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│ 轮播区域                                            │
│  ◄  ┌─────────┐ ┌─────────┐ ┌─────────┐  ►        │
│     │ 图形化  │ │ Python  │ │  C++    │            │
│     │ (侧边) │ │ (中心)  │ │ (侧边) │            │
│     └─────────┘ └─────────┘ └─────────┘            │
│                                                     │
│     [图形化]  [Python]  [C++]   ← 底部指示器        │
├─────────────────────────────────────────────────────┤
│ 学习路径说明                                        │
│   1. 图形化：培养思维                               │
│   2. Python：掌握代码 ⭐ (重点强调)                 │
│   3. C++：冲刺竞赛                                  │
└─────────────────────────────────────────────────────┘
```

##### 交互特性

| 功能 | 说明 | 状态 |
|------|------|------|
| 轮播导航 | 左右按钮循环切换，点击侧边卡片推动一格 | ✅ |
| 默认居中 | Python 卡片默认居中显示，强调重要性 | ✅ |
| 阶段入口 | Python 激活时显示 PY1/PY2/PY3 快捷入口 | ✅ |
| 跳动提示 | 最高解锁阶段的入口按钮跳动 + "点击开始" | ✅ |
| 锁定显示 | 未解锁阶段显示 🔒 图标 | ✅ |
| 响应式适配 | 桌面端三卡片可见，移动端 Python 居中优先 | ✅ |

##### 课程卡片内容

| 卡片 | 课程周期 | 特性 |
|------|---------|------|
| 图形化编程 | 1年 | 趣味游戏制作、创意动画设计、积木式编程 |
| Python编程 | 1年半 | 真实代码编写、智能硬件控制、App应用开发基础 |
| C++编程 | 3年 | 信息学奥赛、算法与数据结构、Pygame游戏开发 |

##### 响应式断点

| 断点 | 卡片宽度 | 布局调整 |
|------|---------|---------|
| > 1200px | 380px | 三卡片可见，Python 居中 |
| 1024px | 320px | 卡片缩小 |
| 768px | 280px | Python 居中优先，侧边卡片在屏幕外 |
| 480px | 260px | 阶段入口紧凑，隐藏"点击开始"提示 |

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

#### 锁定提示组件

**组件**: [StageLocked.vue](../src/components/shared/StageLocked.vue)

当用户访问未解锁的课程阶段时，显示锁定提示页面：

- 显示 🔒 图标 + "课程未解锁" 标题
- 提示用户需要报名下一阶段才能解锁
- **返回按钮**：使用 `router.back()` 返回上一页（而非返回首页）

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

### 5. 全局页面加载动画

#### 概述

路由切换时显示全局 loading 动画，避免页面头部和尾部先加载而内容区域空白的用户体验问题。支持页面组件主动通知加载完成，实现精准的动画结束时机。

#### 功能特性

| 功能 | 说明 | 状态 |
|------|------|------|
| 路由切换动画 | 页面切换时自动显示 loading | ✅ |
| 精准结束控制 | 页面组件可通知加载完成 | ✅ |
| 超时保护 | 5秒后强制隐藏，防止卡住 | ✅ |
| 默认延迟 | 简单页面 500ms 后自动隐藏 | ✅ |
| 淡入淡出 | 0.3s 平滑过渡动画 | ✅ |

#### 相关文件

| 文件 | 说明 |
|------|------|
| [components/shared/LoadingOverlay.vue](../src/components/shared/LoadingOverlay.vue) | Loading 动画组件 |
| [composables/useLoading.js](../src/composables/useLoading.js) | Loading 状态管理 |
| [main.js](../src/main.js) | 路由守卫配置 |

#### 工作流程

```
点击链接
    ↓
beforeEach → showLoading() 显示动画
    ↓
afterEach → waitForPageReady() 等待页面就绪
    ↓
┌─────────────────────────────────────┐
│  情况A：页面有异步数据              │
│    → 页面加载数据完成               │
│    → 调用 notifyPageReady()         │
│    → 立即隐藏 loading               │
│                                     │
│  情况B：页面无异步数据              │
│    → 500ms 后自动隐藏               │
│                                     │
│  情况C：页面出问题                  │
│    → 5 秒超时保护，强制隐藏         │
└─────────────────────────────────────┘
    ↓
loading 动画淡出
```

#### API 使用

**在页面组件中通知加载完成**：

```javascript
import { notifyPageReady } from '@/composables/useLoading.js'

// 数据加载完成后调用
watch(isLoading, (loading) => {
  if (!loading) {
    nextTick(() => {
      notifyPageReady()
    })
  }
})
```

**已实现 notifyPageReady 的页面**：
- LessonView - 课程详情页（等待课程数据加载）
- UnitView - 课时选择页（等待课时列表加载）

#### CDN 降级加载（Python 编辑器）

Python 编辑器使用 Skulpt 在浏览器中运行 Python 代码，支持多 CDN 源降级：

| CDN | 优先级 | 说明 |
|-----|--------|------|
| unpkg.com | 1 | 国内通常可用 |
| jsdelivr | 2 | 备选 |
| cdnjs.cloudflare.com | 3 | 备选 |

每个 CDN 源超时时间：5 秒

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
| 打字练习 | 英文打字（单词+代码模式）、中文打字（古诗+成语）、代码模板池 |
| 虚拟键盘 | QWERTY 5行布局，实时按键反馈，多端适配 |
| 路由系统 | 11个路由，10个页面视图 |
| 课程体系框架 | 阶段 → 单元 → 课时选择流程 |
| **课程体系页面** | 横向轮播布局、Python居中、阶段入口快捷导航、跳动提示 |
| 阶段锁定功能 | stages.config.js 配置、锁定提示页返回上一页 |
| 数据驱动架构 | lesson-data.js 数据结构 |
| 课程组件 | FlashcardDisplay、KnowledgeCard、ExerciseCard、DifficultyBadge |
| PY2内容 | L7-1 至 L12-4 数据文件完成 |
| 代码模板池 | L7-L12 课程模板聚合，难度分级 |
| 全局Loading动画 | 路由切换动画、精准结束控制、CDN降级加载 |
| **响应式优化** | 课程体系页面移动端 Python 居中优先 |

### 待开发 📋

| 模块 | 说明 |
|------|------|
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
