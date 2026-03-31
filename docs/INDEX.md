# 核桃编程学习平台 - 文档中心

> 本项目为核桃编程学生提供的课后学习巩固网站，包含打字练习、Python在线编辑器等功能。

**技术栈**: Vue 3 + Vite + Vue Router + Skulpt（浏览器内Python运行时）

---

## 目录

- [快速开始](#快速开始)
- [课程开发全流程](#课程开发全流程)
- [课程内容开发标准](#课程内容开发标准)
- [课程内容验证检查清单](#课程内容验证检查清单)
- [课程资料核对检查](#课程资料核对检查)
- [文档导航](#文档导航)
- [项目概览](#项目概览)

---

## 快速开始

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 构建生产版本
npm run build
```

访问 http://localhost:5173

---

## 课程开发全流程

> **核心工作**：将原始课程资料转换为网页可展示的内容

### 🚨 禁止臆造课程内容！

> **重要原则**：**以 OCR 提取内容为基础，合理拓展，保持课程一致性。**

| ❌ 错误做法 | ✅ 正确做法 |
|-----------|-----------|
| 完全根据课程主题自己编写单词、知识点 | 从 `content.json` 中提取 OCR 识别的内容作为核心 |
| 参考其他课程"复制"不相关的内容 | 在 OCR 内容基础上拓展**本节课相关**的内容 |
| 改变 OCR 提取的核心知识点含义 | 保持核心知识点不变，按三梯度标准展开 |
| 编写与课程主题无关的习题 | 参考 OCR 题目风格，根据知识点出**相关**习题 |

**开发规则**：
1. **单词卡**：OCR 提取的单词必须全部包含，至少拓展 1 个，共 4-6 个课程相关单词
2. **知识点**：以 OCR 提取的知识点为核心，按三梯度标准编写
3. **习题**：参考 OCR 题目风格，根据知识点自主编写 6 道题（2基础 + 2进阶 + 2挑战）

### 📌 重要：课程内容参考标准

**开发或修复课程时，请以 `src/data/courses/` 目录中的整理后文件为准！**

| 目录 | 说明 | 用途 |
|------|------|------|
| `源文件/levelX/` | 原始资料（未整理） | 仅作备份参考，不用于开发 |
| `src/data/courses/PX/LX/LX-X/` | **整理后的标准文件** | ✅ 开发/修复课程时参考此目录 |

**标准文件结构**：
```
src/data/courses/PY1/L1/L1-4/
├── flashcard.png    # 单词卡（标准命名）
├── knowledge.png    # 知识点图（标准命名）
├── lecture.pdf      # 讲义（标准命名）
├── exercise.pdf     # 课后习题（标准命名）
└── solution.pdf     # 习题解析（标准命名）
```

### 流程图

```
┌─────────────────────────────────────────────────────────────────┐
│                    课程开发三步骤                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ① 文件整理阶段                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 源文件/levelX/LX-*/                                    │   │
│  │   └── LX-X单词卡.png、LX-X讲义.pdf、LX-X课后习题.pdf... │   │
│  │                      ↓                                  │   │
│  │ 手动整理：筛选、重命名、复制                              │   │
│  │                      ↓                                  │   │
│  │ src/data/courses/PX/LX/LX-*/                            │   │
│  │   └── flashcard.png、lecture.pdf、exercise.pdf、         │   │
│  │       knowledge.png、solution.pdf                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ② 内容提取阶段                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ python scripts/extract_content.py                       │   │
│  │                      ↓                                  │   │
│  │ OCR识别 + PDF文字提取                                     │   │
│  │                      ↓                                  │   │
│  │ content.json + OCR-CONTENT.md                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ③ 数据开发阶段                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 创建：lessons/LX-*/lesson-data.js                       │   │
│  │   └── vocabData、knowledgePoints、exercises、meta       │   │
│  │                      ↓                                  │   │
│  │ 网页自动渲染（无需修改组件）                               │   │
│  │                      ↓                                  │   │
│  │ 访问：/lesson/PX/LX/LX-X                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 步骤详解

#### ① 文件整理：从源文件到标准目录

**源文件位置**：`源文件/levelX/`

| 原始文件名 | 标准命名 | 说明 |
|-----------|---------|------|
| `LX-X单词卡.png` | `flashcard.png` | 英文单词卡 |
| `知识总结.png` / `LX-X知识总结.png` | `knowledge.png` | 知识点图 |
| `LX-X讲义.pdf` | `lecture.pdf` | 课堂讲义 |
| `LX-X课后习题.pdf` | `exercise.pdf` | 练习题 |
| `LX-X课后习题解析.pdf` | `solution.pdf` | 答案解析 |

**操作步骤**：
1. 筛选：选择最新版本（优先"新logo版"），去除旧版文件
2. 重命名：按上表重命名为标准名称
3. 复制到：`src/data/courses/PX/LX/LX-*/`

**注意**：源文件包含多版本（旧版、新版、迭代版），需人工判断使用哪个版本。

#### ② 内容提取：运行 OCR 脚本

```bash
# 安装依赖（首次运行）
pip install -r scripts/requirements.txt

# 运行提取脚本
python scripts/extract_content.py

# 指定阶段（可选）
python scripts/extract_content.py PY1
python scripts/extract_content.py PY2
```

**输出文件**：
- `src/data/courses/PX/content.json` — 结构化数据
- `src/data/courses/PX/OCR-CONTENT.md` — 可读参考文档

**技术方案**：PaddleOCR（图片） + PyPDF2（PDF）

#### ③ 数据开发：创建 lesson-data.js

> **必须先完成步骤②，运行 OCR 脚本生成 content.json 后才能进行本步骤！**

参考模板：`docs/05-COURSE-MATERIALS.md`

**数据来源**：从 `src/data/courses/PX/content.json` 中提取对应课次的内容

**规则说明**：
- ✅ **单词卡**：4-6 个，其中 OCR 提取的单词**必须包含**，至少拓展 1 个相关单词
- ✅ **知识点**：从 OCR 提取的核心知识点出发，按三梯度标准编写
- ✅ **习题**：**6 道**（2基础 + 2进阶 + 2挑战），参考 OCR 题目风格，根据知识点自主出题

**禁止事项**：
- ❌ 不能跳过 OCR 提取直接编写课程内容
- ❌ 不能参考其他课程"复制"内容
- ❌ 不能改变 OCR 提取的核心知识点
- ❌ 不能因为 OCR 识别不准确就自己编造内容

**数据结构**：
```javascript
// src/data/courses/PY1/lessons/L1-1/lesson-data.js
export const vocabData = [...]           // 单词卡（从 flashcard.content 提取）
export const knowledgePoints = [...]     // 知识点（从 knowledge.content 提取）
export const exercises = [...]           // 习题（从 exercise.content 提取）
export const lessonMeta = {...}          // 课次元数据
export const typingWords = {...}         // 打字练习（根据课程主题生成）
```

**开发流程**：
1. 打开 `src/data/courses/PX/content.json`
2. 找到对应课次（如 `L5-1`）的内容
3. 从 `resources.flashcard.content` 中提取单词卡（必须包含）→ 至少拓展 1 个，共 4-6 个相关单词
4. 从 `resources.knowledge.content` 中提取核心知识点 → 按三梯度标准编写
5. 从 `resources.exercise.content` 中查看题目风格 → 根据知识点自主编写 6 道习题
6. 从 `resources.solution.content` 中参考解析风格
7. 按照标准格式编写完整的 `lesson-data.js`

**完成后自动渲染**，无需修改组件代码。

---

## 课程内容开发标准

> **每课次必须包含的内容和数量要求**

### 内容数量标准

| 数据类型 | 数量要求 | 说明 |
|---------|---------|------|
| **单词卡** (vocabData) | **4-6 个** | OCR 提取的单词必须包含，至少拓展 1 个 |
| **知识点** (knowledgePoints) | 2-4 个 | 每个知识点需要3个难度版本 |
| **习题** (exercises) | **6 道** | 2基础 + 2进阶 + 2挑战（根据知识点自主出题） |
| **打字单词** (typingWords) | 每难度 4 个 | easy/medium/hard 各4个 |
| **代码模板** (typingTemplates) | 每难度 4-6 个 | easy/medium/hard 各4-6个 |

### 习题难度分布标准

| 难度 | 标签 | 数量 | 数学概念示例 |
|------|------|------|------------|
| 🟢 easy | 基础 | 2道 | 数数、符号识别、找规律 |
| 🟡 medium | 进阶 | 2道 | 分组问题、位置索引、算式计算 |
| 🔴 hard | 挑战 | 2道 | 植树问题、周期问题、变量计算 |

### 知识点三梯度标准

每个知识点必须包含3个难度版本：

| 难度 | 目标年级 | 内容特点 | 必填字段 |
|------|----------|----------|----------|
| 🟢 easy | 1-2年级 | 故事场景导入、概念简单、代码直白 | story, concept, syntax, example, practice(2题) |
| 🟡 medium | 3-4年级 | 实际应用场景、概念深入、代码变体 | story, concept, syntax, example, practice(2题) |
| 🔴 hard | 5-6年级 | 综合运用场景、算法思维、优化技巧 | story, concept, syntax, example, practice(2题) |

### 单词卡数据标准

每个单词必须包含以下字段：

```javascript
{
  word: 'split',              // 单词
  pronunciation: '[split]',   // 音标（避免特殊字符如 '）
  partOfSpeech: 'v.',         // 词性
  meaning: '分割；分裂',       // 中文释义
  level: 'easy',              // 难度：easy/medium/hard
  example: 'The big apple...', // 英文例句
  exampleTranslation: '...'   // 例句翻译
}
```

### 习题数据标准

每道题必须包含以下字段：

```javascript
{
  id: 'ex-1',                  // 唯一标识
  level: 'easy',               // 难度：easy/medium/hard
  levelLabel: '基础',           // 显示标签
  levelEmoji: '🟢',            // 图标
  type: 'multiple-choice',     // 题型
  mathConcept: '数数',          // 数学概念（必填！）
  question: '题目内容',         // 支持Markdown
  options: ['A', 'B', 'C'],    // 选项（不要加"A."前缀）
  answer: 0,                   // 正确答案索引
  explanation: '解析',         // 解析说明
  hint: '提示内容'             // 可选
}
```

### 编程×数学融合原则

每道习题都要与数学概念结合：

| 编程知识 | 数学概念 | 示例 |
|---------|---------|------|
| 字符串遍历 | 数数、计数 | 遍历字符串数字母数量 |
| split命令 | 分组问题 | 用分隔符切分字符串 |
| 索引访问 | 位置问题 | 访问列表中特定位置的元素 |
| for循环 | 周期问题 | 重复模式找规律 |
| 变量计算 | 算式运算 | 先乘除后加减 |

---

## 课程内容验证检查清单

> **每完成一个课次开发后，必须执行以下检查确保内容符合标准**

### 自动化语法检查

```bash
# 检查 JavaScript 语法是否正确
node -c src/data/courses/PY1/lessons/LX-X/lesson-data.js

# 批量检查整个单元
for file in src/data/courses/PY1/lessons/L1-*/lesson-data.js; do
  echo "检查: $file"
  node -c "$file" && echo "✓ 通过" || echo "✗ 失败"
done
```

### 内容数量检查

| 检查项 | 标准要求 | 检查方法 |
|--------|----------|----------|
| 单词卡数量 | 4-6 个（必须包含OCR提取的所有单词，每节课至少拓展一个单词） | `vocabData.length` |
| 知识点数量 | 2-4 个 | `knowledgePoints.length` |
| 习题总数 | **至少 6 道** | `exercises.length` |
| easy 习题 | **至少 2 道** | `exercises.filter(e => e.level === 'easy').length` |
| medium 习题 | **至少 2 道** | `exercises.filter(e => e.level === 'medium').length` |
| hard 习题 | **至少 2 道** | `exercises.filter(e => e.level === 'hard').length` |
| 打字单词 | 每难度 4 个 | `typingWords.easy/medium/hard.length` |
| 代码模板 | 每难度 4-6 个 | `typingTemplates.easy/medium/hard.length` |

### 必填字段检查

**单词卡 (vocabData)**：
- ✅ `word` - 单词
- ✅ `pronunciation` - 音标
- ✅ `partOfSpeech` - 词性
- ✅ `meaning` - 中文释义
- ✅ `level` - 难度 (easy/medium/hard)
- ✅ `example` - 英文例句
- ✅ `exampleTranslation` - 例句翻译

**习题 (exercises)**：
- ✅ `id` - 唯一标识 (ex-1, ex-2, ...)
- ✅ `level` - 难度 (easy/medium/hard)
- ✅ `levelLabel` - 显示标签 ("基础"/"进阶"/"挑战")
- ✅ `levelEmoji` - 图标 ("🟢"/"🟡"/"🔴")
- ✅ `type` - 题型 ("multiple-choice")
- ✅ `mathConcept` - **数学概念（必填！）**
- ✅ `question` - 题目内容
- ✅ `options` - 选项数组
- ✅ `answer` - 正确答案索引 (0, 1, 2, ...)
- ✅ `explanation` - 解析说明
- ⭕ `hint` - 提示内容（可选）

**知识点 (knowledgePoints)**：
- ✅ `id` - 知识点ID
- ✅ `title` - 标题
- ✅ `emoji` - 图标
- ✅ `gradeLevel` - 适合年级
- ✅ `summary` - 概要
- ✅ `easy` / `medium` / `hard` - 三个难度版本
  - ✅ `story` - 故事导入
  - ✅ `concept` - 概念说明
  - ✅ `syntax` - 语法格式
  - ✅ `example` - 示例代码
  - ✅ `practice` - 练习题数组 (2题)

### 常见问题检查

| 问题类型 | 检查方法 | 修复方案 |
|----------|----------|----------|
| **重复的习题ID** | 搜索 `id: 'ex-'` 确保唯一 | 重新编号为 ex-1, ex-2, ... |
| **中文引号冲突** | 检查 question 中是否包含 `'` 或 `"` | 使用外层双引号包裹 question |
| **选项带"A."前缀** | 检查 options 数组元素 | 移除前缀，只保留内容 |
| **音标含特殊字符** | 检查 pronunciation 字段 | 用 [] 替代 /，避免 `'` |
| **mathConcept 为空** | 搜索 `mathConcept:` 确保有值 | 填写对应数学概念 |

### 快速验证脚本

保存为 `scripts/verify-lesson.cjs`：

```javascript
#!/usr/bin/env node
const lessonPath = process.argv[2] || './src/data/courses/PY1/lessons/L1-1/lesson-data.js';

try {
  const data = require(lessonPath);

  console.log(`\n=== ${data.meta?.id || '课程'} 验证报告 ===\n`);

  // 内容数量检查
  const vocabCount = data.vocabData?.length || 0;
  const kpCount = data.knowledgePoints?.length || 0;
  const exCount = data.exercises?.length || 0;
  const easyCount = data.exercises?.filter(e => e.level === 'easy').length || 0;
  const mediumCount = data.exercises?.filter(e => e.level === 'medium').length || 0;
  const hardCount = data.exercises?.filter(e => e.level === 'hard').length || 0;

  console.log('【内容数量】');
  console.log(`  单词卡: ${vocabCount} ${vocabCount >= 4 && vocabCount <= 6 ? '✓' : '✗ (要求: 4-6个)'}`);
  console.log(`  知识点: ${kpCount} ${kpCount >= 2 ? '✓' : '✗ (要求: 2-4个)'}`);
  console.log(`  习题总数: ${exCount} ${exCount >= 6 ? '✓' : '✗ (要求: ≥6道)'}`);
  console.log(`  🟢 easy: ${easyCount} ${easyCount >= 2 ? '✓' : '✗ (要求: ≥2道)'}`);
  console.log(`  🟡 medium: ${mediumCount} ${mediumCount >= 2 ? '✓' : '✗ (要求: ≥2道)'}`);
  console.log(`  🔴 hard: ${hardCount} ${hardCount >= 2 ? '✓' : '✗ (要求: ≥2道)'}`);

  // 必填字段检查
  console.log('\n【字段完整性】');
  const missing = [];

  data.exercises?.forEach((ex, i) => {
    if (!ex.id) missing.push(`exercises[${i}].id`);
    if (!ex.mathConcept) missing.push(`exercises[${i}].mathConcept`);
    if (!ex.options || ex.options.length === 0) missing.push(`exercises[${i}].options`);
  });

  if (missing.length === 0) {
    console.log('  ✓ 所有必填字段完整');
  } else {
    console.log('  ✗ 缺少以下字段:');
    missing.forEach(f => console.log(`    - ${f}`));
  }

  // 习题ID唯一性检查
  console.log('\n【习题ID唯一性】');
  const ids = data.exercises?.map(e => e.id) || [];
  const uniqueIds = new Set(ids);
  if (ids.length === uniqueIds.size) {
    console.log('  ✓ 所有习题ID唯一');
  } else {
    console.log('  ✗ 存在重复的习题ID');
    ids.forEach((id, i) => {
      if (ids.indexOf(id) !== i) console.log(`    - ${id} 重复出现在第 ${i + 1} 题`);
    });
  }

  console.log('\n=== 验证完成 ===\n');
} catch (err) {
  console.error('语法错误:', err.message);
  process.exit(1);
}
```

使用方法：
```bash
# 验证单个课次
node scripts/verify-lesson.cjs src/data/courses/PY1/lessons/L1-2/lesson-data.js

# 验证整个单元
for lesson in src/data/courses/PY1/lessons/L1-*/lesson-data.js; do
  node scripts/verify-lesson.cjs "$lesson"
done
```

### 课程资料核对检查

> **核对 lesson-data.js 是否与标准课程资料相符**

开发完成后，需核对 `lesson-data.js` 与标准课程资料（`flashcard.png`、`knowledge.png`）的内容一致性。

#### 核对原则

| 内容类型 | 核对标准 | 说明 |
|---------|---------|------|
| **单词卡** (vocabData) | 图片中的单词必须包含，至少拓展 1 个，共 4-6 个 | "课程相关的英文单词"，不限于图片内容 |
| **知识点** (knowledgePoints) | 图片中的知识点必须包含，可拓展至 2-4 个 | 知识点是课程核心，应覆盖并合理拓展 |

#### 核对方法

**1. 单词核对**：对比 `flashcard.png` 和 `vocabData`

```bash
# 查看单词卡图片
# src/data/courses/PY1/L1/L1-2/flashcard.png

# 对比 lesson-data.js 中的 vocabData
# src/data/courses/PY1/lessons/L1-2/lesson-data.js
```

核对要点：
- ✅ 图片中的单词是否都在 `vocabData` 中
- ✅ 单词数量是否在 3-5 个范围内
- ℹ️ 拓展的单词是否与课程相关（编程术语、相关概念等）

**2. 知识点核对**：对比 `knowledge.png` 和 `knowledgePoints`

```bash
# 查看知识点图
# src/data/courses/PY1/L1/L1-3/knowledge.png

# 对比 lesson-data.js 中的 knowledgePoints
# src/data/courses/PY1/lessons/L1-3/lesson-data.js
```

核对要点：
- ✅ 图片中的核心知识点是否在 `knowledgePoints` 中
- ✅ 知识点数量是否在 2-4 个范围内
- ℹ️ 拓展的知识点是否与核心知识点相关

#### 拓展示例

| 课次 | 图片内容 | lesson-data.js 内容 | 说明 |
|------|---------|-------------------|------|
| L1-2 | input, theme, name | input, string, int, float, convert | 拓展类型转换概念 |
| L1-3 | if, turn | if, else, compare, condition, equal | 拓展比较运算符和else分支 |
| L1-4 | playSound, 显示文字 | playSound, isPressed, print, record | 拓展按钮检测和录音功能 |

**重要**：拓展的内容应该与课程主题紧密相关，帮助学生更好地理解核心概念。

---

## 文档导航

| 文档 | 说明 | 适用场景 |
|------|------|----------|
| [01-项目结构](./01-PROJECT-STRUCTURE.md) | 目录结构、路由表、组件关系 | 理解项目架构 |
| [02-功能需求](./02-FUNCTIONALITY.md) | 技术选型、功能清单、已知限制 | 了解功能边界 |
| [03-前端布局](./03-FRONTEND-LAYOUT.md) | CSS变量、响应式、页面跳转 | UI开发和样式调整 |
| [04-打字练习](./04-TYPING-PRACTICE.md) | 打字练习实现详解 | 打字功能开发维护 |
| [05-课程资料](./05-COURSE-MATERIALS.md) | 课程资料提取、命名规范 | **核心：新增课程内容** |
| [06-YCL专区](./06-YCL-ZONE.md) | YCL考级专区完整需求 | **新增：YCL备考模块** |

---

## 项目概览

### 技术选型

| 技术 | 版本 | 说明 |
|------|------|------|
| 前端框架 | Vue 3.4.0 | 组件化开发 |
| 路由 | Vue Router 4.6.4 | 多页面应用路由 |
| 构建工具 | Vite 5.0.0 | 官方推荐，开发体验好 |
| 代码编辑器 | CodeMirror 5.65.13 | 通过CDN引入 |
| 代码执行 | Skulpt 1.2.0 | 浏览器内Python运行时 |

### 核心功能

- **Python在线编辑器**：集成 CodeMirror，支持 Python 语法高亮，通过 Skulpt 本地执行
- **打字练习模块**：
  - 英文打字：单词模式 + 代码模式，虚拟键盘反馈，排行榜
  - 中文打字：古诗 + 成语练习，整体匹配方式
  - 代码模板池：L7-L12 课程模板聚合，按难度分级
- **课程体系**：3个阶段（PY1/PY2/PY3），18个单元，72次课
  - **UI特性**：
    - 阶段卡片差异化配色（PY1橙色/PY2蓝色/PY3玫粉色）
    - 课程详情页悬浮返回按钮（响应式设计）
    - 移动端导航菜单优化（55%/60%宽度）
- **YCL考级专区**：
  - 专区内悬浮返回按钮（左下角）
  - 学习方式选择（考点复习 / 练习套卷）
  - 考点复习模式：知识点详情、理论讲解、复习进度
  - 考情分析区分选择题/编程题
  - 复习进度保存到 localStorage
  - "复习完毕，进入模拟考试"快捷按钮
  - 考试结果页优化：一屏显示得分和答题情况
  - 提交确认弹窗：自定义美观弹窗，显示未答题数量
  - **考试记录持久化**：localStorage保存答题记录，关闭浏览器后仍可查看
  - **查看解析功能**：查看每道题的答案和解析，支持历史记录回顾
- **教师口令验证**：
  - 访问时输入口令，验证成功显示专属首页
  - 半透明弹窗 + 祝贺动画特效
  - 适合教培机构分班使用

### 路由结构

| 路由 | 组件 | 说明 |
|------|------|------|
| `/` | HomeView | 首页（个性化显示） |
| `/levels` | CourseLevelsView | 阶段选择（PY1/PY2/PY3） |
| `/levels/:stage` | StageView | 单元选择（L1-L18） |
| `/levels/:stage/:unit` | UnitView | 课时选择 |
| `/lesson/:stage/:unit/:lesson` | LessonView | 课时主页面 |
| `/typing` | TypingView | 独立打字练习 |
| `/python` | PythonIDEView | 独立Python编辑器 |
| `/ycl` | YCLZoneView | YCL专区 |
| `/contact` | ContactView | 联系作者 |
| `/locked` | StageLocked | 阶段锁定提示 |

> **口令验证**：访问任意路由时，若未验证则弹出验证弹窗覆盖页面，验证成功后方可访问内容。

---

## 开发规范

### CSS使用规范
- 优先使用 CSS 变量（`var(--primary-color)`）
- 响应式断点：1024px, 768px, 480px
- 组件样式使用 `<style scoped>`

### 响应式设计
- 支持设备：电脑、平板、手机、学习机
- 移动端触控区域最小 44×44px
- 避免固定像素，使用 rem/em 相对单位

---

## 常见问题

### Python编辑器限制
- 支持标准库：print、input、math、random、json、turtle 等
- **不支持**第三方库：numpy、pandas 等
- 在 `while True` 等无限循环中使用 input() 可能导致无法停止

---

## 相关链接

- [根目录 README](../README.md)
- [Claude 开发指南](../claude.md) - AI助手专用
