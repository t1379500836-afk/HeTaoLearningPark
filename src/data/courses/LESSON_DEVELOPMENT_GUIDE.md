# 课程页面开发指南

> 本文档详细说明如何开发新的课程页面。参考 L7-1 的实现模式，可以快速开发其他课次。

---

## 快速开始（三步走）

### 第一步：创建数据文件

在 `src/data/courses/{PY1/PY2/PY3}/lessons/{课次}/` 下创建 `lesson-data.js`：

```javascript
/**
 * PY2 课程 L7-2: [课程标题]
 *
 * 核心知识点:
 * 1. 知识点一
 * 2. 知识点二
 * 3. 知识点三
 */

// 1. 单词卡数据（3-5个单词）
export const vocabData = [
  {
    word: 'example',
    pronunciation: '[example]',
    meaning: '例子；示例',
    level: 'easy',
    example: 'This is an example.',
    exampleTranslation: '这是一个例子。'
  }
  // ... 更多单词
]

// 2. 知识点数据（2-4个知识点）
export const knowledgePoints = [
  {
    id: 'kp-1',
    title: '知识点标题',
    emoji: '🎯',
    gradeLevel: '1-2',
    summary: '一句话概括',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '趣味故事导入（1-2句话）',
      concept: '核心概念讲解',
      syntax: '语法格式',
      example: {
        title: '示例标题',
        code: '# Python代码示例\nprint("Hello")',
        output: '输出结果',
        explanation: '解析说明'
      },
      practice: [
        { question: '问题1', answer: '答案1' },
        { question: '问题2', answer: '答案2' }
      ]
    },

    // 🟡 进阶版（3-4年级）- 结构同 easy
    medium: { ... },

    // 🔴 挑战版（5-6年级）- 结构同 easy
    hard: { ... }
  }
  // ... 更多知识点
]

// 3. 习题数据（6道：2基础+2进阶+2挑战）
export const exercises = [
  {
    id: 'ex-1',
    level: 'easy',              // easy | medium | hard
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '数数',         // 数学关联概念
    question: '题目内容（支持 Markdown 代码块）',
    options: [
      '选项1',  // 不要包含 "A. " 前缀！
      '选项2',
      '选项3'
    ],
    answer: 1,                   // 正确答案索引（0=选项1）
    explanation: '解析内容（可含数学知识）',
    hint: '提示内容'
  }
  // ... 更多习题（至少6道）
]

// 4. 课次元数据
export const lessonMeta = {
  id: 'L7-2',
  title: '课程标题',
  subtitle: '副标题',
  difficulty: '入门',
  estimatedTime: '30-45分钟',
  learningGoals: [
    '学习目标1',
    '学习目标2',
    '学习目标3'
  ],
  prerequisites: [
    '前置知识1',
    '前置知识2'
  ]
}

// 5. 打字练习单词（按难度分组）
export const typingWords = {
  easy: ['word1', 'word2', 'word3', 'word4'],
  medium: ['word5', 'word6', 'word7', 'word8'],
  hard: ['word9', 'word10', 'word11', 'word12']
}

// 6. 导出所有数据
export const L7_2_data = {
  meta: lessonMeta,
  vocab: vocabData,
  knowledgePoints,
  exercises,
  typingWords
}

export default L7_2_data
```

### 第二步：无需修改组件

所有展示组件已经开发完成，自动加载数据：

| 组件 | 自动加载 | 说明 |
|------|----------|------|
| FlashcardDisplay | `vocab` | 单词卡，支持TTS发音 |
| KnowledgeCard | `knowledgePoints` | 知识点卡片，支持难度切换 |
| ExerciseCard | `exercises` | 习题卡片，选项标签外置 |
| TypingPractice | `typingWords` | 打字练习 |

### 第三步：测试页面

访问 `/lesson/PY2/L7/L7-2` 即可查看页面。

---

## 数据结构详解

### vocabData（单词卡数据）

```javascript
{
  word: 'split',              // 单词（必填）
  pronunciation: '[split]',   // 音标（必填，注意避免特殊字符如 '）
  meaning: '分割；分裂',       // 中文释义（必填）
  level: 'easy',              // 难度：easy | medium | hard（必填）
  example: 'The split...',    // 英文例句（必填）
  exampleTranslation: '分割...'  // 例句翻译（必填）
}
```

### knowledgePoints（知识点数据）

每个知识点包含 3 个难度版本，结构相同：

```javascript
{
  story: '趣味故事导入',      // 低年级理解的故事场景
  concept: '核心概念讲解',     // 知识点的定义和说明
  syntax: '语法格式',         // 代码语法（使用 \n 表示换行）
  example: {
    title: '示例标题',        // 代码示例的标题
    code: '# Python代码',     // 可执行的代码示例
    output: '输出结果',       // 代码运行的输出
    explanation: '解析说明'   // 为什么会这样输出
  },
  practice: [
    { question: '问题', answer: '答案' }  // 思考题
  ]
}
```

### exercises（习题数据）

```javascript
{
  id: 'ex-1',                 // 唯一标识
  level: 'easy',              // 难度：easy | medium | hard
  levelLabel: '基础',          // 显示的难度标签
  levelEmoji: '🟢',           // 难度图标
  type: 'multiple-choice',    // 题型（当前只支持选择题）
  mathConcept: '数数',        // 数学关联概念

  question: '题目内容',       // 支持 Markdown
                               // \n 表示换行
                               // ```python...``` 表示代码块

  options: [
    '选项1',                  // 注意：不要加 "A. " 前缀！
    '选项2',                  // 支持 \n 换行
    '选项3'
  ],

  answer: 1,                  // 正确答案索引（0=第一个选项）
  explanation: '解析内容',     // 解析（支持Markdown）
  correction: '更正说明',     // 可选：当原解析有误时更正
  hint: '提示内容'            // 可选：点击"显示提示"时显示
}
```

### typingWords（打字练习数据）

```javascript
{
  easy: ['word1', 'word2'],   // 🟢 简单单词
  medium: ['word3', 'word4'], // 🟡 中等单词
  hard: ['word5', 'word6']    // 🔴 困难单词
}
```

---

## 内容创作指南

### 知识点创作（3个难度梯度）

**原则**：从具象到抽象，从简单到复杂

| 难度 | 目标年级 | 内容特点 |
|------|----------|----------|
| **🟢 easy** | 1-2年级 | 故事场景导入、概念简单、代码直白 |
| **🟡 medium** | 3-4年级 | 实际应用场景、概念深入、代码变体 |
| **🔴 hard** | 5-6年级 | 综合运用场景、算法思维、优化技巧 |

**示例（split命令）**：

```javascript
// 🟢 基础版
easy: {
  story: '想象你有一个大蛋糕，用special刀切一下就能分享给朋友。',
  concept: 'split命令可以按照指定的字符把字符串分开。',
  syntax: '字符串.split("分隔符")',
  example: {
    title: '按表情符号切分',
    code: 'fruits = "苹果🍎香蕉🍎橙子"\nresult = fruits.split("🍎")\nprint(result)',
    output: "['苹果', '香蕉', '橙子']",
    explanation: '用 🍎 作为分隔符，把字符串切成了3个部分。'
  }
}

// 🟡 进阶版
medium: {
  story: '来到美食广场！split命令可以处理各种格式的数据。',
  concept: 'split常用于解析URL、CSV格式、句子分词等。',
  syntax: 'parts = url.split(".")\nname = parts[1]',
  example: {
    title: '解析网址',
    code: 'url = "www.hetao101.com"\nparts = url.split(".")\nprint("网站名:", parts[1])',
    output: '网站名: hetao101',
    explanation: '用 "." 分割网址后，索引1的位置就是网站名。'
  }
}

// 🔴 挑战版
hard: {
  story: '大师级切蛋糕艺术！处理复杂的数据格式。',
  concept: '实际应用中，数据需要多级分割和处理。',
  syntax: 'for row in data.split("\\n"):\n    fields = row.split(",")',
  example: {
    title: '解析成绩单',
    code: 'grades = "小明,95;小红,88;小刚,92"\nrecords = grades.split(";")\nfor record in records:\n    name, score = record.split(",")\n    print(f"{name}: {score}分")',
    output: '小明: 95分\n小红: 88分\n小刚: 92分',
    explanation: '先用 ";" 分割每条记录，再用 "," 分割姓名和分数。'
  }
}
```

### 习题创作（编程×数学融合）

**原则**：每道题都要有明确的数学概念关联

| 难度 | 数学概念 | 示例题目 |
|------|----------|----------|
| **🟢 easy** | 数数、找规律 | 字符串遍历 × 字母计数 |
| **🟡 medium** | 分组问题、位置索引 | split命令 × URL分割 |
| **🔴 hard** | 植树问题、周期问题 | 综合运用 × 复杂算法 |

**习题模板**：

```javascript
// 🟢 基础题模板
{
  id: 'ex-1',
  level: 'easy',
  type: 'multiple-choice',
  mathConcept: '数数',  // 明确数学概念
  question: '小明的名字是 "Ming"，用代码数数有几个字母：\n\n```python\ns = "Ming"\nfor i in s:\n    print("*")\n```\n\n会输出几颗星？',
  options: ['3颗', '4颗', '5颗'],
  answer: 1,  // B
  explanation: '字符串 "Ming" 有4个字母，所以循环会执行4次。\n\n数学知识：这就是"一一对应"的思想。'
}

// 🟡 进阶题模板
{
  id: 'ex-3',
  level: 'medium',
  type: 'multiple-choice',
  mathConcept: '分组问题',
  question: '老师把班级同学的名字用 "-" 连接在一起：\n\n```python\nnames = "小明-小红-小刚-小丽"\n```\n\n现在想把它们分开，应该用什么代码？',
  options: [
    'names.split("-")',
    'names.split(" ")',
    'names.split(",")'
  ],
  answer: 0,  // A
  explanation: 'split("-") 会用 "-" 作为分隔符。\n\n数学知识：这就像"分组"问题，按照分隔符把整体分成多个小组。'
}

// 🔴 挑战题模板
{
  id: 'ex-5',
  level: 'hard',
  type: 'multiple-choice',
  mathConcept: '植树问题',
  question: '经典的植树问题！\n\n一条10公里的公路，每隔1公里种一棵树。如果公路两端都种树，这条公路上会有几棵树？\n\n请想想：如果是编程解决，应该用什么公式？',
  options: [
    'distance // interval',
    'distance // interval + 1',
    '(distance + 1) // interval'
  ],
  answer: 1,  // B
  explanation: '植树问题公式：两端都种时，树的数量 = 距离 ÷ 间隔 + 1\n\n代码：\n```python\ndistance = 10\ninterval = 1\ntrees = distance // interval + 1\nprint(trees)  # 输出: 11\n```\n\n数学知识：理解"间隔数"和"点数"的关系是关键。'
}
```

---

## 常见问题

### Q1: 如何处理代码输出中的换行？

**A**: 在 `output` 中使用 `\n` 表示换行：

```javascript
output: 'A\nB\nC'  // 会渲染为三行
```

### Q2: 选项内容需要换行怎么办？

**A**: 在 `options` 中使用 `\n`：

```javascript
options: [
  'ABC',
  'A\nB\nC',  // 会渲染为三行
  'C\nB\nA'
]
```

### Q3: 代码块怎么写？

**A**: 使用 Markdown 代码块语法：

```javascript
question: '下面的代码会输出什么？\n\n```python\nfor i in "ABC":\n    print(i)\n```'
```

### Q4: 题目或解析中需要强调重点怎么办？

**A**: 使用 Markdown 语法：

```javascript
explanation: '字符串 **"Ming"** 有4个字母。\n\n数学知识：这就是*"一一对应"*的思想。'
```

### Q5: 音标中有特殊字符导致 Vite 报错怎么办？

**A**: 避免使用单引号 `'`，改用连字符 `-`：

```javascript
// 错误
pronunciation: "[trə'vɜːs]"  // 会报错

// 正确
pronunciation: "[trə-vɜːs]"  // 使用连字符
```

### Q6: 为什么选项不要加 "A. " 前缀？

**A**: ExerciseCard 组件会自动添加选项标签。如果手动添加，会导致重复：

```javascript
// 错误
options: ['A. 3颗', 'B. 4颗', 'C. 5颗']

// 正确
options: ['3颗', '4颗', '5颗']
```

### Q7: 如何引用现有素材（content.json）？

**A**: `content.json` 是 OCR 提取的原始数据，仅供参考。不要直接复制，要：

1. **理解内容**：读懂原始材料的核心知识
2. **重新组织**：用自己的话重新表达
3. **添加趣味**：加入故事场景和生活化例子
4. **难度分层**：为3个年龄段设计不同版本

---

## 开发检查清单

### 发布前检查

- [ ] `lesson-data.js` 文件创建在正确路径
- [ ] 所有单词卡数据完整（word, pronunciation, meaning, example）
- [ ] 每个知识点有 3 个难度版本（easy, medium, hard）
- [ ] 习题至少 6 道（2基础+2进阶+2挑战）
- [ ] 每道题都有明确的 `mathConcept` 数学概念
- [ ] 选项不包含 "A. " 等前缀
- [ ] 代码示例可运行且输出正确
- [ ] 音标中没有特殊字符（如单引号）
- [ ] 打字练习单词按难度分类
- [ ] 测试页面可正常访问

### 内容质量检查

- [ ] 知识点讲解清晰，小学生能理解
- [ ] 代码示例有趣味场景
- [ ] 习题编程×数学融合自然
- [ ] 无客户端剧情内容残留
- [ ] 解析准确易懂

---

## 文件路径参考

| 资源 | 路径 |
|------|------|
| **数据文件模板** | [L7-1 lesson-data.js](../PY2/lessons/L7-1/lesson-data.js) |
| **OCR 原始数据** | [PY2 content.json](../PY2/content.json) |
| **OCR 参考文档** | [PY2 README_GUIDE.md](../PY2/README_GUIDE.md) |
| **主开发文档** | [HeTaoLearningPark.md](../../../../HeTaoLearningPark.md) |

---

## 快捷命令

### 创建新课次数据文件

复制 L7-1 的 `lesson-data.js` 作为模板：

```bash
# Windows PowerShell
Copy-Item src\data\courses\PY2\lessons\L7-1\lesson-data.js src\data\courses\PY2\lessons\L7-2\lesson-data.js
```

### 查看开发服务器

```bash
npm run dev
# 访问 http://localhost:5173
```

---

## 更新日志

| 日期 | 版本 | 更新内容 |
|------|------|----------|
| 2025-02-04 | v1.0 | 基于 L7-1 实现创建初始版本 |
