# Agent Instructions

This repository packages a portable life-review Agent Skill.

## Primary Skill

- Main portable skill: `life-review/SKILL.md`
- Full reference: `life-review/references/lrs-100.md`
- Claude Code project skill mirror: `.claude/skills/life-review/SKILL.md`

Use the skill when the user wants to review, reflect on, diagnose, or plan around life events such as exams, career choices, free work/freelancing, repeated procrastination, relationships, habits, money decisions, creative projects, emotional lows, or major decisions.

## Expected Output

When using this skill, produce practical retrospectives that may include:

- current difficulty
- core stuck point
- primary and secondary contradictions
- root-cause chains
- philosophical interpretation
- Mermaid flowcharts
- direct advice in `直白版`, `毒舌版`, or `督促版`
- today execution card
- 7-day experiment and follow-up questions

## How To Use

If the user gives a complete story, proceed with the review. If the story is vague, ask at most 5 high-leverage questions. Do not require a full life history; one concrete event is enough.

Default to `直白版`. Use `毒舌版` or `督促版` only when the user asks for it.

## Maintenance

When updating the skill:

1. Update `life-review/SKILL.md` and/or `life-review/references/lrs-100.md` first.
2. Mirror those changes into `.claude/skills/life-review/`.
3. Keep `README.md` usage instructions in sync.
4. Validate both skill folders before committing.

Validation command on Windows:

```powershell
$env:PYTHONUTF8='1'
python 'C:/Users/linlin/.codex/skills/.system/skill-creator/scripts/quick_validate.py' 'C:/Users/linlin/Documents/复盘/life-review'
python 'C:/Users/linlin/.codex/skills/.system/skill-creator/scripts/quick_validate.py' 'C:/Users/linlin/Documents/复盘/.claude/skills/life-review'
```

