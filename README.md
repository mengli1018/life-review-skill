# Life Review Skill

一个用于人生事件复盘的可移植 Agent Skill。它把 LRS-100 复盘量表、领域模块、哲学分析、卡点诊断、Mermaid 流程图、今日执行卡和 7 天追踪复盘整合在一起，帮助你把“想很多、做很少”的混乱状态压成可执行的下一步。

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
├─ README.md                 # 给人看的仓库说明
├─ AGENTS.md                 # 给通用 AI coding agents 看的入口说明
├─ CLAUDE.md                 # Claude Code 项目记忆，导入 AGENTS.md
├─ 复盘量表-v1.md             # 独立完整版量表
├─ life-review/
   ├─ SKILL.md               # Codex / 通用 Agent Skills 入口
   ├─ agents/
   │  └─ openai.yaml
   └─ references/
      └─ lrs-100.md
└─ .claude/
   └─ skills/
      └─ life-review/
         ├─ SKILL.md         # Claude Code 项目级 skill
         └─ references/
            └─ lrs-100.md
```

## 使用方式

### Codex

在 Codex 中使用当前文件夹里的 skill：

```text
使用 C:/Users/linlin/Documents/复盘/life-review 这个 skill，帮我复盘一件事。
```

如果要全局安装到 Codex，可以把 `life-review/` 复制到你的 Codex skills 目录。

### Claude Code

本仓库已经包含 Claude Code 项目级 skill：

```text
.claude/skills/life-review/
```

在 Claude Code 中打开本仓库后，可以这样调用：

```text
/life-review 帮我复盘为什么我总是想得多做得少，输出卡点诊断图和每日行动流程图。
```

如果要作为 Claude Code 全局 skill 使用，可以把 `.claude/skills/life-review/` 复制到你的 Claude Code 用户级 skills 目录。

### 其他 AI Agent

兼容 Agent Skills 的工具可以直接使用 `life-review/` 文件夹，因为它遵循 `SKILL.md + references/` 的通用结构。支持读取 `AGENTS.md` 的 AI coding agents 可以先读取根目录的 `AGENTS.md`，再按说明加载 `life-review/SKILL.md`。

也可以指定风格：

```text
使用 life-review skill，直白版帮我复盘为什么我总是想得多做得少。
```

```text
使用 life-review skill，毒舌版帮我复盘我为什么总是计划很多但执行很少。
```

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
