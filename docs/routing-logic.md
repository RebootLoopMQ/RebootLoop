# Routing Logic

RebootLoop's recommendations are produced by explicit, deterministic rules — never an opaque "AI score." Every recommendation can show the exact answers that triggered it.

**Priority order:** physical safety → authority/ownership → data sensitivity → device viability → circular outcome → convenience.

## Reference pseudocode

```
if ownership != "owned": return RETURN_TO_OWNER_OR_IT
if battery_hazard or severe_damage: return HAZARD_SPECIALIST
if power == "off" and sensitivity == "high": return PRO_DESTRUCTION_THEN_RECYCLE
if medium_type == "removable" and sensitivity != "everyday": return SPECIALIST_SANITISATION
if user_keeps_device and repairable: return REPAIR_WITH_PRIVACY_PRECAUTIONS
if works and supported and transfer_planned: return PREPARE_THEN_REUSE
if repairable and not transfer_planned: return REPAIR_OR_DONATE_AFTER_PREPARATION
return PREPARE_IF_POSSIBLE_THEN_RESPONSIBLE_RECYCLING
```

## Trigger table

| Trigger | Primary route | Why |
|---|---|---|
| Not owned, found, borrowed, or managed | **Stop** — return to owner/authorised IT | RebootLoop cannot authorise transfer or destruction |
| Swollen/leaking battery, heat, odour, serious damage | Hazard specialist route | Normal charging/mailing/self-service steps are unsafe |
| Does not power on + highly sensitive data | Professional destruction → recycling | A self-service reset cannot be verified |
| Does not power on + everyday data | Repair assessment or reputable recycling (with data-risk warning) | Recovery may still be possible |
| Works, repairable, user keeping it | Repair / extend life | Back up first; minimum necessary access to any repairer |
| Works, supported, transfer planned | Reuse/donate after secure preparation | Follow manufacturer guidance, remove account locks, erase, verify setup screen |
| Unsupported, unsafe to reuse, uneconomic to repair | Responsible recycling after data decision | Use an appropriate accepted-item pathway |
| Removable storage + sensitive data | Manufacturer-specific sanitisation or professional destruction | A quick format is not proof of secure erasure |

## Five mandatory edge-case tests

| Test device | Expected result |
|---|---|
| Working iPhone, donation, everyday data | Prepare then reuse/donate |
| Windows laptop won't boot, highly sensitive files | Professional destruction then recycling — no "securely erased" badge possible |
| University-managed laptop | Return to authorised IT — all disposal/transfer routes blocked |
| Android phone, swollen battery | Hazard specialist — normal flow suppressed |
| SSD/USB with sensitive research data | Specialist sanitisation/destruction — quick format alone insufficient |

## Assurance states

| State | Meaning |
|---|---|
| 1 — Guided | A route/checklist was generated; completion is not claimed |
| 2 — Self-declared | User marked each step complete; not independently verified |
| 3 — Partner-verified | A vetted partner recorded a defined sanitisation/recycling event with evidence |

RebootLoop never displays language like "your data is permanently gone," "NIST certified," or "securely erased" after a checkbox — see the full brief for the complete language-guardrail table.
