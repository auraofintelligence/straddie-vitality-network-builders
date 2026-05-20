# Straddie Vitality Network Builders

A public-facing, Markdown-first builder toolkit for Straddie / Minjerribah health and wellbeing project planning.

The public front door now keeps the workflow small: start a Straddie wellbeing co-op note, check the venue, prepare funding, publish a public notice and record opt-in support. Specialist HBOT, sauna, evidence, media and policy builders remain in the repo for reviewers and agents, but the public journey points people to the source repos that already carry those deeper topics.

## Public Boundary

This repo is designed for public and government-facing planning. Public pages avoid private working notes, personal chat context and unsupported medical claims. Builder outputs separate public-safe information from private or approval-gated notes.

HBOT is treated as supervised pressure physiology with professional oversight, source dates and clear device boundaries. The preferred technical direction is a normal-air pressurised chamber with mask-fed PADS, a Personalised Atmosphere Delivery System that can adjust flow and gas mix while keeping the chamber environment safer for sensors, monitoring and electronics. Sauna is treated as a family of different heat tools: dry, infrared and wet/steam heat each need their own dose, sweat, detox, hydration, mineral and cool-down records. Public support can bridge into the Strange But True Community Honour Board through opt-in profile, project and public-wallet records. XRP is the common public transaction track, ICI-on-Solana is the I See Infinity token example, other people or projects may use their own meme/community token, and C-hour stays as a future legal/policy lane.

The evidence hub uses first-principles language: oxygen pressure changes dissolved plasma oxygen, sauna changes heat load and circulation, skin cools and protects, and detox is mainly exposure reduction plus liver, kidney and gut function. Public pages should explain mechanisms plainly without turning them into treatment promises.

Contribution-credit or time-token systems are not implemented in this repo. Any future contribution economy model remains inactive until there is clear legal and regulatory support.

## Pages

- `index.html` - simplified public gateway for starting Straddie wellbeing co-ops
- `evidence.html` - public evidence hub
- `sources.html` - human-readable source register
- `builders/index.html` - five-note co-op starter builder directory
- `builders/*.html` - individual Markdown builders
- `docs/research-baseline.md` - current evidence summary and source links
- `sources/source-register.json` - source register used by the scaffold

## Local Use

Open `index.html` directly in a browser, or run a simple local server:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.
