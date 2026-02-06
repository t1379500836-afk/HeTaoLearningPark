# 核桃编程学习平台 - 文档中心

> 本项目为核桃编程学生提供的课后学习巩固网站，包含打字练习、Python在线编辑器等功能。

**技术栈**: Vue 3 + Vite + Vue Router + Skulpt（浏览器内Python运行时）

---

## 目录

- [快速开始](#快速开始)
- [文档导航](#文档导航)
- [项目概览](#项目概览)

---

## 快速开始

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 构建生产版本
npm run build
```

访问 http://localhost:5173

---

## 文档导航

| 文档 | 说明 | 适用场景 |
|------|------|----------|
| [01-项目结构](./01-PROJECT-STRUCTURE.md) | 目录结构、路由表、组件关系 | 理解项目架构 |
| [02-功能需求](./02-FUNCTIONALITY.md) | 技术选型、功能清单、已知限制 | 了解功能边界 |
| [03-前端布局](./03-FRONTEND-LAYOUT.md) | CSS变量、响应式、页面跳转 | UI开发和样式调整 |
| [04-打字练习](./04-TYPING-PRACTICE.md) | 打字练习实现详解 | 打字功能开发维护 |
| [05-课程资料](./05-COURSE-MATERIALS.md) | 课程资料提取、命名规范 | **核心：新增课程内容** |

---

## 项目概览

### 技术选型

| 技术 | 版本 | 说明 |
|------|------|------|
| 前端框架 | Vue 3.4.0 | 组件化开发 |
| 路由 | Vue Router 4.6.4 | 多页面应用路由 |
| 构建工具 | Vite 5.0.0 | 官方推荐，开发体验好 |
| 代码编辑器 | CodeMirror 5.65.13 | 通过CDN引入 |
| 代码执行 | Skulpt 1.2.0 | 浏览器内Python运行时 |

### 核心功能

- **Python在线编辑器**：集成 CodeMirror，支持 Python 语法高亮，通过 Skulpt 本地执行
- **打字练习模块**：
  - 英文打字：单词模式 + 代码模式，虚拟键盘反馈，排行榜
  - 中文打字：古诗 + 成语练习，整体匹配方式
  - 代码模板池：L7-L12 课程模板聚合，按难度分级
- **课程体系**：3个阶段（PY1/PY2/PY3），18个单元，72次课

### 路由结构

| 路由 | 组件 | 说明 |
|------|------|------|
| `/` | HomeView | 首页 |
| `/levels` | CourseLevelsView | 阶段选择（PY1/PY2/PY3） |
| `/levels/:stage` | StageView | 单元选择（L1-L18） |
| `/levels/:stage/:unit` | UnitView | 课时选择 |
| `/lesson/:stage/:unit/:lesson` | LessonView | 课时主页面 |
| `/typing` | TypingView | 独立打字练习 |
| `/python` | PythonIDEView | 独立Python编辑器 |

---

## 开发规范

### CSS使用规范
- 优先使用 CSS 变量（`var(--primary-color)`）
- 响应式断点：1024px, 768px, 480px
- 组件样式使用 `<style scoped>`

### 响应式设计
- 支持设备：电脑、平板、手机、学习机
- 移动端触控区域最小 44×44px
- 避免固定像素，使用 rem/em 相对单位

---

## 常见问题

### Python编辑器限制
- 支持标准库：print、input、math、random、json、turtle 等
- **不支持**第三方库：numpy、pandas 等
- 在 `while True` 等无限循环中使用 input() 可能导致无法停止

---

## 相关链接

- [根目录 README](../README.md)
- [Claude 开发指南](../claude.md) - AI助手专用
