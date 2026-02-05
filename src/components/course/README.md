# Course Components 目录

课程相关组件，包含打字练习和Python编辑器。

## 文件列表

| 组件 | 说明 |
|------|------|
| TypingPractice.vue | 打字练习组件，支持自定义词库 |
| CodeEditor.vue | Python在线编辑器，基于CodeMirror 5 |

## TypingPractice.vue

支持通过 `customWords` prop 传入自定义词库：

```vue
<TypingPractice :custom-words="['print', 'input', 'if']" />
```

## CodeEditor.vue

支持通过 props 传入初始代码和预期输出（用于OJ题）：

```vue
<CodeEditor
  :initial-code="# Starter code"
  :expected-output="Hello World"
/>
```
