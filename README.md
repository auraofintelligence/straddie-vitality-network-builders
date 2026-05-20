# Straddie Vitality Network Builders

A public-facing, Markdown-first builder toolkit for Straddie / Minjerribah health and wellbeing project planning.

The toolkit helps venues, community groups, health partners, sponsors and public agencies collect structured planning notes for HBOT, sauna, food, movement, access, grants, media and evidence review. Each builder creates a clean `.md` file that can be copied, downloaded and handed to an agent, grant writer, venue partner, noticeboard editor or project reviewer.

## Public Boundary

This repo is designed for public and government-facing planning. Public pages avoid private working notes, personal chat context and unsupported medical claims. Builder outputs separate public-safe information from private or approval-gated notes.

HBOT is treated as a supervised health technology with strict safety, professional oversight and claim-boundary requirements. The preferred technical direction is an air-pressurised chamber with mask-fed PADS, a Personalised Atmosphere Delivery System that can adjust flow and gas mix while keeping the chamber environment safer for sensors, monitoring and electronics. Sauna and heat exposure are treated as wellbeing and performance-support practices where evidence is promising but should not be overstated.

Contribution-credit or time-token systems are not implemented in this repo. Any future contribution economy model remains inactive until there is clear legal and regulatory support.

## Pages

- `index.html` - public gateway and evidence summary
- `evidence.html` - public evidence hub
- `sources.html` - human-readable source register
- `builders/index.html` - builder directory
- `builders/*.html` - individual Markdown builders
- `docs/research-baseline.md` - current evidence summary and source links
- `sources/source-register.json` - source register used by the scaffold

## Local Use

Open `index.html` directly in a browser, or run a simple local server:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.
