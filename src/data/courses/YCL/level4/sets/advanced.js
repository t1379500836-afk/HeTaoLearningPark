/**
 * YCL四级进阶练习
 *
 * 本套卷包含：单选题15题（每题2分，共30分）
 *             多选题5题（每题3分，共15分）
 *             编程题4题（共55分）
 * 总分：100分  时长：90分钟
 */

export const practiceSet = {
  meta: {
    id: 'level4-advanced',
    level: 'level4',
    difficulty: 'advanced',
    name: '四级进阶练习',
    description: '四级进阶练习套卷，难度较高',
    duration: 90,
    totalScore: 100,
    createdAt: '2026-03-31',
    version: '1.0'
  },

  questions: [
    // ==================== 单选题（15题，每题2分，共30分）====================
    {
      id: 'q-4-adv-single-1',
      type: 'single-choice',
      knowledgePoint: 'kp-4-4',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: 'print(20 // 3)',
      options: [
        '6',
        '6.66',
        '7',
        '2'
      ],
      answer: 0,
      explanation: '//是整除，20÷3=6余2，整除结果为6。'
    },
    {
      id: 'q-4-adv-single-2',
      type: 'single-choice',
      knowledgePoint: 'kp-4-4',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: 'print(20 % 3)',
      options: [
        '6',
        '6.66',
        '2',
        '3'
      ],
      answer: 2,
      explanation: '%是取余，20÷3=6余2，取余结果为2。'
    },
    {
      id: 'q-4-adv-single-3',
      type: 'single-choice',
      knowledgePoint: 'kp-4-3',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `a = int(3.7)
b = int(5.2)
print(a + b)`,
      options: [
        '8',
        '9',
        '8.9',
        '程序报错'
      ],
      answer: 0,
      explanation: 'int(3.7)=3，int(5.2)=5（截断小数），3+5=8。'
    },
    {
      id: 'q-4-adv-single-4',
      type: 'single-choice',
      knowledgePoint: 'kp-4-5',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `a = 'ab'
b = 'cd'
print(a + b + a)`,
      options: [
        'abcd',
        'abcdab',
        'abcdcd',
        'ab cd ab'
      ],
      answer: 1,
      explanation: "'ab'+'cd'='abcd'，'abcd'+'ab'='abcdab'。"
    },
    {
      id: 'q-4-adv-single-5',
      type: 'single-choice',
      knowledgePoint: 'kp-4-2',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输入"25"，输出结果是？',
      code: `a = input()
b = input()
print(int(a) + int(b))`,
      options: [
        '程序会等待第二次输入',
        '25',
        '50',
        '程序报错'
      ],
      answer: 0,
      explanation: '有两个input()，程序会等待用户输入两次，只输入一次"25"的话会等待第二次输入。'
    },
    {
      id: 'q-4-adv-single-6',
      type: 'single-choice',
      knowledgePoint: 'kp-4-7',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(0, 10, 2):
    print(i)`,
      options: [
        '0 1 2 3 4 5 6 7 8 9',
        '0 2 4 6 8',
        '2 4 6 8 10',
        '1 3 5 7 9'
      ],
      answer: 1,
      explanation: 'range(0, 10, 2)表示从0到10（不含），步长为2，生成0,2,4,6,8。'
    },
    {
      id: 'q-4-adv-single-7',
      type: 'single-choice',
      knowledgePoint: 'kp-4-8',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `s = 'A'
for i in range(3):
    s = s + 'B'
print(s)`,
      options: [
        'AB',
        'ABB',
        'ABBB',
        'ABBBB'
      ],
      answer: 2,
      explanation: "初始s='A'，循环3次每次加'B'，'A'+'B'+'B'+'B'='ABBB'。"
    },
    {
      id: 'q-4-adv-single-8',
      type: 'single-choice',
      knowledgePoint: 'kp-4-6',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输入"80"，输出结果是？',
      code: `score = input()
score = int(score)
if score >= 90:
    print('A')
elif score >= 80:
    print('B')
elif score >= 60:
    print('C')
else:
    print('D')`,
      options: [
        'A',
        'B',
        'C',
        'D'
      ],
      answer: 1,
      explanation: '80>=90不成立，80>=80成立，执行elif输出"B"。'
    },
    {
      id: 'q-4-adv-single-9',
      type: 'single-choice',
      knowledgePoint: 'kp-4-7',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `count = 0
for i in range(5):
    if i % 2 == 0:
        count = count + 1
print(count)`,
      options: [
        '2',
        '3',
        '4',
        '5'
      ],
      answer: 1,
      explanation: 'range(5)生成0,1,2,3,4，其中偶数是0,2,4共3个，count=3。'
    },
    {
      id: 'q-4-adv-single-10',
      type: 'single-choice',
      knowledgePoint: 'kp-4-11',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = 5
b = 5
c = 6
print(a == b)
print(b < c)`,
      options: [
        'True\nTrue',
        'True\nFalse',
        'False\nTrue',
        '5\n5'
      ],
      answer: 0,
      explanation: 'a==b即5==5为True，b<c即5<6为True。'
    },
    {
      id: 'q-4-adv-single-11',
      type: 'single-choice',
      knowledgePoint: 'kp-4-5',
      score: 2,
      difficulty: 'hard',
      question: '小华想把数字10和字符串"分"拼接成"10分"，下列哪种写法正确？',
      code: null,
      options: [
        "print(10 + '分')",
        "print('10' + '分')",
        "print(str(10) + '分')",
        'print(int(10) + 分)'
      ],
      answer: 2,
      explanation: "数字和字符串不能直接拼接，需要用str()将数字转为字符串，str(10)+'分'='10分'。"
    },
    {
      id: 'q-4-adv-single-12',
      type: 'single-choice',
      knowledgePoint: 'kp-4-7',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `result = 1
for i in range(1, 4):
    result = result * i
print(result)`,
      options: [
        '3',
        '6',
        '9',
        '10'
      ],
      answer: 1,
      explanation: '循环i为1,2,3，result=1*1*2*3=6，这是计算3的阶乘。'
    },
    {
      id: 'q-4-adv-single-13',
      type: 'single-choice',
      knowledgePoint: 'kp-4-9',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = '10'
b = '20'
print(a + b)`,
      options: [
        '30',
        '1020',
        'a + b',
        '程序报错'
      ],
      answer: 1,
      explanation: "'10'和'20'都是字符串，字符串相加是拼接，'10'+'20'='1020'。"
    },
    {
      id: 'q-4-adv-single-14',
      type: 'single-choice',
      knowledgePoint: 'kp-4-12',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输入"3"，输出结果是？',
      code: `n = input()
n = int(n)
if n == 1:
    print('星期一')
elif n == 2:
    print('星期二')
elif n == 3:
    print('星期三')
else:
    print('其他')`,
      options: [
        '星期一',
        '星期二',
        '星期三',
        '其他'
      ],
      answer: 2,
      explanation: '输入3，n==3成立，输出"星期三"。'
    },
    {
      id: 'q-4-adv-single-15',
      type: 'single-choice',
      knowledgePoint: 'kp-4-4',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = 2 ** 3
b = 10 % 3
print(a + b)`,
      options: [
        '8',
        '10',
        '11',
        '9'
      ],
      answer: 3,
      explanation: '2**3=8，10%3=1，8+1=9。'
    },

    // ==================== 多选题（5题，每题3分，共15分）====================
    {
      id: 'q-4-adv-multi-1',
      type: 'multiple-choice',
      knowledgePoint: 'kp-4-4',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列哪些表达式的结果是偶数？',
      code: null,
      options: [
        '8 % 3',
        '10 % 4',
        '12 % 5',
        '14 % 6'
      ],
      answer: [0, 1, 2, 3],
      partialAnswer: [0],
      explanation: '8%3=2（偶数），10%4=2（偶数），12%5=2（偶数），14%6=2（偶数）。全部正确。'
    },
    {
      id: 'q-4-adv-multi-2',
      type: 'multiple-choice',
      knowledgePoint: 'kp-4-5',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列哪些代码可以正确输出"苹果5个"？',
      code: null,
      options: [
        "print('苹果' + '5个')",
        "print('苹果' + str(5) + '个')",
        "print('苹果', 5, '个')",
        "print('苹果5个')"
      ],
      answer: [0, 1, 3],
      partialAnswer: [3],
      explanation: "A直接拼接字符串；B将数字5转为字符串后拼接；C用逗号会输出'苹果 5 个'（有空格）；D直接输出。"
    },
    {
      id: 'q-4-adv-multi-3',
      type: 'multiple-choice',
      knowledgePoint: 'kp-4-7',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列哪些代码输出的内容包含数字5？',
      code: null,
      options: [
        `for i in range(5):
    print(i)`,
        `for i in range(1, 6):
    print(i)`,
        `for i in range(4, 7):
    print(i)`,
        `for i in range(0, 5, 5):
    print(i)`
      ],
      answer: [1, 2],
      partialAnswer: [1],
      explanation: 'A: range(5)输出0,1,2,3,4，不含5；B: range(1,6)输出1,2,3,4,5，含5；C: range(4,7)输出4,5,6，含5；D: range(0,5,5)输出0，不含5。'
    },
    {
      id: 'q-4-adv-multi-4',
      type: 'multiple-choice',
      knowledgePoint: 'kp-4-6',
      score: 3,
      difficulty: 'hard',
      question: '【多选】下列代码中，哪些会输出"成年"？',
      code: null,
      options: [
        `age = 18
if age >= 18:
    print('成年')`,
        `age = 20
if age > 18:
    print('成年')`,
        `age = 18
if age > 18:
    print('成年')`,
        `age = 17
if age >= 18:
    print('成年')`
      ],
      answer: [0, 1],
      partialAnswer: [0],
      explanation: 'age=18时18>=18成立；age=20时20>18成立；age=18时18>18不成立；age=17时17>=18不成立。'
    },
    {
      id: 'q-4-adv-multi-5',
      type: 'multiple-choice',
      knowledgePoint: 'kp-4-8',
      score: 3,
      difficulty: 'hard',
      question: '【多选】运行下列代码后，变量x的值是10的有哪些？',
      code: null,
      options: [
        `x = 5
x = x + 5`,
        `x = 15
x = x - 5`,
        `x = 2
x = x * 5`,
        `x = 20
x = x // 2`
      ],
      answer: [0, 1, 2, 3],
      partialAnswer: [0],
      explanation: 'A: 5+5=10；B: 15-5=10；C: 2*5=10；D: 20//2=10。全部正确。'
    },

    // ==================== 编程题（4题，共55分）====================
    {
      id: 'q-4-adv-coding-1',
      type: 'coding',
      knowledgePoint: 'kp-4-4',
      score: 10,
      difficulty: 'medium',
      question: '小明的零花钱是n元，他想买一个玩具需要60元。请编写程序，输入n，输出他还需要多少钱才能买这个玩具（如果够了输出0）。',
      codeTemplate: '# 请在下方编写代码\n',
      testCases: [
        { input: '30', expectedOutput: '30' },
        { input: '70', expectedOutput: '0' },
        { input: '60', expectedOutput: '0' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能正确计算', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = input()
n = int(n)
if n >= 60:
    print(0)
else:
    print(60 - n)`,
      explanation: '判断n是否够60元，够则输出0，不够则输出差额。'
    },
    {
      id: 'q-4-adv-coding-2',
      type: 'coding',
      knowledgePoint: 'kp-4-6',
      score: 10,
      difficulty: 'medium',
      question: '电梯的载重量限制是800公斤，超过限制会报警。请编写程序，输入电梯当前的载重量n（公斤），如果超过800公斤输出"超载"，否则输出"正常"。',
      codeTemplate: '# 请在下方编写代码\n',
      testCases: [
        { input: '750', expectedOutput: '正常' },
        { input: '800', expectedOutput: '正常' },
        { input: '850', expectedOutput: '超载' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入并转换', score: 3 },
          { condition: '能使用if-else判断', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = input()
n = int(n)
if n > 800:
    print('超载')
else:
    print('正常')`,
      explanation: '判断载重量是否超过800，超过输出"超载"，否则输出"正常"。'
    },
    {
      id: 'q-4-adv-coding-3',
      type: 'coding',
      knowledgePoint: 'kp-4-7',
      score: 15,
      difficulty: 'medium',
      question: '请编写程序，使用for循环计算1到10的所有整数的和，并输出结果。',
      codeTemplate: '# 请在下方编写代码\n',
      testCases: [
        { input: '', expectedOutput: '55' }
      ],
      scoringRules: {
        fullScore: 15,
        partialScores: [
          { condition: '能使用for循环', score: 5 },
          { condition: '能正确累加', score: 10 },
          { condition: '完全正确', score: 15 }
        ]
      },
      referenceAnswer: `total = 0
for i in range(1, 11):
    total = total + i
print(total)`,
      explanation: '使用循环累加1到10，1+2+3+...+10=55。'
    },
    {
      id: 'q-4-adv-coding-4',
      type: 'coding',
      knowledgePoint: 'kp-4-6',
      score: 20,
      difficulty: 'hard',
      question: '成绩等级判断：90分及以上是"优秀"，80-89分是"良好"，60-79分是"及格"，60分以下是"不及格"。请编写程序，输入成绩n，输出对应的等级。',
      codeTemplate: '# 请在下方编写代码\n',
      testCases: [
        { input: '95', expectedOutput: '优秀' },
        { input: '85', expectedOutput: '良好' },
        { input: '70', expectedOutput: '及格' },
        { input: '50', expectedOutput: '不及格' }
      ],
      scoringRules: {
        fullScore: 20,
        partialScores: [
          { condition: '能获取输入并转换', score: 4 },
          { condition: '能使用多分支判断', score: 10 },
          { condition: '完全正确', score: 20 }
        ]
      },
      referenceAnswer: `n = input()
n = int(n)
if n >= 90:
    print('优秀')
elif n >= 80:
    print('良好')
elif n >= 60:
    print('及格')
else:
    print('不及格')`,
      explanation: '使用if-elif-else多分支结构，按分数区间判断等级。'
    }
  ],

  distribution: {
    byType: {
      'single-choice': { count: 15, totalScore: 30 },
      'multiple-choice': { count: 5, totalScore: 15 },
      'coding': { count: 4, totalScore: 55 }
    },
    byKnowledgePoint: {
      'kp-4-1': { count: 0, totalScore: 0 },
      'kp-4-2': { count: 1, totalScore: 2 },
      'kp-4-3': { count: 1, totalScore: 2 },
      'kp-4-4': { count: 4, totalScore: 19 },
      'kp-4-5': { count: 2, totalScore: 5 },
      'kp-4-6': { count: 3, totalScore: 30 },
      'kp-4-7': { count: 4, totalScore: 23 },
      'kp-4-8': { count: 2, totalScore: 5 },
      'kp-4-9': { count: 1, totalScore: 2 },
      'kp-4-10': { count: 0, totalScore: 0 },
      'kp-4-11': { count: 1, totalScore: 2 },
      'kp-4-12': { count: 1, totalScore: 2 }
    },
    byDifficulty: {
      'easy': 0,
      'medium': 12,
      'hard': 12
    }
  }
}

export default practiceSet
