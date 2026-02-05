/**
 * 课程统一配置文件
 * 包含所有阶段、单元、课次的元数据
 */

// 阶段配置
export const stageConfig = {
  PY1: {
    id: 'PY1',
    name: 'Python 入门基础',
    description: '学习Python基础知识，掌握编程入门技能',
    units: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6']
  },
  PY2: {
    id: 'PY2',
    name: 'Python 进阶编程',
    description: '深入学习Python进阶概念，提升编程能力',
    units: ['L7', 'L8', 'L9', 'L10', 'L11', 'L12']
  },
  PY3: {
    id: 'PY3',
    name: 'Python 高级应用',
    description: '掌握Python高级特性，进行实战项目开发',
    units: ['L13', 'L14', 'L15', 'L16', 'L17', 'L18']
  }
}

// 单元配置
export const unitConfig = {
  // PY1 单元
  L1: { id: 'L1', name: 'Level 1', description: '基础语法入门' },
  L2: { id: 'L2', name: 'Level 2', description: '变量与数据类型' },
  L3: { id: 'L3', name: 'Level 3', description: '条件判断' },
  L4: { id: 'L4', name: 'Level 4', description: '循环结构' },
  L5: { id: 'L5', name: 'Level 5', description: '列表与字符串' },
  L6: { id: 'L6', name: 'Level 6', description: '综合练习' },

  // PY2 单元
  L7: { id: 'L7', name: 'Level 7', description: '字符串与列表操作' },
  L8: { id: 'L8', name: 'Level 8', description: '函数进阶' },
  L9: { id: 'L9', name: 'Level 9', description: '字典与集合' },
  L10: { id: 'L10', name: 'Level 10', description: '文件操作' },
  L11: { id: 'L11', name: 'Level 11', description: '异常处理' },
  L12: { id: 'L12', name: 'Level 12', description: '模块与包' },

  // PY3 单元
  L13: { id: 'L13', name: 'Level 13', description: '面向对象编程' },
  L14: { id: 'L14', name: 'Level 14', description: '类与对象进阶' },
  L15: { id: 'L15', name: 'Level 15', description: '常用算法' },
  L16: { id: 'L16', name: 'Level 16', description: '数据结构' },
  L17: { id: 'L17', name: 'Level 17', description: '项目实战（上）' },
  L18: { id: 'L18', name: 'Level 18', description: '项目实战（下）' }
}

// 辅助函数：获取阶段名称
export function getStageName(stageId) {
  return stageConfig[stageId]?.name || stageId
}

// 辅助函数：获取单元信息
export function getUnitInfo(unitId) {
  return unitConfig[unitId] || { id: unitId, name: `Level ${unitId}`, description: '' }
}

// 辅助函数：获取单元内的课次列表
export function getUnitLessons(unitId) {
  return ['1', '2', '3', '4'].map(num => `${unitId}-${num}`)
}

export default { stageConfig, unitConfig, getStageName, getUnitInfo, getUnitLessons }
