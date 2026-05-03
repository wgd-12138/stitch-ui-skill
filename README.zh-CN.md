# stitch-ui

[English](README.md) | 简体中文

[![GitHub stars](https://img.shields.io/github/stars/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/stargazers)
[![GitHub license](https://img.shields.io/github/license/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/blob/main/LICENSE)
[![Skill](https://img.shields.io/badge/skill-Claude%20%26%20Codex-ff7a45?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)
[![Portable](https://img.shields.io/badge/install-copy%20folder-blue?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)

一个同时适用于 Claude 和 Codex 的 AI skill，用来把 Google Stitch 的想法、截图或导出结构，变成更像真实产品的前端页面，而不是默认 AI 模板页。

## 它和普通“生成一个页面”有什么不同

很多 AI 生成页的问题都很像：

- 总是回到同一种 SaaS 模板
- 字体层级很弱
- 留白和节奏不稳定
- 特效是乱加的，不成系统
- 导出代码难维护

`stitch-ui` 的做法是先把视觉系统定下来，再写代码：

1. 提炼视觉简报
2. 选择组件库策略
3. 按模块重建页面
4. 最后再做一轮视觉复盘

也正因为多了这层推理，生成结果的适用面会更广。

## 这次首页重点更新了什么

- 首页从“图片墙”改成“按场景展示”
- 现在有 5 个真正不同的页面类型
- 覆盖营销页、看板、移动端产品、定价页、文档工作台
- 中英双语首页都能直接看

## 场景能力总览

| 场景 | 页面骨架 | 设备重点 | 视觉方向 | 证明什么 |
|---|---|---|---|---|
| 暖色杂志感首页 | Hero 主导型营销布局 | 桌面 + 手机 | 温暖、疏朗、高级 | 擅长官网首页叙事 |
| 深色数据看板 | 高密度控制台 | 桌面 | 高对比、数据优先 | 不会被迫做成首页结构 |
| 轻快创作者产品 | App 式堆叠布局 | 手机优先 | 明亮、柔和、活泼 | 能处理消费类移动产品 |
| 企业定价页 | 对比型定价栅格 | 桌面 | 安静、克制、B2B | 适合决策型页面 |
| 文档工作台 | 三栏知识工具 | 桌面 | 文字优先、编辑感、实用 | 适合文档和研究工具 |

## 按场景展示

### 1. 暖色杂志感首页

适合产品首页和营销页。

- 大标题
- 大留白
- Hero 主导
- 温和暖色系

![暖色杂志感首页](examples/desktop-preview.png)

### 2. 深色数据看板

适合运营面板和控制台。

- 信息密度更高
- 数据优先卡片系统
- 导航更强
- 布局偏控制台

![深色数据看板](examples/dark-dashboard.png)

### 3. 轻快创作者产品

适合移动端消费类产品。

- 更像 App
- 配色更亮
- 形状更软
- 节奏更轻快

![轻快创作者产品](examples/playful-creator-app.png)

### 4. 企业定价页

适合 B2B 决策页。

- 对比结构更清楚
- 强调色更克制
- 信任感优先
- 视觉噪音更低

![企业定价页](examples/enterprise-pricing.png)

### 5. 文档工作台

适合文档、知识库和研究工具。

- 左侧导航
- 中间正文
- 右侧参考栏
- 典型工作台结构

![文档工作台](examples/docs-workspace.png)

### 暖色首页的移动端示例

同一套暖色审美也可以自然落到小屏幕。

![移动端示例](examples/mobile-preview.png)

## 仓库里有什么

| 文件 | 作用 |
|---|---|
| `stitch-ui/SKILL.md` | 主工作流和质量规则 |
| `stitch-ui/references/prompt-templates.md` | 可直接复制的提示词模板 |
| `stitch-ui/agents/openai.yaml` | 支持元数据的 skill 环境展示信息 |
| `examples/` | 按场景组织的示例截图 |

## 安装方法

### Codex

把 `stitch-ui` 目录复制到：

```text
~/.codex/skills/
```

Windows：

```text
C:\Users\<你自己>\.codex\skills\
```

### Claude

把 `stitch-ui` 目录复制到：

```text
~/.claude/skills/
```

Windows：

```text
C:\Users\<你自己>\.claude\skills\
```

## 目录结构

```text
stitch-ui/
├── agents/
│   └── openai.yaml
├── references/
│   └── prompt-templates.md
└── SKILL.md
```

## 适合哪些场景

- 官网首页
- 营销页
- 数据看板
- 应用首页
- 定价页
- 功能介绍页
- 知识工作台
- 旧页面重设计和精修

## 在 Codex 中怎么用

```text
使用 $stitch-ui 做一个 AI 招聘产品首页。
技术栈：Next.js + Tailwind
组件库：shadcn/ui

视觉方向：
- 克制
- 高级
- 留白大
- 暖色背景
- 避免默认科技蓝 SaaS 模板风

要求：
1. 先提炼视觉简报
2. 再按组件思维实现
3. 桌面和移动端都要成立
4. 第一版完成后再做一轮视觉复盘
```

## 在 Claude 中怎么用

```text
使用 $stitch-ui。
先生成一个 AI 财务看板的 Google Stitch 提示词，
再生成一份 React + Tailwind + shadcn/ui 的落地实现提示词。
整体风格要偏编辑感、温暖、克制，
避免通用企业后台模板味。
```

## 自带的提示词模板

见：

- [stitch-ui/references/prompt-templates.md](stitch-ui/references/prompt-templates.md)

里面包含：

- Stitch 提示词模板
- 截图转代码模板
- 导出代码重构模板
- 快速视觉简报模板

## 为什么它更稳

这个 skill 对顺序要求比较严格：

1. 判断输入类型
2. 提炼视觉简报
3. 选择组件库策略
4. 分区块实现
5. 再做视觉复盘

也就是说，模型不能一上来就“随便做个好看的页面”。

## License

MIT
