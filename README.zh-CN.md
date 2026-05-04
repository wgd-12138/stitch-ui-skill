# stitch-ui

[English](README.md) | 简体中文

这是 `stitch-ui` skill 的可分发仓库版本，目的是让别人可以直接安装到 Claude 和 Codex 里使用。

它的作用是：把 Google Stitch 的想法、截图或导出结构，变成更像真实产品的前端页面，而不是默认 AI 模板页。

## 这个仓库里实际提供了什么

| 包类型 | 用途 | 路径 |
|---|---|---|
| Claude skill | 直接装到 `~/.claude/skills/` | `plugins/stitch-ui/skills/stitch-ui` |
| Codex plugin | 装到本地 Codex 插件库 | `plugins/stitch-ui` |
| 仓库内 marketplace 条目 | 让 Codex 从这个仓库识别插件 | `.agents/plugins/marketplace.json` |

## 快速安装

不需要再手动执行 Python 命令。

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

它会把 skill 复制到：

```text
~/.claude/skills/stitch-ui
```

### 只安装到 Codex

```powershell
.\install.ps1 codex
```

它会做两件事：

1. 把插件复制到 `~/plugins/stitch-ui`
2. 创建或更新 `~/.agents/plugins/marketplace.json`

## 为什么要拆成两种包

Claude 和 Codex 这里使用的分发形态并不完全一样。

| 平台 | 推荐分发形态 |
|---|---|
| Claude | `~/.claude/skills/` 下的 skill 目录 |
| Codex | 插件目录 + marketplace 条目 |

所以这个仓库把两种形态都准备好了，别人从一个仓库就能装。

## Codex 插件包

Codex 可安装包在这里：

```text
plugins/stitch-ui
```

里面包含：

- `.codex-plugin/plugin.json`
- `skills/stitch-ui/`
- `assets/`

如果你想把这个仓库当成 repo-local 插件源，仓库里已经带了：

```text
.agents/plugins/marketplace.json
```

## Claude 包

Claude 这里没有和 Codex 完全一致的插件市场形态。

对 Claude 来说，真正可安装的单元是这个 skill 目录：

```text
plugins/stitch-ui/skills/stitch-ui
```

安装脚本会把它复制到用户本地的全局技能目录里。

## 安装后本地会变成什么

### Codex

运行：

```powershell
.\install.ps1 codex
```

后，本地结构会变成：

```text
~/plugins/stitch-ui
~/.agents/plugins/marketplace.json
```

### Claude

运行：

```powershell
.\install.ps1 claude
```

后，本地结构会变成：

```text
~/.claude/skills/stitch-ui
```

## 这个 skill 本身做什么

它教的是一套稳定的前端审美工作流：

1. 提炼视觉简报
2. 选择组件库策略
3. 按模块重建页面
4. 最后做一轮视觉复盘

并且自带：

- 通用提示词模板
- 参考型提示词配方
- 借鉴公开优秀页面审美的方法

## 如果你是维护者

根目录安装命令底层调用的是：

```text
scripts/install.js
```

如果你在别的工作区更新了 skill 源内容，发布前记得把最新内容同步到：

```text
plugins/stitch-ui/skills/stitch-ui
```

## License

MIT
