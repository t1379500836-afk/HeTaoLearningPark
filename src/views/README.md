# Views 目录

页面级组件，对应路由中的各个页面。

## 文件列表

| 文件 | 路由 | 说明 |
|------|------|------|
| HomeView.vue | `/` | 首页 |
| CourseLevelsView.vue | `/levels` | 阶段选择（PY1/PY2/PY3） |
| StageView.vue | `/levels/:stage` | Level选择（L1-L18） |
| UnitView.vue | `/levels/:stage/:unit` | 课时选择 |
| LessonView.vue | `/lesson/:stage/:unit/:lesson` | 课时主页面 |
| PracticeView.vue | `/practice` | 课后练习 |
| TypingView.vue | `/typing` | 独立打字练习 |
| PythonIDEView.vue | `/python` | 独立Python编辑器 |
| YCLZoneView.vue | `/ycl` | YCL专区 |

## 数据加载说明

所有课程数据（阶段、Level、课时信息）当前为框架结构，实际数据应从配置文件或API加载。

- 临时框架数据位于各组件的 `<script setup>` 中
- 生产环境应将数据移至 `src/data/courses/` 或通过API获取
