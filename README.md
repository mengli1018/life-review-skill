# Life Review Skill

一个用于人生事件复盘的可移植 Agent Skill。它把 LRS-100 复盘量表、领域模块、哲学分析、卡点诊断、Mermaid 流程图、今日执行卡和 7 天追踪复盘整合在一起，帮助你把“想很多、做很少”的混乱状态压成可执行的下一步。

## 一键安装

安装到 Codex 和 Claude Code 的用户级 skills 目录：

```bash
npx -y github:mengli1018/life-review-skill
```

只安装到 Codex：

```bash
npx -y github:mengli1018/life-review-skill codex
```

只安装到 Claude Code：

```bash
npx -y github:mengli1018/life-review-skill claude
```

安装到当前项目的 Claude Code skills 目录：

```bash
npx -y github:mengli1018/life-review-skill claude --project
```

安装后可以这样使用：

```text
使用 life-review skill，帮我复盘一件事。
```

Claude Code 中也可以直接调用：

```text
/life-review 帮我复盘为什么我总是想得多做得少，输出卡点诊断图和每日行动流程图。
```

## 它能做什么

- 复盘考试、考研、考公、求职、自由职业、关系、习惯、金钱、项目和情绪低谷。
- 分析当前困难、核心卡点、主要矛盾、次要矛盾和矛盾的主要方面。
- 用哲学视角解释问题结构，例如矛盾分析、实践论、斯多葛、存在主义、实用主义、现象学、道家和佛学。
- 输出直白版、毒舌版、督促版三种建议风格。
- 生成 Mermaid 流程图，展示卡点诊断图、每日行动流程图、遇阻分流图。
- 给出今日执行卡和 7 天后复查问题，方便持续追踪。

## 文件结构

```text
life-review-skill/
├─ README.md
├─ package.json
├─ scripts/
│  └─ install.js
├─ AGENTS.md
├─ CLAUDE.md
├─ 复盘量表-v1.md
├─ life-review/
│  ├─ SKILL.md
│  ├─ agents/
│  │  └─ openai.yaml
│  └─ references/
│     └─ lrs-100.md
└─ .claude/
   └─ skills/
      └─ life-review/
         ├─ SKILL.md
         └─ references/
            └─ lrs-100.md
```

## 安装位置

默认安装位置：

| 目标 | 默认路径 |
| --- | --- |
| Codex | `~/.codex/skills/life-review` |
| Claude Code | `~/.claude/skills/life-review` |
| Claude Code 当前项目 | `./.claude/skills/life-review` |

自定义安装目录：

```bash
npx -y github:mengli1018/life-review-skill codex --codex-dir ~/my-codex-skills
```

```bash
npx -y github:mengli1018/life-review-skill claude --claude-dir ~/my-claude-skills
```

预览安装路径但不复制文件：

```bash
npx -y github:mengli1018/life-review-skill --dry-run
```

## 手动安装

如果不想用 `npx`：

- Codex / 通用 Agent Skills：复制 `life-review/` 到对应工具的 skills 目录。
- Claude Code 用户级 skill：复制 `life-review/` 到 `~/.claude/skills/life-review`。
- Claude Code 项目级 skill：复制 `.claude/skills/life-review/` 到目标项目的 `.claude/skills/life-review/`。

## 使用示例

直白版：

```text
使用 life-review skill，直白版帮我复盘为什么我总是想得多做得少。
```

毒舌版：

```text
使用 life-review skill，毒舌版帮我复盘我为什么总是计划很多但执行很少。
```

督促版：

```text
使用 life-review skill，督促版安排我今天的最低行动，晚上我回来打卡。
```

## 输出示例

一次标准复盘通常会输出：

```text
1. 一句话结论
2. 事件类型
3. 当前困难
4. 核心卡点
5. 主要矛盾
6. 次要矛盾
7. 哲学解释
8. Mermaid 流程图
9. 下一次行动
10. 今日执行卡
11. 7 天实验和复查问题
```

## 建议风格

| 模式 | 适合场景 |
| --- | --- |
| 直白版 | 需要清醒、稳定、可执行的分析 |
| 毒舌版 | 需要打断自欺，但不羞辱人格 |
| 督促版 | 需要被推着执行、打卡、复查 |

## 兼容状态

| 工具/标准 | 入口文件 | 状态 |
| --- | --- | --- |
| Codex Skills | `life-review/SKILL.md` | 已支持 |
| Agent Skills 通用格式 | `life-review/SKILL.md` | 已支持 |
| Claude Code Project Skill | `.claude/skills/life-review/SKILL.md` | 已支持 |
| Claude Code Project Memory | `CLAUDE.md` | 已支持 |
| 通用 AI coding agents | `AGENTS.md` | 已支持 |

## 校验

本 skill 已通过本地校验：

```text
Skill is valid!
```
