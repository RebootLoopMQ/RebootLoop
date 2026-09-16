# Five-Screen User Journey

The full prototype flow, screen by screen — what the user sees, what they're asked, what they press, and what happens next.

## Screen 1 — Start

| | |
|---|---|
| **User sees** | RebootLoop hero line, one-line safety promise, single "Assess a device" button. No login, no account, no personal data requested. |
| **Copy** | "Your old device still has value. Let's find its safest next life." Sub-line: takes under two minutes, guidance only — does not erase data or certify destruction. |
| **Button** | "Assess a device" |
| **Next** | Straight to Screen 2. No loading or sign-up step. |

## Screen 2 — Device Assessment

| | |
|---|---|
| **User sees** | A short multi-step form, one question group per card, visible progress indicator. Target: complete in ≤90 seconds. |
| **Questions** | Ownership → Device type → Power state → Physical safety → Condition → Goal → Data sensitivity |
| **Button** | "See my recommended route" (disabled until required fields are answered) |
| **Next** | Answers pass to the routing logic. A hazard or non-owned answer can short-circuit straight to a stop screen; otherwise proceeds to Screen 3. |

## Screen 3 — Recommended Route

| | |
|---|---|
| **User sees** | One clear route headline (e.g. "Prepare, then donate"), a plain-language reason, an expandable "why this route" panel. |
| **Copy** | Hazard/ownership stops render as a distinct red-flag screen: "Return to owner / authorised IT." |
| **Button** | "View my preparation checklist" (or, for a stop case, "What do I do now?") |
| **Next** | Moves to Screen 4 for any route including self- or partner-preparation. Stop cases end the flow here by design — no checklist exists for a device that isn't the user's to dispose of. |

## Screen 4 — Secure Preparation Checklist

| | |
|---|---|
| **User sees** | A platform-specific checklist (iPhone/iPad, Android, Windows, Mac, or removable media) with tick-boxes and direct links to official vendor guidance. Persistent warning banner above it. |
| **Copy** | "These steps reduce risk but do not guarantee data is unrecoverable." Steps: back up, transfer MFA, remove accounts, remove SIM/SD, factory reset, verify setup screen. |
| **Button** | "I've completed these steps → Generate my passport" |
| **Next** | Ticking the box records "self-declared complete" (not verified). Moves to Screen 5. |

## Screen 5 — QR Passport + Impact

| | |
|---|---|
| **User sees** | A passport card: random ID, device category, condition class, recommended route, assurance label (guided / self-declared / partner-verified), QR code. Below: a one-line personal impact statement and the illustrative dashboard. |
| **Copy** | "This record shows a route and declared preparation status. It is not proof that data is unrecoverable." |
| **Button** | "Save / screenshot my passport" and "Assess another device" |
| **Next** | End of demo path, or restart at Screen 1 for a second device. |

---

## Example journey A — Primary demo: working phone, donation

| Screen | What happens |
|---|---|
| 1. Start | Click "Assess a device" |
| 2. Assessment | Owned = yes · iPhone · works · safety normal · good condition · goal: donate · sensitivity: everyday |
| 3. Route | "Prepare, then donate" — device works, is reusable, holds only everyday data |
| 4. Checklist | iPhone steps: back up, transfer MFA, unpair Apple Watch if relevant, sign out, erase, handle eSIM, confirm "Hello" screen |
| 5. Passport | Category "Phone" · route "Donate" · assurance "Self-declared" · impact: "One device moved toward a safer circular outcome" |

## Example journey B — Difficult scenario: non-functioning laptop, highly sensitive data

| Screen | What happens |
|---|---|
| 1. Start | Click "Assess a device" for the second device |
| 2. Assessment | Owned = yes · Windows PC · does not power on · safety normal · goal: recycle · sensitivity: highly sensitive |
| 3. Route | "Professional destruction, then responsible recycling" — a self-service reset cannot be verified on a device that won't power on, and the data is highly sensitive |
| 4. Checklist | No self-prepare checklist offered. Escalation message directs to a qualified data-destruction service — no "securely erased" language anywhere |
| 5. Passport | Assurance capped at "Guided" (no preparation could be completed) · route: "Professional destruction → recycling" |

This second journey is the one worth showing if someone asks "what if it's more complicated than that?" — it demonstrates the safety-first logic, not just the happy path.
