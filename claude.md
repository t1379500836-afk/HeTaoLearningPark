# 核桃编程学习平台 - 项目快速上手文档

## 项目概述

为核桃编程学生提供的课后学习巩固网站，包含打字练习、Python在线编辑器等功能。

---

## 快速开始

### 安装依赖
```bash
npm install
```

### 运行开发服务器
```bash
npm run dev
# 访问 http://localhost:5173
```

### 构建生产版本
```bash
npm run build
```

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.4.0 | 前端框架 |
| Vite | 5.0.0 | 构建工具 |
| CodeMirror | 5.65.13 | 代码编辑器（CDN） |

---

## 项目结构

```
hetao-learning-park/
├── index.html                      # 入口HTML
├── package.json                    # 依赖配置
├── vite.config.js                  # Vite配置
├── HeTaoLearningPark.md            # 主文档（架构、API详解）
├── claude.md                       # 本文件（快速上手）
└── src/
    ├── main.js                     # Vue入口
    ├── App.vue                     # 根组件
    ├── App.claude.md               # 根组件文档
    ├── assets/
    │   ├── images/
    │   │   └── hetao-logo.png     # 核桃logo
    │   └── styles/
    │       ├── variables.css      # CSS变量系统
    │       └── claude.md          # 样式文档
    ├── router/
    │   ├── index.js               # 路由定义
    │   └── claude.md              # 路由文档
    ├── views/                      # 页面视图
    │   ├── HomeView.vue           # 首页
    │   ├── HomeView.claude.md     # 首页文档
    │   ├── CourseLevelsView.vue   # 阶段选择页
    │   ├── CourseLevelsView.claude.md
    │   ├── StageView.vue          # Level选择页
    │   ├── StageView.claude.md
    │   ├── UnitView.vue           # 课时选择页
    │   ├── UnitView.claude.md
    │   ├── LessonView.vue         # 课时主页面
    │   ├── LessonView.claude.md
    │   ├── PracticeView.vue       # 课后练习页
    │   ├── PracticeView.claude.md
    │   ├── TypingView.vue         # 打字练习页
    │   ├── TypingView.claude.md
    │   ├── PythonIDEView.vue      # Python IDE页
    │   ├── PythonIDEView.claude.md
    │   ├── YCLZoneView.vue        # YCL专区页
    │   ├── YCLZoneView.claude.md
    │   └── README.md              # 视图目录说明
    ├── components/
    │   ├── shared/                # 共享组件
    │   │   ├── Navigation.vue
    │   │   ├── Navigation.claude.md
    │   │   ├── HeroSection.vue
    │   │   ├── HeroSection.claude.md
    │   │   ├── Footer.vue
    │   │   ├── Footer.claude.md
    │   │   ├── StageLocked.vue
    │   │   ├── StageLocked.claude.md
    │   │   └── README.md          # 共享组件说明
    │   └── course/                # 课程相关组件
    │       ├── TypingPractice.vue
    │       ├── TypingPractice.claude.md
    │       ├── CodeEditor.vue
    │       ├── CodeEditor.claude.md
    │       ├── FlashcardDisplay.vue
    │       ├── FlashcardDisplay.claude.md
    │       ├── KnowledgeCard.vue
    │       ├── KnowledgeCard.claude.md
    │       ├── ExerciseCard.vue
    │       ├── ExerciseCard.claude.md
    │       ├── DifficultyBadge.vue
    │       ├── DifficultyBadge.claude.md
    │       └── README.md          # 课程组件说明
    ├── composables/               # 组合式函数
    │   ├── useLessonData.js       # 课程数据加载
    │   └── README.md              # Composables文档
    ├── config/                    # 配置文件
    │   ├── courses.config.js      # 课程统一配置
    │   ├── courses.config.claude.md
    │   ├── stages.config.js       # 阶段解锁配置
    │   └── stages.config.claude.md
    └── data/                      # 数据文件
        └── courses/               # 课程数据
            ├── README.md          # 课程数据目录说明
            ├── LESSON_DEVELOPMENT_GUIDE.md
            ├── PY1/               # Python入门基础（L1-L6）
            ├── PY2/               # Python进阶编程（L7-L12）
            │   ├── lessons/       # 课次数据目录
            │   │   ├── L7-1/
            │   │   │   └── lesson-data.js
            │   │   └── ...
            │   ├── typing-templates-pool.js
            │   ├── content.json
            │   └── README.md
            └── PY3/               # Python高级应用（L13-L18）
```

---

## 文档索引

### 根级文档
| 文档 | 说明 |
|------|------|
| [HeTaoLearningPark.md](HeTaoLearningPark.md) | 项目架构、API详解、部署指南 |
| [claude.md](claude.md) | 快速上手文档（本文件） |

### 配置文件文档
| 文档 | 说明 |
|------|------|
| [src/router/claude.md](src/router/claude.md) | Vue Router配置文档 |
| [src/config/stages.config.claude.md](src/config/stages.config.claude.md) | 阶段解锁配置 |
| [src/config/courses.config.claude.md](src/config/courses.config.claude.md) | 课程统一配置 |

### 样式文档
| 文档 | 说明 |
|------|------|
| [src/assets/styles/claude.md](src/assets/styles/claude.md) | CSS变量系统 |

### 组件文档
| 文档 | 说明 |
|------|------|
| [src/components/shared/README.md](src/components/shared/README.md) | 共享组件目录说明 |
| [src/components/shared/Navigation.claude.md](src/components/shared/Navigation.claude.md) | 导航栏组件 |
| [src/components/shared/HeroSection.claude.md](src/components/shared/HeroSection.claude.md) | Hero横幅组件 |
| [src/components/shared/Footer.claude.md](src/components/shared/Footer.claude.md) | 页脚组件 |
| [src/components/shared/StageLocked.claude.md](src/components/shared/StageLocked.claude.md) | 阶段锁定提示组件 |
| [src/components/course/README.md](src/components/course/README.md) | 课程组件目录说明 |
| [src/components/course/TypingPractice.claude.md](src/components/course/TypingPractice.claude.md) | 打字练习组件 |
| [src/components/course/CodeEditor.claude.md](src/components/course/CodeEditor.claude.md) | Python在线编辑器 |
| [src/components/course/FlashcardDisplay.claude.md](src/components/course/FlashcardDisplay.claude.md) | 单词卡展示组件 |
| [src/components/course/KnowledgeCard.claude.md](src/components/course/KnowledgeCard.claude.md) | 知识点卡片组件 |
| [src/components/course/ExerciseCard.claude.md](src/components/course/ExerciseCard.claude.md) | 习题卡片组件 |
| [src/components/course/DifficultyBadge.claude.md](src/components/course/DifficultyBadge.claude.md) | 难度徽章组件 |

### 视图文档
| 文档 | 说明 |
|------|------|
| [src/views/README.md](src/views/README.md) | 视图目录说明 |
| [src/views/HomeView.claude.md](src/views/HomeView.claude.md) | 首页视图 |
| [src/views/CourseLevelsView.claude.md](src/views/CourseLevelsView.claude.md) | 阶段选择视图 |
| [src/views/StageView.claude.md](src/views/StageView.claude.md) | Level选择视图 |
| [src/views/UnitView.claude.md](src/views/UnitView.claude.md) | 课时选择视图 |
| [src/views/LessonView.claude.md](src/views/LessonView.claude.md) | 课时主页面视图 |
| [src/views/PracticeView.claude.md](src/views/PracticeView.claude.md) | 课后练习视图 |
| [src/views/TypingView.claude.md](src/views/TypingView.claude.md) | 独立打字练习视图 |
| [src/views/PythonIDEView.claude.md](src/views/PythonIDEView.claude.md) | 独立Python编辑器视图 |
| [src/views/YCLZoneView.claude.md](src/views/YCLZoneView.claude.md) | YCL专区视图 |

### Composables文档
| 文档 | 说明 |
|------|------|
| [src/composables/README.md](src/composables/README.md) | Composables目录说明 |

### 课程数据文档
| 文档 | 说明 |
|------|------|
| [src/data/courses/README.md](src/data/courses/README.md) | 课程数据目录说明 |
| [src/data/courses/LESSON_DEVELOPMENT_GUIDE.md](src/data/courses/LESSON_DEVELOPMENT_GUIDE.md) | 课程开发指南 |
| [src/data/courses/PY2/README.md](src/data/courses/PY2/README.md) | PY2阶段说明 |

---

## 重要文档说明

| 文档 | 内容 | 适合场景 |
|------|------|---------|
| [HeTaoLearningPark.md](HeTaoLearningPark.md) | 项目架构、API详解、部署指南 | 全面了解项目、查看技术实现 |
| `src/App.claude.md` | 根组件结构、布局实现 | 修改页面结构 |
| `src/components/CodeEditor/claude.md` | Piston API调用、input()处理 | 修改编辑器功能 |
| `src/components/TypingPractice/claude.md` | WPM计算、关卡配置 | 添加打字关卡 |
| `src/assets/styles/claude.md` | CSS变量系统 | 修改主题色 |

---

## 开发规范

### 组件开发流程
1. 在 `src/components/` 下创建新文件夹
2. 创建 `.vue` 组件文件
3. 创建 `claude.md` 文档，记录：
   - 组件功能说明
   - 实现技术细节
   - 已知问题 & 待办

### CSS 使用规范
- 优先使用 CSS 变量（`var(--primary-color)`）
- 响应式断点：1024px, 768px, 480px
- 组件样式使用 `<style scoped>`

---

## 常见问题

### Q: 如何添加新的打字练习关卡？
A: 编辑 `src/components/TypingPractice/TypingPractice.vue`，在 `levels` 数组中添加新对象。

### Q: 如何修改主题颜色？
A: 编辑 `src/assets/styles/variables.css`，修改 `--primary-color` 等变量。

### Q: Piston API 不支持什么？
A: 仅支持 Python 标准库，不支持 numpy、pandas 等第三方库。

---

## 下一步开发

### 打字练习功能扩展

#### 已实现功能 ✅
- **双模式练习系统**
  - 单词模式：PY2课程单词关卡（L7-1 至 L8-4）
  - 代码模式：Python代码模板练习（支持Tab缩进）
- **虚拟键盘交互**
  - QWERTY标准键盘布局
  - 实时按键反馈（正确/错误状态）
  - 300ms自动恢复机制
- **统计与排行榜**
  - 实时统计：字母/分钟、准确率、用时
  - 成绩排行榜：前5名历史记录
  - 完成报告：速度对比、鼓励话术
- **公共区域打字练习** (`/typing`)
  - 随机从课程题库选题
  - 单词模式：8个课程关卡随机抽取
  - 代码模式：模板池随机抽取（支持难度选择）
  - 持久化排行榜（跨练习保留）

#### 待扩展功能 📋

**1. 中文打字练习（未来需求）**
- 难度：★★★★☆（中等）
- 方案：创建独立的中文打字模块
- 功能要点：
  - IME（输入法）事件处理
  - 拼音输入反馈
  - 整体匹配而非逐字符匹配
  - 切换按钮：英文 ↔ 中文
  - 统计单位：字/分钟
- 技术挑战：
  - 中文输入法的compositionstart/compositionend事件
  - 拼音预览状态的正确判断
  - 避免输入法候选词窗口干扰

---

### 课程体系开发

参考 [HeTaoLearningPark.md](HeTaoLearningPark.md) 中的"第二阶段：课程内容"计划：
- 课程体系卡片组件
- 每日一练组件
- YCL专区组件
- 18个单元数据结构设计
