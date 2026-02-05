# 课程数据目录

本目录存储核桃编程 Python 课程的所有学习资料，按阶段（PY1/PY2/PY3）组织。

---

## 目录结构

```
courses/
├── PY1/           # Python 入门基础（L1-L6）
├── PY2/           # Python 进阶编程（L7-L12）
└── PY3/           # Python 高级应用（L13-L18）
```

---

## 阶段划分

| 阶段 | 单元范围 | 课次数量 | 内容描述 |
|------|---------|---------|---------|
| **PY1** | L1 ~ L6 | 24 课 | Python 入门基础 |
| **PY2** | L7 ~ L12 | 24 课 | Python 进阶编程 |
| **PY3** | L13 ~ L18 | 24 课 | Python 高级应用 |

---

## 单课次文件结构

每个课次（如 L7-1）包含以下学习资源：

```
L7-1/
├── flashcard.png    # 单词卡：英语单词 + 中文释义
├── knowledge.png    # 知识点图：编程语法图解
├── lecture.pdf      # 讲义：课程内容详解
├── exercise.pdf     # 课后习题：练习题
└── solution.pdf     # 习题解析：答案和讲解
```

---

## 配置和数据文件

### lessons.config.js
前端组件读取的课程配置文件，包含：
- 课次 ID 和标题
- 资源文件路径
- 课次状态（complete/partial/missing）

**使用方式**：
```javascript
import { py2LessonsConfig, getLessonResources } from './data/courses/PY2/lessons.config.js'

// 获取 L7-1 的资源
const resources = getLessonResources('L7', 'L7-1')
console.log(resources.flashcard)  // '/data/courses/PY2/L7/L7-1/flashcard.png'
```

### content.json
从 PDF 和图片中提取的结构化内容数据，由 Python 脚本自动生成。

**用途**：
- 前端组件直接读取显示
- 避免重复进行 OCR 处理

**数据结构**：
```json
{
  "id": "L7-1",
  "unit": "L7",
  "resources": {
    "flashcard": {
      "file": "src/data/courses/PY2/L7/L7-1/flashcard.png",
      "content": "提取的文字内容..."
    },
    "knowledge": { ... },
    "lecture": { ... },
    "exercise": { ... },
    "solution": { ... }
  }
}
```

### README.md
提取内容的 Markdown 格式版本，用于人工校对和内容优化。

---

## 内容提取脚本

学习资料使用 Python 脚本从原始文件中提取内容。

**脚本位置**：`scripts/extract_content.py`

**技术方案**：
- 图片 OCR：PaddleOCR 2.10.0（中英文识别）
- PDF 文字提取：PyPDF2

**使用方法**：
```bash
# 安装依赖
pip install -r scripts/requirements.txt

# 运行提取脚本
python scripts/extract_content.py
```

---

## 内容筛选规则

**重要**：从原始资料提取到 Web 显示时，需要筛选内容。

### 保留的内容
- ✅ 编程语法、函数、命令
- ✅ 英语单词（编程相关）
- ✅ 代码示例
- ✅ 编程练习题

### 舍去的内容
- ❌ 剧情动画描述
- ❌ 游戏角色/场景
- ❌ 核桃部落故事
- ❌ 项目日志/进度

### 视情况保留
- ⚠️ 科学探索知识（与编程相关则保留）

---

## 文件状态

### PY2 阶段
| Level | 课次 | 状态 |
|-------|------|------|
| L7 | L7-1 ~ L7-4 | ✅ 完整 |
| L8 | L8-1 ~ L8-4 | ✅ 完整 |
| L9 | L9-1 ~ L9-4 | ✅ 完整 |
| L10 | L10-1 ~ L10-3 | ⚠️ L10-4 缺失 |
| L11 | L11-1, L11-2, L11-4 | ⚠️ L11-3 缺失，L11-2 缺 solution |
| L12 | L12-1 ~ L12-4 | ✅ 完整 |

### PY1/PY3 阶段
待添加资料...

---

## 资源路径格式

在 `lessons.config.js` 中，资源路径使用绝对路径格式（从项目根目录开始）：

```javascript
{
  flashcard: '/data/courses/PY2/L7/L7-1/flashcard.png',
  knowledge: '/data/courses/PY2/L7/L7-1/knowledge.png',
  lecture: '/data/courses/PY2/L7/L7-1/lecture.pdf',
  exercise: '/data/courses/PY2/L7/L7-1/exercise.pdf',
  solution: '/data/courses/PY2/L7/L7-1/solution.pdf'
}
```

前端组件使用时，通过 Vite 的静态资源服务直接访问。
