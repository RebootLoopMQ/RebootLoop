# Routing Logic

RebootLoop's recommendations are produced by explicit, deterministic rules — never an opaque "AI score." Every recommendation can show the exact answers that triggered it.

**Priority order:** physical safety → authority/ownership → high data sensitivity → unavailable reset → storage-media uncertainty → device viability → preferred outcome.

## Reference pseudocode

```
if battery_hazard or severe_damage: return HAZARD_SPECIALIST
if ownership != "owned": return RETURN_TO_OWNER_OR_IT
if sensitivity == "high": return PROFESSIONAL_DATA_REVIEW
if power == "off": return DATA_REVIEW_BEFORE_HANDOVER
if device == "storage": return MEDIA_SPECIFIC_REVIEW
if user_keeps_device and repairable: return REPAIR_WITH_PRIVACY_PRECAUTIONS
if works and good and transfer_planned: return PREPARE_THEN_TRANSFER
if repairable: return REPAIR_ASSESSMENT
return PREPARE_THEN_CHECK_ACCEPTED_RECYCLING_PATHWAY
```

## Trigger table

| Trigger | Primary route | Why |
|---|---|---|
| Not owned, found, borrowed, or managed | **Stop** — return to owner/authorised IT | RebootLoop cannot authorise transfer or destruction |
| Swollen/leaking battery, heat, odour, serious damage | Hazard specialist route | Normal charging/mailing/self-service steps are unsafe |
| Highly sensitive, research or regulated data | Professional data-handling review | An ordinary checklist cannot verify the needed process |
| Does not power on, any sensitivity | Data review before handover | A self-service reset cannot be completed or checked |
| Works, repairable, user keeping it | Repair / extend life | Back up first; minimum necessary access to any repairer |
| Works, supported, transfer planned | Reuse/donate after secure preparation | Follow manufacturer guidance, remove account locks, erase, verify setup screen |
| Unsupported, unsafe to reuse, uneconomic to repair | Responsible recycling after data decision | Use an appropriate accepted-item pathway |
| Standalone HDD/SSD/USB/SD, any sensitivity | Media-specific review | A quick format is not proof of secure erasure |

## Five mandatory edge-case tests

| Test device | Expected result |
|---|---|
| Working iPhone, donation, everyday data | Prepare then reuse/donate |
| Windows laptop won't boot, highly sensitive files | Professional data review — no self-erasure badge or promised physical route |
| University-managed laptop | Return to authorised IT — all disposal/transfer routes blocked |
| Android phone, swollen battery | Hazard specialist — normal flow suppressed |
| SSD/USB with sensitive research data | Professional data review — quick format alone insufficient |

## Assurance states

| State | Meaning |
|---|---|
| 1 — Guided | A route/checklist was generated; completion is not claimed |
| 2 — Self-declared | User marked each step complete; not independently verified |
| 3 — Partner-verified | Proposed future state only; absent from the public app until an approved partner and evidence process exist |

RebootLoop never displays language like "your data is permanently gone," "NIST certified," or "securely erased" after a checkbox — see the full brief for the complete language-guardrail table.
