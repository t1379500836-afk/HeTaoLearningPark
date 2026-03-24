import { createRouter, createWebHistory } from 'vue-router'

// 基础路由配置（无前缀，完整访问）
const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/levels',
    name: 'course-levels',
    component: () => import('@/views/CourseLevelsView.vue')
  },
  {
    path: '/levels/:stage',
    name: 'stage',
    component: () => import('@/views/StageView.vue'),
    props: true
  },
  {
    path: '/levels/:stage/:unit',
    name: 'unit',
    component: () => import('@/views/UnitView.vue'),
    props: true
  },
  {
    path: '/lesson/:stage/:unit/:lesson',
    name: 'lesson',
    component: () => import('@/views/LessonView.vue'),
    props: true
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('@/views/PracticeView.vue')
  },
  {
    path: '/typing',
    name: 'typing',
    component: () => import('@/views/TypingView.vue')
  },
  {
    path: '/python',
    name: 'python',
    component: () => import('@/views/PythonIDEView.vue')
  },
  {
    path: '/ycl',
    name: 'ycl',
    component: () => import('@/views/YCLZoneView.vue')
  },
  {
    path: '/locked',
    name: 'locked',
    component: () => import('@/components/shared/StageLocked.vue')
  }
]

// 为带前缀的路由生成路由配置
function createPrefixedRoutes(prefix) {
  return [
    {
      path: `/${prefix}`,
      name: `${prefix}-home`,
      component: () => import('@/views/HomeView.vue'),
      props: { prefix }
    },
    {
      path: `/${prefix}/levels`,
      name: `${prefix}-course-levels`,
      component: () => import('@/views/CourseLevelsView.vue'),
      props: { prefix }
    },
    {
      path: `/${prefix}/levels/:stage`,
      name: `${prefix}-stage`,
      component: () => import('@/views/StageView.vue'),
      props: true
    },
    {
      path: `/${prefix}/levels/:stage/:unit`,
      name: `${prefix}-unit`,
      component: () => import('@/views/UnitView.vue'),
      props: true
    },
    {
      path: `/${prefix}/lesson/:stage/:unit/:lesson`,
      name: `${prefix}-lesson`,
      component: () => import('@/views/LessonView.vue'),
      props: true
    },
    {
      path: `/${prefix}/practice`,
      name: `${prefix}-practice`,
      component: () => import('@/views/PracticeView.vue'),
      props: { prefix }
    },
    {
      path: `/${prefix}/typing`,
      name: `${prefix}-typing`,
      component: () => import('@/views/TypingView.vue'),
      props: { prefix }
    },
    {
      path: `/${prefix}/python`,
      name: `${prefix}-python`,
      component: () => import('@/views/PythonIDEView.vue'),
      props: { prefix }
    },
    {
      path: `/${prefix}/ycl`,
      name: `${prefix}-ycl`,
      component: () => import('@/views/YCLZoneView.vue'),
      props: { prefix }
    },
    {
      path: `/${prefix}/locked`,
      name: `${prefix}-locked`,
      component: () => import('@/components/shared/StageLocked.vue'),
      props: { prefix }
    }
  ]
}

// 合并所有路由：基础路由 + 三个前缀路由
const routes = [
  ...baseRoutes,
  ...createPrefixedRoutes('p1'),
  ...createPrefixedRoutes('py2'),
  ...createPrefixedRoutes('python3')
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 瞬间滚动到顶部，不使用 smooth 动画避免闪烁
    return { top: 0 }
  }
})

export default router
