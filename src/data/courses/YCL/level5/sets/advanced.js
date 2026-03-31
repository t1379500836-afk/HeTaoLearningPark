/**
 * YCL五级进阶练习
 *
 * 本套卷包含：单选题15题（每题2分，共30分）
 *             多选题5题（每题3分，共15分）
 *             编程题4题（共55分）
 * 总分：100分  时长：90分钟
 */

export const practiceSet = {
  meta: {
    id: 'level5-advanced',
    level: 'level5',
    difficulty: 'advanced',
    name: '五级进阶练习',
    description: '五级进阶练习套卷，难度较高',
    duration: 90,
    totalScore: 100,
    createdAt: '2026-03-31',
    version: '1.0'
  },

  questions: [
    // ==================== 单选题（15题，每题2分，共30分）====================
    {
      id: 'q-5-adv-single-1',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'medium',
      question: "运行下列代码，输出结果是？",
      code: `s = 'ABCDEF'
print(s[-3])`,
      options: [
        'C',
        'D',
        'E',
        '程序报错'
      ],
      answer: 1,
      explanation: "'ABCDEF'长度为6，s[-3]即s[6-3]=s[3]='D'。"
    },
    {
      id: 'q-5-adv-single-2',
      type: 'single-choice',
      knowledgePoint: 'kp-5-2',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `nums = [1, 2, 3, 2, 1]
print(nums.count(2))`,
      options: [
        '1',
        '2',
        '3',
        '5'
      ],
      answer: 1,
      explanation: 'count(2)统计列表中2出现的次数，列表中有2个2。'
    },
    {
      id: 'q-5-adv-single-3',
      type: 'single-choice',
      knowledgePoint: 'kp-5-3',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `n = 100
count = 0
while n > 1:
    n = n // 2
    count = count + 1
print(count)`,
      options: [
        '5',
        '6',
        '7',
        '50'
      ],
      answer: 1,
      explanation: '100→50→25→12→6→3→1，共6次整除2操作。'
    },
    {
      id: 'q-5-adv-single-4',
      type: 'single-choice',
      knowledgePoint: 'kp-5-5',
      score: 2,
      difficulty: 'medium',
      question: "运行下列代码，输出结果是？",
      code: `a = [1, 2, 3, 2, 1]
a.remove(2)
print(a)`,
      options: [
        '[1, 3, 2, 1]',
        '[1, 3, 1]',
        '[1, 2, 3, 1]',
        '[3, 2, 1]'
      ],
      answer: 0,
      explanation: 'remove(2)只移除第一个出现的2，列表变为[1, 3, 2, 1]。'
    },
    {
      id: 'q-5-adv-single-5',
      type: 'single-choice',
      knowledgePoint: 'kp-5-6',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(1, 4):
    for j in range(1, i + 1):
        print(j, end='')
    print()`,
      options: [
        '1\\n12\\n123',
        '1\\n22\\n333',
        '12\\n123\\n1234',
        '1\\n21\\n321'
      ],
      answer: 0,
      explanation: 'i=1时内层range(1,2)输出1；i=2时内层range(1,3)输出12；i=3时内层range(1,4)输出123。'
    },
    {
      id: 'q-5-adv-single-6',
      type: 'single-choice',
      knowledgePoint: 'kp-5-7',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `total = 0
for i in range(1, 11):
    if i % 3 == 0:
        continue
    total = total + i
print(total)`,
      options: [
        '55',
        '37',
        '45',
        '27'
      ],
      answer: 1,
      explanation: '跳过3的倍数(3,6,9)，累加其余1+2+4+5+7+8+10=37。'
    },
    {
      id: 'q-5-adv-single-7',
      type: 'single-choice',
      knowledgePoint: 'kp-5-8',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `a = [1, 2, 3]
b = str(a)
print(b[0])`,
      options: [
        '1',
        '[',
        "'1'",
        '程序报错'
      ],
      answer: 1,
      explanation: "str([1,2,3])转为字符串'[1, 2, 3]'，第一个字符b[0]是'['。"
    },
    {
      id: 'q-5-adv-single-8',
      type: 'single-choice',
      knowledgePoint: 'kp-5-11',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `nums = [5, 2, 8, 1]
nums.sort(reverse=True)
print(nums)`,
      options: [
        '[1, 2, 5, 8]',
        '[8, 5, 2, 1]',
        '[5, 2, 8, 1]',
        '程序报错'
      ],
      answer: 1,
      explanation: 'sort(reverse=True)对列表进行降序排序，结果为[8, 5, 2, 1]。'
    },
    {
      id: 'q-5-adv-single-9',
      type: 'single-choice',
      knowledgePoint: 'kp-5-12',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `print('2026', '03', '31', sep='/')`,
      options: [
        '2026 03 31',
        '2026/03/31',
        '20260331',
        '2026-03-31'
      ],
      answer: 1,
      explanation: "sep='/'指定分隔符为斜线，输出2026/03/31。"
    },
    {
      id: 'q-5-adv-single-10',
      type: 'single-choice',
      knowledgePoint: 'kp-5-14',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = {1, 2, 2, 3, 3, 3}
print(len(a))`,
      options: [
        '6',
        '3',
        '1',
        '程序报错'
      ],
      answer: 1,
      explanation: '集合中的元素是唯一的，{1, 2, 2, 3, 3, 3}去重后为{1, 2, 3}，共3个元素。'
    },
    {
      id: 'q-5-adv-single-11',
      type: 'single-choice',
      knowledgePoint: 'kp-5-15',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `d = {'x': 10, 'y': 20}
d['z'] = 30
print(len(d))`,
      options: [
        '2',
        '3',
        '4',
        '程序报错'
      ],
      answer: 1,
      explanation: "字典初始有2个键值对，d['z']=30新增一个，共3个键值对。"
    },
    {
      id: 'q-5-adv-single-12',
      type: 'single-choice',
      knowledgePoint: 'kp-5-13',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `result = [x * x for x in range(1, 5)]
print(result)`,
      options: [
        '[1, 2, 3, 4]',
        '[1, 4, 9, 16]',
        '[0, 1, 4, 9]',
        '[2, 4, 6, 8]'
      ],
      answer: 1,
      explanation: 'range(1,5)生成1,2,3,4，每个元素平方得到[1, 4, 9, 16]。'
    },
    {
      id: 'q-5-adv-single-13',
      type: 'single-choice',
      knowledgePoint: 'kp-5-4',
      score: 2,
      difficulty: 'medium',
      question: "运行下列代码，输出结果是？",
      code: `s = 'a-b-c-d-e'
parts = s.split('-', 2)
print(parts)`,
      options: [
        "['a', 'b', 'c-d-e']",
        "['a-b', 'c-d', 'e']",
        "['a', 'b', 'c', 'd', 'e']",
        "['a', 'b']"
      ],
      answer: 0,
      explanation: "split('-', 2)最多分割2次，得到['a', 'b', 'c-d-e']。"
    },
    {
      id: 'q-5-adv-single-14',
      type: 'single-choice',
      knowledgePoint: 'kp-5-9',
      score: 2,
      difficulty: 'hard',
      question: '使用枚举法找出1到100中所有既能被3整除又能被5整除的数，共有几个？',
      code: null,
      options: [
        '5',
        '6',
        '7',
        '10'
      ],
      answer: 1,
      explanation: '既能被3又能被5整除即能被15整除：15,30,45,60,75,90，共6个。'
    },
    {
      id: 'q-5-adv-single-15',
      type: 'single-choice',
      knowledgePoint: 'kp-5-10',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `nums = [10, 20, 30, 40, 50]
total = 0
for n in nums:
    if n > 25:
        total = total + n
print(total)`,
      options: [
        '60',
        '90',
        '120',
        '150'
      ],
      answer: 2,
      explanation: '遍历列表，大于25的元素是30,40,50，总和为30+40+50=120。'
    },

    // ==================== 多选题（5题，每题3分，共15分）====================
    {
      id: 'q-5-adv-multi-1',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-1',
      score: 3,
      difficulty: 'medium',
      question: "【多选】已知 lst = [10, 20, 30, 40]，下列哪些表达式的值是20？",
      code: null,
      options: [
        'lst[1]',
        'lst[-3]',
        'lst[2]',
        'lst[-2]'
      ],
      answer: [0, 1],
      partialAnswer: [0],
      explanation: 'lst[1]=20，lst[-3]=lst[4-3]=lst[1]=20。lst[2]=30，lst[-2]=30。'
    },
    {
      id: 'q-5-adv-multi-2',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-3',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列哪些代码会造成无限循环？',
      code: null,
      options: [
        'x = 10\\nwhile x > 0:\\n    print(x)\\n    x = x - 1',
        'x = 10\\nwhile x > 0:\\n    print(x)',
        'x = 1\\nwhile x < 100:\\n    x = x * 2',
        'x = 0\\nwhile x < 10:\\n    x = x + 1'
      ],
      answer: [1],
      partialAnswer: [1],
      explanation: 'A: x递减到0结束；B: x不变始终>0，无限循环；C: x翻倍到>=100结束；D: x递增到10结束。'
    },
    {
      id: 'q-5-adv-multi-3',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-7',
      score: 3,
      difficulty: 'hard',
      question: '【多选】下列关于break和continue的描述，正确的有哪些？',
      code: null,
      options: [
        'break执行后，循环不再继续',
        'continue执行后，跳过本次循环继续下一次',
        'break和continue都可以在循环外单独使用',
        'while循环中可以使用break'
      ],
      answer: [0, 1, 3],
      partialAnswer: [0],
      explanation: 'break结束整个循环，continue跳过本次，两者都只能在循环内使用，while和for中都能用break。'
    },
    {
      id: 'q-5-adv-multi-4',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-5',
      score: 3,
      difficulty: 'hard',
      question: "【多选】已知 a = [1, 2, 3]，下列哪些表达式的值是 True？",
      code: null,
      options: [
        '2 in a',
        'len(a) == 3',
        'a[1] == 1',
        'max(a) == 3'
      ],
      answer: [0, 1, 3],
      partialAnswer: [0],
      explanation: '2在列表a中；a有3个元素；a[1]=2不等于1；max(a)=3等于3。'
    },
    {
      id: 'q-5-adv-multi-5',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-8',
      score: 3,
      difficulty: 'hard',
      question: '【多选】下列哪些代码能输出整数10？',
      code: null,
      options: [
        "print(int('10'))",
        "print(int(10.9))",
        "print(int(float('10.5')))",
        "print(str(10))"
      ],
      answer: [0, 1, 2],
      partialAnswer: [0],
      explanation: "int('10')=10；int(10.9)=10（截断小数）；int(float('10.5'))=int(10.5)=10；str(10)输出字符串'10'不是整数。"
    },

    // ==================== 编程题（4题，共55分）====================
    {
      id: 'q-5-adv-coding-1',
      type: 'coding',
      knowledgePoint: 'kp-5-3',
      score: 10,
      difficulty: 'medium',
      question: '请编写程序，输入一个正整数n，使用while循环计算n是几位数。例如输入123输出3。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '123', expectedOutput: '3' },
        { input: '7', expectedOutput: '1' },
        { input: '10000', expectedOutput: '5' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能使用while循环', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = int(input())
count = 0
while n > 0:
    n = n // 10
    count = count + 1
print(count)`,
      explanation: '每次整除10去掉一位数字，计数器加1，直到n变为0。'
    },
    {
      id: 'q-5-adv-coding-2',
      type: 'coding',
      knowledgePoint: 'kp-5-5',
      score: 10,
      difficulty: 'medium',
      question: '请编写程序，输入一个整数n，然后输入n个整数存入列表，使用列表的sort方法排序后输出。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '4\\n3\\n1\\n4\\n2', expectedOutput: '[1, 2, 3, 4]' },
        { input: '3\\n10\\n5\\n8', expectedOutput: '[5, 8, 10]' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入并存入列表', score: 3 },
          { condition: '能使用sort排序', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = int(input())
nums = []
for i in range(n):
    num = int(input())
    nums.append(num)
nums.sort()
print(nums)`,
      explanation: '循环读取n个整数存入列表，使用sort()排序后输出。'
    },
    {
      id: 'q-5-adv-coding-3',
      type: 'coding',
      knowledgePoint: 'kp-5-9',
      score: 15,
      difficulty: 'medium',
      question: '请编写程序，使用枚举法找出1到100中所有既能被3整除又能被5整除的整数，每行输出一个。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '', expectedOutput: '15\\n30\\n45\\n60\\n75\\n90' }
      ],
      scoringRules: {
        fullScore: 15,
        partialScores: [
          { condition: '能使用循环枚举', score: 5 },
          { condition: '能正确判断条件', score: 10 },
          { condition: '完全正确', score: 15 }
        ]
      },
      referenceAnswer: `for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print(i)`,
      explanation: '遍历1到100，判断能否同时被3和5整除（即能被15整除）。'
    },
    {
      id: 'q-5-adv-coding-4',
      type: 'coding',
      knowledgePoint: 'kp-5-6',
      score: 20,
      difficulty: 'hard',
      question: '请编写程序，使用嵌套循环输出九九乘法表的前3行（格式如"1*2=2"，每行的每对乘法用空格分隔）。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        {
          input: '',
          expectedOutput: '1*1=1\\n1*2=2 2*2=4\\n1*3=3 2*3=6 3*3=9'
        }
      ],
      scoringRules: {
        fullScore: 20,
        partialScores: [
          { condition: '能使用嵌套循环', score: 8 },
          { condition: '能正确计算和格式化', score: 14 },
          { condition: '完全正确', score: 20 }
        ]
      },
      referenceAnswer: `for i in range(1, 4):
    for j in range(1, i + 1):
        print(str(j) + '*' + str(i) + '=' + str(j * i), end='')
        if j < i:
            print(' ', end='')
    print()`,
      explanation: '外层循环控制行数，内层循环控制每行内容，使用end=""控制换行。'
    }
  ],

  distribution: {
    byType: {
      'single-choice': { count: 15, totalScore: 30 },
      'multiple-choice': { count: 5, totalScore: 15 },
      'coding': { count: 4, totalScore: 55 }
    },
    byKnowledgePoint: {
      'kp-5-1': { count: 2, totalScore: 5 },
      'kp-5-2': { count: 1, totalScore: 2 },
      'kp-5-3': { count: 2, totalScore: 12 },
      'kp-5-4': { count: 1, totalScore: 2 },
      'kp-5-5': { count: 2, totalScore: 13 },
      'kp-5-6': { count: 2, totalScore: 22 },
      'kp-5-7': { count: 1, totalScore: 2 },
      'kp-5-8': { count: 2, totalScore: 5 },
      'kp-5-9': { count: 2, totalScore: 17 },
      'kp-5-10': { count: 1, totalScore: 2 },
      'kp-5-11': { count: 1, totalScore: 2 },
      'kp-5-12': { count: 1, totalScore: 2 },
      'kp-5-13': { count: 1, totalScore: 2 },
      'kp-5-14': { count: 1, totalScore: 2 },
      'kp-5-15': { count: 1, totalScore: 2 }
    },
    byDifficulty: {
      'easy': 0,
      'medium': 12,
      'hard': 12
    }
  }
}

export default practiceSet
