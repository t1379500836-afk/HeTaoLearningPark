# 05-课程资料文档（核心）

> **本项目的核心工作**：详细记录课程资料的整理命名规则、脚本提取方式，便于后期拓展课程内容。

---

## 目录

- [快速开始](#快速开始)
- [课程数据结构](#课程数据结构)
- [脚本使用方法](#脚本使用方法)
- [命名规范](#命名规范)
- [内容筛选规则](#内容筛选规则)
- [开发检查清单](#开发检查清单)

---

## 快速开始

### 三步创建新课次

1. **创建数据文件** → 在 `src/data/courses/{PY1/PY2/PY3}/lessons/{课次}/` 下创建 `lesson-data.js`
2. **无需修改组件** → 所有展示组件已自动加载数据
3. **测试页面** → 访问 `/lesson/PY2/L7/L7-2` 查看页面

### 数据加载流程

```
lesson-data.js (数据文件)
    ↓
useLessonData.js (Composable)
    ↓
LessonView.vue (课时页面)
    ↓
子组件展示 (FlashcardDisplay, KnowledgeCard, ExerciseCard...)
```

---

## 课程开发快速入口 ⭐

当你需要新增课程内容时，按以下顺序阅读：

```
📍 当前位置：docs/05-COURSE-MATERIALS.md
        ↓
   ① 了解本文档的数据结构和规范
        ↓
📄 src/data/courses/PY2/GUIDE.md
        ↓
   ② 了解内容筛选规则和校对步骤
        ↓
📄 src/data/courses/PY2/OCR-CONTENT.md
        ↓
   ③ 查看OCR提取的原始内容（参考材料）
        ↓
📝 创建 lessons/{课次}/lesson-data.js
        ↓
   ✅ 完成新课次开发
```

### 关键文件说明

| 文件 | 说明 | 用途 |
|------|------|------|
| [docs/05-COURSE-MATERIALS.md](./05-COURSE-MATERIALS.md) | 本文档 | 数据结构模板、开发规范 |
| [src/data/courses/PY2/GUIDE.md](../src/data/courses/PY2/GUIDE.md) | 开发指南 | 内容筛选规则、校对步骤 |
| [src/data/courses/PY2/OCR-CONTENT.md](../src/data/courses/PY2/OCR-CONTENT.md) | 原始内容 | OCR提取的参考材料 |

---

## 课程数据结构

### lesson-data.js 完整模板

**文件位置**: `src/data/courses/{PY1/PY2/PY3}/lessons/{课次}/lesson-data.js`

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

### 数据结构详解

#### vocabData（单词卡数据）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `word` | String | ✅ | 单词 |
| `pronunciation` | String | ✅ | 音标（避免特殊字符如 `'`） |
| `meaning` | String | ✅ | 中文释义 |
| `level` | String | ✅ | 难度：easy \| medium \| hard |
| `example` | String | ✅ | 英文例句 |
| `exampleTranslation` | String | ✅ | 例句翻译 |

#### knowledgePoints（知识点数据）

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | String | 唯一标识（如 'kp-1'） |
| `title` | String | 知识点标题 |
| `emoji` | String | 图标（如 '🎯'） |
| `gradeLevel` | String | 目标年级（'1-2' / '3-4' / '5-6'） |
| `summary` | String | 一句话概括 |
| `easy/medium/hard` | Object | 3个难度版本，结构相同 |

**难度版本结构**:

| 字段 | 说明 |
|------|------|
| `story` | 趣味故事导入（低年级理解） |
| `concept` | 核心概念讲解 |
| `syntax` | 语法格式（使用 `\n` 表示换行） |
| `example.title` | 示例标题 |
| `example.code` | 可执行的代码示例 |
| `example.output` | 代码运行的输出 |
| `example.explanation` | 为什么会这样输出 |
| `practice` | 思考题数组 `{question, answer}` |

#### exercises（习题数据）

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | String | 唯一标识（如 'ex-1'） |
| `level` | String | 难度：easy \| medium \| hard |
| `levelLabel` | String | 显示的难度标签（如 '基础'） |
| `levelEmoji` | String | 难度图标（🟢/🟡/🔴） |
| `type` | String | 题型（当前只支持 'multiple-choice'） |
| `mathConcept` | String | 数学关联概念 |
| `question` | String | 题目内容（支持Markdown） |
| `options` | Array | 选项数组（不要加 "A. " 前缀） |
| `answer` | Number | 正确答案索引（0=第一个选项） |
| `explanation` | String | 解析（支持Markdown） |
| `hint` | String | 可选：提示内容 |

#### typingWords（打字练习数据）

```javascript
{
  easy: ['word1', 'word2'],   // 🟢 简单单词
  medium: ['word3', 'word4'], // 🟡 中等单词
  hard: ['word5', 'word6']    // 🔴 困难单词
}
```

---

## 脚本使用方法

### 内容提取脚本

**脚本位置**: [scripts/extract_content.py](../scripts/extract_content.py)

### 功能说明

从 PY2 课程原始资料（PDF 和图片）中提取结构化内容。

**输入**:
- 图片文件：`flashcard.png`、`knowledge.png`
- PDF 文件：`lecture.pdf`、`exercise.pdf`、`solution.pdf`

**输出**:
- JSON 格式：`src/data/courses/PY2/content.json`
- Markdown 格式：`src/data/courses/PY2/OCR-CONTENT.md`

### 技术方案

| 任务 | Python 库 | 版本 |
|------|----------|------|
| 图片 OCR | `paddleocr` | 2.10.0 |
| 深度学习框架 | `paddlepaddle` | 2.6.2 |
| PDF 文字提取 | `PyPDF2` | ≥3.0.0 |
| PDF 高级处理 | `pdfplumber` | ≥0.10.0 |
| PDF 图片提取 | `pymupdf` | ≥1.23.0 |
| 图像处理 | `Pillow` | ≥10.0.0 |

### 使用步骤

#### 1. 安装依赖

```bash
# Windows
pip install -r scripts/requirements.txt

# 使用清华镜像源
pip install -r scripts/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 2. 放置课程资料

将课程资料放入对应目录：

```
src/data/courses/PY2/L7/L7-1/
├── flashcard.png
├── knowledge.png
├── lecture.pdf
├── exercise.pdf
└── solution.pdf
```

#### 3. 运行脚本

```bash
python scripts/extract_content.py
```

#### 4. 检查输出

- JSON 数据：[src/data/courses/PY2/content.json](../src/data/courses/PY2/content.json)
- 可读版本：[src/data/courses/PY2/OCR-CONTENT.md](../src/data/courses/PY2/OCR-CONTENT.md)

### 脚本工作流程

```
┌─────────────────────────────────────────────────────────────┐
│                    内容提取工作流程                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. 遍历课次文件夹                                           │
│     └── src/data/courses/PY2/L*/L*-*/                       │
│                                                             │
│  2. 处理资源文件                                             │
│     ├── flashcard.png  → OCR 提取英文单词                    │
│     ├── knowledge.png  → OCR 提取知识点                      │
│     ├── lecture.pdf    → PyPDF2 提取文字                    │
│     ├── exercise.pdf   → PyPDF2 提取文字                    │
│     └── solution.pdf   → PyPDF2 提取文字                    │
│                                                             │
│  3. 汇总数据                                                 │
│     ├── content.json   → 结构化 JSON 数据                    │
│     └── README.md      → 可读的 Markdown 格式                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### OCR 模型

首次运行时，PaddleOCR 会自动下载以下模型：

| 模型 | 大小 | 用途 |
|------|------|------|
| ch_PP-OCRv4_det_infer | ~4MB | 文字检测 |
| ch_PP-OCRv4_rec_infer | ~10MB | 文字识别 |
| ch_ppocr_mobile_v2.0_cls_infer | ~2MB | 文字方向分类 |

模型缓存位置：`C:\Users\<用户名>\.paddleocr\`

---

## 命名规范

### 课程标题 (title)

**规则**: 使用**故事化名称**，避免使用技术性描述作为标题。

| 原始模块名 | ❌ 错误的title | ✅ 正确的title |
|-----------|--------------|--------------|
| 模块1：split命令疯狂原始人 | split命令疯狂原始人 | 疯狂原始人 |
| 模块3：查找思想智取核桃山 | 查找思想智取核桃山 | 智取核桃山 |
| 模块5：列表排序忍无可忍 | 列表排序忍无可忍 | 忍无可忍 |
| 模块7：智能遥控车重建百兽洞 | 智能遥控车重建百兽洞 | 重建百兽洞 |
| 模块9：字典结构、查字典猫咪和小鱼 | 字典结构猫咪和小鱼 | 猫咪和小鱼 |

**示例**:
```javascript
// ✅ 正确
export const lessonMeta = {
  id: 'L9-2',
  title: '循环嵌套世界遗忘我',     // 故事化标题
  subtitle: '掌握for循环嵌套和print()进阶',  // 技术内容放副标题
  ...
}

// ❌ 错误
export const lessonMeta = {
  id: 'L9-2',
  title: '循环嵌套',     // 技术性名称，不够有趣
  subtitle: '掌握for循环嵌套和print()进阶',
  ...
}
```

### 课程副标题 (subtitle)

**格式**: `学会[知识点1]和[知识点2]`

| 课程 | subtitle |
|------|----------|
| L7-1 | 学会遍历和分割字符串 |
| L7-2 | 学会查找最大最小值和列表推导式 |
| L7-3 | 学会列表排序和求和 |

### 单元详情页卡片显示

**文件**: [views/UnitView.vue](../src/views/UnitView.vue)

单元详情页的课程卡片必须从 `lesson-data.js` 动态加载数据：

| 显示元素 | 数据来源 |
|---------|---------|
| 卡片标题 | `lessonMeta.title` |
| 卡片描述 | `lessonMeta.subtitle` |
| 底部标签 | 固定显示：📖 知识点、⌨️ 打字练习、✏️ 课后习题 |

---

## 内容筛选规则

### 原始资料处理

原始学习资料包含与核桃编程客户端相关的内容（剧情动画、游戏角色等）。
在 Web 端展示时，需要筛选掉这些内容，只保留纯编程知识。

### 保留的内容

| 类型 | 示例 |
|------|------|
| 编程语法 | `split命令用于分割字符串` |
| 函数说明 | `print()函数用于输出内容` |
| 代码示例 | `for i in range(10):` |
| 英语单词 | `encode: 编码` |
| 编程练习题 | 选择题、代码题 |

### 舍去的内容

| 类型 | 示例 | 原因 |
|------|------|------|
| 剧情描述 | `在核桃部落的奇妙森林里...` | 客户端剧情 |
| 游戏角色 | `小猴子、蝴蝶、核桃队长` | 客户端角色 |
| 场景描述 | `帮助蝴蝶找到回家的路` | 客户端游戏场景 |
| 项目日志 | `项目进度：已完成 50%` | 客户端进度 |

### 灰色内容（需判断）

| 类型 | 判断标准 |
|------|---------|
| 科学探索 | 与编程知识相关则保留 |
| 趣味知识 | 有助于理解编程概念则保留 |

---

## 内容创作指南

### 知识点创作（3个难度梯度）

**原则**：从具象到抽象，从简单到复杂

| 难度 | 目标年级 | 内容特点 |
|------|----------|----------|
| **🟢 easy** | 1-2年级 | 故事场景导入、概念简单、代码直白 |
| **🟡 medium** | 3-4年级 | 实际应用场景、概念深入、代码变体 |
| **🔴 hard** | 5-6年级 | 综合运用场景、算法思维、优化技巧 |

### 习题创作（编程×数学融合）

**原则**：每道题都要有明确的数学概念关联

| 难度 | 数学概念 | 示例题目 |
|------|----------|----------|
| **🟢 easy** | 数数、找规律 | 字符串遍历 × 字母计数 |
| **🟡 medium** | 分组问题、位置索引 | split命令 × URL分割 |
| **🔴 hard** | 植树问题、周期问题 | 综合运用 × 复杂算法 |

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

## 相关文件

| 资源 | 路径 |
|------|------|
| **数据文件模板** | [PY2/lessons/L7-1/lesson-data.js](../src/data/courses/PY2/lessons/L7-1/lesson-data.js) |
| **OCR 原始数据** | [PY2/content.json](../src/data/courses/PY2/content.json) |
| **OCR 参考文档** | [PY2/GUIDE.md](../src/data/courses/PY2/GUIDE.md) |
| **内容提取脚本** | [scripts/extract_content.py](../scripts/extract_content.py) |
| **Composable** | [composables/useLessonData.js](../src/composables/useLessonData.js) |

---

## 常见问题

### Q: 音标中有特殊字符导致报错？

**A**: 避免使用单引号 `'`，改用连字符 `-`：

```javascript
// ❌ 错误
pronunciation: "[trə'vɜːs]"

// ✅ 正确
pronunciation: "[trə-vɜːs]"
```

### Q: 为什么选项不要加 "A. " 前缀？

**A**: ExerciseCard 组件会自动添加选项标签。如果手动添加，会导致重复。

### Q: 如何处理代码输出中的换行？

**A**: 在 `output` 中使用 `\n` 表示换行：

```javascript
output: 'A\nB\nC'  // 会渲染为三行
```

---

## 相关文档

- [01-项目结构](./01-PROJECT-STRUCTURE.md) - 课程体系结构
- [02-功能需求](./02-FUNCTIONALITY.md) - 课程体系功能
- [04-打字练习](./04-TYPING-PRACTICE.md) - 打字练习实现
