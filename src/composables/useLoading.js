/**
 * useLoading - 全局加载状态管理
 *
 * 用于控制页面切换时的全局 loading 动画
 */

import { ref } from 'vue'

// 全局 loading 状态（单例模式）
const isLoading = ref(false)
const loadingText = ref('加载中...')

// 最小显示时间控制
let loadingStartTime = 0
const MIN_DISPLAY_TIME = 300 // 最小显示 300ms，避免闪烁

/**
 * 显示全局 loading
 * @param {string} text - loading 提示文字
 */
export function showLoading(text = '加载中...') {
  loadingText.value = text
  isLoading.value = true
  loadingStartTime = Date.now()
}

/**
 * 隐藏全局 loading（保证最小显示时间）
 */
export function hideLoading() {
  const elapsed = Date.now() - loadingStartTime
  const remainingTime = MIN_DISPLAY_TIME - elapsed

  if (remainingTime > 0) {
    // 还没达到最小显示时间，延迟隐藏
    setTimeout(() => {
      isLoading.value = false
    }, remainingTime)
  } else {
    isLoading.value = false
  }
}

/**
 * 强制立即隐藏（不等待最小显示时间）
 */
export function forceHideLoading() {
  isLoading.value = false
}

/**
 * 获取 loading 状态的 composable
 */
export function useLoading() {
  return {
    isLoading,
    loadingText,
    showLoading,
    hideLoading,
    forceHideLoading
  }
}

export default useLoading
