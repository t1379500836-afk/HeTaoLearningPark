/**
 * PY2 课程 L12-3: 修复大师
 *
 * 核心知识点:
 * 1. 键盘事件 (on_key_down)
 * 2. 按键名称 (keys.UP, keys.DOWN, keys.LEFT, keys.RIGHT, keys.SPACE)
 * 3. 键盘控制角色移动
 */

// 单词卡数据
export const vocabData = [
  {
    word: 'key',
    pronunciation: '[ki:]',
    partOfSpeech: 'n.',
    meaning: '钥匙；关键；按键',
    level: 'easy',
    example: 'Press any key to start.',
    exampleTranslation: '按任意键开始。'
  },
  {
    word: 'space',
    pronunciation: '[speis]',
    partOfSpeech: 'n.',
    meaning: '空间；太空；空格键',
    level: 'easy',
    example: 'Press the space bar to jump.',
    exampleTranslation: '按空格键跳跃。'
  },
  {
    word: 'keyboard',
    pronunciation: "['ki:bɔ:d]",
    partOfSpeech: 'n.',
    meaning: '键盘',
    level: 'medium',
    example: 'The keyboard has many keys.',
    exampleTranslation: '键盘有很多按键。'
  },
  {
    word: 'control',
    pronunciation: "[kən'trəul]",
    partOfSpeech: 'v.',
    meaning: '控制；操纵',
    level: 'medium',
    example: 'Use the keyboard to control the character.',
    exampleTranslation: '用键盘控制角色。'
  }
]

// 知识点数据
export const knowledgePoints = [
  {
    id: 'kp-1',
    title: '按键密码 - 按键名称',
    emoji: '⌨️',
    gradeLevel: '1-2',
    summary: '每个按键都有自己的名称，用 keys. 加上按键名表示',

    // 基础版（1-2年级）
    easy: {
      story: '键盘上的每个按键都有一个名字！就像每个人都有名字一样，我们需要知道按键的名字才能和它们做朋友。',
      concept: 'Pygame Zero 中，每个按键都有固定的名称。点左边是 keys（小写），点右边是按键名（大写）。',
      syntax: 'keys.方向',
      example: {
        title: '常用按键名称',
        code: '# 方向键\nkeys.UP      # 上键\nkeys.DOWN    # 下键\nkeys.LEFT    # 左键\nkeys.RIGHT   # 右键\n\n# 空格键\nkeys.SPACE   # 空格',
        output: '按键名称列表',
        explanation: 'keys 是小写，按键名是大写，中间用点连接。'
      },
      practice: [
        { question: '上键的名称是什么？', answer: 'keys.UP' },
        { question: 'keys.LEFT 是哪个键？', answer: '左键' }
      ]
    },

    // 进阶版（3-4年级）
    medium: {
      story: '现在你知道了按键的名字！可以用这些名字来检测玩家按下了哪个键。',
      concept: '按键名称是预定义的常量，必须完全按照规定的格式写。keys 小写，名称大写。',
      syntax: 'if key == keys.UP:\n    # 上键被按下\nif key == keys.SPACE:\n    # 空格被按下',
      example: {
        title: '检测不同按键',
        code: 'def on_key_down(key):\n    if key == keys.UP:\n        print("按了上键")\n    elif key == keys.SPACE:\n        print("按了空格")\n    else:\n        print("按了其他键")',
        output: '根据不同按键显示不同信息',
        explanation: 'on_key_down(key) 函数的参数 key 会接收按下的按键名称，可以用 if 判断是哪个键。'
      },
      practice: [
        { question: 'keys.up 可以吗？', answer: '不行，必须是 keys.UP（大写）' },
        { question: '如何在代码中知道按了哪个键？', answer: '用 if key == keys.按键名 来判断' }
      ]
    },

    // 挑战版（5-6年级）
    hard: {
      story: '按键大师模式！除了方向键和空格，还有很多按键：字母键、数字键、功能键等等。',
      concept: 'Pygame Zero 支持所有常见按键。字母键用 keys.A、keys.B 等，数字键用 keys.K_0、keys.K_1 等，功能键用 keys.ENTER、keys.ESCAPE 等。',
      syntax: '# 字母键\nkeys.A, keys.B, keys.Z\n\n# 数字键\nkeys.K_0, keys.K_1, keys.K_9\n\n# 功能键\nkeys.ENTER, keys.ESCAPE, keys.BACKSPACE',
      example: {
        title: '多种按键检测',
        code: 'def on_key_down(key):\n    # 方向键移动\n    if key == keys.LEFT:\n        player.x -= 5\n    elif key == keys.RIGHT:\n        player.x += 5\n    # 空格键跳跃\n    elif key == keys.SPACE:\n        player.jump()\n    # ESC 退出\n    elif key == keys.ESCAPE:\n        exit()',
        output: '实现完整的键盘控制',
        explanation: '组合多种按键实现复杂的控制逻辑：方向键移动、空格跳跃、ESC退出。'
      },
      practice: [
        { question: '字母键 A 的名称是什么？', answer: 'keys.A' },
        { question: '数字键 1 的名称是什么？', answer: 'keys.K_1' }
      ]
    }
  },

  {
    id: 'kp-2',
    title: '键盘事件 - on_key_down',
    emoji: '🎹',
    gradeLevel: '1-2',
    summary: 'on_key_down() 在键盘按键被按下时执行',

    // 基础版（1-2年级）
    easy: {
      story: '当你按下键盘上的任意一个键，on_key_down() 函数就会自动执行！就像有一个小助手在帮你监听键盘。',
      concept: 'on_key_down() 是键盘事件函数，键盘上任意按键被按下时执行。',
      syntax: 'def on_key_down():\n    # 按任意键执行的代码',
      example: {
        title: '检测按键',
        code: 'def on_key_down():\n    print("有键被按下了！")',
        output: '按任意键显示信息',
        explanation: '无论按哪个键，都会执行 on_key_down() 中的代码。'
      },
      practice: [
        { question: 'on_key_down() 什么时候执行？', answer: '按键被按下时' },
        { question: '需要手动调用 on_key_down() 吗？', answer: '不需要，自动触发' }
      ]
    },

    // 进阶版（3-4年级）
    medium: {
      story: '你可以知道具体按了哪个键！给 on_key_down() 添加参数 key，它会把按键名称告诉你。',
      concept: 'on_key_down(key) 函数的参数 key 会接收按下的按键名称，可以用它判断具体是哪个键。',
      syntax: 'def on_key_down(key):\n    if key == keys.UP:\n        # 上键被按下\n    elif key == keys.DOWN:\n        # 下键被按下',
      example: {
        title: '识别具体按键',
        code: 'def on_key_down(key):\n    if key == keys.UP:\n        print("向上")\n    elif key == keys.DOWN:\n        print("向下")\n    elif key == keys.SPACE:\n        print("空格")',
        output: '按不同键显示不同信息',
        explanation: '参数 key 接收按键名称，用 if 判断具体是哪个键被按下。'
      },
      practice: [
        { question: '怎么知道按了哪个键？', answer: '在函数中添加参数 key' },
        { question: 'key == keys.UP 是什么意思？', answer: '判断按的是不是上键' }
      ]
    },

    // 挑战版（5-6年级）
    hard: {
      story: '键盘大师模式！你可以实现同时按键、长按检测、按键组合等高级功能。',
      concept: '高级键盘功能包括检测修饰键（Ctrl、Alt、Shift）、实现按键组合、处理长按连续触发等。',
      syntax: '# 修饰键检测\nif key == keys.K_1 and keyboard.modifiers & {keys.KMOD_LCTRL}:\n    # Ctrl+1 被按下\n\n# 长按处理（在 update 中）\nif keyboard[keys.LEFT]:\n    player.x -= 5',
      example: {
        title: '平滑移动控制',
        code: 'def on_key_down(key):\n    if key == keys.SPACE:\n        player.jump()\n\ndef update():\n    # 持续检测方向键实现平滑移动\n    if keyboard[keys.LEFT]:\n        player.x -= 5\n    if keyboard[keys.RIGHT]:\n        player.x += 5',
        output: '空格跳跃，方向键平滑移动',
        explanation: 'on_key_down 处理单次触发（跳跃），update 中用 keyboard[] 实现持续检测（移动）。'
      },
      practice: [
        { question: 'on_key_down 和 keyboard[] 有什么区别？', answer: 'on_key_down 按一次触发一次，keyboard[] 持续检测' },
        { question: '如何实现平滑移动？', answer: '在 update() 函数中用 keyboard[] 检测' }
      ]
    }
  },

  {
    id: 'kp-3',
    title: '自由移动 - 键盘控制角色',
    emoji: '🎮',
    gradeLevel: '1-2',
    summary: '用方向键控制角色上下左右移动',

    // 基础版（1-2年级）
    easy: {
      story: '想象你正在玩一个游戏，用键盘控制角色四处移动！按下不同的键，角色就往不同的方向走。',
      concept: '增大或减小角色的 x 坐标可以左右移动，增大或减小 y 坐标可以上下移动。',
      syntax: '# 向右：x 增加\n角色.x += 数字\n\n# 向左：x 减少\n角色.x -= 数字\n\n# 向下：y 增加\n角色.y += 数字\n\n# 向上：y 减少\n角色.y -= 数字',
      example: {
        title: '控制角色移动',
        code: 'def on_key_down(key):\n    if key == keys.LEFT:\n        player.x -= 5\n    elif key == keys.RIGHT:\n        player.x += 5\n    elif key == keys.UP:\n        player.y -= 5\n    elif key == keys.DOWN:\n        player.y += 5',
        output: '方向键控制角色移动',
        explanation: '左键 x 减小，右键 x 增大，上键 y 减小，下键 y 增大。'
      },
      practice: [
        { question: '让角色向右走应该改哪个坐标？', answer: 'x 坐标，x += 数字' },
        { question: '向上移动是 y 增大还是减小？', answer: '减小（y -= 数字）' }
      ]
    },

    // 进阶版（3-4年级）
    medium: {
      story: '现在你可以创建完整的游戏控制了！方向键移动，空格键跳跃，ESC 键退出等等。',
      concept: '在 on_key_down() 中检测不同按键，修改角色坐标实现移动。每次按键移动一次，按住不放需要连续按键。',
      syntax: 'def on_key_down(key):\n    if key == keys.UP:\n        角色.y -= 速度\n    elif key == keys.DOWN:\n        角色.y += 速度\n    elif key == keys.LEFT:\n        角色.x -= 速度\n    elif key == keys.RIGHT:\n        角色.x += 速度',
      example: {
        title: '四向移动控制',
        code: 'player = Actor("玩家")\nplayer.x = 400\nplayer.y = 300\n\nspeed = 10\n\ndef on_key_down(key):\n    if key == keys.UP:\n        player.y -= speed\n    elif key == keys.DOWN:\n        player.y += speed\n    elif key == keys.LEFT:\n        player.x -= speed\n    elif key == keys.RIGHT:\n        player.x += speed',
        output: '上下左右移动角色',
        explanation: '用 speed 变量控制移动速度，让代码更容易调整。'
      },
      practice: [
        { question: '按一次键移动几次？', answer: '一次（on_key_down 每按一次触发一次）' },
        { question: '如何调整移动速度？', answer: '修改每次坐标变化的数值' }
      ]
    },

    // 挑战版（5-6年级）
    hard: {
      story: '移动大师模式！你可以实现斜向移动、加速奔跑、边界检测等高级移动功能。',
      concept: '高级移动包括：斜向移动（同时按两个方向键）、加速（按住键连续移动）、边界检测（防止移出屏幕）等。',
      syntax: '# 斜向移动需要同时处理两个方向\n# 边界检测\nif player.x < 0:\n    player.x = 0\nif player.x > WIDTH:\n    player.x = WIDTH',
      example: {
        title: '带边界检测的移动',
        code: 'WIDTH = 800\nHEIGHT = 600\n\nplayer = Actor("玩家")\nspeed = 5\n\ndef on_key_down(key):\n    if key == keys.LEFT:\n        player.x -= speed\n    elif key == keys.RIGHT:\n        player.x += speed\n    elif key == keys.UP:\n        player.y -= speed\n    elif key == keys.DOWN:\n        player.y += speed\n    \n    # 边界检测\n    if player.x < 0:\n        player.x = 0\n    if player.x > WIDTH:\n        player.x = WIDTH\n    if player.y < 0:\n        player.y = 0\n    if player.y > HEIGHT:\n        player.y = HEIGHT',
        output: '角色不会移出窗口',
        explanation: '每次移动后检测坐标是否超出边界，如果超出就设置到边界位置。'
      },
      practice: [
        { question: '为什么需要边界检测？', answer: '防止角色移出屏幕消失' },
        { question: '如果 player.x < 0 应该怎么处理？', answer: '设为 0：player.x = 0' }
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
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '大小写规则',
    question: '下列哪个选项可以正确表示键盘右键？',
    options: [
      'keys.LEFT',
      'keys.RIGHT',
      'keys.right',
      'keys.Right'
    ],
    answer: 1, // B
    explanation: '按键名称的格式是 keys.名称，keys 是小写，名称是大写。所以右键是 keys.RIGHT。\n\n选项 A 是左键，选项 C、D 的大小写不正确。',
    hint: 'keys 小写，按键名大写'
  },
  {
    id: 'ex-2',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '方向概念',
    question: '要让角色向上移动，应该修改哪个坐标？',
    options: [
      'x 坐标增加',
      'x 坐标减小',
      'y 坐标增加',
      'y 坐标减小'
    ],
    answer: 3, // D
    explanation: '在屏幕坐标系中，y 轴向下为正。所以向上移动是 y 坐标减小（y -= 数值）。\n\n数学知识：这和我们数学课上的直角坐标系不同，计算机的 y 轴是向下的。',
    hint: '向上是 y 增大还是减小？'
  },

  // 进阶题（3-4年级）
  {
    id: 'ex-3',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '函数参数',
    question: '下列哪个选项可以在按下上键时让程序打印出"上"？',
    options: [
      'def on_key_down():\n    print("上")',
      'def on_key_down(key):\n    if key == keys.UP:\n        print("上")',
      'def on_key_down(keys.UP):\n    print("上")',
      'if keys.UP:\n    print("上")'
    ],
    answer: 1, // B
    explanation: '正确答案是 B。on_key_down(key) 函数接收按键参数，然后用 if 判断是否是上键。\n\n选项 A 没有参数，任何键都会打印"上"。\n选项 C 参数写法错误。\n选项 D 缺少函数定义。',
    hint: '需要参数 key 来获取按了哪个键'
  },
  {
    id: 'ex-4',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '坐标变化',
    question: '角色初始坐标是 (100, 100)。先按 2 次下键，再按 1 次右键（每次移动 10 个单位）。角色的新坐标是？',
    options: [
      '(110, 120)',
      '(120, 110)',
      '(110, 110)',
      '(120, 120)'
    ],
    answer: 0, // A
    explanation: '初始坐标：(100, 100)\n\n按 2 次下键：y 坐标增加 2×10=20，y = 100+20 = 120\n按 1 次右键：x 坐标增加 10，x = 100+10 = 110\n\n最终坐标：(110, 120)\n\n数学知识：这是坐标的连续变化，每次按键都是一次坐标平移。',
    hint: '下键改变 y，右键改变 x'
  },

  // 挑战题（5-6年级）
  {
    id: 'ex-5',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '奇偶性分析',
    question: '一个开关程序，开始时灯是熄灭的。每次按下空格键，灯的状态切换（亮→熄灭或熄灭→亮）。按下 5 次空格后，灯是什么状态？',
    options: [
      '亮',
      '熄灭',
      '不确定',
      '程序会报错'
    ],
    answer: 0, // A
    explanation: '这是奇偶性分析问题！\n\n初始状态：熄灭\n第 1 次：亮\n第 2 次：熄灭\n第 3 次：亮\n第 4 次：熄灭\n第 5 次：亮\n\n规律：奇数次是亮，偶数次是熄灭。\n\n在 Pygame 中可以用切换造型的代码实现：\n```python\ndef on_key_down(key):\n    if key == keys.SPACE:\n        if light.image == "灯亮":\n            light.image = "灯熄灭"\n        else:\n            light.image = "灯亮"\n```\n\n数学知识：这是一个周期为 2 的周期问题，奇数次和偶数次状态不同。',
    hint: '按 1 次亮，按 2 次熄灭...'
  },
  {
    id: 'ex-6',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '逻辑推理',
    question: '猴赛雷初始坐标 (1, 2)。按键规则：上键 y-1，下键 y+1，左键 x-1，右键 x+1。如果依次按下 下、下、右，猴赛雷的最终坐标是？',
    options: [
      '(0, 2)',
      '(0, 4)',
      '(2, 0)',
      '(2, 4)'
    ],
    answer: 3, // D
    explanation: '初始坐标：(1, 2)\n\n第 1 次（下键）：x=1, y=2+1=3 → (1, 3)\n第 2 次（下键）：x=1, y=3+1=4 → (1, 4)\n第 3 次（右键）：x=1+1=2, y=4 → (2, 4)\n\n最终坐标：(2, 4)\n\n数学知识：这是坐标的连续变化，每次按键都根据当前坐标进行加减。',
    hint: '一步步计算每次按键后的坐标'
  }
]

// 课次元数据
export const lessonMeta = {
  id: 'L12-3',
  title: '修复大师',
  subtitle: '学会键盘控制角色移动',
  difficulty: '进阶',
  estimatedTime: '30-45分钟',
  learningGoals: [
    '掌握按键名称的表示方法',
    '理解键盘事件处理',
    '学会用方向键控制角色',
    '了解坐标变化的数学原理'
  ],
  prerequisites: [
    'L12-1 Pygame Zero 入门',
    '坐标系统基础',
    '条件判断语句'
  ]
}

// 打字练习单词（按难度分组）
export const typingWords = {
  easy: ['key', 'space', 'up', 'down'],
  medium: ['keyboard', 'left', 'right', 'control'],
  hard: ['modifier', 'boundary', 'coordinate', 'continuous']
}

// 代码模板练习（按难度分组）
export const typingTemplates = {
  easy: [
    'keys.UP',
    'keys.DOWN',
    'keys.LEFT',
    'keys.RIGHT',
    'keys.SPACE',
    'def on_key_down():'
  ],
  medium: [
    'def on_key_down(key):',
    'if key == keys.UP:\n    pass',
    'player.x += 5',
    'player.y -= 5',
    'if key == keys.SPACE:\n    player.jump()'
  ],
  hard: [
    'def on_key_down(key):\n    if key == keys.LEFT:\n        player.x -= speed\n    elif key == keys.RIGHT:\n        player.x += speed',
    'if player.x < 0:\n    player.x = 0\nif player.x > WIDTH:\n    player.x = WIDTH',
    'if keyboard[keys.LEFT]:\n    player.x -= 5'
  ]
}

// 导出所有数据
export const L12_3_data = {
  meta: lessonMeta,
  vocab: vocabData,
  knowledgePoints,
  exercises,
  typingWords,
  typingTemplates
}

export default L12_3_data
