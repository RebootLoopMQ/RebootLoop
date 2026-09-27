# Safety & Trust Model

RebootLoop's core defensible claim: **it guides, records and routes. It does not erase a device, certify data destruction, guarantee non-recoverability, or endorse an unverified partner.**

## Threat model

| Risk | Why it matters | Control |
|---|---|---|
| **False assurance** | A user may transfer a device believing a checklist guarantees erasure | Persistent disclaimer; Guided and Self-declared states only; high-sensitivity escalation; no certificate language |
| **Unsafe battery handling** | Damaged lithium batteries can create fire/injury risk | Safety screen comes first; normal flow stops; no charging, puncturing, or ordinary post instructions |
| **Local-file sharing** | A user may mistake a downloadable passport for a certified record or share it inadvertently | JSON/print only on request; explicit local/self-report labels; no owner or hardware fields |
| **Identifier leakage** | Serial/IMEI/location could link a passport to a person or valuable device | Random local ID only; field allowlist; no free text or contact data |
| **Outdated instructions** | Menus and account-lock processes change over time | Official source links only; guidance version + review date; retirement of stale flows |
| **Unverified partner** | A poor operator could mishandle data or materials | Due diligence, accepted-item checks, service scope, evidence requirements — no implied endorsement |
| **Impact inflation** | Clicks could be mistaken for completed circular outcomes | In-tab assessment/declaration counts only; verified outcomes shown as zero; carbon scenario kept separate |
| **Accessibility/exclusion** | A visual or technical flow may exclude some users | Plain language, keyboard navigation, visible focus, screen-reader labels, print alternative; real user review still needed |

## Device passport trust model

The passport is a **minimal journey record** — explicitly not an ownership document, appraisal, warranty, or data-destruction certificate.

**Safe public fields:**
- Random passport ID (e.g. `RL-7F3A-92C1`)
- Device category (e.g. "Laptop — Windows")
- Recommended route
- Assurance label (Guided / Self-declared)
- Record date and explanatory note

**Never included:**
- Serial number, IMEI, MAC address, or student ID
- Owner name, email, phone number, or precise location
- Free-text notes containing personal information
- Account identifiers, credentials, or screenshots
- A claim that RebootLoop performed the erase
- "Certified" language unless a named, authorised partner supplied evidence

There is no public record registry, verification endpoint or QR code. The local ID is not a proof of authenticity. A future partner-verified state would require an approved partner and evidence process before any claim appears.

## Language guardrails

RebootLoop never displays absolute or certification-implying language. Examples:

| Never display | Use instead |
|---|---|
| "Your data is permanently gone." | "You completed the selected preparation checklist; residual recovery risk may remain." |
| "NIST certified." | "The risk-tier concept is informed by NIST media-sanitisation guidance; this prototype is not a compliance certification." |
| "Securely erased" (after a checkbox) | "Preparation complete — self-declared." |
| "Certified recycler" (without due diligence) | "Potential pathway — verify eligibility, accepted items and current provider status." |
| "Carbon saved" (from an unvalidated estimate) | "Illustrative production footprint of one reference model, conditional on a genuinely displaced purchase; no verified RebootLoop savings." |

## Why this matters for a pilot or partner conversation

Every control above exists because the MVP's honesty *is* the product's credibility. A production pilot would still require MQ privacy/security review, partner due diligence, accessible design testing, and version-controlled guidance before any real device or real user data is involved.
