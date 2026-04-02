/**
 * YCL五级基础练习（一）
 *
 * 本套卷包含：单选题15题（每题2分，共30分）
 *             多选题5题（每题3分，共15分）
 *             编程题4题（共55分）
 * 总分：100分  时长：90分钟
 */

export const practiceSet = {
  meta: {
    id: 'level5-basic-1',
    level: 'level5',
    difficulty: 'basic',
    name: '五级基础练习（一）',
    description: '涵盖五级必考知识点的基础练习',
    duration: 90,
    totalScore: 100,
    createdAt: '2026-03-28',
    version: '1.0'
  },

  questions: [
    // ==================== 单选题（15题，每题2分，共30分）====================
    {
      id: 'q-5-1-single-1',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'easy',
      question: "已知 st = 'APPLE'，下列哪个选项的值是字符 'P'？",
      code: null,
      options: [
        'st[0]',
        'st[1]',
        'st(0)',
        'st(1)'
      ],
      answer: 1,
      explanation: "在Python中，字符串的索引使用方括号[]，索引从0开始。st = 'APPLE'中，索引1对应的字符是'P'。"
    },
    {
      id: 'q-5-1-single-2',
      type: 'single-choice',
      knowledgePoint: 'kp-5-4',
      score: 2,
      difficulty: 'easy',
      question: '执行下列程序，输出是什么？',
      code: `str1 = '红,黄,蓝,绿'
str1 = str1.split(',')
print(str1)`,
      options: [
        '"红 黄 蓝 绿"',
        "['红 黄 蓝 绿']",
        '"红","黄","蓝","绿"',
        "['红', '黄', '蓝', '绿']"
      ],
      answer: 3,
      explanation: "split(',')方法按逗号分割字符串，返回一个列表['红', '黄', '蓝', '绿']。"
    },
    {
      id: 'q-5-1-single-3',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'easy',
      question: "运行下列代码，输出结果是什么？",
      code: `s = 'dog'
for j in range(3):
    print(j, s[j])`,
      options: [
        '1 d\n2 o\n3 g',
        'd 1\no 2\ng 3',
        '0 d\n1 o\n2 g',
        'd 0\no 1\ng 2'
      ],
      answer: 2,
      explanation: "range(3)生成0、1、2，循环中j依次取这三个值，s[j]分别是'd'、'o'、'g'，所以输出0 d、1 o、2 g。"
    },
    {
      id: 'q-5-1-single-4',
      type: 'single-choice',
      knowledgePoint: 'kp-5-5',
      score: 2,
      difficulty: 'easy',
      question: "已知水果列表 fruits = ['苹果', '香蕉', '橙子']，想要把其中的'香蕉'改为'葡萄'，应该怎样书写程序？",
      code: null,
      options: [
        "fruits[1] = '葡萄'",
        "fruits[2] = '葡萄'",
        "葡萄 = fruits[1]",
        "葡萄 = fruits[2]"
      ],
      answer: 0,
      explanation: "在列表中，元素的索引从0开始。fruits列表中，'苹果'索引为0，'香蕉'索引为1，所以修改'香蕉'为'葡萄'需用fruits[1] = '葡萄'。"
    },
    {
      id: 'q-5-1-single-5',
      type: 'single-choice',
      knowledgePoint: 'kp-5-2',
      score: 2,
      difficulty: 'easy',
      question: '小Q统计了他五天内每天的跑步距离（单位：公里），存储在列表 s = [3, 5, 2, 4, 6] 中，下列哪个选项可以表示这五天内他的总跑步距离？',
      code: null,
      options: [
        'max(s)',
        'min(s)',
        'len(s)',
        'sum(s)'
      ],
      answer: 3,
      explanation: 'sum(s)用于计算列表中所有元素的总和，题目要求的总跑步距离即五天跑步距离的总和。'
    },
    {
      id: 'q-5-1-single-6',
      type: 'single-choice',
      knowledgePoint: 'kp-5-8',
      score: 2,
      difficulty: 'medium',
      question: "变量 t 的值是 '105'，以下哪个操作能将 t 转换为整数 105？",
      code: null,
      options: [
        't = str(t)',
        't = int(t)',
        'str(t)',
        'int(t)'
      ],
      answer: 1,
      explanation: "int()函数的作用是将其他类型的数据转换为整数类型，t = int(t)可以将字符串'105'转换为整数105并赋值给t。"
    },
    {
      id: 'q-5-1-single-7',
      type: 'single-choice',
      knowledgePoint: 'kp-5-15',
      score: 2,
      difficulty: 'medium',
      question: '厨师制作蛋糕，把所需材料及用量记录在字典d中。以下代码运行结果是？',
      code: `d = {'糖': 100, '鸡蛋': 3}
d['糖'] = 80
print(d)`,
      options: [
        "{'糖': 100, '鸡蛋': 3}",
        "{'糖': 80, '鸡蛋': 3}",
        "{80, '鸡蛋': 3}",
        "{80, 3}"
      ],
      answer: 1,
      explanation: "字典d初始为{'糖': 100, '鸡蛋': 3}，然后通过d['糖'] = 80修改了键'糖'对应的值为80。"
    },
    {
      id: 'q-5-1-single-8',
      type: 'single-choice',
      knowledgePoint: 'kp-5-14',
      score: 2,
      difficulty: 'medium',
      question: '下列代码的运行结果是？',
      code: `fruits = {'草莓', '橙子', '草莓', '西瓜'}
print(len(fruits))`,
      options: [
        '3',
        '4',
        '6',
        '8'
      ],
      answer: 0,
      explanation: "Python中集合（set）的元素具有唯一性，会自动去除重复值。去重后为{'草莓', '橙子', '西瓜'}，共3个元素。"
    },
    {
      id: 'q-5-1-single-9',
      type: 'single-choice',
      knowledgePoint: 'kp-5-3',
      score: 2,
      difficulty: 'medium',
      question: '下列代码的运行结果是？',
      code: `i = 0
while i < 6:
    print('rabbit')`,
      options: [
        '没有输出',
        '输出6个"rabbit"',
        '输出1 2 3 4 5 6',
        '一直输出"rabbit"'
      ],
      answer: 3,
      explanation: 'while循环的条件是i < 6，初始i=0，但循环体中没有改变i值的语句，i始终小于6，循环会无限执行。'
    },
    {
      id: 'q-5-1-single-10',
      type: 'single-choice',
      knowledgePoint: 'kp-5-7',
      score: 2,
      difficulty: 'medium',
      question: '某餐厅推出了猜菜品价格的游戏，参与者输入一个价格进行猜测，若猜中了餐厅设定的神秘价格168元，会输出"恭喜猜对了！"并结束游戏。请选择正确代码填入横线处。',
      code: `while True:
    price = int(input())
    if price == 168:
        print('恭喜猜对了！')
        ___________
    else:
        print('差一点哦！')`,
      options: [
        'while',
        'continue',
        'break',
        'True'
      ],
      answer: 2,
      explanation: '程序需要在猜对价格时结束循环。break语句的作用是立即终止当前所在的循环。'
    },
    {
      id: 'q-5-1-single-11',
      type: 'single-choice',
      knowledgePoint: 'kp-5-13',
      score: 2,
      difficulty: 'hard',
      question: "已知 fruits = ['5', '9', '12']，下列哪个选项的值是 [5, 9, 12]？",
      code: null,
      options: [
        'int(x) for x in fruits',
        '[int(x) for x in fruits]',
        '[x for x in fruits]',
        '[for int(x) in fruits]'
      ],
      answer: 1,
      explanation: '要将列表中的字符串元素转为整数并组成新列表，需要使用列表推导式[int(x) for x in fruits]。'
    },
    {
      id: 'q-5-1-single-12',
      type: 'single-choice',
      knowledgePoint: 'kp-5-7',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是什么？',
      code: `h = ['苹果', '香蕉', '橙子', '葡萄', '西瓜']
for j in h:
    if j == '橙子':
        print('找到水果')
        break`,
      options: [
        '橙子',
        '找到水果',
        'break',
        '没有输出'
      ],
      answer: 1,
      explanation: "代码遍历列表h，当j等于'橙子'时，执行print('找到水果')并break。"
    },
    {
      id: 'q-5-1-single-13',
      type: 'single-choice',
      knowledgePoint: 'kp-5-11',
      score: 2,
      difficulty: 'hard',
      question: '已知 nums = [12, 8, 15, 4]，想要对 nums 中的元素从小到大排序，得到 [4, 8, 12, 15]，正确的选项是？',
      code: null,
      options: [
        'nums = sorted(nums)',
        'sorted(nums)',
        'nums = sorted',
        'sorted(nums) = nums'
      ],
      answer: 0,
      explanation: 'sorted()函数可对列表元素排序，默认从小到大。nums = sorted(nums)能实现将nums从小到大排序并赋值给nums。'
    },
    {
      id: 'q-5-1-single-14',
      type: 'single-choice',
      knowledgePoint: 'kp-5-2',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `s = '动作片,喜剧片,科幻片,纪录片'
f = s.split(',')
print(*f, sep='-')`,
      options: [
        '动作片,喜剧片,科幻片,纪录片',
        '动作片-喜剧片-科幻片-纪录片',
        '动作片-喜剧片-科幻片',
        '动作片喜剧片科幻片纪录片'
      ],
      answer: 1,
      explanation: "split(',')将字符串按逗号分割成列表f，print(*f, sep='-')中*f将列表元素解包，sep='-'指定分隔符为横线。"
    },
    {
      id: 'q-5-1-single-15',
      type: 'single-choice',
      knowledgePoint: 'kp-5-6',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出是什么？",
      code: `for a in range(2):
    for b in range(3):
        print('r', end='')
    print()`,
      options: [
        'rrrrrr',
        'rr\nrr',
        'rrr\nrrr',
        'rrr\nrrr\nrrr'
      ],
      answer: 2,
      explanation: '外层循环2次，每次内层循环3次输出3个r，然后换行。所以输出两行，每行3个r。'
    },

    // ==================== 多选题（5题，每题3分，共15分）====================
    {
      id: 'q-5-1-multi-1',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-1',
      score: 3,
      difficulty: 'easy',
      question: "【多选题】字符串 s 的值是 'English'，其中最后一个字符 'h' 对应的索引可以表示为？",
      code: null,
      options: [
        '7',
        '6',
        'len(s)',
        'len(s) - 1'
      ],
      answer: [1, 3],
      partialAnswer: [1],
      explanation: "字符串'English'包含7个字符，索引从0开始，最后一个字符'h'的索引是6。len(s)计算得7，len(s)-1即6。"
    },
    {
      id: 'q-5-1-multi-2',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-1',
      score: 3,
      difficulty: 'easy',
      question: "【多选题】列表 foods 的值是 ['薯条', '汉堡', '披萨', '炸鸡', '可乐']，其中最后一个元素 '可乐' 对应的索引可以表示为？",
      code: null,
      options: [
        '4',
        '5',
        '-1',
        '-2'
      ],
      answer: [0, 2],
      partialAnswer: [0],
      explanation: "列表索引从0开始，'可乐'是第5个元素，索引为4。负数索引从末尾开始，-1表示最后一个元素。"
    },
    {
      id: 'q-5-1-multi-3',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-6',
      score: 3,
      difficulty: 'medium',
      question: '【多选题】下列哪段代码会一直输出"YCL必胜"？',
      code: null,
      options: [
        'x = 5\nwhile x > 0:\n    print("YCL必胜")',
        'x = 5\nwhile x == 0:\n    print("YCL必胜")',
        'while True:\n    break\n    print("YCL必胜")',
        'x = 5\nwhile x > 0:\n    print("YCL必胜")\n    x = x + 1'
      ],
      answer: [0, 3],
      partialAnswer: [0],
      explanation: 'A选项：x初始为5且满足x>0，循环内未改变x的值，条件始终成立。D选项：x的值不断增大，永远满足循环条件x>0。'
    },
    {
      id: 'q-5-1-multi-4',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-7',
      score: 3,
      difficulty: 'medium',
      question: '【多选题】下列描述中正确的有？',
      code: null,
      options: [
        'break可以结束循环',
        'for i in range(10)不会造成无限循环',
        'continue语句可以跳出循环',
        'break只能用于跳过while循环'
      ],
      answer: [0, 1],
      partialAnswer: [0],
      explanation: 'A选项：break语句的作用是立即结束当前所在的循环，正确。B选项：range(10)生成0到9的序列，for循环会遍历这些值后结束，正确。'
    },
    {
      id: 'q-5-1-multi-5',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-6',
      score: 3,
      difficulty: 'medium',
      question: '【多选题】哪些选项对应的代码能打印出两行各4个d？',
      code: null,
      options: [
        'print("dddd")\nprint("dddd")',
        'for m in range(2):\n    for n in range(4):\n        print("d")',
        'for m in range(2):\n    for n in range(4):\n        print("d", end="")\n    print()',
        'print("ddd")\nprint("ddd")'
      ],
      answer: [0, 2],
      partialAnswer: [0],
      explanation: '选项A：两个print直接输出两行各4个d。选项C：内层循环用end=""取消自动换行，输出4个d后换行，最终输出两行各4个d。'
    },

    // ==================== 编程题（4题，共55分）====================
    {
      id: 'q-5-1-coding-1',
      type: 'coding',
      knowledgePoint: 'kp-5-2',
      score: 10,
      difficulty: 'easy',
      question: '机器人收到一串指令，指令按执行顺序排列，相邻的指令之间用"-"隔开。现在给出机器人收到的指令，请输出第一个指令。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '左转-前进3步-右转-停止', expectedOutput: '左转' },
        { input: '开始-运行-结束', expectedOutput: '开始' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能正确分割', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `a = input()
b = a.split('-')
print(b[0])`,
      explanation: '使用split("-")分割字符串，然后输出列表的第一个元素。'
    },
    {
      id: 'q-5-1-coding-2',
      type: 'coding',
      knowledgePoint: 'kp-5-2',
      score: 10,
      difficulty: 'easy',
      question: '三个传感器同时检测环境温度，每个传感器记录一个温度值（单位：摄氏度）。现在输入三个传感器记录的温度值，请输出三个温度值中最高的一个。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '22\n25\n20', expectedOutput: '25' },
        { input: '18\n15\n20', expectedOutput: '20' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取三个输入', score: 3 },
          { condition: '能正确比较', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `a1 = int(input())
a2 = int(input())
a3 = int(input())
a = [a1, a2, a3]
print(max(a))`,
      explanation: '将三个温度值存入列表，使用max()函数找出最大值。'
    },
    {
      id: 'q-5-1-coding-3',
      type: 'coding',
      knowledgePoint: 'kp-5-4',
      score: 15,
      difficulty: 'medium',
      question: '小明的书包里有若干本书，请编写程序，输入书本数量和每本书的名称，输出所有书本名称。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '3\n语文\n数学\n英语', expectedOutput: '语文\n数学\n英语' }
      ],
      scoringRules: {
        fullScore: 15,
        partialScores: [
          { condition: '能使用字典或列表', score: 5 },
          { condition: '能正确存储', score: 10 },
          { condition: '完全正确', score: 15 }
        ]
      },
      referenceAnswer: `n = int(input())
books = []
for i in range(n):
    book = input()
    books.append(book)
for book in books:
    print(book)`,
      explanation: '使用列表存储输入的书本名称，然后遍历输出。'
    },
    {
      id: 'q-5-1-coding-4',
      type: 'coding',
      knowledgePoint: 'kp-5-3',
      score: 20,
      difficulty: 'medium',
      question: '小明在收集卡片，每次输入一个正整数代表卡片上的数字，当输入0时停止收集。请编写程序，输出收集到的卡片数字之和。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '5\n3\n2\n0', expectedOutput: '10' },
        { input: '10\n20\n0', expectedOutput: '30' }
      ],
      scoringRules: {
        fullScore: 20,
        partialScores: [
          { condition: '能正确获取输入', score: 5 },
          { condition: '能使用while和break控制循环', score: 10 },
          { condition: '完全正确', score: 20 }
        ]
      },
      referenceAnswer: `total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total = total + n
print(total)`,
      explanation: '使用while True循环不断获取输入，当输入为0时用break跳出循环，累加所有非零数字。'
    }
  ],

  distribution: {
    byType: {
      'single-choice': { count: 15, totalScore: 30 },
      'multiple-choice': { count: 5, totalScore: 15 },
      'coding': { count: 4, totalScore: 55 }
    },
    byKnowledgePoint: {
      'kp-5-1': { count: 4, totalScore: 10 },
      'kp-5-2': { count: 3, totalScore: 12 },
      'kp-5-3': { count: 2, totalScore: 22 },
      'kp-5-4': { count: 2, totalScore: 17 },
      'kp-5-5': { count: 1, totalScore: 2 },
      'kp-5-6': { count: 2, totalScore: 5 },
      'kp-5-7': { count: 2, totalScore: 5 },
      'kp-5-8': { count: 1, totalScore: 2 },
      'kp-5-11': { count: 1, totalScore: 2 },
      'kp-5-13': { count: 1, totalScore: 2 },
      'kp-5-14': { count: 1, totalScore: 2 },
      'kp-5-15': { count: 1, totalScore: 2 }
    },
    byDifficulty: {
      'easy': 7,
      'medium': 9,
      'hard': 8
    }
  }
}

export default practiceSet
