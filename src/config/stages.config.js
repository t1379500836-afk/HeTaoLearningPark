// 阶段解锁配置
// 老师部署时修改此文件即可控制哪些阶段对学生可见

export const stagesConfig = {
  PY1: {
    unlocked: true,           // PY1 解锁
    unlockCode: null           // 预留：访问码功能（可扩展）
  },
  PY2: {
    unlocked: true,           // PY2 解锁（开发模式）
    unlockCode: null
  },
  PY3: {
    unlocked: true,           // PY3 解锁（开发模式）
    unlockCode: null
  }
}

// 获取所有阶段的配置信息
export function getAllStages() {
  return Object.entries(stagesConfig).map(([key, config]) => ({
    id: key,
    ...config
  }))
}

// 检查阶段是否解锁
export function isStageUnlocked(stageId) {
  return stagesConfig[stageId]?.unlocked || false
}

// 获取已解锁的阶段列表
export function getUnlockedStages() {
  return Object.entries(stagesConfig)
    .filter(([_, config]) => config.unlocked)
    .map(([key, _]) => key)
}
