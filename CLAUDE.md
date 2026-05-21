@AGENTS.md

## Claude Code

This repository includes a Claude Code project skill at `.claude/skills/life-review/`.

Use it when the user asks for a life retrospective, current stuck-point diagnosis, primary/secondary contradiction analysis, daily execution plan, Mermaid flowchart, or `直白版` / `毒舌版` / `督促版` advice.

If the user asks for a personal "认知资料库", use the skill's memory protocol. Store only user-approved summaries in local memory and never commit private memory files.

Example invocation in Claude Code:

```text
/life-review 帮我复盘为什么我总是想得多做得少，输出卡点诊断图和每日行动流程图。
```

If editing the skill, update the root `life-review/` folder first, then mirror the same `SKILL.md` and `references/lrs-100.md` into `.claude/skills/life-review/`.
