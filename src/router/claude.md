# Vue Router 配置文档

## 概述

应用使用 Vue Router 4 实现单页面应用（SPA）的多页面导航，支持完整的课程体系学习流程。

---

## 路由配置

### 路由列表

| 路由模式 | 组件 | 说明 | Props |
|---------|------|------|-------|
| `/` | HomeView | 首页，快速入口卡片 | - |
| `/levels` | CourseLevelsView | 阶段选择（PY1/PY2/PY3） | - |
| `/levels/:stage` | StageView | 单元选择（L1-L6） | stage |
| `/levels/:stage/:unit` | UnitView | 课时选择（4课时/单元） | stage, unit |
| `/lesson/:stage/:unit/:lesson` | LessonView | 课时主页面 | stage, unit, lesson |
| `/practice` | PracticeView | 课后练习（每日一练） | - |
| `/typing` | TypingView | 独立打字练习 | - |
| `/python` | PythonIDEView | 独立Python编辑器 | - |
| `/ycl` | YCLZoneView | YCL专区 | - |

### 路由参数说明

- `stage`: 阶段代码（PY1、PY2、PY3）
- `unit`: 单元代码（L1 ~ L18）
- `lesson`: 课时代码（如 L1-1、L1-2 等）

---

## 代码结构

### router/index.js

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  // ... 其他路由配置
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }  // 路由切换时滚动到顶部
  }
})

export default router
```

### main.js 集成

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

---

## 导航实现

### Navigation.vue

使用 `<router-link>` 实现路由跳转：

```vue
<template>
  <nav>
    <router-link to="/">首页</router-link>
    <router-link to="/levels">课程体系</router-link>
    <!-- ... -->
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// 判断路由是否激活
const isActive = (to) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>
```

### 编程式导航

```javascript
import { useRouter } from 'vue-router'

const router = useRouter()

// 跳转到课程页面
router.push('/levels')

// 跳转到课时页面（带参数）
router.push(`/lesson/${stage}/${unit}/${lesson}`)
```

---

## 滚动行为

路由切换时自动滚动到页面顶部：

```javascript
scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition  // 恢复滚动位置
  return { top: 0 }  // 滚动到顶部
}
```

---

## 懒加载

所有页面组件使用动态导入实现代码分割：

```javascript
component: () => import('@/views/HomeView.vue')
```

这样可以：
- 减少初始加载时间
- 按需加载页面组件
- 优化用户体验

---

## 路径别名

配置文件 `vite.config.js` 中定义了 `@` 别名指向 `src` 目录：

```javascript
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```

使用示例：
```javascript
import HomeView from '@/views/HomeView.vue'
import Navigation from '@/components/shared/Navigation.vue'
```
