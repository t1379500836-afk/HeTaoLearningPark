/**
 * YCL 理论讲解配置
 *
 * 为每个知识点提供基础理论讲解，用于做题后的知识点诊断
 * 讲解风格：儿童友好、简洁易懂、配合示例
 */

export const yclTheory = {
  // ==================== 四级理论讲解 ====================
  level4: {
    // 输出命令
    'theory-4-1': {
      id: 'theory-4-1',
      knowledgePointId: 'kp-4-1',
      title: '输出命令 print()',
      emoji: '📢',
      summary: `print() 函数用于在屏幕上显示内容`,
      content: `
## 什么是输出？

输出就是把程序的结果"说"出来，显示在屏幕上让我们看到。在 Python 中，我们用 **print()** 函数来实现输出。

## 基本用法

\`\`\`python
print("你好，世界！")
print(123)
print(3 + 5)
\`\`\`

## 输出多个内容

\`\`\`python
print("我今年", 10, "岁")
# 输出：我今年 10 岁
\`\`\`

## 小技巧

- 字符串需要用引号（单引号或双引号）包起来
- 数字不需要引号
- print() 会自动在末尾换行
`,
      practice: [
        { q: '如何输出"Hello"？', a: 'print("Hello")' },
        { q: 'print(3 + 5) 会输出什么？', a: '8' }
      ]
    },

    // 输入命令
    'theory-4-2': {
      id: 'theory-4-2',
      knowledgePointId: 'kp-4-2',
      title: '输入命令 input()',
      emoji: '👂',
      summary: `input() 函数用于获取用户输入的内容`,
      content: `
## 什么是输入？

输入就是让程序"听"我们说话，获取我们输入的内容。在 Python 中，我们用 **input()** 函数来实现输入。

## 基本用法

\`\`\`python
name = input("请输入你的名字：")
print("你好，" + name)
\`\`\`

## 重要提示

- input() 获取的内容**永远是字符串类型**！
- 如果需要数字，必须用 int() 转换

\`\`\`python
age = input("请输入年龄：")
age = int(age)  # 转换成整数
\`\`\`

## 小技巧

- input() 括号里可以放提示文字
- 用户输入后按回车键确认
`,
      practice: [
        { q: 'input() 返回的是什么类型？', a: '字符串（str）' },
        { q: '如何获取用户输入的数字？', a: 'int(input("请输入数字："))' }
      ]
    },

    // 转整命令
    'theory-4-3': {
      id: 'theory-4-3',
      knowledgePointId: 'kp-4-3',
      title: '转整命令 int()',
      emoji: '🔢',
      summary: `int() 函数用于将字符串或小数转换为整数`,
      content: `
## 什么是类型转换？

有时候我们需要把一种数据类型变成另一种类型。**int()** 可以把其他类型转换成整数。

## 常见用法

\`\`\`python
# 字符串转整数
a = int("123")    # 结果：123

# 小数转整数（直接去掉小数部分）
b = int(3.7)      # 结果：3
c = int(3.2)      # 结果：3

# 配合 input 使用
age = int(input("请输入年龄："))
\`\`\`

## 注意事项

- int("3.14") 会报错！需要先转 float 再转 int
- int("abc") 会报错！字符串必须是数字

## 小技巧

- int() 转换小数时是"截断"，不是四舍五入
- 记住：3.9 变成 int 是 3，不是 4
`,
      practice: [
        { q: 'int("5") 的结果是什么？', a: '5（整数）' },
        { q: 'int(4.9) 的结果是什么？', a: '4' }
      ]
    },

    // 简单数学运算
    'theory-4-4': {
      id: 'theory-4-4',
      knowledgePointId: 'kp-4-4',
      title: '简单数学运算',
      emoji: '➕',
      summary: `Python 支持加、减、乘、除、整除、取余、幂运算`,
      content: `
## Python 的运算符

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| + | 加法 | 3 + 2 | 5 |
| - | 减法 | 5 - 2 | 3 |
| * | 乘法 | 3 * 2 | 6 |
| / | 除法 | 7 / 2 | 3.5 |
| // | 整除 | 7 // 2 | 3 |
| % | 取余 | 7 % 2 | 1 |
| ** | 幂运算 | 2 ** 3 | 8 |

## 特别说明

- 整除 //：除完只保留整数部分
- 取余 %：得到除法的余数
- 幂运算 **：计算乘方，如 2**3 = 2×2×2 = 8

## 示例代码

\`\`\`python
print(10 // 3)   # 输出：3
print(10 % 3)    # 输出：1
print(2 ** 4)    # 输出：16
\`\`\`
`,
      practice: [
        { q: '17 // 5 的结果是什么？', a: '3' },
        { q: '17 % 5 的结果是什么？', a: '2' }
      ]
    },

    // 字符串拼接
    'theory-4-5': {
      id: 'theory-4-5',
      knowledgePointId: 'kp-4-5',
      title: '字符串拼接',
      emoji: '🔗',
      summary: `使用 + 号可以将多个字符串连接成一个`,
      content: `
## 什么是字符串拼接？

字符串拼接就是把多个字符串"粘"在一起，变成一个更长的字符串。我们用 **+** 号来拼接。

## 基本用法

\`\`\`python
first = "Hello"
last = "World"
full = first + " " + last
print(full)  # 输出：Hello World
\`\`\`

## 重要提示

- 只有字符串才能和字符串拼接
- 数字需要先转换成字符串

\`\`\`python
age = 10
# 错误：print("我今年" + age + "岁")
# 正确：print("我今年" + str(age) + "岁")
\`\`\`

## 小技巧

- str() 可以把数字转换成字符串
- 可以用逗号代替 +，print 会自动添加空格
`,
      practice: [
        { q: '"a" + "b" 的结果是什么？', a: '"ab"' },
        { q: '如何把数字 5 和 "个苹果" 拼接？', a: 'str(5) + "个苹果"' }
      ]
    },

    // if-else
    'theory-4-6': {
      id: 'theory-4-6',
      knowledgePointId: 'kp-4-6',
      title: 'if-else 条件判断',
      emoji: '🔀',
      summary: `if-else 用于根据条件选择执行不同的代码`,
      content: `
## 什么是条件判断？

条件判断就像"如果...就...，否则..."。程序会根据条件是否成立，选择执行不同的代码。

## 基本语法

\`\`\`python
if 条件:
    # 条件成立时执行
else:
    # 条件不成立时执行
\`\`\`

## 示例代码

\`\`\`python
age = 12

if age >= 18:
    print("你是成年人")
else:
    print("你是未成年人")
\`\`\`

## 比较运算符

| 运算符 | 含义 | 示例 |
|--------|------|------|
| == | 等于 | x == 5 |
| != | 不等于 | x != 5 |
| > | 大于 | x > 5 |
| < | 小于 | x < 5 |
| >= | 大于等于 | x >= 5 |
| <= | 小于等于 | x <= 5 |

## 注意事项

- if 和 else 后面要有**冒号**
- 缩进很重要！通常是 4 个空格
`,
      practice: [
        { q: '判断 x 是否等于 10，条件怎么写？', a: 'x == 10' },
        { q: 'if 后面忘记写冒号会怎样？', a: '会报语法错误' }
      ]
    },

    // for循环基础
    'theory-4-7': {
      id: 'theory-4-7',
      knowledgePointId: 'kp-4-7',
      title: 'for 循环基础',
      emoji: '🔄',
      summary: `for 循环用于重复执行一段代码指定次数`,
      content: `
## 什么是循环？

循环就是让程序重复做同一件事。for 循环适合用在"知道要重复多少次"的情况。

## range() 函数

\`\`\`python
range(5)      # 生成 0, 1, 2, 3, 4
range(1, 5)   # 生成 1, 2, 3, 4
range(1, 10, 2)  # 生成 1, 3, 5, 7, 9（步长为2）
\`\`\`

## 基本语法

\`\`\`python
for 变量 in range(次数):
    # 重复执行的代码
\`\`\`

## 示例代码

\`\`\`python
# 打印 1 到 5
for i in range(1, 6):
    print(i)

# 打印 5 次"你好"
for i in range(5):
    print("你好")
\`\`\`

## 注意事项

- for 后面要有**冒号**
- 循环体内的代码要**缩进**
- range(n) 生成的数字从 0 开始，到 n-1 结束
`,
      practice: [
        { q: 'range(3) 生成哪些数字？', a: '0, 1, 2' },
        { q: '如何让循环执行 10 次？', a: 'for i in range(10):' }
      ]
    },

    // 变量的修改
    'theory-4-8': {
      id: 'theory-4-8',
      knowledgePointId: 'kp-4-8',
      title: '变量的修改',
      emoji: '📝',
      summary: `变量可以在程序运行过程中被重新赋值`,
      content: `
## 什么是变量修改？

变量的值不是固定的，可以在程序运行过程中改变。

## 基本用法

\`\`\`python
score = 0           # 初始值
score = 10          # 重新赋值
score = score + 5   # 在原值基础上增加
print(score)        # 输出：15
\`\`\`

## 常见修改方式

| 操作 | 简写形式 | 等价于 |
|------|---------|--------|
| 加法 | score += 5 | score = score + 5 |
| 减法 | score -= 3 | score = score - 3 |
| 乘法 | score *= 2 | score = score * 2 |
| 除法 | score /= 2 | score = score / 2 |

## 示例代码

\`\`\`python
# 计数器
count = 0
for i in range(5):
    count = count + 1
print(count)  # 输出：5

# 累加求和
total = 0
for i in range(1, 6):
    total = total + i
print(total)  # 输出：15
\`\`\`

## 小技巧

- 变量修改后，原来的值会被覆盖
- 使用 += 这样的简写更方便
`,
      practice: [
        { q: 'x = 5 后执行 x += 3，x 的值是？', a: '8' },
        { q: '如何让变量 n 的值变成原来的 2 倍？', a: 'n = n * 2 或 n *= 2' }
      ]
    },

    // 字符串基础
    'theory-4-9': {
      id: 'theory-4-9',
      knowledgePointId: 'kp-4-9',
      title: '字符串基础',
      emoji: '📖',
      summary: '字符串是用引号包裹的文本内容',
      content: `
## 什么是字符串？

字符串就是一串字符（文本），用引号包裹起来。

## 创建字符串

\`\`\'python
name = "小明"        # 双引号
msg = '你好'         # 单引号
\`\`\`

## 引号规则

- **单引号** 和 **双引号** 都可以创建字符串
- 引号必须成对出现（前后的引号要一样）
- 字符串里面可以包含另一种引号

\`\`\'python
print('我说："你好"')   # 字符串里有双引号
print("It's ok")        # 字符串里有单引号
\`\`\`

## 注意事项

- 引号必须成对使用，不能一单一双
- 数字加引号就变成字符串了，如 "123"
`,
      practice: [
        { q: '创建字符串可以用什么引号？', a: '单引号或双引号' },
        { q: '"123" 和 123 有什么区别？', a: '"123"是字符串，123是整数' }
      ]
    },

    // if语句
    'theory-4-10': {
      id: 'theory-4-10',
      knowledgePointId: 'kp-4-10',
      title: 'if 语句',
      emoji: '❓',
      summary: `if 语句用于判断条件是否成立`,
      content: `
## 什么是 if 语句？

if 语句用于判断某个条件是否成立，成立才执行对应的代码。

## 基本语法

\`\`\`python
if 条件:
    # 条件成立时执行
\`\`\`

## 示例代码

\`\`\`python
age = 18

if age >= 18:
    print("你是成年人")

score = 85
if score >= 60:
    print("及格了！")
\`\`\`

## 比较运算符

| 运算符 | 含义 | 示例 |
|--------|------|------|
| == | 等于 | x == 5 |
| != | 不等于 | x != 5 |
| > | 大于 | x > 5 |
| < | 小于 | x < 5 |
| >= | 大于等于 | x >= 5 |
| <= | 小于等于 | x <= 5 |

## 注意事项

- if 后面要有**冒号**（:）
- 条件后面的代码要**缩进**
- 条件的结果是布尔值（True/False）
`,
      practice: [
        { q: 'if x > 5: 中，x=6 时条件成立吗？', a: '成立（True）' },
        { q: '判断 x 是否等于 10 怎么写？', a: 'if x == 10:' }
      ]
    },

    // 比较数大小
    'theory-4-11': {
      id: 'theory-4-11',
      knowledgePointId: 'kp-4-11',
      title: '比较数大小',
      emoji: '⚖️',
      summary: `使用比较运算符比较两个数的大小`,
      content: `
## 什么是比较？

比较就是判断两个数的大小关系，结果是 True（成立）或 False（不成立）。

## 比较运算符

\`\`\`python
3 > 2    # True，3大于2
3 < 2    # False，3不小于2
3 == 3   # True，3等于3
3 != 4   # True，3不等于4
3 >= 3   # True，3大于等于3
3 <= 4   # True，3小于等于4
\`\`\`

## 比较运算符表格

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| > | 大于 | 5 > 3 | True |
| < | 小于 | 3 < 5 | True |
| >= | 大于等于 | 5 >= 5 | True |
| <= | 小于等于 | 3 <= 5 | True |
| == | 等于 | 5 == 5 | True |
| != | 不等于 | 5 != 3 | True |

## 使用场景

\`\`\`python
score = 85

# 判断是否及格
if score >= 60:
    print("及格")

# 判断是否满分
if score == 100:
    print("满分！")
\`\`\`

## 注意事项

- 不要混淆 =（赋值）和 ==（比较）
- 比较的结果是布尔值
`,
      practice: [
        { q: '5 >= 5 的结果是？', a: 'True' },
        { q: '== 和 = 有什么区别？', a: '== 是比较是否相等，= 是赋值' }
      ]
    },

    // 分支应用
    'theory-4-12': {
      id: 'theory-4-12',
      knowledgePointId: 'kp-4-12',
      title: '分支应用',
      emoji: '🌿',
      summary: `使用 if-elif-else 处理多种情况`,
      content: `
## 什么是分支应用？

当有多个条件需要判断时，可以使用 if-elif-else 结构。

## 基本语法

\`\`\`python
if 条件1:
    # 条件1成立
elif 条件2:
    # 条件2成立
elif 条件3:
    # 条件3成立
else:
    # 以上都不成立
\`\`\`

## 示例代码

\`\`\`python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
# 输出：良好
\`\`\`

## 常见应用场景

| 场景 | 示例 |
|------|------|
| 成绩等级 | 优秀/良好/及格/不及格 |
| 年龄段 | 儿童/青少年/成年/老年 |
| 星期几 | 根据数字输出星期 |
| 菜单选择 | 根据输入执行不同操作 |

## 注意事项

- 条件是从上往下判断的
- 满足第一个条件后，后面的不再判断
- else 放在最后，处理所有其他情况
`,
      practice: [
        { q: 'if-elif-else 中，条件1成立还会判断条件2吗？', a: '不会' },
        { q: 'else 后面需要写条件吗？', a: '不需要，else 处理所有其他情况' }
      ]
    }
  },

  // ==================== 五级理论讲解 ====================
  level5: {
    // 索引
    'theory-5-1': {
      id: 'theory-5-1',
      knowledgePointId: 'kp-5-1',
      title: '索引',
      emoji: '📍',
      summary: `通过索引可以访问列表或字符串中的元素`,
      content: `
## 什么是索引？

索引就是"位置编号"，用来找到列表或字符串中的某个元素。

## 索引规则

- **从 0 开始**：第一个元素的索引是 0
- **正索引**：从左往右数，0, 1, 2, ...
- **负索引**：从右往左数，-1, -2, -3, ...

## 示例

\`\`\`python
fruits = ["苹果", "香蕉", "橙子", "葡萄"]

print(fruits[0])   # 输出：苹果（第1个）
print(fruits[2])   # 输出：橙子（第3个）
print(fruits[-1])  # 输出：葡萄（最后1个）

# 字符串也支持索引
s = "Hello"
print(s[0])  # 输出：H
print(s[-1]) # 输出：o
\`\`\`

## 索引越界

如果索引超出了范围，会报错！

\`\`\`python
fruits = ["苹果", "香蕉"]
print(fruits[5])  # 报错！列表只有2个元素
\`\`\`
`,
      practice: [
        { q: '列表 [1,2,3] 中，元素 2 的索引是？', a: '1' },
        { q: '列表最后一个元素的负索引是？', a: '-1' }
      ]
    },

    // while循环
    'theory-5-2': {
      id: 'theory-5-2',
      knowledgePointId: 'kp-5-2',
      title: 'while 循环',
      emoji: '🔁',
      summary: `while 循环在条件为真时一直重复执行`,
      content: `
## 什么是 while 循环？

while 循环会一直重复执行，**直到条件变为假**。适合用在"不知道要重复多少次"的情况。

## 基本语法

\`\`\`python
while 条件:
    # 条件为真时重复执行
\`\`\`

## 示例代码

\`\`\`python
# 从1数到5
i = 1
while i <= 5:
    print(i)
    i = i + 1

# 无限循环（按Ctrl+C停止）
while True:
    print("我一直在运行...")
\`\`\`

## 重要提示

- 一定要有让条件变假的代码，否则会**无限循环**！
- while 后面要有**冒号**
- 循环体要**缩进**

## while vs for

| for 循环 | while 循环 |
|----------|------------|
| 知道重复次数 | 不知道重复次数 |
| 遍历序列 | 根据条件判断 |
\`\`\`
`,
      practice: [
        { q: 'while 循环什么时候停止？', a: '条件变为假时' },
        { q: '如何写一个无限循环？', a: 'while True:' }
      ]
    },

    // break/continue
    'theory-5-4': {
      id: 'theory-5-4',
      knowledgePointId: 'kp-5-4',
      title: 'break 和 continue',
      emoji: '⏹️',
      summary: `break 跳出循环，continue 跳过本次循环`,
      content: `
## break - 跳出循环

break 用来**立即结束整个循环**。

\`\`\`python
for i in range(10):
    if i == 5:
        break  # 当 i=5 时，跳出循环
    print(i)
# 输出：0 1 2 3 4
\`\`\`

## continue - 跳过本次

continue 用来**跳过本次循环**，继续下一次。

\`\`\`python
for i in range(5):
    if i == 2:
        continue  # 当 i=2 时，跳过本次
    print(i)
# 输出：0 1 3 4（没有2）
\`\`\`

## 对比

| break | continue |
|-------|----------|
| 结束整个循环 | 只跳过这一次 |
| 循环完全停止 | 继续下一次循环 |

## 注意事项

- 只能在循环（for/while）中使用
- 通常配合 if 语句使用
`,
      practice: [
        { q: 'break 会做什么？', a: '立即结束整个循环' },
        { q: 'continue 会做什么？', a: '跳过本次循环，继续下一次' }
      ]
    },

    // 随机数模块
    'theory-5-5': {
      id: 'theory-5-5',
      knowledgePointId: 'kp-5-5',
      title: '随机数模块 random',
      emoji: '🎲',
      summary: 'random 模块用于生成随机数和随机选择',
      content: `
## 什么是随机数模块？

random 模块可以生成随机数，或者从列表中随机选择元素。

## 常用函数

\`\`\`python
import random

# 生成 1-100 之间的随机整数
num = random.randint(1, 100)

# 从列表中随机选择一个元素
fruits = ["苹果", "香蕉", "橙子"]
fruit = random.choice(fruits)

# 生成 0-1 之间的随机小数
num = random.random()

# 打乱列表顺序
cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
\`\`\'

## 常见用法

| 函数 | 作用 | 示例 |
|------|------|------|
| randint(a, b) | 生成 a-b 之间的随机整数 | randint(1, 10) |
| choice(列表) | 随机选择一个元素 | choice(['A', 'B', 'C']) |
| random() | 生成 0-1 之间的随机小数 | random() |

## 记得导入

使用前要写 \`import random\`！
`,
      practice: [
        { q: '如何生成 1-6 的随机整数？', a: 'random.randint(1, 6)' },
        { q: '如何随机选择列表中的一个元素？', a: 'random.choice(列表名)' }
      ]
    }
  },

  // ==================== 六级理论讲解 ====================
  level6: {
    // 函数的定义和使用
    'theory-6-1': {
      id: 'theory-6-1',
      knowledgePointId: 'kp-6-1',
      title: '函数的定义和使用',
      emoji: '📦',
      summary: '函数是一段可以重复使用的代码块',
      content: `
## 什么是函数？

函数是把一段代码**打包**起来，给它起个名字，以后可以重复使用。

## 定义函数

使用 **def** 关键字定义函数：

\`\`\`python
def 函数名(参数):
    # 函数体（要执行的代码）
    return 返回值
\`\`\`

## 示例

\`\`\'python
# 定义一个打招呼的函数
def greet(name):
    print('你好，' + name)

# 调用函数
greet('小明')  # 输出：你好，小明

# 定义一个计算函数
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 输出：8
\`\`\`

## 参数和返回值

| 概念 | 说明 | 示例 |
|------|------|------|
| **参数** | 传给函数的数据 | def add(a, b) |
| **返回值** | 函数执行后返回的结果 | return a + b |

## 注意事项

- 函数名要有意义，能看出函数做什么
- 参数可以有多个，用逗号分隔
- return 返回结果，没有return则返回None
`,
      practice: [
        { q: '定义函数用什么关键字？', a: 'def' },
        { q: '函数如何返回结果？', a: '使用 return 语句' }
      ]
    },

    // Pygame基础
    'theory-6-2': {
      id: 'theory-6-2',
      knowledgePointId: 'kp-6-2',
      title: 'Pygame基础',
      emoji: '🎮',
      summary: 'PygameZero是一个简单易懂的游戏开发库',
      content: `
## 什么是PygameZero？

PygameZero是一个专为初学者设计的游戏开发库，让我们可以轻松创建游戏。

## 基本设置

\`\`\'python
import pgzrun

# 设置窗口大小
WIDTH = 800   # 窗口宽度
HEIGHT = 600  # 窗口高度

# 创建角色
player = Actor('角色图片')  # 图片在images文件夹中

# 绘制函数
def draw():
    screen.clear()  # 清屏
    player.draw()   # 绘制角色

pgzrun.go()  # 运行游戏
\`\`\'

## 角色属性

| 属性 | 说明 | 示例 |
|------|------|------|
| x | 水平位置 | player.x = 100 |
| y | 垂直位置 | player.y = 200 |
| image | 造型图片 | player.image = '新造型' |

## 坐标系统

- 左上角是 (0, 0)
- 向右x增大，向下y增大
- WIDTH是窗口宽度，HEIGHT是窗口高度
`,
      practice: [
        { q: '设置窗口宽度用什么变量？', a: 'WIDTH' },
        { q: '如何创建角色？', a: 'Actor("图片名称")' }
      ]
    },

    // pygame事件监听
    'theory-6-3': {
      id: 'theory-6-3',
      knowledgePointId: 'kp-6-3',
      title: 'Pygame事件监听',
      emoji: '🎯',
      summary: '事件监听让游戏能够响应键盘和鼠标操作',
      content: `
## 什么是事件监听？

事件监听让游戏能够"感知"玩家的操作，比如按键、点击鼠标等。

## 键盘事件

\`\`\'python
# 键盘按下时调用
def on_key_down(key):
    if key == keys.LEFT:
        player.x = player.x - 10
    if key == keys.RIGHT:
        player.x = player.x + 10
    if key == keys.SPACE:
        player.image = '跳跃'

# 键盘松开时调用
def on_key_up(key):
    if key == keys.SPACE:
        player.image = '站立'
\`\`\`

## 鼠标事件

\`\`\'python
# 鼠标按下时调用
def on_mouse_down(pos):
    print('点击位置:', pos)
    if player.collidepoint(pos):
        print('点到了角色！')

# 鼠标移动时调用
def on_mouse_move(pos):
    player.pos = pos  # 角色跟随鼠标
\`\`\`

## 常用按键常量

| 按键 | 常量 | 按键 | 常量 |
|------|------|------|------|
| 左 | keys.LEFT | 空格 | keys.SPACE |
| 右 | keys.RIGHT | 回车 | keys.RETURN |
| 上 | keys.UP | W | keys.W |
| 下 | keys.DOWN | A | keys.A |
`,
      practice: [
        { q: '键盘按下事件函数名是？', a: 'on_key_down()' },
        { q: '如何检测是否按了空格键？', a: 'key == keys.SPACE' }
      ]
    },

    // 简单递推问题
    'theory-6-4': {
      id: 'theory-6-4',
      knowledgePointId: 'kp-6-4',
      title: '简单递推问题',
      emoji: '🔄',
      summary: `递推是通过已知条件，逐步推导出结果的方法`,
      content: `
## 什么是递推？

递推就是从已知的**初始条件**开始，按照**递推公式**，一步步计算出结果。

## 递推三要素

1. **初始条件**：从哪里开始
2. **递推公式**：如何从上一个值计算下一个值
3. **终止条件**：算到什么时候结束

## 示例：等差数列

数列：2, 5, 8, 11, 14...

- 初始条件：a₁ = 2
- 递推公式：aₙ = aₙ₋₁ + 3

\`\`\`python
# 计算第n项
n = 5
a = 2  # 初始值
for i in range(1, n):
    a = a + 3  # 递推公式
print(a)  # 输出：14
\`\`\`

## 示例：阶乘

5! = 5 × 4 × 3 × 2 × 1 = 120

\`\`\`python
n = 5
result = 1
for i in range(1, n + 1):
    result = result * i
print(result)  # 输出：120
\`\`\`

## 注意事项

- 一定要有正确的初始条件
- 递推次数要准确
- 循环变量从几开始很重要
`,
      practice: [
        { q: '递推需要哪三个要素？', a: '初始条件、递推公式、终止条件' },
        { q: '如何计算5!？', a: '1×2×3×4×5=120' }
      ]
    },

    // 模拟表达式
    'theory-6-5': {
      id: 'theory-6-5',
      knowledgePointId: 'kp-6-5',
      title: '模拟表达式',
      emoji: '🔢',
      summary: `模拟表达式的计算过程，理解运算符优先级`,
      content: `
## 什么是表达式？

表达式是由**数字**和**运算符**组成的式子，如：3 + 5 * 2

## 运算符优先级

| 优先级 | 运算符 | 说明 |
|--------|--------|------|
| 高 | () | 括号 |
| 中 | * / // % | 乘、除、整除、取余 |
| 低 | + - | 加、减 |

## 模拟计算过程

计算 3 + 5 * 2：

1. 先算 5 * 2 = 10（乘法优先）
2. 再算 3 + 10 = 13
3. 结果是 13

\`\`\`python
# 用程序模拟
a, b, c = 3, 5, 2
step1 = b * c  # 5 * 2 = 10
result = a + step1  # 3 + 10 = 13
print(result)  # 输出：13
\`\`\`

## 带括号的表达式

计算 (3 + 5) * 2：

1. 先算括号内 3 + 5 = 8
2. 再算 8 * 2 = 16
3. 结果是 16

\`\`\`python
a, b, c = 3, 5, 2
step1 = a + b  # 3 + 5 = 8
result = step1 * c  # 8 * 2 = 16
print(result)  # 输出：16
\`\`\`
`,
      practice: [
        { q: '3 + 5 * 2 的结果是？', a: '13（先乘后加）' },
        { q: '(3 + 5) * 2 的结果是？', a: '16（括号优先）' }
      ]
    },

    // 循环模拟
    'theory-6-6': {
      id: 'theory-6-6',
      knowledgePointId: 'kp-6-6',
      title: '循环模拟',
      emoji: '🔁',
      summary: `用循环模拟重复执行的过程`,
      content: `
## 什么是循环模拟？

很多问题需要重复执行某个操作，我们可以用循环来模拟这个过程。

## 示例：模拟倒计时

\`\`\`python
n = 5
while n >= 0:
    print(n)
    n = n - 1
# 输出：5 4 3 2 1 0
\`\`\`

## 示例：模拟累加

计算 1 + 2 + 3 + ... + 10

\`\`\`python
total = 0
for i in range(1, 11):
    total = total + i
print(total)  # 输出：55
\`\`\`

## 示例：模拟计数

统计1到100中有多少个3的倍数

\`\`\`python
count = 0
for i in range(1, 101):
    if i % 3 == 0:
        count = count + 1
print(count)  # 输出：33
\`\`\`

## 循环模拟的步骤

1. 确定循环变量和初始值
2. 确定循环条件
3. 确定每次循环要做什么
4. 更新循环变量
`,
      practice: [
        { q: '如何用循环输出1到10？', a: 'for i in range(1, 11): print(i)' },
        { q: '如何统计1到50中的偶数个数？', a: '循环判断 i % 2 == 0，计数' }
      ]
    },

    // 带列表的模拟
    'theory-6-7': {
      id: 'theory-6-7',
      knowledgePointId: 'kp-6-7',
      title: '带列表的模拟',
      emoji: '📋',
      summary: '结合列表进行复杂问题的模拟',
      content: `
## 什么是带列表的模拟？

很多问题需要处理一组数据，我们可以用列表存储数据，然后遍历列表进行模拟。

## 示例：列表遍历

\`\`\'python
fruits = ['苹果', '香蕉', '橙子']
for fruit in fruits:
    print(fruit)
# 输出：苹果 香蕉 橙子
\`\`\`

## 示例：列表筛选

找出列表中所有的偶数

\`\`\`python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = []
for n in nums:
    if n % 2 == 0:
        evens.append(n)
print(evens)  # 输出：[2, 4, 6, 8, 10]
\`\`\`

## 示例：列表统计

计算列表中元素的总和

\`\`\`python
scores = [85, 92, 78, 90, 88]
total = 0
for score in scores:
    total = total + score
print(total)  # 输出：433
print(total / len(scores))  # 平均分：86.6
\`\`\`

## 示例：列表查找

找出列表中的最大值

\`\`\`python
nums = [5, 2, 8, 1, 9]
max_val = nums[0]
for n in nums:
    if n > max_val:
        max_val = n
print(max_val)  # 输出：9
\`\`\`
`,
      practice: [
        { q: '如何遍历列表？', a: 'for 元素 in 列表:' },
        { q: '如何找列表最大值？', a: '逐个比较，记录最大的' }
      ]
    },

    // 斐波那契数列
    'theory-6-8': {
      id: 'theory-6-8',
      knowledgePointId: 'kp-6-8',
      title: '斐波那契数列',
      emoji: '🐚',
      summary: `斐波那契数列：每项等于前两项之和`,
      content: `
## 什么是斐波那契数列？

斐波那契数列是一个经典的数列：**1, 1, 2, 3, 5, 8, 13, 21, 34, 55...**

规律：从第3项开始，每项等于前两项之和。

## 递推公式

- F(1) = 1
- F(2) = 1
- F(n) = F(n-1) + F(n-2) （n > 2）

## 用递推计算

\`\`\`python
# 计算第n项
n = 10
if n <= 2:
    print(1)
else:
    a, b = 1, 1  # 前两项
    for i in range(3, n + 1):
        a, b = b, a + b  # 更新前两项
    print(b)  # 输出第n项
\`\`\`

## 输出前n项

\`\`\`python
n = 10
fib = [1, 1]
for i in range(2, n):
    fib.append(fib[i-1] + fib[i-2])
print(fib)
# 输出：[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
\`\`\`

## 注意事项

- 初始两项都是1
- 递推时需要保存前两项的值
- 可以用列表存储所有项，也可以只用变量保存前两项
`,
      practice: [
        { q: '斐波那契数列的第5项是？', a: '5（1,1,2,3,5）' },
        { q: '斐波那契数列的递推公式是？', a: 'F(n) = F(n-1) + F(n-2)' }
      ]
    }
  }
}

// 根据等级和理论ID获取理论内容
export function getTheory(level, theoryId) {
  return yclTheory[level]?.[theoryId] || null
}

// 根据知识点ID获取理论内容
export function getTheoryByKnowledgePoint(level, kpId) {
  const levelTheory = yclTheory[level]
  if (!levelTheory) return null

  for (const theory of Object.values(levelTheory)) {
    if (theory.knowledgePointId === kpId) {
      return theory
    }
  }
  return null
}

// 获取某等级的所有理论
export function getAllTheoryByLevel(level) {
  return yclTheory[level] || {}
}

export default yclTheory
