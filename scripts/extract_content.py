#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PY2课程内容提取脚本
从PDF和图片中提取文字内容，汇总到README.md

使用方法:
    python scripts/extract_content.py

依赖安装:
    pip install -r scripts/requirements.txt
"""

import os
import sys
from pathlib import Path
import re
from typing import Dict, List, Optional
import json

# 添加项目根目录到路径
PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT))


# ==================== 配置 ====================

# 课程数据目录
COURSES_PATH = PROJECT_ROOT / "src" / "data" / "courses" / "PY2"

# 输出文件
OUTPUT_README = COURSES_PATH / "README.md"
OUTPUT_JSON = COURSES_PATH / "content.json"

# 资源文件名
RESOURCE_FILES = {
    "flashcard": "flashcard.png",
    "knowledge": "knowledge.png",
    "lecture": "lecture.pdf",
    "exercise": "exercise.pdf",
    "solution": "solution.pdf",
}


# ==================== OCR初始化 ====================

def init_ocr():
    """初始化OCR引擎"""
    try:
        from paddleocr import PaddleOCR
        print("正在初始化PaddleOCR...")
        ocr = PaddleOCR(use_angle_cls=True, lang="ch", show_log=False)
        print("PaddleOCR初始化成功")
        return ocr
    except ImportError:
        print("警告: paddleocr未安装，图片OCR功能将不可用")
        print("请运行: pip install paddleocr")
        return None
    except Exception as e:
        print(f"错误: OCR初始化失败 - {e}")
        return None


# ==================== 内容提取函数 ====================

def extract_from_image(image_path: Path, ocr) -> str:
    """从图片提取文字（OCR）

    Args:
        image_path: 图片文件路径
        ocr: OCR引擎实例

    Returns:
        提取的文字内容
    """
    if not image_path.exists():
        return f"[文件不存在: {image_path.name}]"

    if ocr is None:
        return "[OCR未初始化，无法提取图片内容]"

    try:
        print(f"  正在OCR: {image_path.name}")
        result = ocr.ocr(str(image_path), cls=True)

        if result and result[0]:
            # 提取所有文字行
            lines = []
            for line in result[0]:
                if line and len(line) > 1:
                    text = line[1][0]  # 文字内容
                    lines.append(text)

            return "\n".join(lines)
        else:
            return "[OCR未识别到文字]"

    except Exception as e:
        return f"[OCR提取失败: {str(e)}]"


def extract_from_pdf_text(pdf_path: Path) -> str:
    """从PDF提取文字（直接文字提取）

    Args:
        pdf_path: PDF文件路径

    Returns:
        提取的文字内容
    """
    if not pdf_path.exists():
        return f"[文件不存在: {pdf_path.name}]"

    try:
        import PyPDF2

        print(f"  正在提取PDF文字: {pdf_path.name}")
        with open(pdf_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            text = ""

            # 提取每页文字
            for page_num, page in enumerate(reader.pages, 1):
                try:
                    page_text = page.extract_text()
                    if page_text:
                        text += f"\n--- 第{page_num}页 ---\n{page_text}\n"
                except Exception as e:
                    text += f"\n--- 第{page_num}页提取失败: {e} ---\n"

            if text.strip():
                return text
            else:
                return "[PDF未提取到文字，可能是图片扫描版]"

    except ImportError:
        return "[PyPDF2未安装，无法提取PDF]"
    except Exception as e:
        return f"[PDF提取失败: {str(e)}]"


def extract_from_pdf_with_ocr(pdf_path: Path, ocr) -> str:
    """从PDF提取文字（OCR方式，用于扫描版PDF）

    Args:
        pdf_path: PDF文件路径
        ocr: OCR引擎实例

    Returns:
        提取的文字内容
    """
    if not pdf_path.exists():
        return f"[文件不存在: {pdf_path.name}]"

    if ocr is None:
        return "[OCR未初始化，无法处理扫描版PDF]"

    try:
        import fitz  # pymupdf

        print(f"  正在OCR处理PDF: {pdf_path.name}")
        doc = fitz.open(str(pdf_path))
        text = ""

        for page_num, page in enumerate(doc, 1):
            print(f"    处理第{page_num}页...")
            # 渲染页面为图片
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2倍分辨率
            img_bytes = pix.tobytes("png")

            # 保存临时图片
            import tempfile
            with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
                tmp.write(img_bytes)
                tmp_path = Path(tmp.name)

            # OCR识别
            page_text = extract_from_image(tmp_path, ocr)
            text += f"\n--- 第{page_num}页 ---\n{page_text}\n"

            # 删除临时文件
            tmp_path.unlink()

        doc.close()
        return text

    except ImportError:
        return "[pymupdf未安装，无法处理扫描版PDF]"
    except Exception as e:
        return f"[PDF OCR处理失败: {str(e)}]"


def extract_from_pdf(pdf_path: Path, ocr=None) -> Dict[str, str]:
    """从PDF提取内容（智能选择方式）

    Args:
        pdf_path: PDF文件路径
        ocr: OCR引擎实例

    Returns:
        包含提取结果的字典
    """
    # 先尝试直接提取文字
    direct_text = extract_from_pdf_text(pdf_path)

    # 如果直接提取失败，尝试OCR
    if "[PDF未提取到文字" in direct_text and ocr:
        ocr_text = extract_from_pdf_with_ocr(pdf_path, ocr)
        return {
            "method": "ocr",
            "content": ocr_text
        }
    else:
        return {
            "method": "direct",
            "content": direct_text
        }


# ==================== 课次处理 ====================

def process_lesson(lesson_path: Path, ocr) -> Dict:
    """处理单个课次

    Args:
        lesson_path: 课次文件夹路径
        ocr: OCR引擎实例

    Returns:
        课次内容字典
    """
    lesson_id = lesson_path.name
    print(f"\n处理课次: {lesson_id}")

    content = {
        "id": lesson_id,
        "unit": lesson_path.parent.name,
        "resources": {}
    }

    # 处理单词卡（图片）
    flashcard_path = lesson_path / RESOURCE_FILES["flashcard"]
    if flashcard_path.exists():
        content["resources"]["flashcard"] = {
            "file": str(flashcard_path.relative_to(PROJECT_ROOT)),
            "content": extract_from_image(flashcard_path, ocr)
        }

    # 处理知识点图（图片）
    knowledge_path = lesson_path / RESOURCE_FILES["knowledge"]
    if knowledge_path.exists():
        content["resources"]["knowledge"] = {
            "file": str(knowledge_path.relative_to(PROJECT_ROOT)),
            "content": extract_from_image(knowledge_path, ocr)
        }

    # 处理讲义PDF
    lecture_path = lesson_path / RESOURCE_FILES["lecture"]
    if lecture_path.exists():
        lecture_data = extract_from_pdf(lecture_path, ocr)
        content["resources"]["lecture"] = {
            "file": str(lecture_path.relative_to(PROJECT_ROOT)),
            "method": lecture_data["method"],
            "content": lecture_data["content"]
        }

    # 处理课后习题PDF
    exercise_path = lesson_path / RESOURCE_FILES["exercise"]
    if exercise_path.exists():
        exercise_data = extract_from_pdf(exercise_path, ocr)
        content["resources"]["exercise"] = {
            "file": str(exercise_path.relative_to(PROJECT_ROOT)),
            "method": exercise_data["method"],
            "content": exercise_data["content"]
        }

    # 处理习题解析PDF
    solution_path = lesson_path / RESOURCE_FILES["solution"]
    if solution_path.exists():
        solution_data = extract_from_pdf(solution_path, ocr)
        content["resources"]["solution"] = {
            "file": str(solution_path.relative_to(PROJECT_ROOT)),
            "method": solution_data["method"],
            "content": solution_data["content"]
        }

    return content


def get_all_lessons() -> List[Path]:
    """获取所有课次文件夹路径

    Returns:
        课次文件夹路径列表，按单元和课次排序
    """
    if not COURSES_PATH.exists():
        print(f"错误: 课程目录不存在 - {COURSES_PATH}")
        return []

    lessons = []
    for unit_dir in sorted(COURSES_PATH.glob("L*")):
        if unit_dir.is_dir():
            for lesson_dir in sorted(unit_dir.glob("L*-*/")):
                if lesson_dir.is_dir():
                    lessons.append(lesson_dir)

    return lessons


# ==================== 输出格式化 ====================

def format_markdown(content_list: List[Dict]) -> str:
    """将提取的内容格式化为Markdown

    Args:
        content_list: 课次内容列表

    Returns:
        Markdown格式字符串
    """
    md = "# PY2课程内容提取\n\n"
    md += f"生成时间: {Path(__file__).stat().st_mtime}\n"
    md += f"课次总数: {len(content_list)}\n\n"
    md += "---\n\n"

    for item in content_list:
        lesson_id = item["id"]
        unit = item["unit"]
        resources = item["resources"]

        md += f"# {unit} - {lesson_id}\n\n"

        # 单词卡
        if "flashcard" in resources:
            md += "## 📇 单词卡\n\n"
            md += f"```text\n{resources['flashcard']['content']}\n```\n\n"

        # 知识点图
        if "knowledge" in resources:
            md += "## 📖 知识点图\n\n"
            md += f"```text\n{resources['knowledge']['content']}\n```\n\n"

        # 讲义
        if "lecture" in resources:
            md += "## 📄 讲义\n\n"
            md += f"*提取方式: {resources['lecture']['method']}*\n\n"
            md += f"```text\n{resources['lecture']['content'][:1000]}...\n```\n\n"

        # 课后习题
        if "exercise" in resources:
            md += "## ✏️ 课后习题\n\n"
            md += f"```text\n{resources['exercise']['content'][:1000]}...\n```\n\n"

        # 习题解析
        if "solution" in resources:
            md += "## ✅ 习题解析\n\n"
            md += f"```text\n{resources['solution']['content'][:1000]}...\n```\n\n"

        md += "---\n\n"

    return md


# ==================== 主函数 ====================

def main():
    """主函数"""
    print("=" * 60)
    print("PY2课程内容提取脚本")
    print("=" * 60)

    # 检查目录
    if not COURSES_PATH.exists():
        print(f"错误: 课程目录不存在 - {COURSES_PATH}")
        return 1

    # 初始化OCR
    ocr = init_ocr()

    # 获取所有课次
    lessons = get_all_lessons()
    print(f"\n找到 {len(lessons)} 个课次")

    if not lessons:
        print("未找到任何课次文件夹")
        return 1

    # 处理每个课次
    all_content = []
    for lesson_path in lessons:
        content = process_lesson(lesson_path, ocr)
        all_content.append(content)

    # 输出JSON
    print(f"\n保存JSON到: {OUTPUT_JSON}")
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(all_content, f, ensure_ascii=False, indent=2)

    # 输出Markdown
    print(f"保存Markdown到: {OUTPUT_README}")
    markdown = format_markdown(all_content)
    with open(OUTPUT_README, "w", encoding="utf-8") as f:
        f.write(markdown)

    print("\n" + "=" * 60)
    print("提取完成！")
    print(f"- JSON: {OUTPUT_JSON}")
    print(f"- Markdown: {OUTPUT_README}")
    print("=" * 60)

    return 0


if __name__ == "__main__":
    sys.exit(main())
