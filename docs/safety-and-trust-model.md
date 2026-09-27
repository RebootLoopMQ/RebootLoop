# Safety & Trust Model

RebootLoop's core defensible claim: **it guides, records and routes. It does not erase a device, certify data destruction, guarantee non-recoverability, or endorse an unverified partner.**

## Threat model

| Risk | Why it matters | Control |
|---|---|---|
| **False assurance** | A user may transfer a device believing a checklist guarantees erasure | Persistent disclaimer; Guided and Self-declared states only; high-sensitivity escalation; no certificate language |
| **Unsafe battery handling** | Damaged lithium batteries can create fire/injury risk | Safety screen comes first; normal flow stops; no charging, puncturing, or ordinary post instructions |
| **Shared plans and notes** | A user may mistake a saved plan or the printed next-owner note for a certified record, or share it inadvertently | Saved only when the user chooses email, text, share or copy; the note says RebootLoop did not check the device; no owner or hardware fields |
| **Identifier leakage** | Serial/IMEI/location could link a saved plan or note to a person or valuable device | Device category only; fixed text from the app; no free text or contact data |
| **Outdated instructions** | Menus and account-lock processes change over time | Official source links only; guidance version + review date; retirement of stale flows |
| **Unverified partner** | A poor operator could mishandle data or materials | Due diligence, accepted-item checks, service scope, evidence requirements — no implied endorsement |
| **Impact inflation** | Clicks could be mistaken for completed circular outcomes | In-tab counts only; impact figures labelled as estimates for a typical device that apply once the job is done; stop routes get no impact screen. **Open issue:** the impact screen and session line show estimated CO₂e "avoided" and e-waste "diverted" for a route, not a verified outcome. See [Open issues](#open-issues) |
| **Accessibility/exclusion** | A visual or technical flow may exclude some users | Plain language, keyboard navigation, visible focus, screen-reader labels, print alternative; real user review still needed |

## Saved plan and next-owner note

The app no longer generates a device passport or any stored record. Two things can leave the browser, and only when the user acts:

- **Saved plan** (email, text, share sheet or copy): the recommended route, the estimated impact range where one applies, the two next steps with their official links, and a link back to the app.
- **Next-owner note** (print, transfer routes only): which setup screen a properly reset device should show, which account lock means stop, and a statement that RebootLoop did not check the device.

Neither is an ownership document, appraisal, warranty or data-destruction certificate.

**Never included:**
- Serial number, IMEI, MAC address, or student ID
- Owner name, email, phone number, or precise location
- Free-text notes containing personal information
- Account identifiers, credentials, or screenshots
- A claim that RebootLoop performed the erase
- "Certified" language unless a named, authorised partner supplied evidence

There is no record registry, verification endpoint or QR code. A future partner-verified state would require an approved partner and evidence process before any claim appears.

## Language guardrails

RebootLoop never displays absolute or certification-implying language. Examples:

| Never display | Use instead |
|---|---|
| "Your data is permanently gone." | "You completed the selected preparation checklist; residual recovery risk may remain." |
| "NIST certified." | "The risk-tier concept is informed by NIST media-sanitisation guidance; this prototype is not a compliance certification." |
| "Securely erased" (after a checkbox) | "Preparation complete — self-declared." |
| "Certified recycler" (without due diligence) | "Potential pathway — verify eligibility, accepted items and current provider status." |
| "Carbon saved" (from an unvalidated estimate) | "Illustrative production footprint of one reference model, conditional on a genuinely displaced purchase; no verified RebootLoop savings." |

## Open issues

The next-steps and impact redesign introduced wording the guardrails above do not yet cover. The team should decide before the showcase whether to change the app or the guardrails:

- The impact screen says CO₂e from making a new device is "avoided" when this one is reused or repaired, and the session line shows "CO₂e avoided (est.)" and "e-waste diverted (est.)". The guardrail above says to avoid "carbon saved" language from an unvalidated estimate, and the [evidence ledger](./evidence-sources.md) had removed "estimated mass diverted".
- The tablet and computer CO₂e ranges, the device weights and the car-km comparison are placeholders in the code and are not yet sourced.

## Why this matters for a pilot or partner conversation

Every control above exists because the MVP's honesty *is* the product's credibility. A production pilot would still require MQ privacy/security review, partner due diligence, accessible design testing, and version-controlled guidance before any real device or real user data is involved.
