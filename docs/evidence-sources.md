# Phase 2 evidence and claim ledger

Reviewed 27 September 2026. This ledger separates published evidence, an illustrative calculation and outcomes we have not measured. Check linked guidance again before a pilot or presentation.

| Statement used in the public app | Primary source | What it supports and limits |
|---|---|---|
| Australia generated 511,000 tonnes of e-waste in 2019; projected 657,000 tonnes by 2030 | [DCCEEW, E-Stewardship in Australia](https://www.dcceew.gov.au/environment/protection/waste/e-waste) | A national baseline and projection, not RebootLoop's impact or a current-year measurement. DCCEEW also identifies lead, cadmium, mercury and persistent organic pollutants in e-waste. Do not equate one device with a quantified wildlife effect. |
| 40% of people, when asked directly about data security, considered it a barrier to recycling | [MobileMuster Annual Report 2024, p. 23](https://www.mobilemuster.com.au/wp-content/uploads/2026/02/MOB_AnnualReport2024_UPDATE.v1.pdf) | A survey result reported by MobileMuster. It is about phone recycling and should not be generalised to every device or Macquarie students. |
| E-waste is responsible for 70% of the toxic chemicals (lead, cadmium, mercury) found in landfill | [Clean Up Australia, E-waste](https://www.cleanup.org.au/e-waste/), citing [Ankit et al. 2021, *Environmental Technology & Innovation* 24, 102049](https://www.sciencedirect.com/science/article/pii/S2352186421006970) | A global estimate from a peer-reviewed review paper, not an Australia-specific or RebootLoop-measured figure — do not word it as "Australian landfills." It is a widely-repeated figure; we have not traced it past this review to an original primary measurement. |
| Disposal preparation reduces risk but may not guarantee that information is unrecoverable | [ASD Australian Cyber Security Centre, How to dispose of your device securely](https://www.cyber.gov.au/protect-yourself/securing-your-devices/how-secure-your-device/how-dispose-your-device-securely) | Supports backups, account and authenticator transfer, media removal, reset, and seeking professional help for particularly sensitive information or problems. |
| A public phone recycling pathway exists | [MobileMuster, Recycle a mobile](https://www.mobilemuster.com.au/recycle-a-mobile/) and [accepted items](https://www.mobilemuster.com.au/book-a-pickup/) | Phones and relevant accessories are accepted; iPads/tablets and other electronics are not generally accepted. Check current terms and battery instructions. RebootLoop has contacted MobileMuster for feedback, but there is no confirmed partnership. |
| A public computer/TV collection pathway exists | [DCCEEW, National Television and Computer Recycling Scheme](https://www.dcceew.gov.au/environment/protection/waste/product-stewardship/television-computer-recycling-scheme) | Designated sites serve households and small businesses. It is not a blanket endpoint for phones, consoles, tablets or all storage media. Check a site's accepted items. |
| Reference iPhone 16 128GB total 56 kg CO₂e, 80% production | [Apple, iPhone 16 Product Environmental Report, p. 10](https://www.apple.com/environment/pdf/products/iphone/iPhone_16_and_iPhone_16_Plus_PER_Sept2024.pdf) | 56 × 0.80 = **44.8 kg CO₂e** production component for that specific reference model. Apple's percentages are rounded. It is not the old device's footprint. |
| 96% of materials from phones MobileMuster collects are kept out of landfill (impact screen, phone recycling) | [MobileMuster, About us](https://www.mobilemuster.com.au/about-us/) | Linked in the app but not yet reviewed in this ledger. Confirm the current figure and wording before the showcase. |

## Carbon scenario shown in the app

The user chooses whether to assume that a working hand-me-down or reuse event actually displaced one purchase of the *reference iPhone 16 128GB*. If the assumption is **no or unknown**, the displayed scenario is 0. If **yes**, the arithmetic displays 44.8 kg CO₂e of production footprint for that new reference device. This is an illustrative comparison, not a measured or certified avoided-emissions result. It excludes repair, refurbishment, shipping, continued use, alternative phone models, changed buying behaviour and rebound effects. This scenario figure is not added to session counts. **Verified RebootLoop carbon savings: 0 kg CO₂e.**

## Impact estimates shown after a route

The Next steps redesign added an impact screen and a session line. These are estimates for a typical device, not measured outcomes, and several are still placeholders in the code:

| Figure | Current value | Status |
|---|---|---|
| Production CO₂e of a new phone | 45–60 kg | Based on Apple iPhone 16 (56 × 0.80 ≈ 45 kg) to iPhone 16 Pro Max (74 kg, similar production share ≈ 59 kg). Add the Pro Max report to the table above. |
| Production CO₂e of a new tablet | 50–90 kg | **Placeholder.** Needs manufacturer product environmental reports. |
| Production CO₂e of a new computer | 100–250 kg | **Placeholder.** Needs manufacturer product environmental reports. |
| Driving comparison | 0.17 kg CO₂e per car-km | **Placeholder.** Needs a sourced Australian average passenger-car factor. |
| Typical device weights for "e-waste diverted (est.)" | 0.1–4 kg by category | **Placeholder.** Unsourced, and see the removed-statements list below. |

The app describes the CO₂e range as "avoided" when a device is reused or repaired. That assumes a new purchase was actually displaced, which the carbon scenario above deliberately does not assume. The team should resolve this before presenting it.

## What our own evidence currently establishes

- RebootLoop placed fifth of 24 teams at Macquarie University's Pitch for the Planet and presented an A1 poster and interactive proof-of-concept. We have informal encouraging feedback, not a validation study.
- This repository contains an openly accessible self-service routing prototype and testable source code. A route is a recommendation, not a completed handover.
- MobileMuster has been contacted for feedback. No partnership response, endorsement or pilot commitment has been confirmed.
- Macquarie campus hosting and any device custody remain proposed. The 8 October showcase invitation is not campus pilot approval.
- We have no verified user conversion, repair, donation, recycling, revenue or carbon outcomes to report yet.

## Statements deliberately removed from the competition draft

- “Estimated mass diverted” based on generic device weights and generated passports: no actual diversion was observed. **Note:** the redesign reintroduced this as “e-waste diverted (est.)” in the session line; the team needs to decide whether to keep it.
- Static QR codes implying an individually retrievable, verified passport. The passport itself has since been removed; the app produces no record, only a plan the user can choose to save and a printable note for the next owner.
- Claims that other schemes offer no guidance or tracking: this was not systematically evaluated and MobileMuster itself publishes data preparation advice.
- A secondary claim about 2023 Australian e-waste tonnage sourced via a vendor, and a broad “36% data concern” claim without a precise linked source: neither is needed for the app.
- Any specific wildlife or plant benefit per phone, actual CO₂e savings, pickup availability, partner verification, price or revenue: no evidence yet.
