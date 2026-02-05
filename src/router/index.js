import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 瞬间滚动到顶部，不使用 smooth 动画避免闪烁
    return { top: 0 }
  }
})

export default router
