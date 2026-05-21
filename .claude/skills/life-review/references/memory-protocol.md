# Personal Memory Protocol

Use this protocol when the user asks to store prior reviews, build a personal knowledge base, remember life patterns, or create a "认知资料库".

## Privacy Rules

1. Ask for explicit consent before saving personal material.
2. Save summaries and patterns by default, not raw transcripts.
3. Keep memory local by default. Never add personal memory files to public repositories.
4. Do not store passwords, identity numbers, exact addresses, private contact details, or third-party private details.
5. For medical, legal, financial, or safety-sensitive content, store only user-approved summaries and avoid turning uncertain interpretations into facts.
6. Let the user review, edit, delete, or refuse memory updates at any time.

## Default Storage

Prefer one of these paths:

```text
~/.life-review/memory.md
./life-review-memory.local.md
```

Use `~/.life-review/memory.md` for cross-project memory. Use `./life-review-memory.local.md` when the user wants memory to stay with one local workspace. The repository `.gitignore` should exclude local memory files.

## Memory Schema

Keep the memory concise and structured:

```markdown
# Life Review Personal Memory

## Stable Facts

- ...

## Current Goals

- ...

## Recurring Patterns

- Pattern:
  Evidence:
  Risk:

## Stuck Points

- ...

## Effective Strategies

- ...

## Preferences

- Advice style:
- Output style:
- Accountability:

## Open Questions

- ...

## Review Log

### YYYY-MM-DD - Event

- Summary:
- Main contradiction:
- Core stuck point:
- Next experiment:
- Memory update:
```

## What To Save

Save information that helps future reviews become more accurate:

- repeated life patterns
- stable goals and values
- important constraints and resources
- current work/study/life context
- advice style preferences
- successful actions that helped the user move
- experiments attempted and results
- unresolved questions worth revisiting

## What Not To Save

Avoid saving:

- raw chat logs unless the user explicitly asks
- highly identifying third-party details
- unverified judgments as facts
- one-time moods that are not repeated patterns
- content the user sounds unsure about saving

## Memory Update Workflow

At the end of a review, ask:

```text
要不要把这次复盘压缩成一条“认知资料库”记忆？我会只保存摘要、模式、卡点和下一步实验，不保存你的原话。
```

If the user agrees:

1. Propose the memory entry first.
2. Let the user approve or edit it.
3. Save it to the chosen local memory file.
4. Mention where it was saved.

## Memory Entry Template

```markdown
### YYYY-MM-DD - <event name>

- Summary:
- Current context:
- Core stuck point:
- Primary contradiction:
- Recurring pattern:
- Effective strategy:
- Next experiment:
- Follow-up date:
```

## Loading Memory

When the user asks for a review and memory exists:

1. Read the memory file only if the user asks to use it or has previously opted in.
2. Use memory as context, not as proof.
3. Say when a conclusion is inferred from prior memory.
4. If current facts conflict with memory, trust the current facts and update memory after confirmation.

