/**
 * PY2 课程 L12-4: 重返地球
 *
 * 核心知识点:
 * 1. 综合应用：添加角色、设置初始位置
 * 2. 键盘操作控制角色移动
 * 3. 鼠标操作切换造型
 * 4. 音乐播放控制
 * 5. 综合游戏开发流程
 */

// 单词卡数据
export const vocabData = [
  {
    word: 'play',
    pronunciation: '[plei]',
    partOfSpeech: 'v.',
    meaning: '玩；播放；扮演',
    level: 'easy',
    example: 'Press play to start the music.',
    exampleTranslation: '按播放键开始音乐。'
  },
  {
    word: 'stop',
    pronunciation: '[stɔp]',
    partOfSpeech: 'v.',
    meaning: '停止；阻止',
    level: 'easy',
    example: 'Click stop to end the music.',
    exampleTranslation: '点击停止结束音乐。'
  },
  {
    word: 'debug',
    pronunciation: "[di:'bʌg]",
    partOfSpeech: 'v.',
    meaning: '调试（程序）；排除错误',
    level: 'hard',
    example: 'I need to debug my code.',
    exampleTranslation: '我需要调试我的代码。'
  },
  {
    word: 'button',
    pronunciation: "['bʌtn]",
    partOfSpeech: 'n.',
    meaning: '纽扣；按钮，开关',
    level: 'medium',
    example: 'Click the button to start.',
    exampleTranslation: '点击按钮开始。'
  }
]

// 知识点数据
export const knowledgePoints = [
  {
    id: 'kp-1',
    title: '游戏搭建 - 添加角色和设置位置',
    emoji: '🏗️',
    gradeLevel: '1-2',
    summary: '综合应用：创建角色、设置初始位置、绘制角色',

    // 基础版（1-2年级）
    easy: {
      story: '现在我们要建造一个完整的游戏世界！添加角色、设置位置、绘制角色，一个都不能少！',
      concept: '创建游戏需要三个步骤：创建角色（Actor）、设置初始位置（x 和 y）、在 draw() 函数中绘制角色。',
      syntax: '# 1. 创建角色\n角色 = Actor("图片名")\n\n# 2. 设置位置\n角色.x = x坐标\n角色.y = y坐标\n\n# 3. 绘制角色\ndef draw():\n    角色.draw()',
      example: {
        title: '创建角色并设置位置',
        code: 'import pgzrun\n\nWIDTH = 800\nHEIGHT = 600\n\n# 创建角色\nhsl = Actor("箱子")\n\n# 设置初始位置\nhsl.x = 500\nhsl.y = 0\n\ndef draw():\n    screen.clear()\n    screen.blit("仓库", [0, 0])\n    hsl.draw()\n\npgzrun.go()',
        output: '在(500, 0)位置显示箱子角色',
        explanation: '创建角色后如果不设置位置，默认出现在左上角(0, 0)。'
      },
      practice: [
        { question: '角色默认出现在哪里？', answer: '窗口左上角 (0, 0)' },
        { question: '角色.draw() 要在哪个函数里调用？', answer: 'draw() 函数' }
      ]
    },

    // 进阶版（3-4年级）
    medium: {
      story: '游戏搭建是基础！角色、背景、UI 都需要正确添加和绘制。',
      concept: 'screen.clear() 清空窗口，screen.blit() 绘制背景图片。绘制顺序很重要：先背景，再角色，最后 UI。',
      syntax: 'def draw():\n    screen.clear()           # 清空\n    screen.blit("背景", [0, 0])  # 背景图\n    角色.draw()              # 角色\n    # 更多绘制',
      example: {
        title: '完整的绘制函数',
        code: 'import pgzrun\n\nWIDTH = 800\nHEIGHT = 600\n\nplayer = Actor("玩家")\nplayer.x = 400\nplayer.y = 300\n\ndef draw():\n    screen.clear()\n    # 绘制背景\n    screen.blit("森林", [0, 0])\n    # 绘制角色\n    player.draw()\n    # 绘制UI\n    screen.draw.text("HP: 100", (10, 10))',
        output: '绘制背景、角色和血量UI',
        explanation: 'screen.draw.text() 可以在窗口上绘制文字，用于显示游戏信息。'
      },
      practice: [
        { question: '绘制的顺序有什么影响？', answer: '后面的会覆盖前面的' },
        { question: 'screen.draw.text() 是做什么的？', answer: '在窗口上绘制文字' }
      ]
    },

    // 挑战版（5-6年级）
    hard: {
      story: '游戏架构师模式！你可以设计完整的游戏结构：多个角色、多层背景、复杂的 UI 系统。',
      concept: '大型游戏需要良好的组织结构：角色列表、状态管理、资源加载等。代码模块化是关键。',
      syntax: '# 角色管理\nactors = {\n    "player": Actor("玩家"),\n    "enemies": [Actor("敌人") for _ in range(3)]\n}\n\n# 状态管理\ngame_state = {\n    "score": 0,\n    "hp": 100\n}',
      example: {
        title: '游戏架构示例',
        code: 'import pgzrun\n\nWIDTH = 800\nHEIGHT = 600\n\n# 游戏角色\nplayer = Actor("玩家")\nplayer.x = 400\nplayer.y = 300\n\nenemies = []\nfor i in range(3):\n    enemy = Actor("敌人")\n    enemy.x = 100 + i * 200\n    enemy.y = 100\n    enemies.append(enemy)\n\ndef draw():\n    screen.clear()\n    screen.blit("背景", [0, 0])\n    \n    # 绘制所有敌人\n    for enemy in enemies:\n        enemy.draw()\n    \n    # 绘制玩家\n    player.draw()\n    \n    # 绘制UI\n    screen.draw.text(f"敌人: {len(enemies)}", (10, 10))',
        output: '完整的游戏场景',
        explanation: '用列表管理多个敌人，draw() 函数中遍历绘制。代码结构清晰，易于扩展。'
      },
      practice: [
        { question: '为什么要用列表管理敌人？', answer: '方便统一处理和遍历' },
        { question: 'f"敌人: {len(enemies)}" 是什么？', answer: 'f-string 格式化字符串，len(enemies)是敌人数' }
      ]
    }
  },

  {
    id: 'kp-2',
    title: '操控大师 - 键盘和鼠标综合应用',
    emoji: '🎮',
    gradeLevel: '1-2',
    summary: '同时使用键盘控制移动和鼠标控制交互',

    // 基础版（1-2年级）
    easy: {
      story: '你可以同时用键盘和鼠标控制游戏！键盘移动角色，鼠标点击按钮，让游戏更丰富！',
      concept: 'on_key_down() 处理键盘事件，on_mouse_down() 处理鼠标事件，两者可以同时使用。',
      syntax: 'def on_key_down(key):\n    # 键盘控制\n\ndef on_mouse_down():\n    # 鼠标控制',
      example: {
        title: '键盘和鼠标同时使用',
        code: 'def on_key_down(key):\n    if key == keys.LEFT:\n        player.x -= 5\n    elif key == keys.RIGHT:\n        player.x += 5\n\ndef on_mouse_down():\n    music.play_once("点击.mp3")',
        output: '键盘移动角色，鼠标播放声音',
        explanation: '键盘控制角色移动，鼠标点击播放音效，两者互不影响。'
      },
      practice: [
        { question: '键盘和鼠标能同时用吗？', answer: '可以，分别在不同函数中处理' },
        { question: 'on_key_down() 和 on_mouse_down() 会互相干扰吗？', answer: '不会，各自独立' }
      ]
    },

    // 进阶版（3-4年级）
    medium: {
      story: '综合应用时间！用键盘移动角色，用鼠标触发特殊效果，创造完整的游戏体验。',
      concept: '键盘适合持续控制（移动），鼠标适合离散操作（点击按钮、触发技能）。合理搭配可以设计出丰富的游戏玩法。',
      syntax: 'def on_key_down(key):\n    # 移动控制\n\ndef on_mouse_down():\n    # 技能释放\n    if colliderect(敌人):\n        # 攻击敌人',
      example: {
        title: '移动和攻击',
        code: 'def on_key_down(key):\n    if key == keys.LEFT:\n        player.x -= 10\n    elif key == keys.RIGHT:\n        player.x += 10\n\ndef on_mouse_down():\n    # 点击攻击\n    for enemy in enemies[:]:\n        if player.colliderect(enemy):\n            enemies.remove(enemy)\n            music.play_once("攻击.mp3")',
        output: '键盘移动，鼠标攻击敌人',
        explanation: '键盘控制角色左右移动，鼠标点击时攻击碰到的敌人。'
      },
      practice: [
        { question: '键盘和鼠标各适合什么操作？', answer: '键盘适合移动，鼠标适合点击' },
        { question: '为什么要用 enemies[:] 而不是 enemies？', answer: '遍历副本，避免修改原列表出错' }
      ]
    },

    // 挑战版（5-6年级）
    hard: {
      story: '游戏设计师模式！你可以设计复杂的控制方案：快捷键、鼠标拖拽、手势操作等。',
      concept: '高级输入处理包括：检测按键组合、处理鼠标拖拽、实现虚拟摇杆等。需要理解输入事件的生命周期。',
      syntax: '# 按键组合检测\nif key == keys.K_1 and keyboard.modifiers & {keys.KMOD_LCTRL}:\n    # Ctrl+1\n\n# 鼠标拖拽\ndragging = False\n\ndef on_mouse_down():\n    global dragging\n    if player.collidepoint(pos):\n        dragging = True\n\ndef on_mouse_up():\n    global dragging\n    dragging = False',
      example: {
        title: '拖拽角色',
        code: 'dragging = False\n\ndef on_mouse_down(pos):\n    global dragging\n    if player.collidepoint(pos):\n        dragging = True\n\ndef on_mouse_up():\n    global dragging\n    dragging = False\n\ndef update():\n    if dragging:\n        player.x = mouse.x\n        player.y = mouse.y',
        output: '可以用鼠标拖拽角色',
        explanation: '按下鼠标时检测是否点中角色，是则开始拖拽；update() 中持续更新角色位置跟随鼠标。'
      },
      practice: [
        { question: 'collidepoint() 是做什么的？', answer: '检测点是否在角色内' },
        { question: 'mouse.x 和 mouse.y 是什么？', answer: '鼠标当前的坐标' }
      ]
    }
  },

  {
    id: 'kp-3',
    title: '魔法开关 - 造型切换与状态管理',
    emoji: '🔮',
    gradeLevel: '3-4',
    summary: '用条件判断切换角色造型，管理游戏状态',

    // 基础版（1-2年级）
    easy: {
      story: '开关可以打开和关闭！用 if 判断当前状态，然后切换到另一个状态，就像开关灯一样。',
      concept: '用 if 判断当前状态，然后切换到相反的状态。通过修改 角色名.image 来切换造型。',
      syntax: 'if 角色名.image == "造型1":\n    角色名.image = "造型2"\nelse:\n    角色名.image = "造型1"',
      example: {
        title: '开关灯效果',
        code: 'light = Actor("灯熄灭")\n\ndef on_key_down(key):\n    if key == keys.SPACE:\n        if light.image == "灯亮":\n            light.image = "灯熄灭"\n        else:\n            light.image = "灯亮"',
        output: '按空格键切换开关灯',
        explanation: '每次按空格，检测当前状态，然后切换到相反的状态。'
      },
      practice: [
        { question: '如何切换角色造型？', answer: '角色名.image = "新造型"' },
        { question: 'if-else 是做什么的？', answer: '判断条件，条件成立执行 if，否则执行 else' }
      ]
    },

    // 进阶版（3-4年级）
    medium: {
      story: '状态管理是游戏的核心！开关、按钮、模式切换都需要状态管理。',
      concept: '状态管理就是记录游戏当前的状况。可以用变量存储状态，也可以通过造型等属性表示状态。',
      syntax: '# 用变量管理状态\nis_on = False\n\ndef on_key_down(key):\n    global is_on\n    if key == keys.SPACE:\n        is_on = not is_on\n        if is_on:\n            light.image = "灯亮"\n        else:\n            light.image = "灯熄灭"',
      example: {
        title: '用变量管理状态',
        code: '# 游戏状态\nis_paused = False\nis_muted = False\n\ndef on_key_down(key):\n    global is_paused, is_muted\n    if key == keys.P:\n        is_paused = not is_paused\n    elif key == keys.M:\n        is_muted = not is_muted',
        output: 'P 键暂停，M 键静音',
        explanation: '用布尔变量表示状态，每次按键切换状态（True 变 False，False 变 True）。'
      },
      practice: [
        { question: 'not True 是什么？', answer: 'False（相反的值）' },
        { question: '为什么要用 global 声明变量？', answer: '在函数中修改全局变量需要 global' }
      ]
    },

    // 挑战版（5-6年级）
    hard: {
      story: '状态管理大师模式！复杂游戏有多重状态：游戏状态、角色状态、UI 状态等。',
      concept: '状态机是管理复杂状态的有效方法。定义所有可能的状态和状态之间的转换条件，让状态变化清晰可控。',
      syntax: '# 状态机\nclass GameState:\n    MENU = "menu"\n    PLAYING = "playing"\n    PAUSED = "paused"\n    GAME_OVER = "game_over"\n\ncurrent_state = GameState.MENU',
      example: {
        title: '游戏状态机',
        code: '# 游戏状态\nSTATE_MENU = "menu"\nSTATE_PLAYING = "playing"\nSTATE_PAUSED = "paused"\nSTATE_GAMEOVER = "game_over"\n\ncurrent_state = STATE_MENU\nscore = 0\n\ndef on_key_down(key):\n    global current_state\n    \n    if current_state == STATE_MENU:\n        if key == keys.SPACE:\n            current_state = STATE_PLAYING\n    \n    elif current_state == STATE_PLAYING:\n        if key == keys.ESCAPE:\n            current_state = STATE_PAUSED\n    \n    elif current_state == STATE_PAUSED:\n        if key == keys.ESCAPE:\n            current_state = STATE_PLAYING',
        output: '完整的状态转换',
        explanation: '定义了游戏的各种状态和转换规则。在菜单按空格开始游戏，游戏中按 ESC 暂停。'
      },
      practice: [
        { question: '状态机的优点是什么？', answer: '状态变化清晰可控，易于管理复杂逻辑' },
        { question: '如何表示当前状态？', answer: '用变量存储当前状态值' }
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
    mathConcept: '函数识别',
    question: '下面哪个函数可以实现通过键盘按键来控制角色移动的功能？',
    options: [
      'on_mouse_up() 函数',
      'on_mouse_down() 函数',
      'draw() 函数',
      'on_key_down() 函数'
    ],
    answer: 3, // D
    explanation: 'on_key_down() 是键盘事件函数，在按键被按下时执行，适合用来控制角色移动。\n\non_mouse_up() 和 on_mouse_down() 是鼠标事件，draw() 是绘制函数。',
    hint: '键盘事件函数的名字里有什么？'
  },
  {
    id: 'ex-2',
    level: 'easy',
    levelLabel: '基础',
    levelEmoji: '🟢',
    type: 'multiple-choice',
    mathConcept: '状态概念',
    question: '一个开关开始是"关"的，按一次变成"开"，再按一次变成"关"。按 3 次后开关是什么状态？',
    options: [
      '关',
      '开',
      '不确定',
      '坏了'
    ],
    answer: 1, // B
    explanation: '这是一个周期为 2 的周期问题！\n\n第 1 次：关 → 开\n第 2 次：开 → 关\n第 3 次：关 → 开\n\n规律：奇数次是"开"，偶数次是"关"。\n\n在代码中可以用切换判断实现：\n```python\nif 状态 == "关":\n    状态 = "开"\nelse:\n    状态 = "关"\n```',
    hint: '按 1 次开，按 2 次关，按 3 次...？'
  },

  // 进阶题（3-4年级）
  {
    id: 'ex-3',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '事件处理',
    question: '想要实现"点击鼠标时播放音乐，松开鼠标时音乐停止"的功能，应该分别在哪两个函数中添加代码？',
    options: [
      'on_key_down() 和 draw()',
      'on_key_down() 和 on_mouse_down()',
      'on_mouse_down() 和 on_mouse_up()',
      'on_mouse_down() 和 update()'
    ],
    answer: 2, // C
    explanation: '正确答案是 C。\n\n- on_mouse_down()：鼠标按下时执行，在这里播放音乐\n- on_mouse_up()：鼠标松开时执行，在这里停止音乐\n\n代码示例：\n```python\ndef on_mouse_down():\n    music.play_once("音乐.mp3")\n\ndef on_mouse_up():\n    music.stop()  # 停止音乐\n```',
    hint: '鼠标按下和松开是两个不同的事件'
  },
  {
    id: 'ex-4',
    level: 'medium',
    levelLabel: '进阶',
    levelEmoji: '🟡',
    type: 'multiple-choice',
    mathConcept: '变量作用域',
    question: '在函数中要修改全局变量，需要使用什么关键字声明？',
    options: [
      'var',
      'let',
      'global',
      'variable'
    ],
    answer: 2, // C
    explanation: '在 Python 中，要在函数内部修改全局变量，需要使用 `global` 关键字声明。\n\n示例：\n```python\nscore = 0\n\ndef add_point():\n    global score  # 声明使用全局变量\n    score += 1\n```\n\n如果不声明 global，Python 会创建一个同名的局部变量，而不是修改全局变量。',
    hint: 'global 的意思是"全局的"'
  },

  // 挑战题（5-6年级）
  {
    id: 'ex-5',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '奇偶性分析',
    question: '一个灯开始是熄灭的。每次按下空格键，灯的状态切换。代码如下：\n```python\ndef on_key_down(key):\n    if key == keys.SPACE:\n        if light.image == "灯亮":\n            light.image = "灯熄灭"\n        else:\n            light.image = "灯亮"\n```\n按下 5 次空格后，灯是什么状态？',
    options: [
      '亮',
      '熄灭',
      '不确定',
      '程序会报错'
    ],
    answer: 0, // A
    explanation: '奇偶性分析！\n\n初始：熄灭\n第 1 次：熄灭 → 亮\n第 2 次：亮 → 熄灭\n第 3 次：熄灭 → 亮\n第 4 次：亮 → 熄灭\n第 5 次：熄灭 → 亮\n\n5 是奇数，所以最终状态是"亮"。\n\n数学知识：这是一个周期为 2 的状态转换，奇数次和偶数次结果相反。',
    hint: '按 1 次亮，按 2 次灭，按 3 次...？'
  },
  {
    id: 'ex-6',
    level: 'hard',
    levelLabel: '挑战',
    levelEmoji: '🔴',
    type: 'multiple-choice',
    mathConcept: '逻辑推理',
    question: '角色初始在 (0, 0)。按键操作：上键 y-1，下键 y+1，左键 x-1，右键 x+1。如果依次按"上、右、下、左"各一次，角色的最终坐标是？',
    options: [
      '(0, 0)',
      '(1, 1)',
      '(-1, -1)',
      '(1, -1)'
    ],
    answer: 0, // A
    explanation: '初始坐标：(0, 0)\n\n上键：x=0, y=0-1=-1 → (0, -1)\n右键：x=0+1=1, y=-1 → (1, -1)\n下键：x=1, y=-1+1=0 → (1, 0)\n左键：x=1-1=0, y=0 → (0, 0)\n\n最终坐标：(0, 0) - 回到原点！\n\n数学知识：这是一个对称的运动，上和下抵消，左和右抵消，最终回到起点。',
    hint: '每次按键后的坐标变化会相互抵消吗？'
  }
]

// 课次元数据
export const lessonMeta = {
  id: 'L12-4',
  title: '重返地球',
  subtitle: '综合应用 Pygame Zero 游戏开发',
  difficulty: '挑战',
  estimatedTime: '40-60分钟',
  learningGoals: [
    '综合运用 L12-1 到 L12-3 的知识点',
    '掌握游戏开发的完整流程',
    '学会状态管理和造型切换',
    '能够独立开发简单游戏'
  ],
  prerequisites: [
    'L12-1 Pygame Zero 入门',
    'L12-2 鼠标控制和碰撞检测',
    'L12-3 键盘控制',
    '条件判断和循环语句'
  ]
}

// 打字练习单词（按难度分组）
export const typingWords = {
  easy: ['play', 'stop', 'button', 'switch'],
  medium: ['debug', 'global', 'state', 'control'],
  hard: ['collision', 'coordinate', 'management', 'interactive']
}

// 代码模板练习（按难度分组）
export const typingTemplates = {
  easy: [
    'music.play_once("音乐")',
    'music.stop()',
    'light.image = "灯亮"',
    'if light.image == "灯亮":'
  ],
  medium: [
    'def on_key_down(key):\n    if key == keys.SPACE:\n        pass',
    'if light.image == "灯亮":\n    light.image = "灯熄灭"\nelse:\n    light.image = "灯亮"',
    'global score\nscore += 1'
  ],
  hard: [
    'def on_key_down(key):\n    if key == keys.LEFT:\n        player.x -= 5\n    elif key == keys.RIGHT:\n        player.x += 5',
    'if current_state == STATE_MENU:\n    if key == keys.SPACE:\n        current_state = STATE_PLAYING',
    'dragging = False\ndef on_mouse_down(pos):\n    global dragging\n    if player.collidepoint(pos):\n        dragging = True'
  ]
}

// 导出所有数据
export const L12_4_data = {
  meta: lessonMeta,
  vocab: vocabData,
  knowledgePoints,
  exercises,
  typingWords,
  typingTemplates
}

export default L12_4_data
