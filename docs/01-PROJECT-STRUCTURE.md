# 01-项目结构文档

> 本文档说明项目的目录结构、路由配置和组件关系。

---

## 目录

- [目录结构](#目录结构)
- [路由配置](#路由配置)
- [组件关系](#组件关系)
- [配置文件](#配置文件)
- [数据文件](#数据文件)

---

## 目录结构

```
hetao-learning-park/
├── index.html                      # 入口HTML，引入CodeMirror CDN
├── package.json                    # 项目依赖配置
├── vite.config.js                  # Vite配置（含路径别名@）
├── README.md                       # 项目入口（简洁版）
├── claude.md                       # AI助手开发指南
├── docs/                           # 文档目录
│   ├── INDEX.md                    # 文档导航中心
│   ├── 01-PROJECT-STRUCTURE.md     # 本文档
│   ├── 02-FUNCTIONALITY.md         # 功能需求文档
│   ├── 03-FRONTEND-LAYOUT.md       # 前端布局文档
│   ├── 04-TYPING-PRACTICE.md       # 打字练习文档
│   └── 05-COURSE-MATERIALS.md      # 课程资料文档（核心）
└── src/
    ├── main.js                     # Vue应用入口 + Router
    ├── App.vue                     # 根组件（使用RouterView）
    ├── config/                     # 配置文件
    │   ├── courses.config.js       # 课程统一配置
    │   └── stages.config.js        # 阶段解锁配置
    ├── router/
    │   └── index.js                # Vue Router路由配置
    ├── views/                      # 页面级组件
    │   ├── HomeView.vue            # 首页（快速入口卡片）
    │   ├── CourseLevelsView.vue    # 阶段选择（PY1/PY2/PY3）
    │   ├── StageView.vue           # Level选择（L1-L18）
    │   ├── UnitView.vue            # 课时选择（L1-1 ~ L1-4）
    │   ├── LessonView.vue          # 课时主页面
    │   ├── PracticeView.vue        # 课后练习（开发中）
    │   ├── TypingView.vue          # 独立打字练习
    │   ├── PythonIDEView.vue       # 独立Python编辑器
    │   └── YCLZoneView.vue         # YCL专区（开发中）
    ├── components/
    │   ├── shared/                 # 共享组件
    │   │   ├── Navigation.vue      # 导航栏
    │   │   ├── HeroSection.vue     # Hero横幅
    │   │   ├── Footer.vue          # 页脚
    │   │   └── StageLocked.vue     # 阶段锁定提示
    │   └── course/                 # 课程相关组件
    │       ├── TypingPractice.vue  # 打字练习组件
    │       ├── CodeEditor.vue      # Python在线编辑器
    │       ├── FlashcardDisplay.vue # 单词卡展示
    │       ├── KnowledgeCard.vue   # 知识点卡片
    │       ├── ExerciseCard.vue    # 习题卡片
    │       └── DifficultyBadge.vue # 难度徽章
    ├── composables/                # 可复用逻辑
    │   └── useLessonData.js        # 课程数据加载
    ├── assets/
    │   ├── images/
    │   │   └── hetao-logo.png      # 核桃logo
    │   └── styles/
    │       └── variables.css       # CSS变量系统
    └── data/                       # 课程数据
        └── courses/                # 18个Level数据目录
            ├── PY1/                # Python入门基础（L1-L6）
            ├── PY2/                # Python进阶编程（L7-L12）
            │   ├── lessons/        # 课次数据目录
            │   │   ├── L7-1/
            │   │   │   └── lesson-data.js
            │   │   └── ...
            │   ├── typing-templates-pool.js
            │   └── content.json
            └── PY3/                # Python高级应用（L13-L18）
```

---

## 路由配置

### 路由表

| 路由 | 组件 | 说明 | 配置文件 |
|------|------|------|----------|
| `/` | HomeView | 首页（快速入口卡片） | [router/index.js](../src/router/index.js) |
| `/levels` | CourseLevelsView | 阶段选择（PY1/PY2/PY3） | [router/index.js](../src/router/index.js) |
| `/levels/:stage` | StageView | Level选择（L1-L18），含解锁检查 | [router/index.js](../src/router/index.js) |
| `/levels/:stage/:unit` | UnitView | 课时选择（L1-1 ~ L1-4） | [router/index.js](../src/router/index.js) |
| `/lesson/:stage/:unit/:lesson` | LessonView | 课时主页面 | [router/index.js](../src/router/index.js) |
| `/practice` | PracticeView | 课后练习 | [router/index.js](../src/router/index.js) |
| `/typing` | TypingView | 独立打字练习 | [router/index.js](../src/router/index.js) |
| `/python` | PythonIDEView | 独立Python编辑器 | [router/index.js](../src/router/index.js) |
| `/ycl` | YCLZoneView | YCL专区 | [router/index.js](../src/router/index.js) |
| `/locked` | StageLocked | 阶段锁定提示页 | [router/index.js](../src/router/index.js) |

### 路由参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| `:stage` | 阶段标识（PY1/PY2/PY3） | `PY2` |
| `:unit` | 单元标识（L1-L18） | `L7` |
| `:lesson` | 课次标识（L7-1 ~ L7-4） | `L7-1` |

---

## 组件关系

### 组件层级

```
App.vue
├── Navigation.vue       (顶部导航栏，使用router-link)
├── RouterView           (路由视图，动态加载页面组件)
└── Footer.vue          (页脚)
```

### 页面组件复用关系

| 页面组件 | 复用的子组件 | 说明 |
|----------|-------------|------|
| HomeView | HeroSection | 首页横幅 |
| TypingView | TypingPractice | 独立打字练习页面 |
| PythonIDEView | CodeEditor | 独立Python编辑器页面 |
| LessonView | TypingPractice + CodeEditor + FlashcardDisplay + KnowledgeCard + ExerciseCard | 课时主页面 |

### 共享组件

| 组件 | 文件 | 说明 |
|------|------|------|
| Navigation | [components/shared/Navigation.vue](../src/components/shared/Navigation.vue) | 顶部导航栏 |
| HeroSection | [components/shared/HeroSection.vue](../src/components/shared/HeroSection.vue) | Hero横幅 |
| Footer | [components/shared/Footer.vue](../src/components/shared/Footer.vue) | 页脚 |
| StageLocked | [components/shared/StageLocked.vue](../src/components/shared/StageLocked.vue) | 阶段锁定提示 |

### 课程组件

| 组件 | 文件 | 说明 |
|------|------|------|
| TypingPractice | [components/course/TypingPractice.vue](../src/components/course/TypingPractice.vue) | 打字练习组件 |
| CodeEditor | [components/course/CodeEditor.vue](../src/components/course/CodeEditor.vue) | Python在线编辑器 |
| FlashcardDisplay | [components/course/FlashcardDisplay.vue](../src/components/course/FlashcardDisplay.vue) | 单词卡展示 |
| KnowledgeCard | [components/course/KnowledgeCard.vue](../src/components/course/KnowledgeCard.vue) | 知识点卡片 |
| ExerciseCard | [components/course/ExerciseCard.vue](../src/components/course/ExerciseCard.vue) | 习题卡片 |
| DifficultyBadge | [components/course/DifficultyBadge.vue](../src/components/course/DifficultyBadge.vue) | 难度徽章 |

---

## 配置文件

### courses.config.js

课程统一配置，定义各阶段包含的单元。

**文件**: [config/courses.config.js](../src/config/courses.config.js)

```javascript
// 阶段 -> 单元映射
export const coursesConfig = {
  PY1: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
  PY2: ['L7', 'L8', 'L9', 'L10', 'L11', 'L12'],
  PY3: ['L13', 'L14', 'L15', 'L16', 'L17', 'L18']
}
```

### stages.config.js

阶段解锁配置，控制哪些阶段对学生可见。

**文件**: [config/stages.config.js](../src/config/stages.config.js)

```javascript
export const stagesConfig = {
  PY1: {
    unlocked: true,    // 是否解锁
    unlockCode: null   // 解锁码（预留）
  },
  PY2: {
    unlocked: true,
    unlockCode: null
  },
  PY3: {
    unlocked: false,
    unlockCode: null
  }
}
```

---

## 数据文件

### 课程数据结构

每个课次的独立数据文件：`src/data/courses/{PY1/PY2/PY3}/lessons/{课次}/lesson-data.js`

```javascript
export const lessonMeta = { id, title, subtitle, ... }    // 课次元数据
export const vocabData = [...]                            // 单词卡数据
export const knowledgePoints = [...]                      // 知识点（3个难度）
export const exercises = [...]                            // 习题数据
export const typingWords = { easy, medium, hard }        // 打字练习单词
export default { meta, vocab, knowledgePoints, exercises, typingWords }
```

### 数据加载机制

**Composable**: [composables/useLessonData.js](../src/composables/useLessonData.js)

动态导入课次数据：

```javascript
const module = await import(
  `@/data/courses/${stage.value}/lessons/${lessonId.value}/lesson-data.js`
)
```

---

## 课时页面结构

LessonView 的内容布局：

```
LessonView.vue
├── Breadcrumb（面包屑导航）
├── 知识点 (KnowledgePoints)
│   └── KnowledgeCard × N
├── 本章语法打字练习 (TypingPractice)
└── 课后习题
    ├── 选择题 (MultipleChoice)
    │   └── ExerciseCard × N
    └── OJ题 (OJProblem + CodeEditor)
```

---

## 课程体系结构

### 阶段划分

| 阶段 | 单元 | 课次 | 说明 |
|------|------|------|------|
| PY1 | L1 ~ L6 | L1-1 ~ L6-4 | Python入门基础 |
| PY2 | L7 ~ L12 | L7-1 ~ L12-4 | Python进阶编程 |
| PY3 | L13 ~ L18 | L13-1 ~ L18-4 | Python高级应用 |

**总计**：18个单元，72次课

### 课程开发

详见 [05-课程资料文档](./05-COURSE-MATERIALS.md)
