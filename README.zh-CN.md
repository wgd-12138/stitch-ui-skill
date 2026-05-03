# stitch-ui

[English](README.md) | 简体中文

[![GitHub stars](https://img.shields.io/github/stars/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/stargazers)
[![GitHub license](https://img.shields.io/github/license/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/blob/main/LICENSE)
[![Skill](https://img.shields.io/badge/skill-Claude%20%26%20Codex-ff7a45?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)

把 Google Stitch 的想法、截图或导出结构，变成更像真实产品的前端页面，而不是默认 AI 模板页。

`stitch-ui` 是一个同时适用于 Claude 和 Codex 的可移植 skill。它会强制模型按这个顺序工作：

1. 先提炼视觉简报
2. 再选择合适的组件库策略
3. 再按模块重建页面
4. 最后再做一轮视觉复盘

也正因为多了这层约束，生成结果更不容易回到“千篇一律的 AI 页面”。

## 为什么这个 skill 有价值

很多 AI 生成的前端页能跑，但常见问题也很明显：

- SaaS 模板味很重
- 字体层级很弱
- 留白和节奏不稳定
- 特效乱加
- 导出代码很难维护

`stitch-ui` 会逼模型在写代码前先说清楚这些东西：

- 页面气质
- 字体方向
- 间距节奏
- 配色系统
- 组件性格
- 明确要避开的风格

## 首页展示

这个 skill 的重点不是只会一种审美，而是能让不同审美都更完整、更有控制感。

<table>
  <tr>
    <td width="50%">
      <strong>暖色杂志感首页</strong><br>
      适合营销页 / 产品首页<br><br>
      <img src="examples/desktop-preview.png" alt="暖色杂志感首页">
    </td>
    <td width="50%">
      <strong>深色数据看板</strong><br>
      适合高对比运营界面<br><br>
      <img src="examples/dark-dashboard.png" alt="深色数据看板">
    </td>
  </tr>
  <tr>
    <td width="50%">
      <strong>轻快创作者产品</strong><br>
      适合移动端消费类产品<br><br>
      <img src="examples/playful-creator-app.png" alt="轻快创作者产品">
    </td>
    <td width="50%">
      <strong>企业定价页</strong><br>
      适合安静克制的 B2B 场景<br><br>
      <img src="examples/enterprise-pricing.png" alt="企业定价页">
    </td>
  </tr>
</table>

暖色首页的移动端示例：

![移动端示例](examples/mobile-preview.png)

## 仓库里有什么

| 文件 | 作用 |
|---|---|
| `stitch-ui/SKILL.md` | 主工作流和质量规则 |
| `stitch-ui/references/prompt-templates.md` | 可直接复制的提示词模板 |
| `stitch-ui/agents/openai.yaml` | 支持元数据的 skill 环境展示信息 |
| `examples/` | 多风格、多场景的示例截图 |

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
