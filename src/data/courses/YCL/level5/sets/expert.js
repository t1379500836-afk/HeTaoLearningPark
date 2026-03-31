/**
 * YCL五级提升练习
 *
 * 本套卷包含：单选题15题（每题2分，共30分）
 *             多选题5题（每题3分，共15分）
 *             编程题4题（共55分）
 * 总分：100分  时长：90分钟
 */

export const practiceSet = {
  meta: {
    id: 'level5-expert',
    level: 'level5',
    difficulty: 'expert',
    name: '五级提升练习',
    description: '五级提升练习套卷，多知识点综合，接近考试上限',
    duration: 90,
    totalScore: 100,
    createdAt: '2026-03-31',
    version: '1.0'
  },

  questions: [
    // ==================== 单选题（15题，每题2分，共30分）====================
    {
      id: 'q-5-exp-single-1',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `s = 'ABCDEFG'
print(s[2] + s[-2])`,
      options: [
        'CF',
        'BG',
        'CE',
        'BF'
      ],
      answer: 0,
      explanation: "'ABCDEFG'中s[2]='C'，s[-2]=s[5]='F'，'C'+'F'='CF'。"
    },
    {
      id: 'q-5-exp-single-2',
      type: 'single-choice',
      knowledgePoint: 'kp-5-3',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `n = 5
result = 1
while n > 0:
    result = result * n
    n = n - 1
print(result)`,
      options: [
        '15',
        '25',
        '120',
        '60'
      ],
      answer: 2,
      explanation: '这是计算5的阶乘：5×4×3×2×1=120。'
    },
    {
      id: 'q-5-exp-single-3',
      type: 'single-choice',
      knowledgePoint: 'kp-5-5',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `a = [1, 2, 3, 4, 5]
a.pop(2)
a.append(6)
print(len(a))`,
      options: [
        '4',
        '5',
        '6',
        '3'
      ],
      answer: 1,
      explanation: 'pop(2)移除索引2的元素(3)，列表变为[1,2,4,5]长度4；append(6)添加后变为[1,2,4,5,6]长度5。'
    },
    {
      id: 'q-5-exp-single-4',
      type: 'single-choice',
      knowledgePoint: 'kp-5-6',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `s = ''
for i in range(3):
    for j in range(i + 1):
        s = s + str(j)
print(s)`,
      options: [
        '001012',
        '012012',
        '0012',
        '012345'
      ],
      answer: 0,
      explanation: "i=0: j=0→'0'；i=1: j=0→'0', j=1→'1'；i=2: j=0→'0', j=1→'1', j=2→'2'。拼接后'0'+'0'+'1'+'0'+'1'+'2'='001012'。"
    },
    {
      id: 'q-5-exp-single-5',
      type: 'single-choice',
      knowledgePoint: 'kp-5-7',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(1, 8):
    if i % 2 == 0:
        continue
    if i > 5:
        break
    print(i)`,
      options: [
        '1 3 5',
        '1 3 5 7',
        '1 3',
        '7'
      ],
      answer: 0,
      explanation: '偶数跳过，i=1输出，i=3输出，i=5输出，i=7>5时break。输出1,3,5。'
    },
    {
      id: 'q-5-exp-single-6',
      type: 'single-choice',
      knowledgePoint: 'kp-5-2',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `s = 'mississippi'
print(s.count('s') + s.count('i'))`,
      options: [
        '6',
        '7',
        '8',
        '11'
      ],
      answer: 2,
      explanation: "'mississippi'中s出现4次，i出现4次，4+4=8。"
    },
    {
      id: 'q-5-exp-single-7',
      type: 'single-choice',
      knowledgePoint: 'kp-5-8',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `a = '100'
b = '200'
print(int(a) + int(b))`,
      options: [
        '100200',
        '300',
        '100',
        '程序报错'
      ],
      answer: 1,
      explanation: "int('100')=100, int('200')=200, 100+200=300。"
    },
    {
      id: 'q-5-exp-single-8',
      type: 'single-choice',
      knowledgePoint: 'kp-5-11',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = [3, 1, 4, 1, 5, 9]
b = sorted(a, reverse=True)
print(b[2])`,
      options: [
        '5',
        '4',
        '3',
        '9'
      ],
      answer: 1,
      explanation: '降序排列为[9,5,4,3,1,1]，索引2的元素是4。'
    },
    {
      id: 'q-5-exp-single-9',
      type: 'single-choice',
      knowledgePoint: 'kp-5-15',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `d = {'语文': 90, '数学': 85, '英语': 92}
print(d['英语'])`,
      options: [
        '90',
        '85',
        '92',
        '英语'
      ],
      answer: 2,
      explanation: "d['英语']访问字典中键'英语'对应的值，即92。"
    },
    {
      id: 'q-5-exp-single-10',
      type: 'single-choice',
      knowledgePoint: 'kp-5-12',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(3):
    print('*', end='')
    print('#', end='')`,
      options: [
        '*#\\n*#\\n*#',
        '***###',
        '*#*#*#',
        '*\\n#\\n*\\n#\\n*\\n#'
      ],
      answer: 2,
      explanation: "end=''取消换行，循环3次每次输出'*#'，连续输出'*#*#*#'。"
    },
    {
      id: 'q-5-exp-single-11',
      type: 'single-choice',
      knowledgePoint: 'kp-5-9',
      score: 2,
      difficulty: 'hard',
      question: '用枚举法找出1到50中所有质数，共有几个？',
      code: null,
      options: [
        '14',
        '15',
        '16',
        '17'
      ],
      answer: 1,
      explanation: '1到50中的质数：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47，共15个。'
    },
    {
      id: 'q-5-exp-single-12',
      type: 'single-choice',
      knowledgePoint: 'kp-5-4',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `s = 'one-two-three'
parts = s.split('-')
print(parts[1][0])`,
      options: [
        'o',
        't',
        'e',
        'w'
      ],
      answer: 1,
      explanation: "split('-')得到['one','two','three']，parts[1]='two'，'two'[0]='t'。"
    },
    {
      id: 'q-5-exp-single-13',
      type: 'single-choice',
      knowledgePoint: 'kp-5-14',
      score: 2,
      difficulty: 'hard',
      question: '下列代码运行后，变量x的类型是？',
      code: `x = {5, 3, 1, 3, 5}
print(type(x))`,
      options: [
        "<class 'list'>",
        "<class 'set'>",
        "<class 'dict'>",
        "<class 'tuple'>"
      ],
      answer: 1,
      explanation: "用花括号{}创建且不含键值对的是集合，{5,3,1,3,5}是集合类型(set)，去重后为{1,3,5}。"
    },
    {
      id: 'q-5-exp-single-14',
      type: 'single-choice',
      knowledgePoint: 'kp-5-13',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = [x + 1 for x in range(5) if x % 2 == 0]
print(a)`,
      options: [
        '[1, 3, 5]',
        '[0, 2, 4]',
        '[1, 2, 3, 4, 5]',
        '[1, 3]'
      ],
      answer: 0,
      explanation: 'range(5)中偶数是0,2,4，加1后得到[1, 3, 5]。'
    },
    {
      id: 'q-5-exp-single-15',
      type: 'single-choice',
      knowledgePoint: 'kp-5-10',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `nums = [1, 2, 3, 4, 5]
result = []
for n in nums:
    if n % 2 == 1:
        result.append(n)
print(result)`,
      options: [
        '[1, 3, 5]',
        '[2, 4]',
        '[1, 2, 3, 4, 5]',
        '[5, 3, 1]'
      ],
      answer: 0,
      explanation: '遍历列表筛选奇数，append到新列表，结果为[1, 3, 5]。'
    },

    // ==================== 多选题（5题，每题3分，共15分）====================
    {
      id: 'q-5-exp-multi-1',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-9',
      score: 3,
      difficulty: 'hard',
      question: '【多选】下列哪些循环能正确统计1到100中偶数的个数？',
      code: null,
      options: [
        'count = 0\\nfor i in range(1, 101):\\n    if i % 2 == 0:\\n        count = count + 1',
        'count = 0\\nfor i in range(2, 101, 2):\\n    count = count + 1',
        'count = 0\\ni = 1\\nwhile i <= 100:\\n    if i % 2 == 0:\\n        count = count + 1\\n    i = i + 1',
        'count = 0\\nfor i in range(50):\\n    count = count + 1'
      ],
      answer: [0, 1, 2, 3],
      partialAnswer: [0],
      explanation: 'A: 遍历1-100判断偶数；B: 步长2直接取偶数50个；C: while循环判断偶数；D: range(50)循环50次（1-100恰好50个偶数）。全部正确。'
    },
    {
      id: 'q-5-exp-multi-2',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-6',
      score: 3,
      difficulty: 'hard',
      question: '【多选】下列哪些代码的输出包含数字6？',
      code: null,
      options: [
        'for i in range(2):\\n    for j in range(2, 4):\\n        print(i * j)',
        'for i in range(1, 4):\\n    for j in range(1, 4):\\n        if i * j == 6:\\n            print(i * j)',
        'for i in range(5, 8):\\n    print(i)',
        'i = 1\\nwhile i <= 10:\\n    print(i)\\n    i = i + 1'
      ],
      answer: [0, 1, 2, 3],
      partialAnswer: [0],
      explanation: 'A: 2×3=6；B: 找乘积为6的组合；C: 输出5,6,7包含6；D: 输出1到10包含6。全部正确。'
    },
    {
      id: 'q-5-exp-multi-3',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-11',
      score: 3,
      difficulty: 'hard',
      question: '【多选】已知 nums = [3, 1, 4, 1, 5]，下列哪些代码执行后 nums 变为 [5, 4, 3, 1, 1]？',
      code: null,
      options: [
        'nums.sort()\\nnums.reverse()',
        'nums.sort(reverse=True)',
        'nums = sorted(nums, reverse=True)',
        'nums.reverse()'
      ],
      answer: [0, 1, 2],
      partialAnswer: [0],
      explanation: 'A: 先升序[1,1,3,4,5]再反转为[5,4,3,1,1]；B: 直接降序[5,4,3,1,1]；C: 返回降序新列表；D: 直接反转原列表得到[5,1,4,1,3]不对。'
    },
    {
      id: 'q-5-exp-multi-4',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-2',
      score: 3,
      difficulty: 'hard',
      question: "【多选】已知 s = 'Hello World'，下列哪些表达式的值是正确的？",
      code: null,
      options: [
        "len(s) 的值是 11",
        "s.count('l') 的值是 3",
        "s.count('o') 的值是 2",
        "s.count('L') 的值是 0"
      ],
      answer: [0, 1, 2, 3],
      partialAnswer: [0],
      explanation: "'Hello World'长度11（含空格）；'l'出现3次(索引2,3,9)；'o'出现2次(索引4,7)；'L'大写字母没有出现，count('L')=0。"
    },
    {
      id: 'q-5-exp-multi-5',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-15',
      score: 3,
      difficulty: 'hard',
      question: "【多选】已知 d = {'a': 1, 'b': 2, 'c': 3}，下列哪些操作后 d 中键值对数量增加了？",
      code: null,
      options: [
        "d['d'] = 4",
        "d['a'] = 10",
        "d['e'] = 5",
        "del d['b']"
      ],
      answer: [0, 2],
      partialAnswer: [0],
      explanation: "A: 新增'd':4，数量+1；B: 修改已有键'a'的值，数量不变；C: 新增'e':5，数量+1；D: del删除键值对，数量减少。"
    },

    // ==================== 编程题（4题，共55分）====================
    {
      id: 'q-5-exp-coding-1',
      type: 'coding',
      knowledgePoint: 'kp-5-9',
      score: 10,
      difficulty: 'hard',
      question: '请编写程序，输入一个正整数n，使用枚举法判断n是否是质数。如果是质数输出"是质数"，否则输出"不是质数"。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '7', expectedOutput: '是质数' },
        { input: '10', expectedOutput: '不是质数' },
        { input: '1', expectedOutput: '不是质数' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能使用循环枚举判断', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = int(input())
if n < 2:
    print('不是质数')
else:
    is_prime = True
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print('是质数')
    else:
        print('不是质数')`,
      explanation: '枚举2到n-1的所有数，判断是否能整除n。1不是质数。'
    },
    {
      id: 'q-5-exp-coding-2',
      type: 'coding',
      knowledgePoint: 'kp-5-3',
      score: 10,
      difficulty: 'hard',
      question: '请编写程序，使用while循环实现：输入一个正整数n，将n的各位数字反转后输出。例如输入1234输出4321。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '1234', expectedOutput: '4321' },
        { input: '100', expectedOutput: '1' },
        { input: '5', expectedOutput: '5' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能使用while循环处理', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = int(input())
result = 0
while n > 0:
    result = result * 10 + n % 10
    n = n // 10
print(result)`,
      explanation: '每次取n的末位(n%10)加到result末尾，然后n整除10去掉末位。'
    },
    {
      id: 'q-5-exp-coding-3',
      type: 'coding',
      knowledgePoint: 'kp-5-6',
      score: 15,
      difficulty: 'hard',
      question: '请编写程序，使用嵌套循环输出如下图形（输入n表示行数，每行输出对应的*数量）。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '4', expectedOutput: '*\\n**\\n***\\n****' },
        { input: '3', expectedOutput: '*\\n**\\n***' }
      ],
      scoringRules: {
        fullScore: 15,
        partialScores: [
          { condition: '能使用嵌套循环', score: 5 },
          { condition: '能正确控制每行星号数', score: 10 },
          { condition: '完全正确', score: 15 }
        ]
      },
      referenceAnswer: `n = int(input())
for i in range(1, n + 1):
    for j in range(i):
        print('*', end='')
    print()`,
      explanation: '外层循环控制行数，内层循环控制每行的星号数量。'
    },
    {
      id: 'q-5-exp-coding-4',
      type: 'coding',
      knowledgePoint: 'kp-5-5',
      score: 20,
      difficulty: 'hard',
      question: '请编写程序，输入一个包含重复元素的列表（格式如"1,2,3,2,1"），去除重复元素后输出（保持原顺序）。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '1,2,3,2,1', expectedOutput: '[1, 2, 3]' },
        { input: '5,5,5,5', expectedOutput: '[5]' }
      ],
      scoringRules: {
        fullScore: 20,
        partialScores: [
          { condition: '能获取输入并转为列表', score: 5 },
          { condition: '能使用循环去重', score: 10 },
          { condition: '完全正确', score: 20 }
        ]
      },
      referenceAnswer: `s = input()
nums = s.split(',')
nums = [int(x) for x in nums]
result = []
for n in nums:
    if n not in result:
        result.append(n)
print(result)`,
      explanation: '遍历列表，用not in判断是否已存在，不存在则append，保持原顺序。'
    }
  ],

  distribution: {
    byType: {
      'single-choice': { count: 15, totalScore: 30 },
      'multiple-choice': { count: 5, totalScore: 15 },
      'coding': { count: 4, totalScore: 55 }
    },
    byKnowledgePoint: {
      'kp-5-1': { count: 1, totalScore: 2 },
      'kp-5-2': { count: 2, totalScore: 5 },
      'kp-5-3': { count: 2, totalScore: 12 },
      'kp-5-4': { count: 1, totalScore: 2 },
      'kp-5-5': { count: 2, totalScore: 22 },
      'kp-5-6': { count: 2, totalScore: 17 },
      'kp-5-7': { count: 1, totalScore: 2 },
      'kp-5-8': { count: 1, totalScore: 2 },
      'kp-5-9': { count: 2, totalScore: 12 },
      'kp-5-10': { count: 1, totalScore: 2 },
      'kp-5-11': { count: 2, totalScore: 5 },
      'kp-5-12': { count: 1, totalScore: 2 },
      'kp-5-13': { count: 1, totalScore: 2 },
      'kp-5-14': { count: 1, totalScore: 2 },
      'kp-5-15': { count: 2, totalScore: 5 }
    },
    byDifficulty: {
      'easy': 0,
      'medium': 0,
      'hard': 24
    }
  }
}

export default practiceSet
