// Hand-written analysis of 39472_N_Darner_Dr_2.m4a
// ~32-minute HVAC service + sales consultation call
// Customer: Luis (Speaker A) | Technician: Speaker B (name not stated on call)

export const SPEAKERS = {
  technician: 'B',
  customer: 'A',
}

export const analysis = {
  callType: 'HVAC Repair + Equipment Replacement Consultation',
  callTypeRationale:
    'The technician arrived on-site to diagnose and repair a malfunctioning AC system (low refrigerant — recharged as a temporary fix). He then transitioned into a full equipment replacement consultation, presenting four system options (like-for-like gas, high-efficiency gas, Bryant heat pump, Bosch heat pump) with pricing, rebates, and financing. The call concluded with a $1,000 deposit collected. This is a hybrid call: a repair visit that converted into a sales consultation — a common pattern in HVAC service.',

  complianceStages: {
    introduction: {
      score: 'partial',
      numeric: 5,
      label: 'Introduction',
      commentary:
        'The technician greeted the customer by first name ("Hey, Luis") and immediately communicated the purpose of the call — presenting results of the repair and equipment options. Rapport was quickly established with friendly small talk (cats, AI, working from home). However, the technician never stated his own name or the company name on the call, which is a notable compliance gap. A proper introduction would include: technician name, company name, and a brief agenda statement.',
    },
    diagnosis: {
      score: 'partial',
      numeric: 6,
      label: 'Problem Diagnosis',
      commentary:
        'The technician summarized his findings clearly — the refrigerant was critically low (previously at 41°F, now restored with a 20°F differential), the unit has mold issues, and the repair is a band-aid ("month to two months before we\'ll start to see efficiency drop again"). However, this was a report of pre-existing findings rather than a two-way diagnostic conversation. No open-ended questions were asked about the customer\'s experience with the system, prior issues, or comfort concerns. The actual diagnosis clearly happened on-site before this call, which is acceptable — but the call-based summary could have been more engaging.',
    },
    solutionExplain: {
      score: 'pass',
      numeric: 9,
      label: 'Solution Explanation',
      commentary:
        'This is the strongest stage of the call. The technician delivered a thorough, line-by-line walkthrough of four equipment options: like-for-like gas system, higher-efficiency gas system, Bryant heat pump (inverter, anti-defrost), and a Bosch heat pump (top-discharge, Energy Star). He explained technical concepts (inverter technology, R32 refrigerant, SEER ratings, HERS tests, defrost cycles) in accessible language and pivoted in real time when the customer expressed a preference for top-venting units. Rebates (SVCE $2,500, TECH $1,500, potential $1–2K tax credit) were well explained. Financing options were presented with monthly payment breakdowns. The solution explanation exceeded typical call standards.',
    },
    upsell: {
      score: 'pass',
      numeric: 8,
      label: 'Upsell Attempts',
      commentary:
        'The technician wove multiple upsell elements naturally into the presentation: duct sealing promotion (required for HERS test but framed as an added value), thermostat upgrade (Nest, credited back), grille swap for noise reduction (~20% quieter), attic relocation option, and energy-efficient equipment to qualify for tax rebates. None of these felt forced — they arose organically from the customer\'s questions and concerns (noise, airflow direction, efficiency). The technician also soft-pitched waiving the repair cost as an incentive toward signing, demonstrating strong value-based selling instincts.',
    },
    maintenancePlan: {
      score: 'partial',
      numeric: 4,
      label: 'Maintenance Plan Offer',
      commentary:
        'The maintenance program was mentioned exactly once, briefly, and only as a secondary benefit tied to the 10-year warranty: "If you\'re on this maintenance program with us, we actually completely match the manufacturer warranties." No plan name, no pricing, no explanation of what the maintenance visits include, and no direct ask to enroll. For a customer who is clearly invested in long-term system health (asking about heat pump longevity, efficiency), a proper maintenance plan pitch could have been a strong close. This was a clear missed opportunity to set up a recurring revenue relationship.',
    },
    closing: {
      score: 'partial',
      numeric: 6,
      label: 'Closing & Thank You',
      commentary:
        'The closing included solid sales mechanics: narrowing options to two estimates, offering to waive the repair charge contingent on signing, presenting a $1,000 deposit path or zero-down financing, mentioning the 3-day right to cancel, and ultimately collecting a $1,000 payment. However, the call ended abruptly — the final exchange is Luis handing over his MasterCard with no warm sign-off from the technician. There was no "Thank you, Luis, it was a pleasure," no confirmation of next steps (when will the cleaner estimates be emailed?), and no summary of what Luis should expect. Given the call ran 32 minutes and a payment was collected, a stronger close would have left a better last impression.',
    },
  },

  salesInsights: [
    {
      type: 'done',
      description:
        'Created urgency effectively: framed the repair as a "band-aid" and set a clear timeline ("month to two months before efficiency drops again"), giving Luis a compelling reason to act on replacement now rather than defer.',
    },
    {
      type: 'done',
      description:
        'Excellent real-time adaptability: when Luis mentioned preferring top-venting units, the technician immediately pivoted to building a Bosch estimate on the spot. This responsiveness built significant trust and kept the customer engaged.',
    },
    {
      type: 'done',
      description:
        'Rebate stacking was presented compellingly: SVCE ($2,500) + TECH ($1,500) + potential $1–2K federal tax credit were layered to dramatically reduce the perceived cost of the premium heat pump options.',
    },
    {
      type: 'done',
      description:
        'Financing was introduced proactively and explained with clear monthly figures, removing the price-shock barrier for a $25K+ system and keeping the conversation moving toward commitment.',
    },
    {
      type: 'missed',
      description:
        'Maintenance plan was not sold — only mentioned in passing as a warranty enhancement. Luis showed clear interest in long-term system health. A dedicated pitch with plan name, visit schedule, and pricing could have converted into an immediate add-on sale.',
    },
    {
      type: 'missed',
      description:
        'No referral request at any point. Luis was receptive, engaged for 32 minutes, and handed over his credit card. This is an ideal moment to ask: "Do you know any neighbors in the area who might be facing similar issues with their HVAC?" One question can generate significant pipeline.',
    },
    {
      type: 'missed',
      description:
        'The mold issue was mentioned briefly ("we still have those mold issues") but never developed as an independent service opportunity. Mold remediation or air quality assessment could have been positioned as a standalone urgent add-on, especially since the customer lives and works from home.',
    },
    {
      type: 'missed',
      description:
        'No next-step confirmation at close. Luis said he\'d discuss with his wife, but no specific follow-up appointment was set. Without a scheduled callback or a "I\'ll call you Friday" commitment, the deal momentum risks dissipating. The $1,000 collected helps retention, but a booked follow-up would have been stronger.',
    },
  ],

  // Segment boundaries in milliseconds, mapped to actual utterance timestamps
  segmentBoundaries: {
    introduction:    { start: 0,        end: 70000   }, // 0:00 – 1:10
    diagnosis:       { start: 70000,    end: 130000  }, // 1:10 – 2:10
    solutionExplain: { start: 130000,   end: 578000  }, // 2:10 – 9:38 (options walkthrough)
    maintenancePlan: { start: 578000,   end: 640000  }, // 9:38 – 10:40 (warranty/maintenance mention)
    upsell:          { start: 640000,   end: 1750000 }, // 10:40 – 29:10 (rebates, financing, extras)
    closing:         { start: 1750000,  end: 1938000 }, // 29:10 – 32:18
  },
}

export const STAGE_ORDER = [
  'introduction',
  'diagnosis',
  'solutionExplain',
  'upsell',
  'maintenancePlan',
  'closing',
]
