/**
 * YCL五级基础练习（二）
 *
 * 本套卷包含：单选题15题（每题2分，共30分）
 *             多选题5题（每题3分，共15分）
 *             编程题4题（共55分）
 * 总分：100分  时长：90分钟
 */

export const practiceSet = {
  meta: {
    id: 'level5-basic-2',
    level: 'level5',
    difficulty: 'basic',
    name: '五级基础练习（二）',
    description: '涵盖五级必考知识点的基础练习',
    duration: 90,
    totalScore: 100,
    createdAt: '2026-03-31',
    version: '1.0'
  },

  questions: [
    // ==================== 单选题（15题，每题2分，共30分）====================
    {
      id: 'q-5-2-single-1',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'easy',
      question: "已知 nums = [10, 20, 30, 40, 50]，下列哪个选项的值是30？",
      code: null,
      options: [
        'nums[1]',
        'nums[2]',
        'nums[3]',
        'nums[30]'
      ],
      answer: 1,
      explanation: '列表索引从0开始，nums[0]=10, nums[1]=20, nums[2]=30。'
    },
    {
      id: 'q-5-2-single-2',
      type: 'single-choice',
      knowledgePoint: 'kp-5-2',
      score: 2,
      difficulty: 'easy',
      question: '运行下列代码，输出结果是？',
      code: `a = [3, 1, 4, 1, 5]
print(len(a))`,
      options: [
        '3',
        '5',
        '14',
        '4'
      ],
      answer: 1,
      explanation: 'len()返回列表中元素的个数，列表a有5个元素。'
    },
    {
      id: 'q-5-2-single-3',
      type: 'single-choice',
      knowledgePoint: 'kp-5-3',
      score: 2,
      difficulty: 'easy',
      question: '运行下列代码，输出结果是？',
      code: `n = 1
while n <= 3:
    print(n)
    n = n + 1`,
      options: [
        '1 2 3',
        '0 1 2',
        '1 2 3 4',
        '无限循环'
      ],
      answer: 0,
      explanation: 'n从1开始，每次加1，当n<=3时输出n。输出1、2、3后n变为4，循环结束。'
    },
    {
      id: 'q-5-2-single-4',
      type: 'single-choice',
      knowledgePoint: 'kp-5-4',
      score: 2,
      difficulty: 'easy',
      question: "运行下列代码，输出结果是？",
      code: `s = 'A-B-C-D'
result = s.split('-')
print(result)`,
      options: [
        "['ABCD']",
        "['A', 'B', 'C', 'D']",
        "'ABCD'",
        "['A-B-C-D']"
      ],
      answer: 1,
      explanation: "split('-')按横线分割字符串，返回列表['A', 'B', 'C', 'D']。"
    },
    {
      id: 'q-5-2-single-5',
      type: 'single-choice',
      knowledgePoint: 'kp-5-5',
      score: 2,
      difficulty: 'easy',
      question: "运行下列代码，输出结果是？",
      code: `fruits = ['苹果', '香蕉']
fruits.append('橙子')
print(fruits)`,
      options: [
        "['苹果', '香蕉']",
        "['苹果', '香蕉', '橙子']",
        "['橙子', '苹果', '香蕉']",
        "程序报错"
      ],
      answer: 1,
      explanation: "append()方法在列表末尾添加元素，添加'橙子'后列表变为['苹果', '香蕉', '橙子']。"
    },
    {
      id: 'q-5-2-single-6',
      type: 'single-choice',
      knowledgePoint: 'kp-5-6',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(2):
    for j in range(2):
        print(i, j)`,
      options: [
        '0 0\\n0 1\\n1 0\\n1 1',
        '0 0\\n1 1',
        '0 1\\n0 1',
        '2 2'
      ],
      answer: 0,
      explanation: '外层循环i取0,1，内层循环j取0,1。输出(0,0)(0,1)(1,0)(1,1)。'
    },
    {
      id: 'q-5-2-single-7',
      type: 'single-choice',
      knowledgePoint: 'kp-5-7',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(5):
    if i == 3:
        continue
    print(i)`,
      options: [
        '0 1 2 3 4',
        '0 1 2 4',
        '0 1 2',
        '3'
      ],
      answer: 1,
      explanation: '当i=3时执行continue跳过本次循环，不输出3。最终输出0,1,2,4。'
    },
    {
      id: 'q-5-2-single-8',
      type: 'single-choice',
      knowledgePoint: 'kp-5-8',
      score: 2,
      difficulty: 'medium',
      question: "运行下列代码，输出结果是？",
      code: `a = 123
b = str(a)
print(b + '456')`,
      options: [
        '579',
        '123456',
        "'123456'",
        '程序报错'
      ],
      answer: 1,
      explanation: "str(123)将整数转为字符串'123'，'123'+'456'='123456'。"
    },
    {
      id: 'q-5-2-single-9',
      type: 'single-choice',
      knowledgePoint: 'kp-5-10',
      score: 2,
      difficulty: 'medium',
      question: "运行下列代码，输出结果是？",
      code: `colors = ['红', '绿', '蓝']
for c in colors:
    print(c)`,
      options: [
        '0 1 2',
        '红 绿 蓝',
        "['红', '绿', '蓝']",
        '红\\n绿\\n蓝'
      ],
      answer: 3,
      explanation: 'for循环遍历列表，每次print输出一个元素并换行，分3行输出。'
    },
    {
      id: 'q-5-2-single-10',
      type: 'single-choice',
      knowledgePoint: 'kp-5-11',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `nums = [5, 3, 8, 1]
nums.sort()
print(nums)`,
      options: [
        '[1, 3, 5, 8]',
        '[8, 5, 3, 1]',
        '[5, 3, 8, 1]',
        '程序报错'
      ],
      answer: 0,
      explanation: 'sort()方法对列表原地排序（从小到大），排序后为[1, 3, 5, 8]。'
    },
    {
      id: 'q-5-2-single-11',
      type: 'single-choice',
      knowledgePoint: 'kp-5-12',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `print('A', 'B', 'C', sep='-')`,
      options: [
        'A B C',
        'A-B-C',
        'ABC',
        'A B-C'
      ],
      answer: 1,
      explanation: "sep='-'指定分隔符为横线，多个参数之间用横线连接，输出A-B-C。"
    },
    {
      id: 'q-5-2-single-12',
      type: 'single-choice',
      knowledgePoint: 'kp-5-3',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `total = 0
n = 1
while n <= 5:
    total = total + n
    n = n + 1
print(total)`,
      options: [
        '10',
        '15',
        '5',
        '无限循环'
      ],
      answer: 1,
      explanation: '循环累加1到5，1+2+3+4+5=15。'
    },
    {
      id: 'q-5-2-single-13',
      type: 'single-choice',
      knowledgePoint: 'kp-5-14',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `s = {1, 2, 2, 3, 3, 3}
print(len(s))`,
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
      id: 'q-5-2-single-14',
      type: 'single-choice',
      knowledgePoint: 'kp-5-13',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `result = [x * 2 for x in range(3)]
print(result)`,
      options: [
        '[0, 1, 2]',
        '[2, 4, 6]',
        '[0, 2, 4]',
        '[1, 2, 3]'
      ],
      answer: 2,
      explanation: 'range(3)生成0,1,2，每个元素乘2得到[0, 2, 4]。'
    },
    {
      id: 'q-5-2-single-15',
      type: 'single-choice',
      knowledgePoint: 'kp-5-15',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `d = {'name': '小明', 'age': 10}
d['age'] = 11
print(d['age'])`,
      options: [
        '10',
        '11',
        'age',
        "{'name': '小明', 'age': 11}"
      ],
      answer: 1,
      explanation: "d['age']=11将键'age'对应的值修改为11，输出d['age']为11。"
    },

    // ==================== 多选题（5题，每题3分，共15分）====================
    {
      id: 'q-5-2-multi-1',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-2',
      score: 3,
      difficulty: 'easy',
      question: '【多选】已知 nums = [3, 5, 2, 8, 1]，下列哪些表达式的值是正确的？',
      code: null,
      options: [
        'len(nums) 的值是 5',
        'sum(nums) 的值是 19',
        'max(nums) 的值是 8',
        'min(nums) 的值是 3'
      ],
      answer: [0, 1, 2],
      partialAnswer: [0],
      explanation: 'len(nums)=5正确；sum(nums)=3+5+2+8+1=19正确；max(nums)=8正确；min(nums)=1，不是3。'
    },
    {
      id: 'q-5-2-multi-2',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-1',
      score: 3,
      difficulty: 'easy',
      question: "【多选】已知 s = 'PYTHON'，下列哪些索引能取到字母'O'？",
      code: null,
      options: [
        's[4]',
        's[-2]',
        's[5]',
        's[3]'
      ],
      answer: [0, 1],
      partialAnswer: [0],
      explanation: "'PYTHON'中O的索引是4（正索引）和-2（负索引）。s[5]是'N'，s[3]是'H'。"
    },
    {
      id: 'q-5-2-multi-3',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-5',
      score: 3,
      difficulty: 'medium',
      question: "【多选】已知 fruits = ['苹果', '香蕉', '橙子']，下列哪些操作后列表长度变为4？",
      code: null,
      options: [
        "fruits.append('葡萄')",
        "fruits.insert(0, '西瓜')",
        "fruits.remove('香蕉')",
        "fruits + ['芒果']"
      ],
      answer: [0, 1],
      partialAnswer: [0],
      explanation: "append末尾添加变为4个；insert插入也变为4个；remove删除变为2个；fruits+['芒果']创建新列表但不修改原列表。"
    },
    {
      id: 'q-5-2-multi-4',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-7',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列关于break和continue的说法，正确的有哪些？',
      code: null,
      options: [
        'break会立即结束整个循环',
        'continue会跳过本次循环，继续下一次',
        'break和continue可以在循环外使用',
        'break可以用在for循环和while循环中'
      ],
      answer: [0, 1, 3],
      partialAnswer: [0],
      explanation: 'break结束整个循环、continue跳过本次、两者都可用于for和while。但只能在循环内使用。'
    },
    {
      id: 'q-5-2-multi-5',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-12',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列哪些代码的输出结果包含换行？',
      code: null,
      options: [
        "print('A')",
        "print('A', end='')",
        "print('A', end='\\n')",
        "print('A', 'B', sep='\\n')"
      ],
      answer: [0, 2, 3],
      partialAnswer: [0],
      explanation: "A默认换行；B用end=''不换行；C用end='\\n'显式换行；D用sep='\\n'在A和B之间换行且末尾默认换行。"
    },

    // ==================== 编程题（4题，共55分）====================
    {
      id: 'q-5-2-coding-1',
      type: 'coding',
      knowledgePoint: 'kp-5-1',
      score: 10,
      difficulty: 'easy',
      question: '已知一个列表存储了5个同学的成绩，格式为"85,92,78,90,88"（用逗号分隔）。请编写程序，输入这串成绩，输出第3个同学的成绩。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '85,92,78,90,88', expectedOutput: '78' },
        { input: '60,70,80,90,100', expectedOutput: '80' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能正确分割', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `s = input()
scores = s.split(',')
print(scores[2])`,
      explanation: '用split分割字符串，索引2对应第3个元素。'
    },
    {
      id: 'q-5-2-coding-2',
      type: 'coding',
      knowledgePoint: 'kp-5-3',
      score: 10,
      difficulty: 'easy',
      question: '请编写程序，使用while循环输出1到N的所有整数（每行一个）。N由输入获得。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '5', expectedOutput: '1\\n2\\n3\\n4\\n5' },
        { input: '3', expectedOutput: '1\\n2\\n3' }
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
i = 1
while i <= n:
    print(i)
    i = i + 1`,
      explanation: '用while循环从1输出到n，每次循环后i加1。'
    },
    {
      id: 'q-5-2-coding-3',
      type: 'coding',
      knowledgePoint: 'kp-5-5',
      score: 15,
      difficulty: 'medium',
      question: '请编写程序，输入一个整数n，然后输入n个水果名称，将所有水果存入列表中，最后输出列表。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '3\\n苹果\\n香蕉\\n橙子', expectedOutput: "['苹果', '香蕉', '橙子']" }
      ],
      scoringRules: {
        fullScore: 15,
        partialScores: [
          { condition: '能获取输入数量', score: 4 },
          { condition: '能使用循环和append', score: 8 },
          { condition: '完全正确', score: 15 }
        ]
      },
      referenceAnswer: `n = int(input())
fruits = []
for i in range(n):
    name = input()
    fruits.append(name)
print(fruits)`,
      explanation: '创建空列表，循环n次用append添加元素，最后输出列表。'
    },
    {
      id: 'q-5-2-coding-4',
      type: 'coding',
      knowledgePoint: 'kp-5-9',
      score: 20,
      difficulty: 'medium',
      question: '请编写程序，输入一个整数n，使用枚举法找出所有满足 a + b = n（a从1到n-1，b从1到n-1）的组合数。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '5', expectedOutput: '4' },
        { input: '3', expectedOutput: '2' }
      ],
      scoringRules: {
        fullScore: 20,
        partialScores: [
          { condition: '能获取输入', score: 4 },
          { condition: '能使用双重循环枚举', score: 10 },
          { condition: '完全正确', score: 20 }
        ]
      },
      referenceAnswer: `n = int(input())
count = 0
for a in range(1, n):
    for b in range(1, n):
        if a + b == n:
            count = count + 1
print(count)`,
      explanation: '用双重循环枚举a和b，判断a+b是否等于n，统计满足条件的组合数。'
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
      'kp-5-2': { count: 2, totalScore: 5 },
      'kp-5-3': { count: 2, totalScore: 12 },
      'kp-5-4': { count: 1, totalScore: 2 },
      'kp-5-5': { count: 2, totalScore: 18 },
      'kp-5-6': { count: 1, totalScore: 2 },
      'kp-5-7': { count: 2, totalScore: 5 },
      'kp-5-8': { count: 1, totalScore: 2 },
      'kp-5-9': { count: 1, totalScore: 20 },
      'kp-5-10': { count: 1, totalScore: 2 },
      'kp-5-11': { count: 1, totalScore: 2 },
      'kp-5-12': { count: 2, totalScore: 5 },
      'kp-5-13': { count: 1, totalScore: 2 },
      'kp-5-14': { count: 1, totalScore: 2 },
      'kp-5-15': { count: 1, totalScore: 2 }
    },
    byDifficulty: {
      'easy': 7,
      'medium': 10,
      'hard': 7
    }
  }
}

export default practiceSet
