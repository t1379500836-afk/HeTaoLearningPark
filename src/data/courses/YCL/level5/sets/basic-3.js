/**
 * YCL五级基础练习（三）
 *
 * 本套卷包含：单选题15题（每题2分，共30分）
 *             多选题5题（每题3分，共15分）
 *             编程题4题（共55分）
 * 总分：100分  时长：90分钟
 */

export const practiceSet = {
  meta: {
    id: 'level5-basic-3',
    level: 'level5',
    difficulty: 'basic',
    name: '五级基础练习（三）',
    description: '涵盖五级必考知识点的基础练习',
    duration: 90,
    totalScore: 100,
    createdAt: '2026-03-31',
    version: '1.0'
  },

  questions: [
    // ==================== 单选题（15题，每题2分，共30分）====================
    {
      id: 'q-5-3-single-1',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'easy',
      question: "已知 s = 'HELLO'，s[-1]的值是什么？",
      code: null,
      options: [
        "'H'",
        "'E'",
        "'L'",
        "'O'"
      ],
      answer: 3,
      explanation: "负索引从末尾开始，-1表示最后一个元素，'HELLO'的最后一个字符是'O'。"
    },
    {
      id: 'q-5-3-single-2',
      type: 'single-choice',
      knowledgePoint: 'kp-5-2',
      score: 2,
      difficulty: 'easy',
      question: '运行下列代码，输出结果是？',
      code: `nums = [10, 20, 30]
print(sum(nums))`,
      options: [
        '3',
        '30',
        '60',
        '20'
      ],
      answer: 2,
      explanation: 'sum()计算列表中所有元素的总和，10+20+30=60。'
    },
    {
      id: 'q-5-3-single-3',
      type: 'single-choice',
      knowledgePoint: 'kp-5-5',
      score: 2,
      difficulty: 'easy',
      question: "运行下列代码，输出结果是？",
      code: `a = [1, 2, 3]
a.pop()
print(a)`,
      options: [
        '[1, 2, 3]',
        '[1, 2]',
        '[2, 3]',
        '程序报错'
      ],
      answer: 1,
      explanation: 'pop()移除并返回列表的最后一个元素，移除3后列表变为[1, 2]。'
    },
    {
      id: 'q-5-3-single-4',
      type: 'single-choice',
      knowledgePoint: 'kp-5-4',
      score: 2,
      difficulty: 'easy',
      question: "运行下列代码，输出结果是？",
      code: `s = '红黄蓝绿'
print(len(s.split('黄')))`,
      options: [
        '1',
        '2',
        '3',
        '4'
      ],
      answer: 1,
      explanation: "split('黄')按'黄'分割字符串'红黄蓝绿'，分成['红', '蓝绿']两部分，len为2。"
    },
    {
      id: 'q-5-3-single-5',
      type: 'single-choice',
      knowledgePoint: 'kp-5-3',
      score: 2,
      difficulty: 'easy',
      question: '运行下列代码，输出结果是？',
      code: `i = 0
while i < 4:
    i = i + 2
print(i)`,
      options: [
        '4',
        '6',
        '2',
        '0'
      ],
      answer: 0,
      explanation: 'i=0, +2后=2(继续), +2后=4(不满足<4), 输出4。'
    },
    {
      id: 'q-5-3-single-6',
      type: 'single-choice',
      knowledgePoint: 'kp-5-6',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，一共输出几个星号？',
      code: `count = 0
for i in range(3):
    for j in range(4):
        count = count + 1
print(count)`,
      options: [
        '7',
        '10',
        '12',
        '24'
      ],
      answer: 2,
      explanation: '外层循环3次，每次内层循环4次，共3×4=12次。'
    },
    {
      id: 'q-5-3-single-7',
      type: 'single-choice',
      knowledgePoint: 'kp-5-7',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(10):
    if i % 2 == 0:
        continue
    print(i)`,
      options: [
        '0 2 4 6 8',
        '1 3 5 7 9',
        '0 1 2 3 4 5 6 7 8 9',
        '没有输出'
      ],
      answer: 1,
      explanation: '偶数时continue跳过，只输出奇数，即1,3,5,7,9。'
    },
    {
      id: 'q-5-3-single-8',
      type: 'single-choice',
      knowledgePoint: 'kp-5-10',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `s = 'Python'
for ch in s:
    print(ch, end='')`,
      options: [
        'Python',
        'P y t h o n',
        "['P', 'y', 't', 'h', 'o', 'n']",
        '0 1 2 3 4 5'
      ],
      answer: 0,
      explanation: "for循环遍历字符串的每个字符，end=''不换行，连续输出Python。"
    },
    {
      id: 'q-5-3-single-9',
      type: 'single-choice',
      knowledgePoint: 'kp-5-8',
      score: 2,
      difficulty: 'medium',
      question: "运行下列代码，输出结果是？",
      code: `a = '3.14'
b = float(a)
print(b + 1)`,
      options: [
        '3.141',
        '4.14',
        '4',
        '程序报错'
      ],
      answer: 1,
      explanation: "float('3.14')转为浮点数3.14，3.14+1=4.14。"
    },
    {
      id: 'q-5-3-single-10',
      type: 'single-choice',
      knowledgePoint: 'kp-5-12',
      score: 2,
      difficulty: 'medium',
      question: '运行下列代码，输出结果是？',
      code: `for i in range(3):
    print(i, end=' ')`,
      options: [
        '0 1 2',
        '0 1 2 （末尾有空格）',
        '0\n1\n2',
        '012'
      ],
      answer: 1,
      explanation: "end=' '指定末尾用空格替代换行，输出'0 1 2 '（末尾有空格）。"
    },
    {
      id: 'q-5-3-single-11',
      type: 'single-choice',
      knowledgePoint: 'kp-5-15',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `d = {'a': 1, 'b': 2, 'c': 3}
print(d['b'])`,
      options: [
        'a',
        'b',
        '2',
        '程序报错'
      ],
      answer: 2,
      explanation: "d['b']访问字典中键'b'对应的值，即2。"
    },
    {
      id: 'q-5-3-single-12',
      type: 'single-choice',
      knowledgePoint: 'kp-5-11',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `a = [3, 1, 4, 1, 5]
b = sorted(a)
print(a)`,
      options: [
        '[1, 1, 3, 4, 5]',
        '[3, 1, 4, 1, 5]',
        '[5, 4, 3, 1, 1]',
        '程序报错'
      ],
      answer: 1,
      explanation: 'sorted()返回新列表，不修改原列表。原列表a不变，仍是[3, 1, 4, 1, 5]。'
    },
    {
      id: 'q-5-3-single-13',
      type: 'single-choice',
      knowledgePoint: 'kp-5-1',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `s = 'ABCDE'
print(s[1] + s[3])`,
      options: [
        'AD',
        'BD',
        'AC',
        'BE'
      ],
      answer: 1,
      explanation: "'ABCDE'中s[1]='B', s[3]='D', 'B'+'D'='BD'。"
    },
    {
      id: 'q-5-3-single-14',
      type: 'single-choice',
      knowledgePoint: 'kp-5-5',
      score: 2,
      difficulty: 'hard',
      question: "运行下列代码，输出结果是？",
      code: `a = [10, 20, 30, 40]
a.remove(20)
print(a)`,
      options: [
        '[10, 20, 30, 40]',
        '[10, 30, 40]',
        '[20, 30, 40]',
        '[10, 20, 40]'
      ],
      answer: 1,
      explanation: 'remove(20)移除列表中第一个值为20的元素，列表变为[10, 30, 40]。'
    },
    {
      id: 'q-5-3-single-15',
      type: 'single-choice',
      knowledgePoint: 'kp-5-13',
      score: 2,
      difficulty: 'hard',
      question: '运行下列代码，输出结果是？',
      code: `result = [i for i in range(5) if i % 2 == 1]
print(result)`,
      options: [
        '[0, 2, 4]',
        '[1, 3]',
        '[1, 3, 5]',
        '[0, 1, 2, 3, 4]'
      ],
      answer: 1,
      explanation: '列表推导式筛选奇数，range(5)中的奇数为1和3。'
    },

    // ==================== 多选题（5题，每题3分，共15分）====================
    {
      id: 'q-5-3-multi-1',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-5',
      score: 3,
      difficulty: 'easy',
      question: "【多选】已知 a = [1, 2, 3]，下列哪些操作执行后 a 的值为 [1, 2, 3, 4]？",
      code: null,
      options: [
        'a.append(4)',
        'a.insert(3, 4)',
        'a = a + [4]',
        'a + 4'
      ],
      answer: [0, 1, 2],
      partialAnswer: [0],
      explanation: 'append末尾添加4；insert(3,4)在索引3处插入4；a+[4]创建新列表[1,2,3,4]。a+4会报错。'
    },
    {
      id: 'q-5-3-multi-2',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-4',
      score: 3,
      difficulty: 'medium',
      question: "【多选】下列哪些代码运行后会得到列表？",
      code: null,
      options: [
        "'1,2,3'.split(',')",
        "'hello world'.split()",
        "'ABC'.split(',')",
        "list('ABC')"
      ],
      answer: [0, 1, 2, 3],
      partialAnswer: [0],
      explanation: "split()总返回列表。A:['1','2','3']；B:['hello','world']；C:['ABC']；D:list('ABC')=['A','B','C']。全部正确。"
    },
    {
      id: 'q-5-3-multi-3',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-6',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列哪些代码的输出行数为3？',
      code: null,
      options: [
        'for i in range(3):\n    print(i)',
        'for i in range(1, 4):\n    print(i)',
        'for i in range(3):\n    for j in range(2):\n        print(i)',
        'for i in range(2):\n    for j in range(2):\n        print(i, j)'
      ],
      answer: [0, 1],
      partialAnswer: [0],
      explanation: 'A: 3行；B: 3行；C: 3×2=6行；D: 2×2=4行。'
    },
    {
      id: 'q-5-3-multi-4',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-11',
      score: 3,
      difficulty: 'medium',
      question: '【多选】下列关于排序的说法，正确的有哪些？',
      code: null,
      options: [
        'sort()会修改原列表',
        'sorted()会返回新列表',
        'sort()可以设置reverse=True进行降序',
        'sorted()只能排数字不能排字符串'
      ],
      answer: [0, 1, 2],
      partialAnswer: [0],
      explanation: 'sort()原地排序修改原列表；sorted()返回新列表；都可以用reverse=True降序；sorted()也能排字符串。'
    },
    {
      id: 'q-5-3-multi-5',
      type: 'multiple-choice',
      knowledgePoint: 'kp-5-2',
      score: 3,
      difficulty: 'medium',
      question: "【多选】已知 s = 'banana'，下列哪些表达式的值是正确的？",
      code: null,
      options: [
        "s.count('a') 的值是 3",
        "len(s) 的值是 6",
        "s.count('b') 的值是 2",
        "s.count('n') 的值是 2"
      ],
      answer: [0, 1, 3],
      partialAnswer: [0],
      explanation: "'banana'中：a出现3次，长度为6，b出现1次不是2次，n出现2次。"
    },

    // ==================== 编程题（4题，共55分）====================
    {
      id: 'q-5-3-coding-1',
      type: 'coding',
      knowledgePoint: 'kp-5-2',
      score: 10,
      difficulty: 'easy',
      question: '输入一组数字，用逗号分隔（如"1,2,3,4,5"），请输出这组数字中的最大值。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '1,5,3,9,2', expectedOutput: '9' },
        { input: '10,20,15', expectedOutput: '20' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入并分割', score: 3 },
          { condition: '能转换为数字列表', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `s = input()
nums = s.split(',')
nums = [int(x) for x in nums]
print(max(nums))`,
      explanation: '分割字符串，转为整数列表，用max()求最大值。'
    },
    {
      id: 'q-5-3-coding-2',
      type: 'coding',
      knowledgePoint: 'kp-5-7',
      score: 10,
      difficulty: 'easy',
      question: '请编写程序，输入一个正整数n，使用for循环和break，找出n的最小因数（大于1的因数）并输出。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: '15', expectedOutput: '3' },
        { input: '7', expectedOutput: '7' }
      ],
      scoringRules: {
        fullScore: 10,
        partialScores: [
          { condition: '能获取输入', score: 3 },
          { condition: '能使用循环和break', score: 5 },
          { condition: '完全正确', score: 10 }
        ]
      },
      referenceAnswer: `n = int(input())
for i in range(2, n + 1):
    if n % i == 0:
        print(i)
        break`,
      explanation: '从2开始判断是否能整除n，找到第一个因数后break退出循环。'
    },
    {
      id: 'q-5-3-coding-3',
      type: 'coding',
      knowledgePoint: 'kp-5-4',
      score: 15,
      difficulty: 'medium',
      question: '输入一行英文句子（单词间用空格分隔），请输出该句子中有多少个单词。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        { input: 'I love Python programming', expectedOutput: '4' },
        { input: 'Hello World', expectedOutput: '2' }
      ],
      scoringRules: {
        fullScore: 15,
        partialScores: [
          { condition: '能获取输入', score: 4 },
          { condition: '能使用split分割', score: 8 },
          { condition: '完全正确', score: 15 }
        ]
      },
      referenceAnswer: `s = input()
words = s.split(' ')
print(len(words))`,
      explanation: "用split(' ')按空格分割，len()计算单词数量。"
    },
    {
      id: 'q-5-3-coding-4',
      type: 'coding',
      knowledgePoint: 'kp-5-6',
      score: 20,
      difficulty: 'medium',
      question: '请编写程序，使用嵌套循环输出一个3行4列的星号矩形（每行输出完后换行）。',
      codeTemplate: `# 请在下方编写代码
`,
      testCases: [
        {
          input: '',
          expectedOutput: '****\n****\n****'
        }
      ],
      scoringRules: {
        fullScore: 20,
        partialScores: [
          { condition: '能使用嵌套循环', score: 8 },
          { condition: '能正确输出星号', score: 14 },
          { condition: '完全正确', score: 20 }
        ]
      },
      referenceAnswer: `for i in range(3):
    for j in range(4):
        print('*', end='')
    print()`,
      explanation: '外层循环控制行数，内层循环输出4个星号，end=""不换行，每行结束后print()换行。'
    }
  ],

  distribution: {
    byType: {
      'single-choice': { count: 15, totalScore: 30 },
      'multiple-choice': { count: 5, totalScore: 15 },
      'coding': { count: 4, totalScore: 55 }
    },
    byKnowledgePoint: {
      'kp-5-1': { count: 2, totalScore: 4 },
      'kp-5-2': { count: 3, totalScore: 15 },
      'kp-5-3': { count: 1, totalScore: 2 },
      'kp-5-4': { count: 2, totalScore: 17 },
      'kp-5-5': { count: 3, totalScore: 8 },
      'kp-5-6': { count: 2, totalScore: 22 },
      'kp-5-7': { count: 2, totalScore: 12 },
      'kp-5-8': { count: 1, totalScore: 2 },
      'kp-5-9': { count: 0, totalScore: 0 },
      'kp-5-10': { count: 1, totalScore: 2 },
      'kp-5-11': { count: 2, totalScore: 5 },
      'kp-5-12': { count: 1, totalScore: 2 },
      'kp-5-13': { count: 1, totalScore: 2 },
      'kp-5-14': { count: 0, totalScore: 0 },
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
