/**
 * PY2 阶段代码模板池（简化版 - 符合课程内容）
 *
 * 基于 PY2 课程 L7-L8 单元的实际内容
 * 缩进使用4个空格（Python PEP 8标准）
 */

export const typingTemplatesPool = {
  // 🟢 基础难度模板
  easy: [
    // L7-1: 字符串遍历基础
    'for i in s:',
    'for char in s:',

    // L7-1: split基础
    's.split(" ")',
    'text.split(",")',

    // L7-1: print基础
    'print("Hello")',
    'print(name)',
    'print(x + y)',

    // L7-2: max/min基础
    'max(scores)',
    'min(numbers)',
    'max([1, 5, 3])',

    // L7-2: float基础
    'float(12)',
    'float(x)',

    // L7-3: sum基础
    'sum(numbers)',
    'sum([1, 2, 3])',

    // 变量赋值基础
    'name = "Tom"',
    'age = 10',
    'x = 5'
  ],

  // 🟡 进阶难度模板
  medium: [
    // L7-1: 字符串遍历
    'for char in s:\n    print(char)',
    'for i in s:\n    print(i)',

    // L7-1: split进阶
    'parts = text.split(",")',
    'words = s.split(" ")',

    // L7-1: print进阶
    'print(*words)',
    'print(*list, sep="-")',

    // L7-2: index
    'list.index("item")',
    'numbers.index(5)',

    // L7-2: 列表生成式基础
    '[int(x) for x in list]',

    // L7-3: sort
    'list.sort()',
    'numbers.sort()',

    // L8-1: dict基础
    '{"name": "Tom"}',
    'dict["key"]',
    'dict.get("key")'
  ],

  // 🔴 挑战难度模板
  hard: [
    // L7-2: 列表生成式
    '[int(x) for x in list]',
    '[x * 2 for x in numbers]',

    // L7-3: sort reverse
    'list.sort(reverse=True)',

    // L8-1: dict进阶
    'dict.get("key", 0)',
    'for k, v in dict.items():\n    print(k, v)',

    // L8-2: 列表操作
    'list.append(item)',
    'list.insert(0, item)',

    // L8-3: while循环
    'while x > 0:',
    'while True:\n    break',

    // L8-4: reverse/sorted
    'list.reverse()',
    'sorted(list)'
  ]
}

/**
 * 随机抽取代码模板
 * @param {number} count - 抽取数量
 * @param {string} difficulty - 难度: 'all' | 'easy' | 'medium' | 'hard'
 * @returns {string[]} 随机抽取的模板列表
 */
export function getRandomTemplates(count = 10, difficulty = 'all') {
  let pool = []

  if (difficulty === 'all') {
    pool = [
      ...typingTemplatesPool.easy,
      ...typingTemplatesPool.medium,
      ...typingTemplatesPool.hard
    ]
  } else {
    pool = typingTemplatesPool[difficulty] || []
  }

  // Fisher-Yates 洗牌算法
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, Math.min(count, shuffled.length))
}

export default typingTemplatesPool
