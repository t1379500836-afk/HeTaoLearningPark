/**
 * PY2 课程 L11-4: 化敌为友
 *
 * 核心知识点:
 * 1. 用函数返回值做运算 - 返回值参与数学运算
 * 2. 用函数返回值做判断 - 返回布尔值作为条件
 * 3. random.choice()方法 - 随机选择列表元素
 * 4. 综合应用：百兽词典
 */

// 单词卡数据
export const vocabData = [
  {
    word: 'return',
    pronunciation: '[ri-t3:rn]',
    partOfSpeech: 'v.',
    meaning: '返回；归还；回报',
    level: 'easy',
    example: 'Please return my book tomorrow.',
    exampleTranslation: '请明天把我的书还回来。'
  },
  {
    word: 'enemy',
    pronunciation: '[e-na-mi]',
    partOfSpeech: 'n.',
    meaning: '敌人；敌军',
    level: 'easy',
    example: 'They used to be enemies.',
    exampleTranslation: '他们曾经是敌人。'
  },
  {
    word: 'animal',
    pronunciation: '[a-ni-mal]',
    partOfSpeech: 'n.',
    meaning: '动物；牲畜',
    level: 'medium',
    example: 'The elephant is a large animal.',
    exampleTranslation: '大象是一种大型动物。'
  },
  {
    word: 'choice',
    pronunciation: '[tfois]',
    partOfSpeech: 'n.',
    meaning: '选择；挑选',
    level: 'medium',
    example: 'Make a wise choice.',
    exampleTranslation: '做出明智的选择。'
  }
]

// 知识点数据
export const knowledgePoints = [
  {
    id: 'kp-1',
    title: '用返回值做运算 - 函数结果参与计算',
    emoji: '🔢',
    gradeLevel: '1-2',
    summary: '函数的返回值可以直接用于数学运算',

    easy: {
      story: '想象函数是一个计算器！它算出一个结果后，你可以把这个结果再拿来计算。比如用函数算出两个圆的面积，然后加起来！',
      concept: '函数返回的值可以像普通数字一样进行加减乘除运算。可以把函数调用放在算式中，它的返回值会参与计算。',
      syntax: `# 定义返回值的函数
def 函数名(参数):
    return 计算结果

# 用返回值做运算
total = 函数名(参数1) + 函数名(参数2)`,
      example: {
        title: '圆面积计算器',
        code: `# 定义计算圆面积的函数
def area(r):
    pi = 3.14
    return pi * r * r

# 计算两个圆的面积总和
result = area(2) + area(3)
print(result)`,
        output: '40.82',
        explanation: 'area(2) = 3.14 × 2 × 2 = 12.56，area(3) = 3.14 × 3 × 3 = 28.26。总和 = 12.56 + 28.26 = 40.82。'
      },
      practice: [
        { question: '函数返回值可以参与运算吗？', answer: '可以，返回值就像一个普通的数字' },
        { question: 'area(2) + area(3)会怎样计算？', answer: '先算两个函数的返回值，然后相加' }
      ]
    },

    medium: {
      story: '在游戏中，函数可以计算角色的攻击力、防御力，然后把结果加起来得到总战力！函数返回值让计算更灵活。',
      concept: '函数返回值可以用于各种数学运算：加减乘除、取模、幂运算等。还可以把多个函数的返回值组合起来计算。',
      syntax: `# 函数返回值的运算
result = func1(x) + func2(y)  # 加法
result = func1(x) * func2(y)  # 乘法
result = func1(x) / 10        # 除以常数
result = func1(x) % 2        # 取模判断奇偶`,
      example: {
        title: '购物费用计算',
        code: `def get_price(quantity, unit_price):
    """计算商品总价"""
    return quantity * unit_price

def get_discount(total):
    """计算折扣"""
    if total > 100:
        return total * 0.8  # 8折
    else:
        return total

# 计算多件商品折扣后的总价
apple_total = get_price(5, 12)  # 5个苹果，每个12元
banana_total = get_price(3, 8)  # 3个香蕉，每个8元

# 总价再打折扣
final_price = get_discount(apple_total + banana_total)
print(f"最终价格: {final_price}")`,
        output: '最终价格: 84.0',
        explanation: '苹果：5×12=60元，香蕉：3×8=24元，总计84元。84<100不满足满100打8折的条件，所以不打折，保持84元。'
      },
      practice: [
        { question: '函数返回值可以和常数运算吗？', answer: '可以，比如 func(x) + 10' },
        { question: '多个函数返回值可以一起运算吗？', answer: '可以，比如 func1(x) + func2(y)' }
      ]
    },

    hard: {
      story: '高级编程模式！函数返回值的运算是构建复杂算法的基础。通过组合多个函数，可以创建强大的计算流水线。',
      concept: '函数返回值的运算体现了函数式编程的思想。函数可以作为表达式的一部分，实现代码的高度复用和组合。',
      syntax: `# 复杂的返回值运算
def calculate(x, y, z):
    # 函数的返回值可以参与各种运算
    return func1(x) + func2(y) * func3(z)

# 嵌套函数调用
def complex_calc(n):
    return round(sqrt(abs(n)), 2)`,
      example: {
        title: '综合计算系统',
        code: `import math

def circle_area(radius):
    """计算圆面积"""
    return math.pi * radius ** 2

def rectangle_area(width, height):
    """计算矩形面积"""
    return width * height

def total_area(shape1_area, shape2_area):
    """计算总面积"""
    return shape1_area + shape2_area

# 综合应用：计算一个圆和一个矩形的总面积
# 同时计算圆环的面积（大圆减小圆）
big_circle = circle_area(5)
small_circle = circle_area(3)
ring_area = big_circle - small_circle

rect = rectangle_area(4, 6)

print(f"圆环面积: {ring_area:.2f}")
print(f"矩形面积: {rect}")
print(f"总面积: {total_area(ring_area, rect):.2f}")`,
        output: '圆环面积: 50.27\n矩形面积: 24\n总面积: 74.27',
        explanation: '大圆面积：π×5²≈78.54，小圆：π×3²≈28.27，圆环：78.54-28.27≈50.27。矩形：4×6=24。总面积：50.27+24=74.27。'
      },
      practice: [
        { question: '函数返回值运算有什么优势？', answer: '代码更模块化，每个函数专注一个任务' },
        { question: '如何让浮点数结果只显示两位小数？', answer: '用 f"{value:.2f}" 格式化或 round(value, 2)' }
      ]
    }
  },

  {
    id: 'kp-2',
    title: '用返回值做判断 - 布尔值返回',
    emoji: '✅',
    gradeLevel: '1-2',
    summary: '函数返回True或False可以作为if条件',

    easy: {
      story: '函数就像一个裁判！判断一件事情是对(True)还是错(False)，然后告诉程序接下来怎么做。比如判断数字是不是偶数。',
      concept: '函数可以返回布尔值(True/False)，返回值可以直接作为if语句的条件判断。这样让代码更清晰、更易读。',
      syntax: `# 定义返回布尔值的函数
def 函数名(参数):
    if 条件:
        return True
    else:
        return False

# 直接作为if条件
if 函数名(参数):
    执行操作`,
      example: {
        title: '偶数判断器',
        code: `# 定义判断偶数的函数
def is_even(num):
    if num % 2 == 0:
        return True

# 测试
n = 6
if is_even(n):
    print("偶数")
else:
    print("奇数")`,
        output: '偶数',
        explanation: 'is_even(6)判断6能不能被2整除。6%2==0，返回True，if条件成立，打印"偶数"。'
      },
      practice: [
        { question: '什么值可以作为if条件？', answer: '布尔值(True/False)' },
        { question: '函数可以直接返回判断结果吗？', answer: '可以，直接 return 条件表达式' }
      ]
    },

    medium: {
      story: '在游戏中，函数可以判断"玩家有没有装备"、"血量是否足够"、"是否可以攻击"等，返回True或False来控制游戏逻辑！',
      concept: '返回布尔值的函数通常以is_、has_、can_等开头命名，清楚地表示函数会返回判断结果。这种函数是"谓词函数"或"判断函数"。',
      syntax: `# 常见的布尔函数命名
def is_xxx(参数):      # 判断是否是...
def has_xxx(参数):      # 判断是否有...
def can_xxx(参数):      # 判断是否能...
    return True或False

# 使用示例
if is_valid(value):
    process(value)`,
      example: {
        title: '综合判断系统',
        code: `def is_even(num):
    """判断是否为偶数"""
    if num % 2 == 0:
        return True
    return False

def is_positive(num):
    """判断是否为正数"""
    return num > 0

def can_vote(age):
    """判断是否可以投票(年龄>=18)"""
    return age >= 18

# 综合测试
number = 8
if is_even(number) and is_positive(number):
    print(f"{number}是正偶数")

age = 20
if can_vote(age):
    print(f"年龄{age}可以投票")`,
        output: '8是正偶数\n年龄20可以投票',
        explanation: '8%2==0是偶数，8>0是正数，两个条件都满足。20>=18可以投票。'
      },
      practice: [
        { question: '布尔函数通常以什么开头命名？', answer: 'is_、has_、can_等' },
        { question: '可以直接 return 一个比较表达式吗？', answer: '可以，比如 return num > 0 会返回True或False' }
      ]
    },

    hard: {
      story: '专业编程中的谓词函数！返回布尔值的函数是构建复杂逻辑判断的基石，让代码更声明式、更易理解。',
      concept: '谓词函数是返回布尔值的纯函数，它们不修改外部状态，只根据输入返回判断结果。这种函数易于测试、组合和复用。',
      syntax: `# 谓词函数组合
if is_valid(user) and is_admin(user):
    grant_access()

if not is_empty(list) and contains(list, item):
    process(item)

# 三元运算符配合
def get_status(score):
    return "通过" if is_passing(score) else "不通过"`,
      example: {
        title: '高级判断系统',
        code: `def is_even(n):
    """判断偶数"""
    return n % 2 == 0

def is_positive(n):
    """判断正数"""
    return n > 0

def is_prime(n):
    """判断质数"""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def is_valid_number(n):
    """综合判断：正偶数且不是2"""
    return is_positive(n) and is_even(n) and n != 2

# 测试
test_numbers = [4, 2, -6, 7, 12]
for num in test_numbers:
    if is_valid_number(num):
        print(f"{num}: 有效的正偶数（非2）")
    elif is_prime(num):
        print(f"{num}: 质数")
    else:
        print(f"{num}: 其他")`,
        output: '4: 有效的正偶数（非2）\n2: 质数\n-6: 其他\n7: 质数\n12: 有效的正偶数（非2）',
        explanation: '4是正偶数且不是2，符合is_valid_number。2是质数。-6不是正数。7是质数。12是有效的正偶数。'
      },
      practice: [
        { question: '谓词函数有什么特点？', answer: '返回布尔值，不修改外部状态，易于测试和组合' },
        { question: '如何组合多个布尔函数？', answer: '用and、or、not等逻辑运算符组合' }
      ]
    }
  },

  {
    id: 'kp-3',
    title: 'random.choice() - 随机选择',
    emoji: '🎲',
    gradeLevel: '1-2',
    summary: '从列表中随机选择一个元素',

    easy: {
      story: '想象有一个神奇的大转盘，上面有很多选项。random.choice()就像转动转盘，随机选中一个选项！',
      concept: 'random.choice()可以从列表中随机选择一个元素。使用前需要先导入random模块：import random',
      syntax: `# 导入random模块
import random

# 从列表中随机选择一个
结果 = random.choice(列表名)`,
      example: {
        title: '随机抽动物',
        code: `import random

# 动物列表
animals = ["猫", "狗", "兔子", "小鸟"]

# 随机选择一个
selected = random.choice(animals)
print(f"抽中的是: {selected}")`,
        output: '抽中的是: 兔子  # 每次运行可能不同',
        explanation: 'random.choice从animals列表中随机选择一个元素，每次运行结果可能不同。'
      },
      practice: [
        { question: '使用random.choice()前需要做什么？', answer: '需要先导入random模块：import random' },
        { question: 'random.choice()的参数是什么？', answer: '是一个列表' }
      ]
    },

    medium: {
      story: '在游戏中，random.choice()可以随机抽取卡片、随机生成敌人、随机掉落道具！让游戏每次都有新鲜感。',
      concept: 'random.choice()是random模块的常用函数，它从非空序列中随机返回一个元素。常用于模拟抽奖、随机事件、测试数据生成等场景。',
      syntax: `import random

# 随机选择元素
item = random.choice([1, 2, 3, 4, 5])

# 随机选择字符串
word = random.choice(["apple", "banana", "orange"])

# 配合其他随机函数
import random
num = random.randint(1, 10)  # 随机整数`,
      example: {
        title: '百兽词典单词测试',
        code: `import random

# 百兽词典数据
dictionary = {
    "老虎": "tiger",
    "狮子": "lion",
    "大象": "elephant",
    "猴子": "monkey"
}

# 随机选择一个中文词
chinese = random.choice(list(dictionary.keys()))
english = dictionary[chinese]

print(f"请翻译: {chinese}")
print(f"答案是: {english}")

# 再随机选一个练习
chinese2 = random.choice(list(dictionary.keys()))
print(f"\\n再来一个: {chinese2}")`,
        output: '请翻译: 老虎\n答案是: tiger\n\n再来一个: 猴子',
        explanation: 'random.choice从字典的键列表中随机选择一个中文词，然后获取对应的英文。每次运行结果随机。'
      },
      practice: [
        { question: 'random.choice()可以用于字典吗？', answer: '不可以直接用于字典，要先转成列表用list(dict.keys())' },
        { question: 'random.choice()会修改原列表吗？', answer: '不会，它只是读取并返回一个元素' }
      ]
    },

    hard: {
      story: '高级随机应用！random模块提供了多种随机函数，choice()只是其中之一。理解随机数的生成和应用，是创建动态程序的关键。',
      concept: 'random.choice()使用Mersenne Twister算法生成伪随机数。在编程中，"随机"实际上是"伪随机"，由算法生成。对于大多数应用来说已经足够随机。',
      syntax: `# random模块常用函数
import random

random.choice(seq)      # 随机选择一个元素
random.sample(seq, k)    # 随机选择k个不重复元素
random.shuffle(list)    # 就地打乱列表
random.randint(a, b)     # 随机整数[a,b]
random.random()         # 随机浮点数[0,1)`,
      example: {
        title: '完整的单词测试系统',
        code: `import random

# 单词词典
vocabulary = [
    {"english": "tiger", "chinese": "老虎", "level": "hard"},
    {"english": "cat", "chinese": "猫", "level": "easy"},
    {"english": "elephant", "chinese": "大象", "level": "medium"},
    {"english": "bird", "chinese": "鸟", "level": "easy"}
]

def random_word():
    """随机选择一个单词"""
    return random.choice(vocabulary)

def quiz(count=3):
    """出测试题"""
    score = 0
    for i in range(count):
        word = random_word()
        print(f"\\n问题{i+1}: {word['chinese']}的英文是什么？")
        print(f"提示: 难度是{word['level']}")
        # 实际使用时可以用input()获取用户输入
        print(f"答案: {word['english']}")
        score += 1
    print(f"\\n测试完成！共{count}题")

# 开始测试
quiz(3)`,
        output: '问题1: 老虎的英文是什么？\n提示: 难度是hard\n答案: tiger\n\n问题2: 鸟的英文是什么？\n提示: 难度是easy\n答案: bird\n\n问题3: 大象的英文是什么？\n提示: 难度是medium\n答案: elephant\n\n测试完成！共3题',
        explanation: '这个系统使用random.choice()每次随机选择单词，配合字典数据结构，创建了一个简单的单词测试程序。'
      },
      practice: [
        { question: 'random.choice()和random.sample()有什么区别？', answer: 'choice选1个，sample可以选多个不重复的元素' },
        { question: '如何让每次运行程序得到相同的随机结果？', answer: '用random.seed()设置相同的种子' }
      ]
    }
  }
]

// 习题数据（编程 × 数学融合）
export const exercises = [
  // 基础题（1-2年级）
  {
    id: 'ex-1',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '',
    type: 'multiple-choice',
    mathConcept: '圆面积计算',
    question: '执行下方代码，会打印出什么？\n\n```python\ndef area(r):\n    pi = 3.14\n    return pi * r * r\n\ntotal = area(5) + area(6)\nprint(total)\n```',
    options: [
      '191',
      '200',
      '220'
    ],
    answer: 0, // A
    explanation: 'area(5) = 3.14 × 5 × 5 = 78.5，area(6) = 3.14 × 6 × 6 = 113.04。总和 ≈ 78.5 + 113.04 ≈ 191.54，四舍五入约191。\n\n数学知识：圆面积公式 S = πr²，两个圆面积相加。',
    hint: '先分别计算两个圆的面积，再相加'
  },
  {
    id: 'ex-2',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '',
    type: 'multiple-choice',
    mathConcept: '偶数判断',
    question: '执行下方代码，输出是？\n\n```python\ndef is_even(num):\n    if num % 2 == 0:\n        return True\n    return False\n\nif is_even(12):\n    print("偶数")\n```',
    options: [
      '"偶数"',
      'True',
      '不输出'
    ],
    answer: 0, // A
    explanation: 'is_even(12)判断12%2==0，返回True。if条件成立，打印"偶数"。\n\n数学知识：12能被2整除，是偶数。',
    hint: '12除以2余数是0'
  },

  // 进阶题（3-4年级）
  {
    id: 'ex-3',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '',
    type: 'multiple-choice',
    mathConcept: '条件判断',
    question: '执行下方代码，输出结果是？\n\n```python\ndef is_valid(n):\n    if n > 0:\n        return True\n    return False\n\nif is_valid(-5):\n    print("有效")\nelse:\n    print("无效")\n```',
    options: [
      '"有效"',
      '"无效"',
      'True'
    ],
    answer: 1, // B
    explanation: 'is_valid(-5)：-5>0不成立，返回False。if条件不成立，执行else打印"无效"。\n\n数学知识：负数小于0，不大于0。',
    hint: '-5是负数，不大于0'
  },
  {
    id: 'ex-4',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '',
    type: 'multiple-choice',
    mathConcept: '综合计算',
    question: '执行下方代码，最终输出什么？\n\n```python\ndef get_area(side):\n    return side * side\n\ntotal = get_area(3) + get_area(4)\nprint(total)\n```',
    options: [
      '24',
      '25',
      '49'
    ],
    answer: 1, // B
    explanation: 'get_area(3) = 3×3 = 9，get_area(4) = 4×4 = 16。总和 = 9 + 16 = 25。\n\n数学知识：正方形面积 = 边长²，9 + 16 = 25。',
    hint: '分别计算两个正方形的面积再相加'
  },

  // 挑战题（5-6年级）
  {
    id: 'ex-5',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '',
    type: 'multiple-choice',
    mathConcept: '逻辑组合',
    question: '执行下方代码，输出什么？\n\n```python\ndef is_even(n):\n    return n % 2 == 0\n\ndef is_positive(n):\n    return n > 0\n\nnum = -4\nif is_even(num) and is_positive(num):\n    print("正偶数")\nelif is_even(num):\n    print("偶数")\nelse:\n    print("其他")\n```',
    options: [
      '"正偶数"',
      '"偶数"',
      '"其他"'
    ],
    answer: 1, // B
    explanation: '-4是偶数（is_even返回True），但不是正数（is_positive返回False）。and需要两个都True，所以第一个if不成立。elif is_even(num)成立，打印"偶数"。\n\n数学知识：负偶数仍然是偶数，但不是正偶数。',
    hint: 'and要求两个条件都为True'
  },
  {
    id: 'ex-6',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '',
    type: 'multiple-choice',
    mathConcept: '嵌套函数',
    question: '执行下方代码，输出是什么？\n\n```python\nimport random\n\nnumbers = [1, 2, 3, 4, 5]\nresult = random.choice(numbers) * 2\nprint(result)\n```',
    options: [
      '1到5之间的偶数',
      '2到10之间的某个偶数',
      '固定输出6'
    ],
    answer: 1, // B
    explanation: 'random.choice(numbers)随机从[1,2,3,4,5]选一个数，然后乘以2。可能的结果是2, 4, 6, 8, 10。\n\n数学知识：随机数乘以2，结果是2到10之间的偶数。',
    hint: 'random.choice每次运行结果可能不同'
  }
]

// 课次元数据
export const lessonMeta = {
  id: 'L11-4',
  title: '化敌为友',
  subtitle: '学会用返回值做运算和判断，以及random.choice()',
  difficulty: '进阶',
  estimatedTime: '30-45分钟',
  learningGoals: [
    '掌握函数返回值参与数学运算',
    '学会用函数返回布尔值作为if条件',
    '掌握random.choice()随机选择',
    '理解函数的综合应用'
  ],
  prerequisites: [
    'Python基础语法',
    '变量和数据类型',
    'if条件判断',
    'L11-1 函数概念',
    'L11-2 函数定义和return'
  ]
}

// 打字练习单词（按难度分组）
export const typingWords = {
  easy: ['return', 'choice', 'random', 'if'],
  medium: ['boolean', 'condition', 'import', 'module'],
  hard: ['predicate', 'function', 'calculate', 'operator']
}

// 打字练习代码模板（按难度分组）
export const typingTemplates = {
  easy: [
    // random模块导入
    'import random',

    // random.choice基础
    'random.choice(list)',
    'random.choice(items)',

    // 返回值运算
    'area(2) + area(3)',
    'func(x) + func(y)',
    'result * 2',

    // 布尔判断
    'if is_even(n):',
    'if is_valid(x):',
    'if can_vote(age):'
  ],
  medium: [
    // random.choice进阶
    'item = random.choice(items)',
    'word = random.choice(words)',

    // 列表转列表选择
    'random.choice(list(dict.keys()))',

    // 返回值作为条件
    'if is_even(n) and is_positive(n):',
    'if is_valid(user) and is_admin(user):',

    // 布尔函数定义
    'def is_even(n):\n    return n % 2 == 0',
    'def is_positive(x):\n    return x > 0',

    // 返回值参与运算
    'total = func1(x) + func2(y)',
    'result = area(2) * 2'
  ],
  hard: [
    // 复杂random应用
    'import random\n\nword = random.choice(vocabulary)',
    'selected = random.choice(list(dictionary.keys()))',

    // 多条件布尔判断
    'if is_valid_number(n):\n    print("有效")',

    // 综合布尔函数
    'def is_valid(n):\n    return is_even(n) and is_positive(n)',

    // 函数返回值链式调用
    'result = process(process(x))',
    'total = func1(x) + func2(y) * func3(z)',

    // 完整的判断系统
    'def is_valid(n):\n    if n < 2:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True'
  ]
}

// 导出所有数据
export const L11_4_data = {
  meta: lessonMeta,
  vocab: vocabData,
  knowledgePoints,
  exercises,
  typingWords,
  typingTemplates
}

export default L11_4_data
