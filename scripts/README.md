# Scripts 目录

本目录存放项目开发过程中使用的辅助脚本。

---

## 内容提取脚本

### extract_content.py

**功能**：从 PY2 课程原始资料（PDF 和图片）中提取结构化内容。

**输入**：
- 图片文件：`flashcard.png`、`knowledge.png`
- PDF 文件：`lecture.pdf`、`exercise.pdf`、`solution.pdf`

**输出**：
- JSON 格式：`src/data/courses/PY2/content.json`
- Markdown 格式：`src/data/courses/PY2/README.md`

**技术方案**：
| 任务 | Python 库 | 版本 |
|------|----------|------|
| 图片 OCR | `paddleocr` | 2.10.0 |
| 深度学习框架 | `paddlepaddle` | 2.6.2 |
| PDF 文字提取 | `PyPDF2` | ≥3.0.0 |
| PDF 高级处理 | `pdfplumber` | ≥0.10.0 |
| PDF 图片提取 | `pymupdf` | ≥1.23.0 |
| 图像处理 | `Pillow` | ≥10.0.0 |

### 使用方法

#### 1. 安装依赖

```bash
# Windows
pip install -r scripts/requirements.txt

# 或使用清华镜像源
pip install -r scripts/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 2. 运行脚本

```bash
python scripts/extract_content.py
```

#### 3. 检查输出

- JSON 数据：[src/data/courses/PY2/content.json](../src/data/courses/PY2/content.json)
- 可读版本：[src/data/courses/PY2/README.md](../src/data/courses/PY2/README.md)

---

## 依赖配置

### requirements.txt

```txt
# 图片OCR（中文识别）
paddleocr>=2.7.0
paddlepaddle>=2.5.0

# PDF文字提取
PyPDF2>=3.0.0
pdfplumber>=0.10.0

# PDF处理（用于扫描版PDF的OCR）
pymupdf>=1.23.0

# 图像处理
Pillow>=10.0.0

# 其他工具
numpy>=1.24.0
```

---

## 脚本工作流程

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

---

## OCR 模型

首次运行时，PaddleOCR 会自动下载以下模型：

| 模型 | 大小 | 用途 |
|------|------|------|
| ch_PP-OCRv4_det_infer | ~4MB | 文字检测 |
| ch_PP-OCRv4_rec_infer | ~10MB | 文字识别 |
| ch_ppocr_mobile_v2.0_cls_infer | ~2MB | 文字方向分类 |

模型缓存位置：`C:\Users\<用户名>\.paddleocr\`

---

## 常见问题

### Q1: OCR 识别不准确怎么办？
A: 中文 OCR 可能出现错误，需要人工校对。查看 [PY2/README_GUIDE.md](../src/data/courses/PY2/README_GUIDE.md) 了解校对指南。

### Q2: PDF 提取不到文字？
A: 脚本会自动检测，如果是扫描版 PDF，会尝试使用 OCR 提取。

### Q3: 如何跳过已处理的文件？
A: 脚本每次都会重新处理所有文件。如需增量更新，需要修改脚本逻辑。

### Q4: PaddleOCR 版本问题？
A: 推荐使用 paddleocr 2.10.0 + paddlepaddle 2.6.2 组合，经测试在 Windows 上稳定。

---

## 扩展其他阶段

要提取 PY1 或 PY3 的内容：

1. 将课程资料放入 `src/data/courses/PY1/` 或 `src/data/courses/PY3/`
2. 修改脚本中的 `COURSES_PATH` 变量
3. 运行脚本

```python
# 修改 extract_content.py 中的路径
COURSES_PATH = PROJECT_ROOT / "src" / "data" / "courses" / "PY1"
```
