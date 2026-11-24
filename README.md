# One-Liner Marathon

[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/WuYuanJie-211/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/WuYuanJie-211/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

## Entry

> I finally organized my life into a spreadsheet, and the spreadsheet asked to be transferred to a different employee.

One line, 116 characters. The punchline: the tool meant to fix my chaos files a transfer request — even the spreadsheet wants out.

## How it works

`main.ts` writes the entry line to `/output/entry.txt`, enforcing the gate
(exactly one line, 1–280 UTF-8 characters, not only whitespace) before writing
and re-verifying the file on disk after writing.
