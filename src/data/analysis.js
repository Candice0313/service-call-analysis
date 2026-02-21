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

  executiveSummary: {
    overview:
      'A strong sales consultation that successfully converted a routine repair visit into a $1,000 deposit toward a full system replacement. The technician demonstrated deep product knowledge, excellent listening skills, and natural upsell instincts. Key gaps are in the professional framing (no name/company introduction), the maintenance plan (entirely absent as a real pitch), and the closing (payment collected but no warm sign-off or committed follow-up).',
    overallScore: 6.3,
    callDuration: '32 minutes',
    outcome: '$1,000 deposit collected — Bryant or Bosch heat pump (TBD after spousal discussion)',
    topStrength: 'Real-time pivot to Bosch when customer expressed preference for top-venting discharge — demonstrates exceptional active listening.',
    topWeakness: 'Maintenance plan was mentioned once in passing. A $150–300/year plan was never pitched despite clear buying signals from a customer focused on long-term system health.',
  },

  complianceStages: {
    introduction: {
      score: 'partial',
      numeric: 5,
      label: 'Introduction',
      commentary:
        'The technician opened with "Hey, Luis" — using the customer\'s first name signals familiarity and preparation. However, he never stated his own name or the company name at any point during the 32-minute call. He moved directly from greeting to rapport-building small talk ("I literally can\'t work from anywhere else but your home") before pivoting to the call\'s purpose. While the friendly tone is a genuine asset, a professional service call introduction should always anchor the company name to establish brand credibility and set a clear agenda before diving into findings.',
      keyQuotes: [
        {
          speaker: 'technician',
          text: 'Hey, Luis. Got you all done. The reason that took so long is I just kind of also built all your equipment options when I was out there too.',
          note: 'Opens with the customer\'s name and immediately communicates value — but no name or company introduction.',
        },
        {
          speaker: 'technician',
          text: 'I literally can\'t work from anywhere else but your home.',
          note: 'Warm rapport-building, but comes before any professional framing. Tone is more social than service-oriented at this stage.',
        },
      ],
      strengths: [
        'Used customer\'s first name immediately — shows personalization and prior relationship.',
        'Pet interaction (cats) created authentic, memorable rapport.',
        'Quickly signaled the purpose of the visit without excessive small talk.',
      ],
      improvements: [
        'Should open with full identification: "Hey Luis, it\'s [Name] from [Company] — I\'ve got your repair results and also built some equipment options while I was on-site."',
        'Company name should be stated at least once — every call is a branding touchpoint.',
        'A brief agenda statement would help: "I\'ll walk you through what I found, what I did today, and a few options for the long-term — sound good?"',
      ],
    },

    diagnosis: {
      score: 'partial',
      numeric: 6,
      label: 'Problem Diagnosis',
      commentary:
        'The technician delivered a clear before/after technical report: the system was running at 41°F (critically below the operational threshold), and he restored it with a refrigerant recharge resulting in the correct 20°F differential. He was honest about the prognosis — calling it a "band-aid" and giving a 1–2 month timeline before efficiency drops again. He also flagged ongoing mold issues inside the unit. However, this was entirely a one-way report of pre-existing findings, not a diagnostic conversation. No open-ended questions were asked about the customer\'s lived experience with the system, and the mold concern — which could be a health and safety upsell — was mentioned briefly and then dropped.',
      keyQuotes: [
        {
          speaker: 'technician',
          text: 'Remember before how we had that below freezing temperature at 41. And now we have that 20 degree difference as well. Did a really fancy charge there for you.',
          note: 'Strong before/after framing with specific data — establishes technical credibility.',
        },
        {
          speaker: 'technician',
          text: 'Definitely. Bandaid.',
          note: 'Honest, direct assessment. Sets up urgency for replacement without being aggressive.',
        },
        {
          speaker: 'technician',
          text: 'Month to two months. I think we\'ll start to see the efficiency drop again. And we still have those mold issues.',
          note: 'Creates a soft decision deadline. Mold is mentioned but not followed up on as a health concern or service opportunity.',
        },
      ],
      strengths: [
        'Before/after data comparison (41°F → 20°F differential) gives measurable credibility to the repair.',
        '"Band-aid" framing is honest and creates natural urgency for replacement without pressure.',
        '1–2 month timeline gives the customer a concrete window to make a decision.',
      ],
      improvements: [
        'Ask the customer about their experience: "Have you noticed any rooms that aren\'t cooling as well? Any unusual sounds lately?"',
        'Mold deserves a dedicated conversation: "The mold we saw inside the unit can affect air quality throughout the home — especially since you work from home. We have a remediation option if you\'d like to hear about it."',
        'Confirm the customer understood the repair outcome: "Does that make sense? Do you have any questions about what I found?"',
      ],
    },

    solutionExplain: {
      score: 'pass',
      numeric: 9,
      label: 'Solution Explanation',
      commentary:
        'The strongest stage of the call by a wide margin. The technician arrived having already built four equipment options: (1) like-for-like gas system (R32 refrigerant, 15 SEER vs. current 12 SEER, improved fan motor), (2) high-efficiency gas (most expensive, later eliminated), (3) Bryant heat pump (inverter-ducted, rare anti-defrost coil technology), and (4) a Bosch heat pump — which he built on-the-spot mid-call when Luis expressed a preference for top-venting discharge. He explained technical concepts using the customer\'s own mini split as an analogy for inverter technology, detailed all three stacked rebates (SVCE $2,500 + TECH $1,500 + potential $1–2K federal tax credit), and walked through installation timelines. The only gap was a missing summary at the end — Luis asked "can I see the prices again?" suggesting he lost track across four options.',
      keyQuotes: [
        {
          speaker: 'technician',
          text: 'I saw your mini split. It actually mimics that technology, but in a ducted sense. This one we have that same type of inverter technology where it ramps up and ramps down, except we\'re just attaching it to the ductwork.',
          note: 'Brilliant use of the customer\'s existing equipment to explain an unfamiliar concept. Removes the learning barrier instantly.',
        },
        {
          speaker: 'technician',
          text: 'TECH is one that just barely got reintroduced like yesterday. So that\'s really cool that it got introduced.',
          note: 'Creates scarcity and timeliness around the $1,500 rebate — excellent urgency without being dishonest.',
        },
        {
          speaker: 'technician',
          text: 'I can build a form of inverter that does do that.',
          note: 'Immediate response to customer\'s top-venting preference — built the Bosch estimate on the spot. Exceptional real-time adaptability.',
        },
      ],
      strengths: [
        'Proactively built 4 estimates before the call — exceptional preparation that dramatically increased close probability.',
        'Stacked three rebate layers ($1,800 line set + $2,500 SVCE + $1,500 TECH) to make the premium options feel affordable.',
        'Real-time Bosch pivot shows active listening — customer felt heard, not sold to.',
        'Explained R32 refrigerant, SEER ratings, and inverter technology in accessible, non-jargon language.',
        'Connected California regulatory trends (gas phase-outs, 200A panels, solar mandates) to create longer-term relevance for the heat pump.',
      ],
      improvements: [
        'A summary at the end of the walkthrough would help: "So to recap — you have four options ranging from $X to $Y. The two I\'d focus on given what you told me are the Bryant and the Bosch." Customer asked to see prices again, suggesting he lost track.',
        'Mid-call phone interruption at ~19:36 broke momentum at a critical decision moment. Should be avoided or apologized for explicitly.',
      ],
    },

    upsell: {
      score: 'pass',
      numeric: 8,
      label: 'Upsell Attempts',
      commentary:
        'The technician wove multiple upsells organically throughout the call, each tied to a specific customer concern or benefit — none felt forced. The duct sealing promotion was positioned as both a rebate enabler (required for the TECH $1,500) and a standalone efficiency improvement. The grille swap was introduced directly in response to Luis\'s noise complaint and backed by a specific data point (20% quieter). The repair cost waiver (~$1,900) was used as a smart signing incentive. Financing was introduced proactively before the customer asked. The one gap: the Energy Star federal tax credit ($1,000–$2,000) was mentioned but immediately disclaimed ("you have to deal with completely on your own, we can\'t help you") — a missed chance to provide simple guidance that would have made it feel like value-added support.',
      keyQuotes: [
        {
          speaker: 'technician',
          text: 'I did do a test one time on no change other than the grill, and it did decrease noise by 20% when I did that.',
          note: 'Data-backed upsell directly tied to a concern Luis just raised. This is textbook need-based selling.',
        },
        {
          speaker: 'technician',
          text: 'It would be so much easier if I didn\'t have to charge for the repair today and if we actually just basically considered it as a complimentary thing for you.',
          note: 'Frames the repair cost waiver as doing the customer a favor — clever way to lower the signing threshold.',
        },
        {
          speaker: 'technician',
          text: 'If you qualify for it, it\'s either a thousand dollars or $2,000. If we don\'t have Energy Star on it, you can\'t have that rebate.',
          note: 'Good urgency on the tax credit, but then says "we can\'t help you" — abandons the customer at the critical moment.',
        },
      ],
      strengths: [
        'Every upsell arose organically from the customer\'s stated concerns (noise, efficiency, gas leaks).',
        'Grille swap backed by a personal test result — specific, credible, memorable.',
        'Duct sealing positioned as both a rebate enabler and a home improvement — double value framing.',
        'Repair cost waiver as signing incentive is highly effective and doesn\'t require discounting the equipment.',
      ],
      improvements: [
        'On the Energy Star tax credit: instead of "you handle it on your own," offer a simple resource: "I\'ll include a one-page guide in the email with exactly what to submit — takes about 10 minutes."',
        'Attic relocation ($4,000+ add-on) was discussed verbally but not added to the estimate Luis would take home to discuss with his wife.',
        'Could have explicitly asked Luis if he wanted the grille swap added as a line item: "Want me to throw that on as an option in the estimate?"',
      ],
    },

    maintenancePlan: {
      score: 'partial',
      numeric: 4,
      label: 'Maintenance Plan Offer',
      commentary:
        'The maintenance program was mentioned exactly once in the entire 32-minute call, at 9:38, and only as a secondary clause within the warranty explanation: "If you\'re on this maintenance program with us, we actually completely match the manufacturer warranties." No plan name, no annual price, no visit schedule, no description of what\'s included, and no direct ask to enroll. This is the single largest missed revenue opportunity in the call. Luis demonstrated multiple buying signals for a maintenance plan: he asked about heat pump longevity, expressed concern about gas leaks, prioritized long-term efficiency, and works from home meaning system downtime is directly costly to him. A typical HVAC maintenance plan at $150–300/year over a 10-year warranty period represents $1,500–$3,000 in recurring revenue that was left entirely on the table.',
      keyQuotes: [
        {
          speaker: 'technician',
          text: 'If you\'re on this maintenance program with us, we actually completely match the manufacturer warranties. It\'s essentially 10 years parts and 10 year manufacturer warranty.',
          note: 'The only mention of the maintenance plan — used as a warranty enhancement footnote rather than a dedicated pitch. No name, no price, no ask.',
        },
        {
          speaker: 'customer',
          text: 'I like the idea of the thing being quieter and more efficient. And not having gas leaks in the future.',
          note: 'Clear long-term system health orientation — a direct buying signal for a maintenance plan that went unaddressed.',
        },
      ],
      strengths: [
        'Connected the maintenance plan to a highly compelling benefit (10-year warranty match) — the right hook, just not followed through.',
        'Timing of the mention (during warranty section) was natural and relevant.',
      ],
      improvements: [
        'Needs a dedicated standalone pitch after the equipment walkthrough: "One more thing before we talk numbers — our maintenance plan. It\'s $X/year, we come out twice annually, and it\'s what keeps your warranty intact for the full 10 years."',
        'Use Luis\'s stated priorities as the pitch: "Since you work from home, the last thing you need is the system going down in August. The plan means we catch issues before they become failures."',
        'Present maintenance plan as a line item in the estimate so Luis\'s wife sees it when reviewing.',
        'Ask directly: "Is that something you\'d want included with the install?"',
      ],
    },

    closing: {
      score: 'partial',
      numeric: 6,
      label: 'Closing & Thank You',
      commentary:
        'The closing contained several strong mechanics: the technician narrowed the options to two (at the customer\'s direction), offered to waive the repair cost as a signing incentive, provided a clear deposit path ($1,000) or financing alternative, cited the 3-day right to cancel to reduce risk, and ultimately collected $1,000 despite the customer\'s initial "No, we won\'t do that today." That objection reversal — reframing the deposit as a 15-day refundable credit — was skillful. However, the final exchange of the call is Luis handing over his credit card security code ("It\'s on the back") with the technician responding only "Great." No thank you, no name used, no confirmation of the next step, no summary of what was agreed. For a call that ran 32 minutes and ended with a payment, the last 15 seconds should have been the warmest part.',
      keyQuotes: [
        {
          speaker: 'customer',
          text: 'No, we won\'t do that today. Just send me the, I\'ll talk to her and then we\'ll make a decision.',
          note: 'Initial objection to the deposit. The technician successfully reversed this by reframing it as a refundable credit.',
        },
        {
          speaker: 'technician',
          text: 'Within 15 days I will completely credit that back towards it.',
          note: 'Smart objection handling — removes the risk of committing before spousal discussion.',
        },
        {
          speaker: 'technician',
          text: 'Great.',
          note: 'The final word of the call after collecting payment. No thank you, no next steps confirmed, no warm close.',
        },
      ],
      strengths: [
        'Successfully reversed "no deposit today" objection by reframing as a 15-day refundable credit.',
        'Offered financing as a zero-down alternative, removing the deposit barrier entirely.',
        '3-day right to cancel mention builds trust and reduces buyer\'s remorse.',
        'Narrowed to two estimates at Luis\'s request — respects the customer\'s decision process.',
      ],
      improvements: [
        'End with a proper thank you: "Luis, thank you so much — it was a real pleasure. You\'re going to love the new system."',
        'Confirm the next step explicitly: "I\'ll send those updated estimates over by end of day today. Does [email] still work for you?"',
        'Set a follow-up: "When do you think you and your wife might have a chance to look them over? I can give you a quick call Thursday if that works."',
        'Summarize what was agreed: "So I\'ve got your $1,000 down, I\'ll clean up the Bryant and Bosch estimates with the duct seal included, and we\'ll go from there."',
      ],
    },
  },

  salesInsights: [
    {
      type: 'done',
      description:
        'Created urgency effectively: framed the repair as a "band-aid" with a 1–2 month failure timeline, giving Luis a concrete reason to act on replacement now rather than defer indefinitely.',
    },
    {
      type: 'done',
      description:
        'Exceptional real-time adaptability: when Luis mentioned preferring top-venting discharge, the technician immediately said "I can build a form of inverter that does do that" and built a new Bosch estimate on the spot. This responsiveness is rare and builds significant trust.',
    },
    {
      type: 'done',
      description:
        'Rebate stacking was presented compellingly: $1,800 (copper line set) + $2,500 (SVCE) + $1,500 (TECH, just reintroduced "yesterday") + potential $1–2K federal tax credit — each layer progressively lowered the perceived net cost of the premium options.',
    },
    {
      type: 'done',
      description:
        'Used the customer\'s own mini split to explain inverter technology: "It actually mimics that technology, but in a ducted sense." Zero jargon, instant comprehension — the best kind of technical explanation.',
    },
    {
      type: 'done',
      description:
        'Repair cost waiver (~$1,900) was framed as a mutual convenience, not a discount: "It would be so much easier if I didn\'t have to charge for the repair today." Customer perceives it as a favor rather than a concession — powerful psychological framing.',
    },
    {
      type: 'missed',
      description:
        'Maintenance plan was not sold. Luis said "I like the idea of the thing being quieter and more efficient — and not having gas leaks in the future." This is a direct buying signal for a recurring service plan. At $150–300/year, a 10-year plan represents $1,500–$3,000 in missed recurring revenue.',
    },
    {
      type: 'missed',
      description:
        'Mold issue was flagged once and dropped ("we still have those mold issues"). For a customer who works from home, indoor air quality is a high-priority concern. A duct cleaning or air quality assessment package could have been introduced here.',
    },
    {
      type: 'missed',
      description:
        'Energy Star federal tax credit ($1,000–$2,000) was introduced but immediately abandoned: "you have to deal with completely on your own, we can\'t help you." A simple one-page submission guide included in the follow-up email would have turned this into a strong differentiator vs. competitors.',
    },
    {
      type: 'missed',
      description:
        'No referral ask at close. Luis was engaged for 32 minutes, paid $1,000, and expressed genuine satisfaction. A single question — "Do you know any neighbors dealing with aging HVAC systems?" — at this moment of peak goodwill could generate significant pipeline.',
    },
    {
      type: 'missed',
      description:
        'No follow-up appointment set. Luis said he\'d discuss with his wife, but no specific callback time was booked. Without a scheduled follow-up, deal momentum depends entirely on the customer initiating contact — a significant risk for a $25K+ purchase decision.',
    },
  ],

  segmentBoundaries: {
    introduction:    { start: 0,        end: 70000   },
    diagnosis:       { start: 70000,    end: 130000  },
    solutionExplain: { start: 130000,   end: 578000  },
    maintenancePlan: { start: 578000,   end: 640000  },
    upsell:          { start: 640000,   end: 1750000 },
    closing:         { start: 1750000,  end: 1938000 },
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
