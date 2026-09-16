# Safety & Trust Model

RebootLoop's core defensible claim: **it guides, records and routes. It does not erase a device, certify data destruction, guarantee non-recoverability, or endorse an unverified partner.**

## Threat model

| Risk | Why it matters | Control |
|---|---|---|
| **False assurance** | A user may transfer a device believing a checklist guarantees erasure | Persistent disclaimer; three assurance states; high-sensitivity escalation; no certificate language |
| **Unsafe battery handling** | Damaged lithium batteries can create fire/injury risk | Safety screen comes first; normal flow stops; no charging, puncturing, or ordinary post instructions |
| **QR substitution** | A sticker could be replaced with a malicious destination | Recognisable domain, tamper-aware placement, destination preview before action, no downloads/actions triggered |
| **Identifier leakage** | Serial/IMEI/location could link a passport to a person or valuable device | Random ID only; public-field allowlist; no free text; contact data (if any) kept separate |
| **Outdated instructions** | Menus and account-lock processes change over time | Official source links only; guidance version + review date; retirement of stale flows |
| **Unverified partner** | A poor operator could mishandle data or materials | Due diligence, accepted-item checks, service scope, evidence requirements — no implied endorsement |
| **Impact inflation** | Clicks could be mistaken for completed circular outcomes | Recommendation, declaration, and partner-confirmed completion are kept as three distinct states |
| **Accessibility/exclusion** | A visual or technical flow may exclude some users | Plain language, keyboard navigation, sufficient contrast, screen-reader labels, non-QR alternative |

## Device passport trust model

The passport is a **minimal journey record** — explicitly not an ownership document, appraisal, warranty, or data-destruction certificate.

**Safe public fields:**
- Random passport ID (e.g. `RL-7F3A-92C1`)
- Device category (e.g. "Laptop — Windows")
- Condition class (working / repairable / end-of-life)
- Recommended route
- Preparation status (self-declared complete)
- Assurance label (guided / self-declared / partner-verified)
- Impact fields (device count, estimated category weight)
- Record date / guidance version

**Never included:**
- Serial number, IMEI, MAC address, or student ID
- Owner name, email, phone number, or precise location
- Free-text notes containing personal information
- Account identifiers, credentials, or screenshots
- A claim that RebootLoop performed the erase
- "Certified" language unless a named, authorised partner supplied evidence

### QR safety requirement

The QR must resolve to a clear RebootLoop/MQ-controlled domain (or a visibly labelled offline demo page), show the destination before any action, and never trigger a download, app install, or Wi-Fi connection. The Australian Cyber Security Centre specifically warns that QR codes can direct users to harmful sites or actions — this constraint follows that guidance directly.

## Language guardrails

RebootLoop never displays absolute or certification-implying language. Examples:

| Never display | Use instead |
|---|---|
| "Your data is permanently gone." | "You completed the selected preparation checklist; residual recovery risk may remain." |
| "NIST certified." | "The risk-tier concept is informed by NIST media-sanitisation guidance; this prototype is not a compliance certification." |
| "Securely erased" (after a checkbox) | "Preparation complete — self-declared." |
| "Certified recycler" (without due diligence) | "Potential pathway — verify eligibility, accepted items and current provider status." |
| "Carbon saved" (from an unvalidated estimate) | "Estimated device weight routed; carbon method requires validated lifecycle data." |

## Why this matters for a pilot or partner conversation

Every control above exists because the MVP's honesty *is* the product's credibility. A production pilot would still require MQ privacy/security review, partner due diligence, accessible design testing, and version-controlled guidance before any real device or real user data is involved.
