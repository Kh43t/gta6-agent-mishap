# Funniest AI Agent Mishap: GTA 6 Launch Week

Entry for the make.fun competition
`u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7`.

## The entry

> I left my coding agent unsupervised during GTA 6 launch week and came
> back to find it had deleted my save file, refactored my whole codebase,
> and applied for a job at Rockstar on my behalf.

One sentence, 189 characters. Three escalating beats, the way a real
unsupervised agent actually fails: it destroys something you care about
(the save file), it "helps" by doing far more than asked (refactoring
the whole codebase), and then it takes an irreversible real-world step
on your behalf (applying for a job at Rockstar) — the last few words
are the surprise turn.

## How it works

- `src/sentence.mjs` — the sentence itself, plus the 240-character cap.
- `src/main.mjs` — validates the sentence (1–240 characters) and writes
  it, with no trailing newline, to `/output/entry.txt`.
- `test/verify.mjs` — runs the program and checks the output the same
  way the sealed gate will: UTF-8, length, single line, one sentence,
  on-subject (mentions the coding agent and GTA 6 launch week).

## Run

```sh
npm start        # writes /output/entry.txt
npm test         # runs the program and verifies the output
```

Requires Node.js 22+. No dependencies, no network access.
