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
├── index.html                 # 入口HTML
├── package.json               # 依赖配置
├── vite.config.js             # Vite配置
├── HeTaoLearningPark.md       # 主文档（架构、API详解）
├── claude.md                  # 本文件（快速上手）
└── src/
    ├── main.js                # Vue入口
    ├── App.vue                # 根组件
    ├── App.claude.md          # 根组件文档
    ├── assets/
    │   └── styles/
    │       ├── variables.css  # CSS变量系统
    │       └── claude.md      # 样式文档
    └── components/
        ├── Navigation/
        │   ├── Navigation.vue
        │   └── claude.md
        ├── HeroSection/
        │   ├── HeroSection.vue
        │   └── claude.md
        ├── TypingPractice/
        │   ├── TypingPractice.vue
        │   └── claude.md
        ├── CodeEditor/
        │   ├── CodeEditor.vue
        │   └── claude.md       # 重要的API调用文档
        └── Footer/
            ├── Footer.vue
            └── claude.md
```

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

参考 [HeTaoLearningPark.md](HeTaoLearningPark.md) 中的"第二阶段：课程内容"计划：
- 课程体系卡片组件
- 每日一练组件
- YCL专区组件
- 18个单元数据结构设计
