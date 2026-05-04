# stitch-ui

[English](README.md) | 简体中文

[![GitHub stars](https://img.shields.io/github/stars/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/stargazers)
[![GitHub license](https://img.shields.io/github/license/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/blob/main/LICENSE)
[![validate](https://github.com/wgd-12138/stitch-ui-skill/actions/workflows/validate.yml/badge.svg)](https://github.com/wgd-12138/stitch-ui-skill/actions/workflows/validate.yml)
[![Portable](https://img.shields.io/badge/install-one%20command-blue?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)

`stitch-ui` 是 `stitch-ui` skill 的可分发仓库版本，目标是让别人能一条命令安装到 Claude 和 Codex 里使用。

它的作用是：把 Google Stitch 的想法、截图或导出结构，变成更像真实产品的前端页面，而不是默认 AI 模板页。

## 为什么值得 star

- 它不是只给一个 skill 文件，而是给了一整套可安装、可学习、可复用的前端审美工作流
- 它覆盖营销页、看板、移动端产品、定价页、文档工作台等多种场景
- 它把安装、示例、提示词和插件分发都放在了一个仓库里
- 它同时支持 Claude 和 Codex

## 这个仓库里提供什么

| 包类型 | 用途 | 路径 |
|---|---|---|
| Claude skill | 直接装到 `~/.claude/skills/` | `plugins/stitch-ui/skills/stitch-ui` |
| Codex plugin | 装到本地 Codex 插件库 | `plugins/stitch-ui` |
| 仓库内 marketplace 条目 | 让 Codex 从这个仓库识别插件 | `.agents/plugins/marketplace.json` |
| CLI 安装入口 | PowerShell / Bash / CMD 一条命令安装 | `install.ps1`、`install.sh`、`install.cmd` |

## 按场景展示

这个仓库的价值不是只会一种“好看”，而是能稳住很多不同的产品表面。

### Stripe / Framer 风格高级首页

适合产品首页和营销页。

![高级首页](examples/desktop-preview.png)

### Linear 风格深色数据看板

适合高对比运营面板和控制台。

![深色看板](examples/dark-dashboard.png)

### Framer 风格创作者移动产品

适合移动端消费类产品和创作者产品。

![创作者移动产品](examples/playful-creator-app.png)

### 冷静型企业定价页

适合 B2B 决策页和定价页。

![企业定价页](examples/enterprise-pricing.png)

### Notion 风格文档工作台

适合知识库、文档和研究工具。

![文档工作台](examples/docs-workspace.png)

## 快速安装

不需要手动执行 Python 命令。

### PowerShell

```powershell
.\install.ps1 all
```

### Bash

```bash
./install.sh all
```

### Windows CMD

```bat
install.cmd all
```

### 只安装到 Claude

```powershell
.\install.ps1 claude
```

### 只安装到 Codex

```powershell
.\install.ps1 codex
```

## 平台安装结果

| 平台 | 安装结果 |
|---|---|
| Claude | `~/.claude/skills/stitch-ui` |
| Codex | `~/plugins/stitch-ui` + `~/.agents/plugins/marketplace.json` |

## 为什么要拆成两种包

Claude 和 Codex 的分发形态并不完全一样。

| 平台 | 推荐形态 |
|---|---|
| Claude | `~/.claude/skills/` 下的 skill 目录 |
| Codex | 插件目录 + marketplace 条目 |

所以这个仓库把两种形态都准备好了，别人从一个仓库就能装。

## 参考型提示词配方

如果你想做出更接近公开公认好页面的结果，可以直接学习这些配方：

- Stripe 风格高级首页
- Linear 风格深色产品面
- Framer 风格创意构建页
- Notion 风格知识工作台
- award-site 风格实验型微站

见：

- [plugins/stitch-ui/skills/stitch-ui/references/reference-inspired-prompts.md](plugins/stitch-ui/skills/stitch-ui/references/reference-inspired-prompts.md)

## 这个 skill 在教什么

它教的是一套稳定的前端审美流程：

1. 提炼视觉简报
2. 选择组件库策略
3. 按模块重建页面
4. 最后做一轮视觉复盘

同时自带：

- 提示词模板
- 参考型提示词配方
- 按场景组织的示例

## 质量保障

这个仓库现在包括：

- 本地校验脚本：`node scripts/validate.js`
- GitHub Actions 的跨平台安装测试
- 插件 manifest 和 marketplace 元数据

## 贡献与维护

见：

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [CHANGELOG.md](CHANGELOG.md)

## License

MIT
