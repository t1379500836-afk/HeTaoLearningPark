/**
 * PY2 课程 L8-4: 鸿门宴
 *
 * 核心知识点:
 * 1. 列表生成式（列表推导式）
 * 2. sorted() 降序排列
 * 3. 字符串拼接
 * 4. 字符串切片
 * 5. count() 统计字符次数
 */

// 单词卡数据
export const vocabData = [
  {
    word: 'reverse',
    pronunciation: "[ri'vɜːs]",
    partOfSpeech: 'v.',
    meaning: '反转；颠倒；相反',
    level: 'medium',
    example: 'Reverse the list.',
    exampleTranslation: '把列表反转。'
  },
  {
    word: 'count',
    pronunciation: '[kaunt]',
    partOfSpeech: 'v.',
    meaning: '计数；统计',
    level: 'easy',
    example: 'Count the apples.',
    exampleTranslation: '数一数苹果。'
  },
  {
    word: 'slice',
    pronunciation: '[slais]',
    partOfSpeech: 'v.',
    meaning: '切片；切片',
    level: 'easy',
    example: 'Slice the string.',
    exampleTranslation: '对字符串进行切片。'
  },
  {
    word: 'join',
    pronunciation: '[dʒɔin]',
    partOfSpeech: 'v.',
    meaning: '连接；加入',
    level: 'medium',
    example: 'Join the words together.',
    exampleTranslation: '把单词连接起来。'
  },
  {
    word: 'comprehension',
    pronunciation: "[,kɔmpri'henʃn]",
    partOfSpeech: 'n.',
    meaning: '理解；推导式',
    level: 'hard',
    example: 'List comprehension is powerful.',
    exampleTranslation: '列表推导式很强大。'
  }
]

// 知识点数据
export const knowledgePoints = [
  {
    id: 'kp-1',
    title: '批量加工魔法 - 列表生成式',
    emoji: '⚗️',
    gradeLevel: '3-4',
    summary: '一行代码批量处理列表，生成新列表',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '想象你有一堆数字卡片，想把每张卡片上的数字都加1。一张一张处理太慢了！列表生成式就像魔法机器，把整堆卡片放进去，瞬间就全部处理好了！',
      concept: '列表生成式可以从旧列表快速创建新列表，对每个元素做相同的操作。',
      syntax: '[操作 for 元素 in 列表]',
      example: {
        title: '给每个数字加1',
        code: '# 原始列表\nnumbers = [1, 2, 3, 4, 5]\n\n# 列表生成式：每个数字加1\nnew_numbers = [n + 1 for n in numbers]\nprint(new_numbers)',
        output: '[2, 3, 4, 5, 6]',
        explanation: '[n + 1 for n in numbers] 意思是：从 numbers 中取出每个 n，计算 n + 1，组成新列表。'
      },
      practice: [
        {
          question: '列表生成式用什么括起来？',
          answer: '方括号 []'
        },
        {
          question: '[n * 2 for n in [1,2,3]] 的结果是什么？',
          answer: '[2, 4, 6]'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '魔法机器升级！你不仅可以处理数字，还能处理字符串。比如把字符串列表的每个元素变成整数，或者把每个字符串变大写。',
      concept: '列表生成式可以结合各种函数使用：int() 转整数，str() 转字符串，upper() 变大写等。',
      syntax: '# 转换成整数\n[int(x) for x in 列表]\n\n# 转换成字符串\n[str(x) for x in 列表]\n\n# 变大写\n[x.upper() for x in 列表]',
      example: {
        title: '字符串转整数',
        code: '# 字符串数字转整数\nstr_numbers = ["1", "2", "3", "4", "5"]\n\n# 转换成真正的数字\nint_numbers = [int(s) for s in str_numbers]\nprint(int_numbers)\n\n# 现在可以计算了\nprint(sum(int_numbers))',
        output: '[1, 2, 3, 4, 5]\n15',
        explanation: '[int(s) for s in str_numbers] 把每个字符串数字转换成真正的整数，转换后就可以进行数学运算了。'
      },
      practice: [
        {
          question: '[int(x) for x in ["10", "20"]] 的结果是什么？',
          answer: '[10, 20]'
        },
        {
          question: '[len(s) for s in ["a", "ab", "abc"]] 的结果是什么？',
          answer: '[1, 2, 3]'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '魔法大师！你可以在列表生成式中加入条件判断，只处理满足条件的元素。还可以嵌套使用，处理多层列表。',
      concept: '带条件的列表生成式：[操作 for 元素 in 列表 if 条件]。只有满足条件的元素才会被处理和加入新列表。',
      syntax: '# 带条件的列表生成式\n[操作 for x in 列表 if 条件]\n\n# 嵌套列表生成式\n[x * y for x in [1,2] for y in [3,4]]',
      example: {
        title: '筛选偶数并加倍',
        code: '# 只处理偶数\nnumbers = [1, 2, 3, 4, 5, 6]\n\n# 筛选偶数并加倍\neven_doubled = [n * 2 for n in numbers if n % 2 == 0]\nprint(even_doubled)',
        output: '[4, 8, 12]',
        explanation: 'if n % 2 == 0 是条件，只处理偶数（2, 4, 6），然后把它们加倍（4, 8, 12）。'
      },
      practice: [
        {
          question: '[n for n in [1,2,3,4] if n > 2] 的结果是什么？',
          answer: '[3, 4]'
        },
        {
          question: '嵌套列表生成式 [x*y for x in [1,2] for y in [3,4]] 的结果？',
          answer: '[3, 4, 6, 8]'
        }
      ]
    }
  },

  {
    id: 'kp-2',
    title: '排序魔法 - sorted() 降序',
    emoji: '📊',
    gradeLevel: '3-4',
    summary: '用 reverse=True 让列表从大到小排列',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '你知道怎么把数字从小到大排吗？用 sorted()！那如果要从大到小排呢？加一个魔法咒语 reverse=True 就可以啦！',
      concept: 'sorted() 默认从小到大排序，加上 reverse=True 参数可以改成从大到小排序。',
      syntax: '# 从小到大（默认）\nsorted(列表)\n\n# 从大到小\nsorted(列表, reverse=True)',
      example: {
        title: '从大到小排序',
        code: '# 成绩列表\nscores = [85, 92, 78, 95, 88]\n\n# 从大到小排序\nsorted_scores = sorted(scores, reverse=True)\nprint(sorted_scores)',
        output: '[95, 92, 88, 85, 78]',
        explanation: 'reverse=True 意思是"反转"，让排序方向反过来，从大到小排列。'
      },
      practice: [
        {
          question: '从大到小用什么参数？',
          answer: 'reverse=True'
        },
        {
          question: 'sorted([3,1,2], reverse=True) 的结果是什么？',
          answer: '[3, 2, 1]'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '排序大师！sorted() 不仅对数字有效，对字符串也有效！字符串排序是按字母顺序的，reverse=True 则反过来。',
      concept: 'sorted() 可以对任何可比较的数据类型排序：数字按大小，字符串按字母顺序。',
      syntax: '# 字符串排序\nsorted(字符串列表)\n\n# 降序排序\nsorted(数据, reverse=True)',
      example: {
        title: '对字符串排序',
        code: '# 名字列表\nnames = ["Tom", "Jerry", "Alice", "Bob"]\n\n# 按字母顺序排序\nsorted_names = sorted(names)\nprint("字母序:", sorted_names)\n\n# 反向排序\nreverse_names = sorted(names, reverse=True)\nprint("反向:", reverse_names)',
        output: '字母序: ["Alice", "Bob", "Jerry", "Tom"]\n反向: ["Tom", "Jerry", "Bob", "Alice"]',
        explanation: '字符串按字母顺序（A-Z）排序，reverse=True 则反过来（Z-A）。'
      },
      practice: [
        {
          question: 'sorted(["b", "a", "c"]) 的结果是什么？',
          answer: '["a", "b", "c"]'
        },
        {
          question: 'sorted 可以对什么排序？',
          answer: '列表、字符串等可迭代对象'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '排序专家！你可以用 key 参数自定义排序规则，比如按字符串长度排序、按绝对值排序等。',
      concept: 'sorted() 的 key 参数可以指定排序依据，实现自定义排序规则。',
      syntax: '# 按长度排序\nsorted(列表, key=len)\n\n# 按绝对值排序\nsorted(列表, key=abs)',
      example: {
        title: '自定义排序规则',
        code: '# 按名字长度排序\nnames = ["Tom", "Jerry", "Alice", "Bob"]\n\nby_length = sorted(names, key=len)\nprint("按长度:", by_length)\n\n# 按绝对值排序\nnumbers = [-5, 3, -1, 4, -2]\nby_abs = sorted(numbers, key=abs)\nprint("按绝对值:", by_abs)',
        output: '按长度: ["Tom", "Bob", "Alice", "Jerry"]\n按绝对值: [-1, -2, 3, 4, -5]',
        explanation: 'key=len 按字符串长度排序，key=abs 按绝对值大小排序。'
      },
      practice: [
        {
          question: 'key=len 是按什么排序？',
          answer: '按长度排序'
        },
        {
          question: 'sorted([-3, 1, -2], key=abs) 的结果是什么？',
          answer: '[1, -2, -3]'
        }
      ]
    }
  },

  {
    id: 'kp-3',
    title: '文字拼接 - 字符串操作',
    emoji: '🔗',
    gradeLevel: '1-2',
    summary: '用 + 号拼接字符串，用切片提取部分',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '你可以像搭积木一样，把多个字符串拼接在一起！用 + 号就可以。还可以像切蛋糕一样，从字符串中切出一部分！',
      concept: '用 + 号可以把多个字符串拼接成一个。用切片 [起始:结束] 可以提取字符串的一部分。',
      syntax: '# 拼接字符串\n字符串1 + 字符串2\n\n# 切片\n字符串[起始索引:结束索引]',
      example: {
        title: '拼接和切片',
        code: '# 拼接字符串\nfirst = "Hello"\nlast = "World"\nfull = first + " " + last\nprint(full)\n\n# 切片\ns = "Hello World"\nprint(s[0:5])  # 前5个字符',
        output: 'Hello World\nHello',
        explanation: '+ 把字符串拼接在一起。s[0:5] 提取索引0到4的字符（不包含5）。'
      },
      practice: [
        {
          question: '"Py" + "thon" 的结果是什么？',
          answer: '"Python"'
        },
        {
          question: '"Hello"[0:2] 的结果是什么？',
          answer: '"He"'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '拼接和切片大师！切片有很多技巧：省略起始、省略结束、负数索引等。拼接可以连接任意数量的字符串。',
      concept: '切片的高级用法：[起始:]、[:结束]、[::步长]。负数索引从末尾开始数。',
      syntax: '# 省略结束（到末尾）\ns[起始:]\n\n# 省略起始（从开头）\ns[:结束]\n\n# 负数索引\ns[-3:]  # 最后3个字符',
      example: {
        title: '高级切片',
        code: 's = "Hello World"\n\n# 省略结束\nprint(s[6:])  # "World"\n\n# 省略起始\nprint(s[:5])   # "Hello"\n\n# 负数索引\nprint(s[-3:])  # "rld"\n\n# 步长切片\nprint(s[::2])  # "HloWrd"',
        output: 'World\nHello\nrld\nHloWrd',
        explanation: '切片可以省略起始或结束位置，负数从末尾开始数，步长可以跳字符。'
      },
      practice: [
        {
          question: '"Hello"[-2:] 的结果是什么？',
          answer: '"lo"'
        },
        {
          question: '"Hello"[::2] 的结果是什么？',
          answer: '"Hlo"'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '字符串操作专家！你还可以用 join() 方法拼接列表中的字符串，用 split() 分割字符串，实现复杂的文本处理。',
      concept: 'join() 和 split() 是字符串处理的重要工具。join() 把列表拼接成字符串，split() 把字符串分割成列表。',
      syntax: '# join 拼接列表\n"分隔符".join(列表)\n\n# split 分割字符串\n字符串.split("分隔符")',
      example: {
        title: 'join 和 split',
        code: '# join 拼接列表\nwords = ["Hello", "beautiful", "world"]\nsentence = " ".join(words)\nprint(sentence)\n\n# split 分割字符串\ns = "apple,banana,orange"\nfruits = s.split(",")\nprint(fruits)',
        output: 'Hello beautiful world\n["apple", "banana", "orange"]',
        explanation: '" ".join(words) 用空格连接列表中的单词。split(",") 用逗号分割字符串。'
      },
      practice: [
        {
          question: '"-".join(["a", "b", "c"]) 的结果是什么？',
          answer: '"a-b-c"'
        },
        {
          question: '"a,b,c".split(",") 的结果是什么？',
          answer: '["a", "b", "c"]'
        }
      ]
    }
  },

  {
    id: 'kp-4',
    title: '统计大师 - count() 方法',
    emoji: '🔢',
    gradeLevel: '1-2',
    summary: '统计字符或元素出现的次数',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '想知道某个字符在字符串中出现几次？用 count() 方法！它就像一个智能计数器，瞬间告诉你结果！',
      concept: 'count() 方法可以统计字符串中某个字符或子串出现的次数。',
      syntax: '字符串.count(要统计的字符)',
      example: {
        title: '统计字符出现次数',
        code: '# 统计字母出现的次数\ntext = "Hello World"\n\nprint("l 的个数:", text.count("l"))\nprint("o 的个数:", text.count("o"))\nprint("空格的个数:", text.count(" "))',
        output: 'l 的个数: 3\no 的个数: 2\n空格的个数: 1',
        explanation: 'count() 方法返回指定字符在字符串中出现的次数。'
      },
      practice: [
        {
          question: '"hello".count("l") 的结果是什么？',
          answer: '2'
        },
        {
          question: '"aaa".count("a") 的结果是什么？',
          answer: '3'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '统计大师！count() 不仅能统计单个字符，还能统计子串（多个字符）在字符串中出现的次数。',
      concept: 'count() 可以统计子串，但注意：子串不能重叠计数。',
      syntax: '# 统计子串\n字符串.count("子串")\n\n# 列表也可以用 count()\n列表.count(元素)',
      example: {
        title: '统计子串',
        code: '# 统计子串\ntext = "banana banana"\n\nprint("banana 的个数:", text.count("banana"))\nprint("na 的个数:", text.count("na"))\n\n# 列表也可以用 count\nnumbers = [1, 2, 2, 3, 2]\nprint("2 的个数:", numbers.count(2))',
        output: 'banana 的个数: 2\nna 的个数: 2\n2 的个数: 3',
        explanation: 'count("banana") 统计"banana"出现2次。count("na") 是2不是3，因为不能重叠计数。'
      },
      practice: [
        {
          question: '"abcabc".count("abc") 的结果是什么？',
          answer: '2'
        },
        {
          question: '[1,1,2].count(1) 的结果是什么？',
          answer: '2'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '计数专家！结合列表生成式和 count()，可以统计字符串中所有字符的出现频率，实现简单的文本分析。',
      concept: '用字典或列表生成式结合 count()，可以统计多个字符的出现次数。',
      syntax: '# 统计所有字符\nfor char in set(字符串):\n    count = 字符串.count(char)',
      example: {
        title: '字符频率统计',
        code: '# 统计每个字符出现的次数\ntext = "hello"\n\n# 用字典统计\nfreq = {}\nfor char in text:\n    freq[char] = text.count(char)\n\nprint(freq)\n\n# 找出出现最多的字符\nmost = max(freq, key=freq.get)\nprint(f"最多的是: {most}, 出现 {freq[most]} 次")',
        output: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}\n最多的是: l, 出现 2 次",
        explanation: '遍历字符串中的每个字符，用 count() 统计次数，存入字典，最后找出出现最多的字符。'
      },
      practice: [
        {
          question: '如何统计字符串中所有字符的频率？',
          answer: '遍历字符，用 count() 统计每个字符'
        },
        {
          question: 'max(dict, key=dict.get) 得到什么？',
          answer: '字典中值最大的键'
        }
      ]
    }
  },

  {
    id: 'kp-5',
    title: '综合应用 - 文本处理',
    emoji: '📝',
    gradeLevel: '3-4',
    summary: '综合运用列表生成式、排序、字符串操作',

    // 🟢 基础版（1-2年级）
    easy: {
      story: '让我们把学到的知识组合起来！处理文本就像做饭：清洗（切片）、切菜（分割）、烹饪（转换）、摆盘（拼接）。',
      concept: '综合运用：字符串分割、列表生成式转换、排序、字符串拼接等操作。',
      syntax: '# 文本处理流程\n# 1. 分割\n列表 = 字符串.split()\n\n# 2. 转换\n新列表 = [操作 for x in 列表]\n\n# 3. 排序\nsorted(新列表)',
      example: {
        title: '处理成绩文本',
        code: '# 成绩文本\nscores_text = "85 92 78 95 88"\n\n# 分割成列表\nscores_list = scores_text.split()\nprint("分割后:", scores_list)\n\n# 转换成整数\nscores_int = [int(s) for s in scores_list]\nprint("转整数:", scores_int)\n\n# 排序\nsorted_scores = sorted(scores_int, reverse=True)\nprint("排序后:", sorted_scores)',
        output: "分割后: ['85', '92', '78', '95', '88']\n转整数: [85, 92, 78, 95, 88]\n排序后: [95, 92, 88, 85, 78]",
        explanation: '展示了完整的文本处理流程：分割→转换→排序。'
      },
      practice: [
        {
          question: 'split() 不写参数按什么分割？',
          answer: '按空白字符（空格、换行等）'
        },
        {
          question: '[int(x) for x in ["1", "2"]] 的结果是什么？',
          answer: '[1, 2]'
        }
      ]
    },

    // 🟡 进阶版（3-4年级）
    medium: {
      story: '进阶文本处理！你可以处理复杂格式：CSV、句子分析、单词统计等。结合字符串的各种操作，实现强大的文本处理功能。',
      concept: '综合运用多种字符串和列表操作，处理实际应用中的文本数据。',
      syntax: '# 复杂文本处理\ndata = "name:Tom,age:12,score:95"\n\n# 按逗号分割\nparts = data.split(",")\n\n# 处理每部分\nresult = [p.split(":") for p in parts]',
      example: {
        title: '解析格式化文本',
        code: '# 解析学生数据\ndata = "Tom:95,Jerry:88,Alice:92"\n\n# 分割记录\nrecords = data.split(",")\nprint("记录:", records)\n\n# 提取分数\nscores = []\nfor record in records:\n    name_score = record.split(":")\n    scores.append(int(name_score[1]))\n\nprint("分数:", scores)\nprint("最高分:", max(scores))',
        output: "记录: ['Tom:95', 'Jerry:88', 'Alice:92']\n分数: [95, 88, 92]\n最高分: 95",
        explanation: '展示了如何解析复杂的格式化文本，提取有用的数据。'
      },
      practice: [
        {
          question: '"a:b:c".split(":") 的结果是什么？',
          answer: '["a", "b", "c"]'
        },
        {
          question: '如何提取 "Tom:95" 中的数字？',
          answer: '用 split(":") 分割后取索引1'
        }
      ]
    },

    // 🔴 挑战版（5-6年级）
    hard: {
      story: '文本处理大师！你可以用一行代码完成复杂的数据转换，或者用链式操作处理多步骤任务。',
      concept: '链式调用和函数式编程技巧，让代码更简洁高效。',
      syntax: '# 链式操作\nresult = sorted(\n    [int(x) for x in text.split()],\n    reverse=True\n)',
      example: {
        title: '高效的文本处理',
        code: '# 一行完成复杂的文本处理\ntext = "5 3 8 1 9 2"\n\n# 链式操作：分割→转换→排序\nresult = sorted([int(x) for x in text.split()], reverse=True)\nprint("结果:", result)\n\n# 提取前3名\ntop3 = result[:3]\nprint("前3名:", top3)\n\n# 计算总和\nprint("总和:", sum(result))',
        output: '结果: [9, 8, 5, 3, 2, 1]\n前3名: [9, 8, 5]\n总和: 28',
        explanation: '用链式操作在一行内完成多个处理步骤，代码简洁高效。'
      },
      practice: [
        {
          question: '如何在一行内完成分割、转换、排序？',
          answer: 'sorted([int(x) for x in text.split()])'
        },
        {
          question: 'result[:3] 取的是什么？',
          answer: '前3个元素'
        }
      ]
    }
  }
]

// 习题数据（编程 × 数学融合）
export const exercises = [
  // 🟢 基础题（1-2年级）
  {
    id: 'ex-1',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '模式识别',
    question: '下面哪个列表生成式能把每个数字乘以2？\n\n```python\nA. [n * 2 for n in [1, 2, 3]]\nB. [n + 2 for n in [1, 2, 3]]\nC. [2 for n in [1, 2, 3]]\nD. n * 2 for n in [1, 2, 3]\n```',
    options: [
      'A',
      'B',
      'C',
      'D'
    ],
    answer: 0, // A
    explanation: '列表生成式格式：[操作 for 元素 in 列表]\n\n正确答案：A. [n * 2 for n in [1, 2, 3]]\n\n结果：[2, 4, 6]\n\n- A: [n * 2 for ...] 每个元素乘2 ✓\n- B: [n + 2 for ...] 每个元素加2\n- C: [2 for ...] 结果是 [2, 2, 2]\n- D: 缺少方括号，语法错误',
    hint: '乘法用什么符号？'
  },
  {
    id: 'ex-2',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '大小比较',
    question: '想让列表从大到小排序，应该用什么？\n\n```python\nnumbers = [1, 2, 3, 4, 5]\n```',
    options: [
      'sorted(numbers)',
      'sorted(numbers, reverse=True)',
      'sorted(numbers, reverse=False)',
      'numbers.sort()'
    ],
    answer: 1, // B
    explanation: 'sorted() 的 reverse=True 参数可以让列表从大到小排序。\n\n正确答案：B. sorted(numbers, reverse=True)\n\n结果：[5, 4, 3, 2, 1]\n\n- A: [1, 2, 3, 4, 5]（从小到大）\n- B: [5, 4, 3, 2, 1] ✓\n- C: [1, 2, 3, 4, 5]（从小到大）\n- D: [1, 2, 3, 4, 5]（从小到大，且修改原列表）',
    hint: 'reverse 是"反转"的意思'
  },

  // 🟡 进阶题（3-4年级）
  {
    id: 'ex-3',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '拼接与计数',
    question: '执行下面的代码，会输出什么？\n\n```python\ns = "hello"\nprint(s.count("l"))\n```',
    options: [
      '1',
      '2',
      '3',
      '报错'
    ],
    answer: 1, // B
    explanation: 'count() 方法统计字符在字符串中出现的次数。\n\n"hello" 中有 2 个 "l"（第3和第4个字符）\n\n正确答案：B. 2\n\n数学知识：这是"计数"问题，统计某个元素在集合中出现的次数。',
    hint: '数一数 "hello" 里有几个 "l"'
  },
  {
    id: 'ex-4',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '切片理解',
    question: '字符串切片 "Hello World"[0:5] 的结果是什么？',
    options: [
      '"Hello"',
      '"Hello "',
      '"World"',
      '"ello W"'
    ],
    answer: 0, // A
    explanation: '切片 [起始:结束] 包含起始索引，不包含结束索引。\n\n"Hello World"[0:5]\n- 索引0: H\n- 索引1: e\n- 索引2: l\n- 索引3: l\n- 索引4: o\n- 索引5: （不包含）\n\n结果："Hello"',
    hint: '切片包含起始位置，不包含结束位置'
  },

  // 🔴 挑战题（5-6年级）
  {
    id: 'ex-5',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '链式操作',
    question: '下面代码的输出是什么？\n\n```python\ntext = "5 3 8 1"\nresult = sorted([int(x) for x in text.split()], reverse=True)\nprint(result)\n```',
    options: [
      '[1, 3, 5, 8]',
      '[8, 5, 3, 1]',
      '["5", "3", "8", "1"]',
      '[5, 3, 8, 1]'
    ],
    answer: 1, // B
    explanation: '这是一道链式操作题！让我们分解：\n\n1. text.split() → ["5", "3", "8", "1"]（分割）\n2. [int(x) for x in ...] → [5, 3, 8, 1]（转整数）\n3. sorted(..., reverse=True) → [8, 5, 3, 1]（降序排序）\n\n正确答案：B. [8, 5, 3, 1]\n\n这展示了列表生成式和排序的综合应用。',
    hint: '分步骤思考：先分割，再转整数，最后排序'
  },
  {
    id: 'ex-6',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '条件过滤',
    question: '想要筛选出列表中的偶数，应该用什么？\n\n```python\nnumbers = [1, 2, 3, 4, 5, 6]\n```\n\n空白处应该填什么？\n\n```python\nevens = [n for n in numbers if _____]\n```',
    options: [
      'n > 2',
      'n % 2 == 0',
      'n == 2',
      'n / 2 == 1'
    ],
    answer: 1, // B
    explanation: '这是一个带条件的列表生成式！\n\nif n % 2 == 0 表示"如果 n 除以2的余数是0"，即 n 是偶数。\n\n正确答案：B. n % 2 == 0\n\n完整代码：\n```python\nevens = [n for n in numbers if n % 2 == 0]\n# 结果：[2, 4, 6]\n```\n\n数学知识：% 是取余运算，n % 2 == 0 是判断偶数的标准方法。',
    hint: '偶数有什么特征？'
  }
]

// 课次元数据
export const lessonMeta = {
  id: 'L8-4',
  title: '鸿门宴',
  subtitle: '复习列表生成式、排序、字符串操作',
  difficulty: '进阶',
  estimatedTime: '35-45分钟',
  learningGoals: [
    '掌握列表生成式（列表推导式）的用法',
    '学会 sorted() 的降序排序',
    '掌握字符串拼接和切片操作',
    '学会 count() 统计字符次数',
    '能综合运用多种方法处理文本数据'
  ],
  prerequisites: [
    'Python 基础语法',
    '列表基础操作',
    'for 循环',
    '字符串基础'
  ]
}

// 打字练习单词（按难度分组）
export const typingWords = {
  easy: ['count', 'slice', 'join', 'split'],
  medium: ['reverse', 'sorted', 'comprehension', 'concatenate'],
  hard: ['list_comprehension', 'string_slice', 'character_count', 'descending_order']
}

// 代码模板练习（按难度分组）
// 缩进使用4个空格（Python PEP 8标准）
export const typingTemplates = {
  easy: [
    // 简单单行代码 - 列表生成式
    '[n * 2 for n in list]',
    'sorted(numbers)',
    'text.split(",")',
    '"-".join(words)',
    'list.count("a")',
    'list[0:3]'
  ],
  medium: [
    // 包含缩进的多行代码
    'result = [int(x) for x in list]',
    'sorted(numbers, reverse=True)',
    'parts = text.split(":")',
    'scores = [int(x) for x in strings]',
    'for item in list:\n    print(item)',
    '[n for n in range(10) if n % 2 == 0]'
  ],
  hard: [
    // 复杂的多行代码
    'sorted([int(x) for x in text.split()])',
    'result = [x for x in list if x > 0]',
    'for i, item in enumerate(list):\n    print(i, item)',
    '[n * 2 for n in range(1, 6) if n % 2 == 0]',
    'for word in sorted(words, reverse=True):'
  ]
}

// 导出所有数据
export const L8_4_data = {
  meta: lessonMeta,
  vocab: vocabData,
  knowledgePoints,
  exercises,
  typingWords,
  typingTemplates
}

export default L8_4_data
