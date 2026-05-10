# AGENTS.md

This file orients AI coding agents working in this repository.

## Personalized Agent Engineering Roadmap

This repo hosts a personalized version of the **2026 AI Agent Engineering
Roadmap** (canonical source: `https://github.com/codejunkie99/agent-roadmap-2026`).
The personalized plan lives in [`MY_ROADMAP.md`](./MY_ROADMAP.md).

### User Profile (do not re-ask)

- Complete beginner with agent engineering.
- Strong in C# and Go; learning Python deliberately because the agent
  ecosystem is Python-first.
- ~4 hours/week of study time → durations in `MY_ROADMAP.md` are scaled
  **2.5×** versus the canonical 17-week plan (~40 weeks total).
- Cost-conscious; defaults to **open-source models via Together AI / Groq /
  Ollama**. Claude is used sparingly — once in Phase 1 to experience a
  reference harness, and as an LLM-judge in Phase 4.
- Goal: sharpen professional skills and raise market value. Every phase
  ends in a public deliverable (GitHub repo, README write-up, short blog
  post, or screen recording).

### Stack Locked In

- Python 3.12 + `uv`
- LangGraph 1.0 + Deep Agents (primary orchestration)
- Claude Agent SDK (reference / study only)
- Default model: Llama 3.3 70B via Together AI or Groq
- Local fallback: Ollama (Qwen 2.5 7B / Llama 3.1 8B)
- Observability: LangSmith free tier

### Current Progress

Track progress via the checkboxes at the bottom of `MY_ROADMAP.md`. When
asked about progress, read that file rather than guessing.

### How Future Sessions Should Behave

1. Read `MY_ROADMAP.md` before suggesting any agent-related work.
2. Respect the cost preference: do **not** propose paid Claude usage for
   routine experimentation; suggest open-source equivalents first.
3. Respect the language constraint: all agent code is Python. C# / Go
   suggestions are welcome only for non-agent tooling.
4. When the user finishes a phase, update the checkbox in `MY_ROADMAP.md`
   and propose the next concrete action — do not re-pitch the whole plan.
5. Do **not** overwrite `MY_ROADMAP.md` without explicit confirmation.
