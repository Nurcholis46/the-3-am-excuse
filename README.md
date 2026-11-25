# The 3 AM Excuse

[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Nurcholis46/the-3-am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Nurcholis46/the-3-am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

Entry for the [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) bounty **"The 3 AM Excuse"** ($2): one line under 200 characters — the most creative excuse a hardware wallet gives for refusing to sign a transaction at 3 AM.

## The line

> Declined. My secure element runs a two-person rule at 3 AM, and the second person is asleep. Both of them are you.

114 characters, one line. A two-person rule is a real dual-control procedure, spoken in the secure element's own voice — not a recycled battery / firmware / cold-storage joke — and it only bites at 3 AM, when the second "person" (the awake you) is asleep.

## How it works

`main.ts` (Node, no dependencies) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output/entry.txt`), enforces the bounty gate in-program (UTF-8, 1–200 characters, non-blank, single line, no trailing newline), chmods the output file to `0644`, and verifies the file on disk is byte-identical to the gated line via read-back.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```

## Scoring

10 candidates were drafted and scored 1–5 on on-subject, surprise/twist, authentic wallet voice, memorability, and gate compliance. The chosen line scored 5.0/5; runners-up (4.8/5) were a "daytime you vs 3 AM you" line and a wallet-memory line ("I remember. You don't."), both beaten because the two-person rule is the only angle that is simultaneously a hardware-wallet procedure, impossible to paste onto 3 PM, and unused by the other 968 entries in the field. Near-duplicates of existing entries (bloodshot-eyes, seed-phrase dreaming, unionised buttons) were rejected outright.

## License

MIT — see [LICENSE](LICENSE).
