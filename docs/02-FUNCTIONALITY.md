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

### 5. 路由前缀隔离与 404 拦截

#### 概述

通过 URL 前缀实现不同教师口令的内容隔离，并拦截无效 URL 防止用户猜测访问。

#### 设计目的

| 目的 | 说明 |
|------|------|
| 防止猜测 | 用户不知道正确的前缀就无法访问内容 |
| 内容隔离 | 不同前缀对应不同的可访问阶段 |
| 锁死无效访问 | 无效 URL 显示 404 页面，无任何导航出口 |

#### 有效路由前缀

| 前缀 | 可访问阶段 | 对应教师 |
|------|-----------|---------|
| `p1` | PY1 | PY1 阶段班级 |
| `py2` | PY1, PY2 | PY2 阶段班级 |
| `python3` | PY1, PY2, PY3 | PY3 阶段班级 |

#### 访问示例

| 访问路径 | 结果 |
|---------|------|
| `/` | ✅ 正常显示首页（无限制） |
| `/python3` | ✅ 正常显示首页（带 python3 前缀限制） |
| `/p1/levels` | ✅ 只显示 PY1 阶段 |
| `/py2/levels` | ✅ 显示 PY1 和 PY2 阶段 |
| `/py3` | ❌ 404 页面（无页头页脚，无返回按钮） |
| `/abc` | ❌ 404 页面（无页头页脚，无返回按钮） |
| `/python3/xyz` | ❌ 404 页面（无效子路径） |

#### 404 页面特性

**组件**: [NotFoundView.vue](../src/views/NotFoundView.vue)

| 特性 | 说明 |
|------|------|
| 无页头 | 不显示 Navigation 组件 |
| 无页脚 | 不显示 Footer 组件 |
| 无导航按钮 | 不提供任何返回首页或跳转按钮 |
| 无口令验证 | 404 页面跳过口令验证弹窗 |
| 全屏显示 | 占满整个视口，紫色渐变背景 |

用户被"锁死"在 404 页面，只能通过修改浏览器地址栏才能离开。

#### 实现机制

1. **路由守卫** (`router.beforeEach`)：
   - 检查路径第一段是否为有效前缀或基础路由
   - 无效前缀重定向到 404 页面

2. **App.vue 条件渲染**：
   - 检测 `route.meta.is404` 判断是否为 404 页面
   - 404 页面不渲染 Navigation 和 Footer
   - 404 页面不显示口令验证弹窗 (`needAuth && !is404Page`)

#### 相关文件

| 文件 | 说明 |
|------|------|
| [router/index.js](../src/router/index.js) | 路由配置、路由守卫 |
| [views/NotFoundView.vue](../src/views/NotFoundView.vue) | 404 页面组件 |
| [App.vue](../src/App.vue) | 404 页面隐藏页头页脚 |
| [composables/useRoutePrefix.js](../src/composables/useRoutePrefix.js) | 前缀解析与权限控制 |

---

### 6. 教师口令验证

#### 概述

为教培机构设计的身份标识功能。访问网站时需要输入口令（暗号），验证成功后首页显示对应老师的专属内容。口令不是"秘密"，而是"身份标识"——其他组老师即使知道口令，因为显示的不是自己名字，也不会拿给学生用。

#### 功能特性

| 功能 | 说明 | 状态 |
|------|------|------|
| 口令输入弹窗 | 半透明毛玻璃背景，居中输入框 | ✅ |
| 提示文案 | "请和老师核对暗号" | ✅ |
| 验证成功特效 | 彩带庆祝动画（120彩带+30闪光+15星星） | ✅ |
| 首页个性化 | 美化标题 + 彩色气泡装饰 | ✅ |
| 配置文件加密 | Base64编码（防肉眼查看） | ✅ |

#### 配置文件

**文件**: [config/teachers.config.js](../src/config/teachers.config.js)

```javascript
// 教师配置（口令已加密）
// 添加新教师：在 Node.js 中执行 Buffer.from('口令').toString('base64')
const encryptedTeachers = [
  { key: '6Lef5oiQ6ICB5biI5LiA6LW35aSN5Lmg5ZKv', name: '成宇轩老师' },
  { key: '5ZCJ56Wl6ICB5biI5oiR5p2l5ZWm', name: '吉祥老师' },
  // ...更多教师
]
```

#### 交互流程

```
用户访问任意页面
       ↓
检查是否已验证（sessionStorage）
       ↓
┌─────────────────────────────────────┐
│  未验证                              │
│    → 显示半透明验证弹窗（覆盖全页）    │
│    → 背景可见但模糊                   │
│    → 提示"请和老师核对暗号"           │
│    → 输入口令 + 确定按钮              │
│                                      │
│  验证成功                             │
│    → 播放庆祝动画（4秒彩带特效）       │
│    → 存储验证状态（仅当前会话）        │
│    → 关闭弹窗                         │
│    → 首页显示个性化标题                │
│                                      │
│  验证失败                             │
│    → 抖动提示"暗号不对哦~"             │
│    → 可重新输入                        │
└─────────────────────────────────────┘
```

#### 子路由处理

无论用户访问首页 `/` 还是直接访问子路由（如 `/levels`、`/typing`、`/lesson/...`），只要未验证，验证弹窗都会显示。

**实现方式**：
- 在 `App.vue` 中渲染全局验证弹窗组件（`AuthModal.vue`）
- 在路由守卫 `beforeEach` 中检查验证状态
- 验证弹窗 `z-index` 最高，覆盖所有页面内容

#### 安全说明

| 方面 | 说明 |
|------|------|
| 加密方式 | Base64编码，防肉眼查看，不防专业破解 |
| 存储方式 | `sessionStorage`，关闭浏览器后失效，刷新页面不需要重新输入 |
| 设计目的 | 防君子不防小人，口令是"身份标识"而非"秘密" |
| 适用场景 | 教培机构内部分组使用，防止其他组老师直接使用 |

#### 相关文件

| 文件 | 说明 |
|------|------|
| [config/teachers.config.js](../src/config/teachers.config.js) | 口令与教师信息配置 |
| [composables/useAuth.js](../src/composables/useAuth.js) | 验证状态管理 |
| [components/shared/AuthModal.vue](../src/components/shared/AuthModal.vue) | 验证弹窗组件 |
| [components/shared/CelebrationEffect.vue](../src/components/shared/CelebrationEffect.vue) | 庆祝彩带动画组件 |
| [components/shared/HeroSection.vue](../src/components/shared/HeroSection.vue) | 首页个性化标题显示 |

#### 庆祝动画详情

**组件**: [CelebrationEffect.vue](../src/components/shared/CelebrationEffect.vue)

验证成功后显示的彩带庆祝动画，持续4秒后自动消失。

| 粒子类型 | 数量 | 动画效果 |
|---------|------|---------|
| 彩带 | 120个 | 摇摆飘落，5种形状，7色系 |
| 闪光 ✨ | 30个 | 旋转缩放，淡入淡出 |
| 星星 ⭐ | 15个 | 金色发光，旋转飘落 |

**彩带形状**: square、rectangle、circle、ribbon、triangle

**彩带颜色**: 金色系、红色系、蓝色系、绿色系、紫色系、黄色系、粉色系

#### 个性化标题美化

**组件**: [HeroSection.vue](../src/components/shared/HeroSection.vue)

验证成功后首页显示个性化标题，采用横向布局 + 彩色气泡装饰。

```
🔴🟡🟢 xx老师班级 · 专属编程探索之旅 🔵🟣🟠
```

| 元素 | 样式 |
|------|------|
| 主标题 | 加粗 font-weight: 700 |
| 分隔符 | `·` 透明度 60% |
| 副标题 | 常规字重，透明度 92% |
| 左侧气泡 | 🔴红 🟡黄 🟢绿（波浪浮动） |
| 右侧气泡 | 🔵蓝 🟣紫 🟠橙（波浪浮动） |

气泡动画：2秒周期上下浮动 + 缩放，每个气泡延迟错开形成波浪效果。

---

### 6. 全局页面加载动画

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
| **教师口令验证** | 口令输入弹窗、彩带祝贺特效、首页个性化显示 |
| **路由前缀隔离** | p1/py2/python3 前缀隔离、无效 URL 拦截、404 锁死页面 |

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
