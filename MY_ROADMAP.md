# MY_ROADMAP.md — Personalized 2026 Agent Engineering Roadmap

> Generated from the canonical 17-week roadmap at
> `https://github.com/codejunkie99/agent-roadmap-2026` and tailored to your profile.

## Your Profile

| Dimension              | Your input                                                        |
| ---------------------- | ----------------------------------------------------------------- |
| Experience             | Complete beginner with agents                                     |
| Background             | Strong in C# / Go, learning Python alongside agent work           |
| Time commitment        | ~4 hours / week                                                   |
| Language               | Python (intentional choice — agent ecosystem is Python-first)     |
| Model provider         | Undecided; cost-conscious, leaning open-source                    |
| Primary goal           | Sharpen professional skills, raise personal market value          |

## How This Plan Differs From the Canonical Roadmap

1. **Stretched timeline.** The canonical roadmap assumes ~10 hr/week over 17 weeks
   (~170 hours). At 4 hr/week, the protocol scales durations by **2.5×**, giving
   you ~**40 weeks (~10 months)** of structured work plus an ongoing Phase 5.
   That is by design — beginners doing this part-time should not rush.
2. **Python warm-up bolted onto Phase 0.** You are coming from C# / Go, so the
   first phase includes ~2 weeks of focused Python fluency on the topics agent
   code actually uses (asyncio, typed dicts / Pydantic, dataclasses, decorators,
   `httpx`).
3. **Hybrid model strategy** to keep costs low without locking out best-in-class
   tooling:
   - **Daily driver for experimentation:** open-source models via **Ollama**
     (local: Llama 3.3 8B / Qwen 2.5 7B) or **Together AI / Groq** (hosted, cheap).
   - **Reference harness study:** the **Claude Agent SDK** in Phase 1 — pay for a
     few dollars of Claude tokens to *experience* a great harness, then port the
     patterns to open models.
   - **LangGraph 1.0** stays the primary orchestrator; it is model-agnostic, so
     you can swap providers freely.
4. **Public-by-default deliverables.** Because your goal is professional
   valuation, every phase ends with something you can link on a CV, GitHub
   profile, or LinkedIn post. CI / hardening rigor is deferred to Phase 5 so it
   does not slow early learning.

## The 6 Phases — Adapted

### Phase 0 — Mental Models + Python Warm-up (~3 weeks · ~12 hrs)

**Why:** You will not retain framework code if the foundation is shaky. This
phase trades raw speed for confidence in the language and the conceptual
primitives.

**Topics**
- *Python warm-up (week 1):* venv / `uv`, type hints, `pydantic` v2 basics,
  `asyncio` mental model, calling an HTTP API with `httpx`.
- *Agents vs. workflows* — when each is appropriate.
- *Context engineering primitives:* **W**rite, **S**elect, **C**ompress,
  **I**solate (memorize these — every later phase comes back to them).
- *Why harnesses matter:* read the Anthropic post showing **Claude Opus 4.5
  scoring 78% in Claude Code vs. 42% in Smolagents** on the CORE benchmark.
  Same model, different harness.

**Deliverable:** A 1-page note in your repo (`notes/phase-0.md`) explaining
W-S-C-I in your own words, plus one paragraph on the harness-vs-model insight.

---

### Phase 1 — First Agents on Raw API + Claude Agent SDK (~6 weeks · ~24 hrs)

**Why:** Build the same small agent twice — once from raw HTTP calls, once
inside a polished harness — so you *feel* the difference instead of reading
about it.

**Build A (weeks 1–3): "From scratch" agent — Python + `httpx` + open model**
- Provider: **Together AI** or **Groq** with Llama 3.3 70B Instruct
  (a few cents per run; create a free account).
- Loop: prompt → tool call decision → execute tool → feed result back → repeat.
- Two tools: `read_file` and `web_search` (use Tavily free tier).
- Persist conversation to a JSON file so you can resume.

**Build B (weeks 4–6): Same agent on the Claude Agent SDK**
- Use Claude Haiku 4.5 (cheap; cents per run) — *only* for this exercise.
- Notice how `CLAUDE.md`, Skills, hooks, and the file-edit tools handle work
  you wrote by hand in Build A.
- Write up the diff.

**Deliverable:** Public GitHub repo `agent-warmup` with both implementations,
a `README.md` explaining the trade-offs, and a screenshot of each running.
This is your first portfolio piece.

---

### Phase 2 — Multi-Step Persistent Agents on LangGraph 1.0 (~8 weeks · ~32 hrs)

**Why:** LangGraph 1.0 + Deep Agents is the most mature open orchestration
runtime, model-agnostic by design — exactly what you need to stay
provider-flexible.

**Plan**
- Weeks 1–2: LangGraph fundamentals — nodes, edges, state schema, checkpointing.
- Weeks 3–5: Build a **Deep Research agent**: takes a question, plans subtasks,
  searches the web, writes notes to a virtual file system, produces a report.
- Weeks 6–8: Add **durability** — interrupt and resume mid-run; add **human-
  in-the-loop** approval before expensive tool calls.

**Provider:** Default to Llama 3.3 70B via Together AI. Test the same graph
swapped to a local Qwen 2.5 7B via Ollama to confirm provider portability.

**Deliverable:** Public repo `deep-research-agent`, plus a short blog post
(dev.to or your own) titled *"What I learned building a research agent on
LangGraph"*. Include a 60-second Loom-style screen recording.

---

### Phase 3 — Build a Thin Custom Harness (~8 weeks · ~32 hrs)

**Why:** You only understand a system when you have built a smaller version of
it. Target ~1,500 lines total — small enough to fit in your head.

**Components to implement yourself**
- Message history with token-aware compression.
- Tool registry with JSON-schema validation.
- Streaming output and cancellation.
- Simple "skills" loader (Markdown files dropped into a folder).
- A logger that records every prompt, tool call, and response (you will need
  this for Phase 4 evals).

**Provider note:** Open models behave differently from Claude on tool use —
you will discover edge cases (malformed JSON, hallucinated tool names) that
the SDK hid from you. Document them; this is exactly the kind of insight that
shows up well in interviews.

**Deliverable:** Public repo `tiny-harness`, README with architecture diagram,
and a "lessons learned" section comparing your harness to the Claude Agent SDK.

---

### Phase 4 — Evaluations (~8 weeks · ~32 hrs)

**Why:** Anyone can demo an agent. Engineers who can prove an agent works
get hired.

**Patterns to implement on top of `tiny-harness`**
1. *Single-turn evals* — fixed input → assert on output.
2. *Trajectory evals* — replay a logged run, assert on the sequence of tool
   calls and intermediate state.
3. *LLM-as-judge* — a stronger model grades a weaker model's output against
   a rubric. (Tip: judge with Claude Haiku, run with Llama — cheap and fair.)
4. *End-state evals* — only the final artifact matters; check it with code,
   not a model (e.g. "did the file get created with valid JSON?").

**Tooling:** **LangSmith free tier** to visualize traces. Optional: try
**Inspect** (UK AISI's open-source eval framework) for a non-LangChain view.

**Deliverable:** Add an `evals/` directory to `tiny-harness` with ≥20 test
cases across the four patterns and a CI-style script that prints a pass/fail
summary. (Real CI wiring waits for Phase 5.)

---

### Phase 5 — Production Hardening (ongoing)

**Why:** This is where "I built a project" becomes "I shipped a product."
Treat this phase as a checklist you revisit any time you put an agent in
front of real users.

**Checklist (work through one item every couple of weeks)**
- *Cost discipline:* token accounting per run; budget caps; cache hits.
- *Latency:* streaming, prompt-cache reuse, model routing (cheap model first,
  escalate on uncertainty).
- *Sandboxing:* run untrusted tool calls inside Docker / Firecracker / a VM.
- *Monitoring:* alerting on tool-call failure rate, p95 latency, cost spikes.
- *Resilience:* retries with backoff, idempotency, graceful tool errors.
- *Now add CI:* GitHub Actions running your eval suite on every PR.

**Deliverable per item:** a short `notes/phase-5/<topic>.md` write-up. After
3–4 of these you have raw material for a serious blog post or talk.

## Recommended Stack (Locked In)

| Concern              | Choice                                                      |
| -------------------- | ----------------------------------------------------------- |
| Language             | Python 3.12 + `uv` for env management                       |
| Orchestration        | LangGraph 1.0 + Deep Agents                                 |
| Reference harness    | Claude Agent SDK (study in Phase 1; reference thereafter)   |
| Default model        | Llama 3.3 70B Instruct via Together AI or Groq              |
| Local fallback       | Ollama with Qwen 2.5 7B or Llama 3.1 8B                     |
| Premium model (rare) | Claude Haiku 4.5 / Sonnet 4.6 — Phase 1 study + LLM-judge   |
| Observability        | LangSmith free tier; optionally Inspect                     |
| Web search tool      | Tavily free tier                                            |

## Cost Reality Check

At your usage level, **expect ~$5–15/month total** while learning:
- Together AI / Groq Llama runs: typically <$1 per long experiment.
- Claude usage limited to Phase 1 (one-time ~$5) and Phase 4 LLM-judge runs.
- Ollama is free if your machine has ≥16 GB RAM.

If even that feels high, run *everything* on Ollama and skip the Claude
exercise — you will lose some of the "feel a good harness" lesson, but the
roadmap still works.

## Progress Tracker

- [ ] Phase 0 — Mental models + Python warm-up
- [ ] Phase 1 — First agents (raw API + Claude Agent SDK)
- [ ] Phase 2 — LangGraph 1.0 deep research agent
- [ ] Phase 3 — `tiny-harness` (~1,500 lines)
- [ ] Phase 4 — Evals (single-turn, trajectory, LLM-judge, end-state)
- [ ] Phase 5 — Production hardening (ongoing)

Update this checklist as you go. Future agent sessions will read it.

## Your Next Immediate Action

**This week:** Install `uv`, create a virtualenv, and follow the official
`uv` quickstart (~30 minutes). Then read Anthropic's *"Building effective
agents"* post end-to-end and add a one-paragraph reaction to
`notes/phase-0.md`. That is your Phase 0, week 1, day 1.
