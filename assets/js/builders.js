(function () {
  const statusOptions = [
    ["Draft - needs review", "Draft - needs review"],
    ["Evidence checked", "Evidence checked"],
    ["Ready for partner review", "Ready for partner review"],
    ["Public approved", "Public approved"],
    ["Private only", "Private only"]
  ];

  const modelOptions = [
    ["Private household or small group", "Private household or small group"],
    ["Public community access", "Public community access"],
    ["Venue-based service", "Venue-based service"],
    ["Club or tourism partnership", "Club or tourism partnership"],
    ["Sponsor-supported pilot", "Sponsor-supported pilot"],
    ["Public/private partnership", "Public/private partnership"],
    ["Aged-care or health-provider pathway", "Aged-care or health-provider pathway"],
    ["Research or evidence-gathering pilot", "Research or evidence-gathering pilot"]
  ];

  const evidenceOptions = [
    ["Recognised medical use", "Recognised medical use"],
    ["Government or regulator guidance", "Government or regulator guidance"],
    ["Mechanism or physiology source", "Mechanism or physiology source"],
    ["Systematic review", "Systematic review"],
    ["Human trial or controlled study", "Human trial or controlled study"],
    ["Peer-reviewed evidence", "Peer-reviewed evidence"],
    ["Observational evidence", "Observational evidence"],
    ["Cellular repair marker", "Cellular repair marker"],
    ["Fasting or nutrition intervention", "Fasting or nutrition intervention"],
    ["Public health cost data", "Public health cost data"],
    ["Promising but early research", "Promising but early research"],
    ["Anecdotal or local report", "Anecdotal or local report"],
    ["Source check needed", "Source check needed"]
  ];

  const yesNoOptions = [
    ["Not yet checked", "Not yet checked"],
    ["Yes", "Yes"],
    ["No", "No"],
    ["Partly", "Partly"],
    ["Not applicable", "Not applicable"]
  ];

  const baseMeta = [
    { name: "draftStatus", label: "Draft status", type: "select", group: "File status", options: statusOptions, helper: "Keep draft status visible in the Markdown output." },
    { name: "preparedBy", label: "Prepared by / organisation", type: "text", group: "File status", placeholder: "Venue, group, sponsor, agency or project lead" },
    { name: "sourceDate", label: "Source date", type: "date", group: "File status", helper: "Use the date the source information was checked or supplied." },
    { name: "reviewBy", label: "Needs review by", type: "text", group: "File status", placeholder: "Clinical reviewer, venue manager, insurer, council, sponsor, community reviewer" }
  ];

  const boundaryFields = [
    { name: "publicSafe", label: "Public-safe wording", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Plain public summary that can appear on a website, noticeboard, grant note or media brief." },
    { name: "privateNotes", label: "Private or approval-gated notes", type: "textarea", group: "Private / approval-gated", rows: 4, private: true, placeholder: "Commercial, clinical, personal, permission-sensitive or unresolved notes that stay private until approved." },
    { name: "approvalGate", label: "Approval gate before publishing", type: "textarea", group: "Private / approval-gated", rows: 3, private: true, placeholder: "Who must approve this before it becomes public?" }
  ];

  const sourceTrailFields = [
    { name: "sourceTitle", label: "Source title or evidence name", type: "text", group: "Evidence and source trail", placeholder: "Report, study, policy page, quote, inspection, interview or dataset" },
    { name: "sourceUrl", label: "Source URL or reference", type: "url", group: "Evidence and source trail", placeholder: "https://..." },
    { name: "evidenceClass", label: "Evidence class", type: "select", group: "Evidence and source trail", options: evidenceOptions },
    { name: "claimBoundary", label: "Evidence and testing boundary", type: "textarea", group: "Evidence and source trail", rows: 3, placeholder: "What can be said now, what is a reasonable hypothesis to test, and what review is needed before public use?" }
  ];

  window.VITALITY_BUILDERS = [
    {
      id: "project-profile",
      title: "Project Profile Builder",
      file: "straddie-vitality-project-profile.md",
      page: "project-profile.html",
      description: "Defines the project, audience, model, public benefit and private boundary.",
      claimBoundary: "Use this file to describe the project, public benefit, evidence signal and review pathway in plain public language.",
      fields: [
        ...baseMeta,
        { name: "projectName", label: "Project name", type: "text", group: "Project identity", placeholder: "e.g. Amity Sauna Pilot, Venue HBOT/PADS Readiness, Community Recovery Hub" },
        { name: "projectModel", label: "Project model", type: "select", group: "Project identity", options: modelOptions },
        { name: "location", label: "Location or service area", type: "text", group: "Project identity", placeholder: "Amity, Dunwich, Point Lookout, island-wide, visiting service" },
        { name: "purpose", label: "Wellbeing need", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "What public health, wellbeing, recovery, inclusion or local resilience need does this respond to?" },
        { name: "audience", label: "Intended participants", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "Residents, elders, visitors, athletes, workers, carers, club members, private citizens or another group." },
        { name: "publicBenefit", label: "Public benefit", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "How the project could support health, connection, safe tourism, ageing well, recovery, local work or better public information." },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "nextSteps", label: "Next practical steps", type: "textarea", group: "Next actions", rows: 4, placeholder: "Evidence to check, partners to contact, venue checks, grant pathway, public notice or agent task." }
      ]
    },
    {
      id: "research-evidence",
      title: "Research And Evidence Builder",
      file: "straddie-vitality-research-evidence.md",
      page: "research-evidence.html",
      description: "Turns studies, government data and local evidence into a source-dated evidence trail.",
      claimBoundary: "Evidence notes must distinguish proven, associated, promising, uncertain and locally testable lines.",
      fields: [
        ...baseMeta,
        { name: "researchQuestion", label: "Research question", type: "textarea", group: "Evidence focus", rows: 3, placeholder: "What practical question is this source supposed to answer: mechanism, dose, safety, exposure, cost, access or local usefulness?" },
        { name: "topic", label: "Topic", type: "select", group: "Evidence focus", options: [["HBOT / mask-fed PADS", "HBOT / mask-fed PADS"], ["Sauna / heat exposure", "Sauna / heat exposure"], ["Skin barrier / sweat / filter function", "Skin barrier / sweat / filter function"], ["Fasting / metabolic switching", "Fasting / metabolic switching"], ["Telomeres / cellular senescence", "Telomeres / cellular senescence"], ["Stem or progenitor cell signalling", "Stem or progenitor cell signalling"], ["Food and movement", "Food and movement"], ["Dementia and ageing", "Dementia and ageing"], ["Toxicity / exposure", "Toxicity / exposure"], ["Athletic performance", "Athletic performance"], ["Microbiome / gut health", "Microbiome / gut health"], ["Access and inclusion", "Access and inclusion"], ["Health-system cost", "Health-system cost"], ["Funding or policy", "Funding or policy"]] },
        ...sourceTrailFields,
        { name: "mechanism", label: "Mechanism or pathway", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Explain the body pathway in plain language: oxygen pressure, HIF/VEGF, telomeres, senescent cells, stem/progenitor cells, dry/infrared/wet heat, sweat and detox flow, skin barrier exchange, fasting, liver/kidney/gut excretion, hormone disruption, inflammation, food, movement or data flow." },
        { name: "finding", label: "Main finding", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "What does the source actually say, and what does it not say?" },
        { name: "limits", label: "Review notes and cautions", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Systematic review limits, small sample, observational design, animal study, old data, conflict of interest, Straddie fit, clinical relevance or reviewer notes." },
        { name: "measurement", label: "What should be measured locally?", type: "textarea", group: "Next actions", rows: 4, placeholder: "Dose, attendance, symptoms, sleep, energy, recovery, safety incidents, access, cost, referrals, source dates, consent or public/private boundary." },
        { name: "publicLine", label: "Public wording", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "A clear sentence suitable for public pages, grant notes or media briefs. Keep mechanisms, source dates and review status visible." },
        { name: "questionsRaised", label: "Questions this raises", type: "textarea", group: "Next actions", rows: 4, placeholder: "What should a venue, clinician, researcher, council, sponsor, insurer or community reviewer ask next?" },
        ...boundaryFields
      ]
    },
    {
      id: "self-experiment",
      title: "Privacy-Preserving Self-Experiment Builder",
      file: "straddie-vitality-self-experiment.md",
      page: "self-experiment.html",
      description: "Turns safe personal or venue experiments into consent-aware Markdown notes that protect raw data.",
      claimBoundary: "Self-experiment notes should define the variable, baseline, comparison, consent, privacy layer, review gate and repeat-test plan.",
      fields: [
        ...baseMeta,
        { name: "experimentName", label: "Experiment name", type: "text", group: "Experiment identity", placeholder: "Sauna cool-down test, fasting window check, beach walk plus PADS, subtle-material signal map" },
        { name: "experimentType", label: "Experiment type", type: "select", group: "Experiment identity", options: [["Everyday self-experiment", "Everyday self-experiment"], ["Venue routine test", "Venue routine test"], ["N-of-1 repeated comparison", "N-of-1 repeated comparison"], ["Review-gated protocol", "Review-gated protocol"], ["Subtle-material hypothesis", "Subtle-material hypothesis"], ["Privacy-preserving aggregate study", "Privacy-preserving aggregate study"]] },
        { name: "question", label: "Question being tested", type: "textarea", group: "Experiment identity", rows: 3, placeholder: "What practical question is being tested, in one clean sentence?" },
        { name: "variable", label: "Variable or exposure", type: "textarea", group: "Protocol", rows: 4, placeholder: "Sauna minutes, cool-down, fasting window, added-sugar pause, PADS gas mix or flow, pressure, scent, light, sound, haptics, material ID, walk location, breathwork or sleep routine." },
        { name: "baseline", label: "Baseline period", type: "textarea", group: "Protocol", rows: 3, placeholder: "What is measured before the change? Include ordinary routine, dates, sleep, food, stress, activity and any venue conditions." },
        { name: "comparison", label: "Comparison or repeat plan", type: "textarea", group: "Protocol", rows: 4, placeholder: "A/B, baseline/intervention/recovery, repeat days, randomisation, blinding where practical, washout period, or simple before/after with source dates." },
        { name: "signals", label: "Signals to collect", type: "textarea", group: "Data and privacy", rows: 4, placeholder: "Sleep, HRV, resting heart rate, SpO2, skin temperature, sweat response, mood, energy, pain, focus, reaction time, grip strength, fasting window, symptoms or attendance." },
        { name: "privacyLayer", label: "Privacy layer", type: "textarea", group: "Data and privacy", rows: 4, placeholder: "Raw data stays with participant or venue. Shared output is aggregated, de-identified, thresholded, consented, source-dated and removable where possible." },
        { name: "safetyReview", label: "Safety and review gates", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Heat, pressure, fasting, medication, pregnancy, diabetes, kidney or heart issues, cognitive impairment, clinical reviewer, venue supervisor, stop rules and escalation path." },
        { name: "subtleSignal", label: "Subtle or etheric hypothesis", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "If the intuition is energetic, symbolic, ritual, material, place-based or field-like, translate it into logged variables and measurable signals." },
        ...sourceTrailFields,
        { name: "publicOutput", label: "Public output", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "What can be shared publicly: method, aggregate pattern, source trail, venue learning, next test or invitation to participate." },
        ...boundaryFields,
        { name: "nextSteps", label: "Next experiment steps", type: "textarea", group: "Next actions", rows: 4, placeholder: "Check sources, define consent, run baseline, test once, repeat, aggregate, review, publish a public-safe update." }
      ]
    },
    {
      id: "venue-readiness",
      title: "Venue Readiness Builder",
      file: "straddie-vitality-venue-readiness.md",
      page: "venue-readiness.html",
      description: "Checks whether a venue could host sauna, HBOT/PADS, food, movement or recovery activity.",
      claimBoundary: "Venue readiness collects practical checks for safety, access, operations and reviewer follow-up.",
      fields: [
        ...baseMeta,
        { name: "venueName", label: "Venue name", type: "text", group: "Venue identity", placeholder: "Club, clinic, accommodation, community hall, sports facility, private site or mobile node" },
        { name: "venueType", label: "Venue type", type: "select", group: "Venue identity", options: [["Community club", "Community club"], ["Health or aged-care setting", "Health or aged-care setting"], ["Tourism or accommodation venue", "Tourism or accommodation venue"], ["Outdoor public space", "Outdoor public space"], ["Private site", "Private site"], ["Mobile service base", "Mobile service base"], ["Other", "Other"]] },
        { name: "serviceFit", label: "Service fit", type: "checkbox-group", group: "Venue identity", options: [["hbot", "HBOT / mask-fed PADS"], ["sauna", "Sauna"], ["food", "Healthy food"], ["movement", "Exercise / movement"], ["recovery", "Recovery or rest"], ["education", "Education or workshops"], ["noticeboard", "Public notices"]] },
        { name: "siteStrengths", label: "Site strengths", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Access, privacy, water, power, shade, parking, staff, community trust, existing visitors, nearby services." },
        { name: "siteGaps", label: "Site gaps", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Power limits, heating-appliance controls, ventilation, supervision, insurance, accessibility, noise, privacy, approvals, cleaning, maintenance." },
        { name: "supervision", label: "Supervision and staffing", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Who would supervise, what training is needed, when health professionals are required, and which parts require supervised operation." },
        { name: "communityFit", label: "Community fit", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "How the venue model supports residents, visitors, elders, workers, athletes or public/private access." },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "nextSteps", label: "Next venue checks", type: "textarea", group: "Next actions", rows: 4, placeholder: "Site visit, quote, insurer call, council check, clinical review, sponsor brief or public consultation." }
      ]
    },
    {
      id: "hbot-deployment",
      title: "HBOT Deployment Builder",
      file: "straddie-vitality-hbot-deployment.md",
      page: "hbot-deployment.html",
      description: "Collects HBOT/PADS device, supervision, breathing-gas, sensor, safety, evidence and deployment notes.",
      claimBoundary: "HBOT/PADS evidence lines require qualified health review. The preferred design is a normal-air pressurised chamber with mask-fed breathing gas, adjustable flow and mix, sensor logging, source-dated repair biology and clear device controls.",
      fields: [
        ...baseMeta,
        { name: "deploymentName", label: "HBOT deployment name", type: "text", group: "HBOT identity", placeholder: "Pilot name, unit label or venue concept" },
        { name: "deploymentModel", label: "Deployment model", type: "select", group: "HBOT identity", options: modelOptions },
        { name: "intendedUse", label: "Intended use", type: "select", group: "HBOT identity", options: [["Recognised medical indication", "Recognised medical indication"], ["Clinical-adjacent wellness review", "Clinical-adjacent wellness review"], ["Athletic recovery research", "Athletic recovery research"], ["Healthy ageing research", "Healthy ageing research"], ["Venue feasibility only", "Venue feasibility only"], ["Not yet defined", "Not yet defined"]] },
        { name: "mechanismLine", label: "Mechanism being tested", type: "textarea", group: "HBOT identity", rows: 4, placeholder: "What is the practical mechanism: pressure increasing dissolved plasma oxygen, low-oxygen tissue support, HIF/VEGF signalling, mitochondrial function, inflammation, recovery monitoring or another reviewed pathway?" },
        { name: "cellularRepairSignals", label: "Cellular repair signals to review", type: "textarea", group: "HBOT identity", rows: 4, placeholder: "Telomere length, senescent-cell markers, stem/progenitor-cell mobilisation, nitric oxide pathways, angiogenesis, cognition, energy, sleep, recovery or tissue-healing markers. Note source and dose." },
        { name: "doseFrame", label: "Pressure, gas and dose frame", type: "textarea", group: "PADS and sensor architecture", rows: 4, placeholder: "Pressure target such as 2 ATA if reviewed: like the dry pressure of being about 10 metres underwater while breathing through scuba, but inside a chamber with mask-fed gas. Include breathing-gas mix, flow range, session time, frequency, stop rules and who can change settings." },
        { name: "deviceStatus", label: "Device status", type: "textarea", group: "Risk, safety and approvals", rows: 3, placeholder: "Device type, ARTG/TGA status if known, pressure range, normal-air chamber status, mask-fed delivery, supplier, service plan, operating instructions and atmosphere notes." },
        { name: "padsDesign", label: "Mask-fed PADS design", type: "textarea", group: "PADS and sensor architecture", rows: 4, placeholder: "How the sealed mask, gas mixer, pressure regulator, flow controls, mix controls and fail-safes work. Keep chamber air separated from breathing gas where possible." },
        { name: "flowMixControls", label: "Flow and mix controls", type: "textarea", group: "PADS and sensor architecture", rows: 4, placeholder: "What can be adjusted, who can adjust it, what limits apply, what gets logged, and what stops the system if oxygen, CO2, pressure or symptoms move outside the safe range?" },
        { name: "sensorIntegration", label: "Biosensors and electronics integration", type: "textarea", group: "PADS and sensor architecture", rows: 4, placeholder: "CO2, SpO2, pulse, HRV, breath temperature, flow rate, cabin oxygen, camera, audio or other sensors. Note pairing, logging, calibration, privacy and chamber-safe electronics assumptions." },
        { name: "electronicsBoundary", label: "Electronics safety boundary", type: "textarea", group: "PADS and sensor architecture", rows: 4, placeholder: "What electronics can enter the chamber, what must stay outside, what must be medical-grade or chamber-safe, and how spark, heat, charging and cable risks are controlled." },
        { name: "qualifiedCare", label: "Qualified care and supervision", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Who is qualified to supervise? What clinic, medical, emergency or referral pathway is required?" },
        { name: "fireSafety", label: "Atmosphere and device boundary", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Keep the core distinction clear: normal-air pressurised chamber, mask-fed breathing gas. Record chamber oxygen, mask seal, flow/mix limits, CO2 management, sensor safety, device instructions, training, emergency procedure and device-specific atmosphere controls." },
        { name: "screening", label: "Participant screening and consent", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Contraindications, consent, medication checks, pressure issues, anxiety, mobility, carer support." },
        ...sourceTrailFields,
        { name: "publicLine", label: "Public-safe HBOT/PADS line", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "Use accurate device wording. Example: This model explores supervised normal-air pressurised HBOT/PADS with mask-fed breathing gas, adjustable flow/mix and sensor logging." },
        ...boundaryFields,
        { name: "nextSteps", label: "Next HBOT/PADS checks", type: "textarea", group: "Next actions", rows: 4, placeholder: "Clinical reviewer, regulator check, supplier evidence, PADS spec, sensor safety review, insurer, venue, safety drill, source update." }
      ]
    },
    {
      id: "sauna-model",
      title: "Sauna Model Builder",
      file: "straddie-vitality-sauna-model.md",
      page: "sauna-model.html",
      description: "Shapes dry, infrared, wet/steam or hybrid sauna models with detox, recovery, sport, access and safety records.",
      claimBoundary: "Sauna models are different heat tools. Record modality, temperature, humidity, session dose, sweat response, detox pathway, replacement plan, cool-down and source trail.",
      fields: [
        ...baseMeta,
        { name: "saunaName", label: "Sauna model name", type: "text", group: "Sauna identity", placeholder: "Community sauna, club sauna, mobile sauna, infrared room, recovery hub" },
        { name: "saunaType", label: "Sauna type", type: "select", group: "Sauna identity", options: [["Traditional dry / Finnish sauna", "Traditional dry / Finnish sauna"], ["Infrared / radiant sauna", "Infrared / radiant sauna"], ["Steam room / wet heat", "Steam room / wet heat"], ["Dry sauna with humidity bursts", "Dry sauna with humidity bursts"], ["Mobile sauna", "Mobile sauna"], ["Hybrid hot/cold recovery", "Hybrid hot/cold recovery"], ["Not yet chosen", "Not yet chosen"]] },
        { name: "audience", label: "Intended audience", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "Residents, athletes, visitors, elders, club members, workers, carers or private groups." },
        { name: "heatMechanism", label: "Heat transfer and modality", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Dry hot air, infrared radiant heat, wet/steam humidity, humidity bursts, sweat evaporation, skin blood flow, heart-rate load, heat tolerance, detox flow, relaxation, social routine or athlete acclimation." },
        { name: "saunaSettings", label: "Dose settings to record", type: "textarea", group: "Evidence and source trail", rows: 3, placeholder: "Temperature, humidity, session time, rounds, cool-down, distance from infrared panels, ventilation, towel/sweat collection method, hydration and minerals." },
        { name: "wellbeingUse", label: "Wellbeing use", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Relaxation, social connection, winter tourism, athletic heat adaptation, detox and repair routine, recovery, healthy ageing support. Name the use, evidence signal and what will be measured." },
        { name: "safetyPlan", label: "Heat safety and screening", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Hydration, electrolytes, heat limits, humidity load, cool-down, slip risk, alcohol policy, medical cautions, pregnancy, fainting risk, staff supervision, privacy and emergency response." },
        { name: "operations", label: "Operations and maintenance", type: "textarea", group: "Risk, safety and approvals", rows: 3, placeholder: "Booking, cleaning, power or wood source, water, ventilation, temperature/humidity logging, staffing, maintenance and fire control." },
        ...sourceTrailFields,
        { name: "skinSweatBoundary", label: "Sweat, detox and skin route", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Sweat volume or rate, skin comfort, barrier care, hydration, minerals, metals or chemical source trail, exposure reduction, bowel regularity, liver/kidney/gut supports and what is measured." },
        { name: "athleteAngle", label: "Athlete or performance angle", type: "textarea", group: "Evidence and source trail", rows: 3, placeholder: "Sauna type, heat acclimation, endurance, recovery, scheduling after exercise, sweat loss, hydration, coach review and health-professional review." },
        ...boundaryFields,
        { name: "nextSteps", label: "Next sauna checks", type: "textarea", group: "Next actions", rows: 4, placeholder: "Venue inspection, supplier quote, safety policy, grant pathway, public notice or partner brief." }
      ]
    },
    {
      id: "detox-repair-routine",
      title: "Detox And Repair Routine Builder",
      file: "straddie-vitality-detox-repair-routine.md",
      page: "detox-repair-routine.html",
      description: "Plans a recovery routine around heat, detox flow, skin care, rest, hydration, food, movement and evidence.",
      claimBoundary: "Detox is part of the repair stack when it is tied to exposure reduction, sweat and skin flow, hydration, minerals, liver/kidney/gut routes, fasting spectrum, recovery and measurement.",
      fields: [
        ...baseMeta,
        { name: "routineName", label: "Routine name", type: "text", group: "Routine identity", placeholder: "Visitor reset, athlete recovery, locals wellbeing night, supervised repair protocol" },
        { name: "routineAudience", label: "Who is it for?", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "General adults, athletes, older residents, workers, carers, visitors or a screened group." },
        { name: "routineParts", label: "Routine parts", type: "checkbox-group", group: "Routine identity", options: [["sauna", "Sauna / heat"], ["hbot", "HBOT / mask-fed PADS"], ["fasting", "Fasting spectrum"], ["sugar-pause", "Added-sugar pause"], ["skin-filter", "Skin filter care"], ["food", "Healthy food"], ["movement", "Movement"], ["rest", "Rest"], ["hydration", "Hydration and electrolytes"], ["social", "Social connection"], ["education", "Education"], ["source-trail", "Source trail"]] },
        { name: "practicalFlow", label: "Practical flow", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "What happens before, during and after the routine? Keep it simple and safe." },
        { name: "exposureContext", label: "Exposure or toxin context", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Known or suspected exposure context: PFAS, heavy metals, plastics, mould, smoke, work exposure, food quality or unknown. Keep it source-based and non-alarmist." },
        { name: "detoxBoundary", label: "Detox and repair pathway", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Incoming exposure reduction, sweat and skin flow, liver processing, kidney filtering, gut exit routes, bowel regularity, fasting spectrum, hydration, minerals, sleep, movement and repair biology." },
        { name: "fastingSpectrum", label: "Fasting spectrum", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Time-restricted eating, overnight fast, added-sugar pause, ultra-processed-food pause, fasting-mimicking diet, or supervised 2-5 day no-food fast. Note what belongs in public use and what is review-gated." },
        { name: "skinFilterCare", label: "Skin filter care", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Barrier-friendly washing, hydration, minerals, sweat/cool-down, skin irritation checks, safe products, sun/heat exposure, fungal or wound cautions, and how the filter is maintained." },
        { name: "repairSupports", label: "Repair supports", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Water, electrolytes, fibre, protein, whole foods, fermented foods if suitable, sleep, walking, strength, social connection, cooling, rest and refeeding." },
        { name: "refeedingPlan", label: "Refeeding and stop plan", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "How food returns after fasting, electrolyte checks, symptoms that stop the routine, who reviews the plan, and what support is needed for higher-risk participants." },
        { name: "screening", label: "Safety screening", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Heat risk, pressure risk, hydration, medication, diabetes, kidney or heart issues, pregnancy, breastfeeding, eating disorder history, fertility concerns, mobility, anxiety, consent and when to stop." },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "nextSteps", label: "Next routine checks", type: "textarea", group: "Next actions", rows: 4, placeholder: "Source review, clinical advice, session test, venue trial, participant feedback, public notice." }
      ]
    },
    {
      id: "food-movement",
      title: "Food And Movement Builder",
      file: "straddie-vitality-food-movement.md",
      page: "food-movement.html",
      description: "Connects healthy food, movement and social routines to the wider wellbeing model.",
      claimBoundary: "Food, fasting windows and exercise can support general health and dementia risk reduction, while individual health advice belongs with qualified professionals.",
      fields: [
        ...baseMeta,
        { name: "programName", label: "Food or movement program name", type: "text", group: "Program identity", placeholder: "Shared table link, beach walk, mobility class, athlete recovery meal, garden-to-table session" },
        { name: "programType", label: "Program type", type: "checkbox-group", group: "Program identity", options: [["healthy-food", "Healthy food"], ["fasting-window", "Time-restricted eating"], ["added-sugar-pause", "Added-sugar pause"], ["movement", "Movement"], ["strength", "Strength"], ["mobility", "Mobility"], ["walking", "Walking"], ["social", "Social meal"], ["education", "Education"], ["local-produce", "Local produce"]] },
        { name: "audience", label: "Participants", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "Who would join, and what barriers might they face?" },
        { name: "healthLink", label: "Health and wellbeing link", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "How food quality, fasting windows, movement and social connection support energy, sleep, inflammation, metabolic health, microbiome resilience or the broader vitality model." },
        { name: "microbiomeAngle", label: "Food and microbiome angle", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Fibre, protein, fermented foods if suitable, regular meals, hydration, reduced food waste, local produce or gut-friendly routine. Keep public wording general unless evidence is specific." },
        { name: "accessNeeds", label: "Access needs", type: "textarea", group: "Access and inclusion", rows: 3, placeholder: "Cost, transport, mobility, sensory comfort, cultural safety, dietary needs, carers, timing." },
        { name: "foodSafety", label: "Food, fasting and activity safety", type: "textarea", group: "Risk, safety and approvals", rows: 3, placeholder: "Food safety, allergies, hydration, electrolytes, diabetes, medication timing, fasting suitability, weather, heat load, first aid, safe exercise level." },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "nextSteps", label: "Next food and movement steps", type: "textarea", group: "Next actions", rows: 4, placeholder: "Partner kitchen, local produce, trainer, risk check, public notice, grant note." }
      ]
    },
    {
      id: "inclusion-access",
      title: "Inclusion And Access Builder",
      file: "straddie-vitality-inclusion-access.md",
      page: "inclusion-access.html",
      description: "Checks affordability, mobility, cultural safety, privacy, consent and public access.",
      claimBoundary: "Access notes should make participation safer and fairer without assuming one model fits everyone.",
      fields: [
        ...baseMeta,
        { name: "accessFocus", label: "Access focus", type: "text", group: "Access focus", placeholder: "Elders, low-income locals, athletes, visitors, carers, workers, disability access, First Nations access, private citizens" },
        { name: "barriers", label: "Likely barriers", type: "textarea", group: "Access and inclusion", rows: 4, placeholder: "Cost, transport, stigma, mobility, cultural safety, privacy, health screening, language, digital access, timing." },
        { name: "supports", label: "Practical supports", type: "textarea", group: "Access and inclusion", rows: 4, placeholder: "Subsidies, local nights, carer access, transport, ramps, quiet sessions, gender/privacy options, public information." },
        { name: "consent", label: "Consent and privacy", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "What consent is needed? What data is collected? What stays private or approval-gated?" },
        { name: "publicAccess", label: "Public/private access model", type: "select", group: "Access focus", options: modelOptions },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "nextSteps", label: "Next access checks", type: "textarea", group: "Next actions", rows: 4, placeholder: "Community review, disability access check, cultural review, privacy wording, partner contact." }
      ]
    },
    {
      id: "risk-safety-boundaries",
      title: "Risk Safety And Boundaries Builder",
      file: "straddie-vitality-risk-safety-boundaries.md",
      page: "risk-safety-boundaries.html",
      description: "Creates a risk, safety, privacy and public-wording boundary note before public use.",
      claimBoundary: "This builder creates a triage note to sit beside legal, medical, WHS, insurance and regulatory advice.",
      fields: [
        ...baseMeta,
        { name: "riskScope", label: "Risk scope", type: "checkbox-group", group: "Risk scope", options: [["hbot", "HBOT / mask-fed PADS"], ["sauna", "Sauna / heat"], ["fasting", "Fasting / refeeding"], ["skin-filter", "Skin filter / barrier"], ["food", "Food"], ["movement", "Movement"], ["data", "Data / privacy"], ["venue", "Venue"], ["media", "Public media"], ["children", "Children or vulnerable people"], ["clinical", "Clinical-adjacent use"]] },
        { name: "keyRisks", label: "Key risks", type: "textarea", group: "Risk, safety and approvals", rows: 5, placeholder: "Device atmosphere, heat stress, pressure effects, contraindications, fasting/refeeding, electrolyte imbalance, food safety, injury, privacy, public wording, cultural authority, insurance." },
        { name: "controls", label: "Controls already proposed", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Qualified supervision, screening, signage, cleaning, emergency plan, source review, approval workflow." },
        { name: "missingControls", label: "Controls still missing", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "What must be fixed before this is public, funded, insured, trialled or opened?" },
        { name: "claimReview", label: "Evidence lines needing review", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Health, ageing, dementia, detox, skin-filter, fasting, recovery or performance lines that need source dates, reviewer notes or stronger measurement." },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "decision", label: "Current decision", type: "select", group: "Next actions", options: [["Proceed to review", "Proceed to review"], ["Hold until evidence improves", "Hold until evidence improves"], ["Hold until safety plan improves", "Hold until safety plan improves"], ["Private only", "Private only"], ["Ready for public wording review", "Ready for public wording review"]] },
        { name: "nextSteps", label: "Next safety steps", type: "textarea", group: "Next actions", rows: 4, placeholder: "Reviewer, regulator, insurer, venue, clinical adviser, public wording fix, test session." }
      ]
    },
    {
      id: "grant-readiness",
      title: "Grant Readiness Builder",
      file: "straddie-vitality-grant-readiness.md",
      page: "grant-readiness.html",
      description: "Turns a vitality project into a grant-ready evidence and applicant note.",
      claimBoundary: "Grant notes should use public-benefit language backed by source trails and review-ready evidence.",
      fields: [
        ...baseMeta,
        { name: "grantName", label: "Grant or funding pathway", type: "text", group: "Grant identity", placeholder: "Council, Queensland, federal, health, sport, aged care, tourism, sponsor or philanthropic pathway" },
        { name: "deadline", label: "Deadline or timing window", type: "text", group: "Grant identity", placeholder: "Closing date, next round, rolling, watch only" },
        { name: "applicant", label: "Likely applicant", type: "text", group: "Grant identity", placeholder: "Venue, community group, company, co-operative, auspice, council partner, sponsor partnership" },
        { name: "projectFit", label: "Project fit", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Why this project fits the funding purpose and public benefit." },
        { name: "eligibleCosts", label: "Possible eligible costs", type: "textarea", group: "Grant identity", rows: 3, placeholder: "Equipment, fit-out, training, access support, research, public information, food, movement, safety, reporting." },
        { name: "evidenceReady", label: "Evidence already ready", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Quotes, letters, studies, venue checks, community need, public data, source links." },
        { name: "evidenceNeeded", label: "Evidence still needed", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "What has to be gathered before application writing starts?" },
        { name: "systemPressure", label: "Health-system pressure or cost context", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Medicare, PBS, NDIS, My Aged Care, private health insurance, hospital pressure, carer burden, prevention, food waste, repeated paperwork or a tiny percentage saving that could still be worth millions or billions." },
        { name: "reporting", label: "Reporting and acquittal evidence", type: "textarea", group: "Next actions", rows: 4, placeholder: "Attendance, feedback, safety records, photos, invoices, public notices, source updates, outcomes." },
        ...sourceTrailFields,
        ...boundaryFields
      ]
    },
    {
      id: "sponsor-partner-pitch",
      title: "Sponsor And Partner Pitch Builder",
      file: "straddie-vitality-sponsor-partner-pitch.md",
      page: "sponsor-partner-pitch.html",
      description: "Creates a grounded partner or sponsor brief with public benefit and evidence limits.",
      claimBoundary: "Pitch notes can invite support for a pilot while keeping outcomes in the evidence and testing lane.",
      fields: [
        ...baseMeta,
        { name: "partnerName", label: "Target partner or sponsor", type: "text", group: "Partner identity", placeholder: "Venue, club, health partner, sponsor, government, insurer, supplier, university, philanthropy" },
        { name: "ask", label: "What is being asked?", type: "textarea", group: "Partner identity", rows: 4, placeholder: "Funding, equipment, venue, supervision, insurance, research support, food, movement, communications, access subsidy." },
        { name: "benefit", label: "Public benefit case", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Who benefits and why this is a useful local investment." },
        { name: "partnerValue", label: "Value for the partner", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "Public goodwill, clear reporting, local participation, responsible innovation, evidence gathering, safer visitor economy." },
        { name: "evidencePitch", label: "Evidence line for the pitch", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "The strongest evidence-backed line, with accurate wording and source date." },
        { name: "systemFit", label: "System fit", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "How the project sits beside Medicare, PBS, NDIS, My Aged Care, private health insurance, sport, tourism, workplace wellbeing, prevention, food systems or local public health." },
        { name: "sponsorBoundaries", label: "Sponsor boundaries", type: "textarea", group: "Risk, safety and approvals", rows: 3, placeholder: "Clinical wording review, privacy, data ownership, cultural permissions, approval before public logo use." },
        ...sourceTrailFields,
        ...boundaryFields,
        { name: "nextSteps", label: "Next partner steps", type: "textarea", group: "Next actions", rows: 4, placeholder: "Intro email, one-page brief, meeting, source pack, risk note, draft MOU." }
      ]
    },
    {
      id: "public-notice",
      title: "Public Notice Builder",
      file: "straddie-vitality-public-notice.md",
      page: "public-notice.html",
      description: "Drafts a public-safe update for a noticeboard, venue page or community channel.",
      claimBoundary: "Public notices should invite participation or feedback with clear evidence status and no private details.",
      fields: [
        ...baseMeta,
        { name: "noticeTitle", label: "Notice title", type: "text", group: "Notice identity", placeholder: "Short public title" },
        { name: "noticeType", label: "Notice type", type: "select", group: "Notice identity", options: [["Community consultation", "Community consultation"], ["Pilot update", "Pilot update"], ["Venue expression of interest", "Venue expression of interest"], ["Sponsor call-out", "Sponsor call-out"], ["Safety or source update", "Safety or source update"], ["Event or workshop", "Event or workshop"], ["Grant milestone", "Grant milestone"]] },
        { name: "whoShouldCare", label: "Who should care?", type: "textarea", group: "Public-safe summary", rows: 3, placeholder: "Residents, venues, sponsors, health workers, athletes, visitors, elders, carers, government or community groups." },
        { name: "noticeBody", label: "Public notice body", type: "textarea", group: "Public-safe summary", rows: 5, placeholder: "Clear public wording. Mention draft status and review needs if not final." },
        { name: "actionRequested", label: "Public action requested", type: "textarea", group: "Next actions", rows: 3, placeholder: "Give feedback, attend session, offer venue, sponsor, review source, join planning, share public information." },
        { name: "doNotPublish", label: "Keep private", type: "textarea", group: "Private / approval-gated", rows: 4, private: true, placeholder: "Private health, commercial, cultural, legal, sponsor, supplier or personal details." },
        ...sourceTrailFields,
        ...boundaryFields
      ]
    },
    {
      id: "media-brief",
      title: "Hyperlocal Media Brief Builder",
      file: "straddie-vitality-media-brief.md",
      page: "media-brief.html",
      description: "Creates a grounded brief for hyperlocal news, public media or project storytelling.",
      claimBoundary: "Media briefs should explain public interest, evidence status, uncertainty and review pathway clearly.",
      fields: [
        ...baseMeta,
        { name: "storyAngle", label: "Story angle", type: "textarea", group: "Media identity", rows: 3, placeholder: "What makes this useful, local, timely or publicly relevant?" },
        { name: "headline", label: "Working headline", type: "text", group: "Media identity", placeholder: "Plain, public-facing headline" },
        { name: "publicFacts", label: "Confirmed public facts", type: "textarea", group: "Public-safe summary", rows: 5, placeholder: "Facts that can be published now, with source dates where possible." },
        { name: "uncertainFacts", label: "Uncertain or still-checking facts", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Anything that needs clearer evidence, approval or source checking before publication." },
        { name: "voices", label: "Useful voices to include", type: "textarea", group: "Media identity", rows: 3, placeholder: "Venue, health reviewer, resident, athlete, sponsor, council, researcher, community group." },
        { name: "questions", label: "Questions for interview or follow-up", type: "textarea", group: "Next actions", rows: 4, placeholder: "What should a journalist, noticeboard editor or public reviewer ask?" },
        ...sourceTrailFields,
        ...boundaryFields
      ]
    },
    {
      id: "policy-watch",
      title: "Legal And Policy Watch Builder",
      file: "straddie-vitality-policy-watch.md",
      page: "policy-watch.html",
      description: "Tracks legal, regulatory and government-facing dependencies without activating unresolved systems.",
      claimBoundary: "This builder records policy watch items only. It does not implement contribution credits, tokens, financial products or civic ledgers.",
      fields: [
        ...baseMeta,
        { name: "policyTopic", label: "Policy or legal topic", type: "text", group: "Policy identity", placeholder: "Local government funding, health regulation, medical devices, aged care, privacy, grants, co-operatives" },
        { name: "currentStatus", label: "Current status", type: "select", group: "Policy identity", options: [["Watch only", "Watch only"], ["Submission lodged", "Submission lodged"], ["Inquiry active", "Inquiry active"], ["Regulator guidance needed", "Regulator guidance needed"], ["Legal advice needed", "Legal advice needed"], ["Ready for public summary", "Ready for public summary"]] },
        { name: "dependency", label: "What depends on this?", type: "textarea", group: "Policy identity", rows: 4, placeholder: "What project decision, funding path, device model, data model or public statement depends on legal clarity?" },
        { name: "inactiveBoundary", label: "Inactive-system boundary", type: "textarea", group: "Risk, safety and approvals", rows: 4, placeholder: "Name anything that stays inactive until legal/regulatory clarity exists." },
        { name: "governmentLine", label: "Government-facing line", type: "textarea", group: "Public-safe summary", rows: 4, placeholder: "Plain wording suitable for agencies or elected representatives." },
        { name: "legalQuestions", label: "Questions for legal or policy review", type: "textarea", group: "Next actions", rows: 4, placeholder: "What needs an answer before public implementation?" },
        ...sourceTrailFields,
        ...boundaryFields
      ]
    },
    {
      id: "agent-handoff",
      title: "Agent Handoff Builder",
      file: "straddie-vitality-agent-handoff.md",
      page: "agent-handoff.html",
      description: "Packages the next task for an AI agent, grant writer, reviewer or public-page editor.",
      claimBoundary: "Agent instructions must preserve evidence status, public/private boundaries and approval gates.",
      fields: [
        ...baseMeta,
        { name: "handoffGoal", label: "Handoff goal", type: "textarea", group: "Handoff identity", rows: 3, placeholder: "What should the next agent or reviewer produce?" },
        { name: "audience", label: "Audience for the output", type: "select", group: "Handoff identity", options: [["General public", "General public"], ["Government", "Government"], ["Venue partner", "Venue partner"], ["Sponsor", "Sponsor"], ["Grant assessor", "Grant assessor"], ["Health reviewer", "Health reviewer"], ["Noticeboard editor", "Noticeboard editor"], ["Internal review only", "Internal review only"]] },
        { name: "inputs", label: "Input files or source links", type: "textarea", group: "Evidence and source trail", rows: 4, placeholder: "Builder outputs, evidence links, source docs, public pages, grant pages or venue notes." },
        { name: "mustPreserve", label: "Must preserve", type: "textarea", group: "Handoff instructions", rows: 4, placeholder: "Australian English, public/private boundary, accurate evidence wording, source dates, review status and public-safe scope." },
        { name: "mustAvoid", label: "Keep out of public output", type: "textarea", group: "Handoff instructions", rows: 4, placeholder: "Private notes in public pages, personal chat context, unresolved contribution-credit implementation, hidden source dates or unreviewed clinical wording." },
        { name: "outputNeeded", label: "Output needed", type: "textarea", group: "Handoff instructions", rows: 3, placeholder: "Markdown file, grant note, noticeboard post, source trail, public page, review memo, partner email." },
        ...boundaryFields,
        { name: "nextSteps", label: "Immediate next steps", type: "textarea", group: "Next actions", rows: 4, placeholder: "Search, verify, draft, review, test export, update page, prepare public copy." }
      ]
    }
  ];
})();
