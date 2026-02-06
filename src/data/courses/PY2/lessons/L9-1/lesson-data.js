/**
 * PY2 课程 L9-1: 一念之间
 *
 * 核心知识点:
 * 1. continue语句（跳过当前循环）
 * 2. break与continue的区别
 */

// 单词卡数据
export const vocabData = [
  {
    word: 'continue',
    pronunciation: '[kan-tinju:]',
    partOfSpeech: 'v.',
    meaning: '继续；持续；延伸',
    level: 'easy',
    example: 'Please continue with your work.',
    exampleTranslation: '请继续你的工作。'
  },
  {
    word: 'road',
    pronunciation: '[roud]',
    partOfSpeech: 'n.',
    meaning: '道路；公路；途径',
    level: 'easy',
    example: 'There is a long road ahead.',
    exampleTranslation: '前方的路还很长。'
  },
  {
    word: 'select',
    pronunciation: '[sr-lekt]',
    partOfSpeech: 'v.',
    meaning: '选择；挑选',
    level: 'medium',
    example: 'Please select your favorite color.',
    exampleTranslation: '请选择你最喜欢的颜色。'
  },
  {
    word: 'bomb',
    pronunciation: '[bpm]',
    partOfSpeech: 'n.',
    meaning: '炸弹；彻底的失败',
    level: 'hard',
    example: 'The bomb exploded with a loud noise.',
    exampleTranslation: '炸弹发出巨响爆炸了。'
  }
]

// 知识点数据
export const knowledgePoints = [
  {
    id: 'kp-1',
    title: '神奇的跳过 - continue语句',
    emoji: '⏭️',
    gradeLevel: '1-2',
    summary: '在循环中跳过当前这一次，继续下一次',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '想象你在数数，但是遇到数字3的时候，你就不说话，直接跳过，继续数下一个数。continue语句就是这样一个神奇的"跳过卡"！',
      concept: 'continue语句用在循环里面，当程序执行到continue时，会跳过后面所有的代码，直接进入下一次循环。',
      syntax: 'for 变量 in 序列:\n    if 条件:\n        continue  # 跳过本次循环\n    # 要执行的代码',
      example: {
        title: '跳过数字3',
        code: '# 打印1-5，但跳过3\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)',
        output: '1\n2\n4\n5',
        explanation: '当i等于3时，执行continue语句，跳过print(i)，直接进入下一次循环。所以3没有被打印出来。'
      },
      practice: [
        {
          question: 'continue语句会结束整个循环吗？',
          answer: '不会，它只跳过当前这一次循环'
        },
        {
          question: 'continue应该在什么地方使用？',
          answer: '在循环（for或while）里面使用'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '在游戏中，你可能会遇到一些不想处理的卡片或道具。使用continue，你可以优雅地跳过它们，专注于处理你想要的内容！',
      concept: 'continue是循环控制语句，它不会结束循环，而是跳过当前迭代中continue之后的代码，让循环进入下一轮。',
      syntax: 'for item in list:\n    if 不想处理的条件:\n        continue\n    # 处理想要的代码',
      example: {
        title: '只打印偶数',
        code: '# 只打印2-10之间的偶数\nfor i in range(2, 11):\n    if i % 2 == 1:\n        continue  # 奇数就跳过\n    print(i)',
        output: '2\n4\n6\n8\n10',
        explanation: '用i % 2 == 1判断是否为奇数，如果是奇数就用continue跳过，只处理偶数的情况。'
      },
      practice: [
        {
          question: 'continue和break有什么主要区别？',
          answer: 'continue跳过当前循环，break结束整个循环'
        },
        {
          question: 'continue后面写的代码会执行吗？',
          answer: '不会，continue后面的代码会被跳过'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '高级过滤模式！continue是数据筛选和过滤的重要工具，结合条件判断，可以实现复杂的数据处理逻辑。',
      concept: 'continue在循环中起到"过滤器"的作用，让程序可以高效地跳过不需要处理的数据，专注于符合条件的内容。',
      syntax: '# 数据过滤模式\nfor data in dataset:\n    if not 符合条件:\n        continue\n    # 处理符合条件的数据',
      example: {
        title: '筛选及格成绩',
        code: '# 只处理及格的成绩（>=60分）\nscores = [45, 78, 92, 56, 88, 73]\npassed = 0\nfor s in scores:\n    if s < 60:\n        continue  # 不及格就跳过\n    passed += 1\n    print(f"及格: {s}分")\nprint(f"共{passed}人及格")',
        output: '及格: 78分\n及格: 92分\n及格: 88分\n及格: 73分\n共4人及格',
        explanation: '用continue跳过不及格的成绩，只统计和显示及格的分数，这是数据过滤的经典应用。'
      },
      practice: [
        {
          question: '如何在列表中找到第一个满足条件的元素后停止？',
          answer: '使用break而不是continue'
        },
        {
          question: 'continue能用在非循环语句中吗？',
          answer: '不能，continue只能在循环（for/while）中使用'
        }
      ]
    }
  },

  {
    id: 'kp-2',
    title: '一念之间 - break与continue',
    emoji: '🎮',
    gradeLevel: '1-2',
    summary: '对比break和continue的区别',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '想象你在玩一个闯关游戏！break就像"退出游戏"，continue就像"跳过这一关，玩下一关"。两个虽然都能让你不继续当前的事，但效果很不一样！',
      concept: 'break会结束整个循环，continue只跳过当前这一次循环。它们的区别就像"回家"和"跳过这一站"的区别。',
      syntax: '# break: 结束整个循环\nif 条件:\n    break\n\n# continue: 跳过本次循环\nif 条件:\n    continue',
      example: {
        title: '对比break和continue',
        code: '# 使用break\nfor i in range(5):\n    if i == 2:\n        break\n    print(i)  # 输出: 0, 1\n\n# 使用continue\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 输出: 0, 1, 3, 4',
        output: 'break输出: 0 1\ncontinue输出: 0 1 3 4',
        explanation: 'break在i=2时结束整个循环，只输出0和1；continue跳过i=2，继续输出3和4。'
      },
      practice: [
        {
          question: 'break和continue都在哪里使用？',
          answer: '都在循环中使用'
        },
        {
          question: '想结束整个循环用哪个？',
          answer: '用break'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '在寻宝游戏中，打开宝箱可能有三种结果：金币（加分）、炸弹（游戏结束）、空箱子（无事发生）。用break处理炸弹，用continue处理空箱子！',
      concept: 'break和continue都是循环控制语句，但作用不同：break彻底退出循环，continue跳过当前迭代进入下一次。',
      syntax: '# 游戏逻辑示例\nfor box in boxes:\n    if box == "炸弹":\n        break  # 游戏结束\n    if box == "空箱":\n        continue  # 跳过\n    # 处理金币',
      example: {
        title: '宝箱游戏',
        code: '# 模拟宝箱游戏\nboxes = ["金币", "金币", "空箱", "炸弹", "金币"]\nscore = 0\nfor box in boxes:\n    if box == "炸弹":\n        print("踩到炸弹，游戏结束！")\n        break\n    if box == "空箱":\n        print("空箱子，跳过！")\n        continue\n    score += 50\n    print(f"获得金币！分数: {score}")',
        output: '获得金币！分数: 50\n获得金币！分数: 100\n空箱子，跳过！\n踩到炸弹，游戏结束！',
        explanation: '遇到"金币"加分，遇到"空箱"用continue跳过，遇到"炸弹"用break结束游戏。'
      },
      practice: [
        {
          question: '如果循环中同时有break和continue，哪个先执行？',
          answer: '看条件，谁的条件先满足就执行谁'
        },
        {
          question: 'continue会重置循环变量吗？',
          answer: '不会，它只是跳到下一次循环'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '算法设计中的控制流艺术！break和continue是优化算法效率的重要工具，合理使用可以避免不必要的计算。',
      concept: 'break用于提前终止循环（找到目标、触发终止条件），continue用于跳过无效迭代（过滤数据、跳过特殊情况）。',
      syntax: '# 搜索模式\nfor item in items:\n    if 找到目标:\n        break  # 提前退出\n    if 不需要处理:\n        continue  # 跳过\n    # 处理逻辑',
      example: {
        title: '搜索第一个符合条件的数',
        code: '# 在列表中找第一个大于100的数\nnumbers = [23, 45, 67, 89, 156, 234, 12]\nfor i, num in enumerate(numbers):\n    if num < 100:\n        continue  # 小于100的跳过\n    print(f"第一个大于100的数在索引{i}，值是{num}")\n    break  # 找到了就退出',
        output: '第一个大于100的数在索引4，值是156',
        explanation: '用continue跳过小于100的数，找到第一个大于100的数后用break退出循环，避免不必要的遍历。'
      },
      practice: [
        {
          question: '嵌套循环中break会退出几层循环？',
          answer: '只退出break所在的那一层循环'
        },
        {
          question: '如何同时退出多层嵌套循环？',
          answer: '可以用标志变量，或者在外层循环条件判断'
        }
      ]
    }
  }
]

// 习题数据（编程 × 数学融合）
export const exercises = [
  // 🟢 基础题（1-2年级）
  {
    id: 'ex-1',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '数数',
    question: '执行下面的代码，会输出什么？\n\n```python\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)\n```',
    options: [
      '0\n1\n2\n3\n4',
      '0\n1\n3\n4',
      '0\n1\n2'
    ],
    answer: 1, // B
    explanation: 'continue语句会跳过i=2的那一次循环，不执行print(i)，所以输出是0、1、3、4，不包含2。\n\n数学知识：这就像数数时跳过某个数字，继续数后面的。',
    hint: 'continue会跳过i==2时的打印'
  },
  {
    id: 'ex-2',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '找规律',
    question: '下面的代码会输出几行？\n\n```python\nfor i in range(4):\n    if i % 2 == 0:\n        continue\n    print(i)\n```',
    options: [
      '4行',
      '2行',
      '0行'
    ],
    answer: 1, // B
    explanation: 'i的值是0,1,2,3。当i是偶数(0,2)时执行continue跳过，只打印奇数(1,3)，所以输出2行。\n\n数学知识：奇数是不能被2整除的数，偶数是能被2整除的数。',
    hint: 'i % 2 == 0 表示i是偶数'
  },

  // 🟡 进阶题（3-4年级）
  {
    id: 'ex-3',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '逻辑推理',
    question: '看下面的代码，最后输出什么？\n\n```python\nfor i in range(6):\n    if i > 3:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)\n```',
    options: [
      '1\n3',
      '0\n1\n2\n3',
      '1\n2\n3'
    ],
    answer: 0, // A
    explanation: 'i从0开始：i=0是偶数跳过，i=1打印，i=2是偶数跳过，i=3打印，i=4时满足i>3执行break结束循环。\n\n输出：1\\n3\\n\n数学知识：这是逻辑推理，需要理解多个条件的执行顺序。',
    hint: '先看continue会跳过哪些，再看break什么时候执行'
  },
  {
    id: 'ex-4',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '条件判断',
    question: '执行下方代码，输出结果是？\n\n```python\nsum = 0\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    sum += i\nprint(sum)\n```',
    options: [
      '15',
      '12',
      '9'
    ],
    answer: 1, // B
    explanation: '循环i从1到5，当i=3时执行continue跳过sum+=i，所以sum = 1+2+4+5 = 12。\n\n数学知识：连续数求和公式：(1+5)×5÷2=15，减去跳过的3，得到12。',
    hint: 'continue跳过了i=3，所以没有加3'
  },

  // 🔴 挑战题（5-6年级）
  {
    id: 'ex-5',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '算法逻辑',
    question: '猴赛雷正在玩数字游戏，规则如下：\n① 当数字为奇数时，跳过不说\n② 当数字到8时，游戏停止\n\n从1开始依次说数字，最后会说哪些数字？\n\n```python\nfor i in range(1, 11):\n    if i % 2 == 1:\n        continue\n    if i == 8:\n        break\n    print(i)\n```',
    options: [
      '2\n4\n6',
      '2\n4\n6\n8',
      '1\n3\n5\n7'
    ],
    answer: 0, // A
    explanation: 'i从1到10：i=1,3,5,7是奇数被continue跳过；i=2,4,6打印；i=8时执行break结束循环。\n\n输出：2\\n4\\n6\\n\n数学知识：奇数不能被2整除（i%2==1），偶数能被2整除。',
    hint: '注意：break在打印之前执行，所以8不会打印'
  },
  {
    id: 'ex-6',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '综合应用',
    question: '小明在列表中查找数字7的位置，下面代码会输出什么？\n\n```python\nnumbers = [3, 5, 2, 7, 9, 7, 4]\nfor i in range(len(numbers)):\n    if numbers[i] != 7:\n        continue\n    print(i)\n    break\n```',
    options: [
      '0\n3',
      '3',
      '3\n5'
    ],
    answer: 1, // B
    explanation: 'continue跳过不等于7的元素，找到第一个7时（索引3），打印3后用break退出循环。\n\n数学知识：索引从0开始计数，7在列表中第4个位置（索引3）。',
    hint: 'break在打印之后，所以找到第一个7就停止了'
  }
]

// 课次元数据
export const lessonMeta = {
  id: 'L9-1',
  title: '一念之间',
  subtitle: '学会continue和break控制循环',
  difficulty: '进阶',
  estimatedTime: '30-45分钟',
  learningGoals: [
    '理解continue语句的作用和用法',
    '掌握break语句的区别和应用场景',
    '学会在循环中使用条件判断',
    '能用编程解决游戏中的控制逻辑问题'
  ],
  prerequisites: [
    'Python基础语法',
    'for循环和while循环',
    'if条件判断',
    '列表基础操作'
  ]
}

// 打字练习单词（按难度分组）
export const typingWords = {
  easy: ['continue', 'break', 'loop', 'skip'],
  medium: ['control', 'condition', 'iterate', 'search'],
  hard: ['terminate', 'iteration', 'condition', 'statement']
}

// 代码模板练习（按难度分组）
// 缩进使用4个空格（Python PEP 8标准）
export const typingTemplates = {
  easy: [
    // 简单单行代码 - continue和break
    'continue',
    'break',
    'if i % 2 == 1:',
    'if value == 0:',
    'if found:\n    break',
    'for i in range(10):'
  ],
  medium: [
    // 包含缩进的多行代码
    'if i % 2 == 1:\n    continue',
    'if value == target:\n    break',
    'for i in range(len(list)):',
    'while True:\n    if condition:\n        break',
    'for item in items:\n    if item == key:\n        break'
  ],
  hard: [
    // 复杂的多行代码
    'for i in range(len(list)):\n    if list[i] == target:\n        print(i)\n        break',
    'while True:\n    value = get_value()\n    if value is None:\n        break',
    'for i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i)',
    'while count < 3:\n    if found:\n        break\n    count += 1'
  ]
}

// 导出所有数据
export const L9_1_data = {
  meta: lessonMeta,
  vocab: vocabData,
  knowledgePoints,
  exercises,
  typingWords,
  typingTemplates
}

export default L9_1_data
