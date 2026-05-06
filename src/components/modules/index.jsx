import React, { useState } from "react";
import { Card, Box, SectionHeader, NavRow, DataTable, LegItem } from "../UI";

// ─── WELCOME ─────────────────────────────────────────────────────────────────
export function Welcome({ cfg, onSiteSelect, selectedSite, onNext }) {
  return (
    <div>
      <SectionHeader tag="Fire Warden Training" icon="🔥" title={`${cfg.orgName} — Fire Warden Training`}
        desc="Mandatory training for all nominated Fire Wardens. Covers fire science, legislation, prevention, equipment, risk assessment and warden duties." />
      <Box type="info" title="Before you begin" icon="ℹ️">
        <ul>
          <li>This course is for <strong>nominated Fire Wardens only</strong></li>
          <li>Estimated completion time: <strong>45–60 minutes</strong></li>
          <li>Pass mark: <strong>{cfg.passmark}%</strong> ({Math.ceil(20 * cfg.passmark / 100)} of 20 questions)</li>
          <li>Maximum <strong>{cfg.maxAttempts} attempts</strong> permitted</li>
          <li>A completion certificate will be generated on passing — submit to {cfg.qhseManager || "QHSE"} for your training file</li>
        </ul>
      </Box>
      <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Select your site to begin</p>
      <div className="site-grid">
        {cfg.sites.map((s, i) => (
          <div key={s.id} className={`site-card${selectedSite === i ? " chosen" : ""}`} onClick={() => onSiteSelect(i)}>
            <span className="site-card-icon">🏭</span>
            <div className="site-card-name">{s.name}</div>
            <div className="site-card-sub">{s.entity}</div>
            <div className="site-card-sub">{s.address}</div>
          </div>
        ))}
      </div>
      <div className="nav-row"><span /><button className="btn btn-primary" onClick={onNext} disabled={selectedSite === null}>Start course →</button></div>
    </div>
  );
}

// ─── LEGISLATION ─────────────────────────────────────────────────────────────
export function Legislation({ onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 1 of 11" icon="⚖️" title="Key fire safety legislation" />
      <Card title="Primary legislation" icon="⚖️">
        <LegItem year="2005" title="Regulatory Reform (Fire Safety) Order 2005 (RR(FS)O)"
          desc="The principal fire safety law for all non-domestic premises in England and Wales. Requires the Responsible Person to carry out a fire risk assessment, implement findings, provide training, maintain equipment and keep records. Enforced by the relevant Fire and Rescue Authority." />
        <LegItem year="2021" title="Fire Safety Act 2021"
          desc="Amends the RR(FS)O to clarify scope for multi-occupied residential buildings and strengthened enforcement powers for fire authorities." />
        <LegItem year="1974" title="Health and Safety at Work Act 1974"
          desc="General duty on employers to ensure health, safety and welfare of employees so far as reasonably practicable. Underpins fire safety obligations." />
        <LegItem year="1999" title="Management of Health and Safety at Work Regulations 1999"
          desc="Requires risk assessments, preventive measures and appointment of competent persons. Complements the FRA requirements of the RR(FS)O." />
      </Card>
      <Card title="Key articles of the RR(FS)O 2005" icon="📄">
        <DataTable headers={["Article", "Requirement"]} rows={[
          ["Art. 9", "Carry out a suitable and sufficient fire risk assessment; record significant findings"],
          ["Art. 13", "Record significant findings where 5+ persons are employed"],
          ["Art. 14", "Keep escape routes and exits clear and accessible at all times"],
          ["Art. 15", "Provide for fire drills and appoint competent persons to assist"],
          ["Art. 17", "Ensure suitable maintenance of fire safety facilities and equipment"],
          ["Art. 19", "Communicate significant findings of the FRA to employees"],
          ["Art. 21", "Provide suitable and sufficient fire safety training on induction and ongoing"],
          ["Art. 23", "Duties of employees — cooperate, not misuse provisions, report concerns"],
        ]} />
      </Card>
      <Card title="Legislation for construction sites & work activities" icon="🏭">
        <LegItem year="2015" title="Construction (Design and Management) Regulations 2015 (CDM)"
          desc="Places duties on clients, designers and contractors to manage fire risk throughout construction projects. Requires fire precautions and emergency procedures in the Construction Phase Plan." />
        <LegItem year="2002" title="Dangerous Substances and Explosive Atmospheres Regulations 2002 (DSEAR)"
          desc="Requires employers to control risks from fire and explosion from dangerous substances — relevant where Caswells sites store or handle cleaning chemicals." />
        <LegItem year="2002" title="Control of Substances Hazardous to Health (COSHH) 2002"
          desc="Many COSHH-regulated substances are also flammable. Fire Wardens should be aware of site chemicals via COSHH assessments and Safety Data Sheets." />
      </Card>
      <Box type="danger" title="Criminal liability" icon="⚠️">
        <p>Failure to comply with the RR(FS)O that puts a relevant person at risk of death or serious injury is a <strong>criminal offence</strong>. Both the Responsible Person and individuals — including Fire Wardens who fail in their duties — can be prosecuted.</p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── FIRE TRIANGLE ───────────────────────────────────────────────────────────
export function Triangle({ onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 2 of 11" icon="🔬" title="The fire triangle & combustion chemistry"
        desc="Fire is a chemical reaction. To ignite and sustain itself, three elements must be present simultaneously. Remove any one and the fire is extinguished." />
      <div className="tri-grid">
        <div className="tri-card tri-card-fuel">
          <span className="tri-icon">🪵</span>
          <div className="tri-label">Fuel</div>
          <div className="tri-sub">Any combustible material: wood, paper, textiles, flammable liquids, gases</div>
        </div>
        <div className="tri-card tri-card-heat">
          <span className="tri-icon">🌡️</span>
          <div className="tri-label">Heat</div>
          <div className="tri-sub">Ignition source: electrical fault, naked flame, friction, hot work</div>
        </div>
        <div className="tri-card tri-card-oxy">
          <span className="tri-icon">💨</span>
          <div className="tri-label">Oxygen</div>
          <div className="tri-sub">Normal air contains ~21% oxygen — fire requires approximately 16%+</div>
        </div>
      </div>
      <Box type="info" title="The fire tetrahedron" icon="💡">
        <p>Modern fire science adds a fourth element — the <strong>uninhibited chain reaction</strong> — forming the fire tetrahedron. Some extinguishing agents (dry powder) work by interrupting this chemical chain reaction rather than cooling or smothering alone.</p>
      </Box>
      <Card title="Combustion types" icon="⚗️">
        <DataTable headers={["Type", "Description", "Example"]} rows={[
          ["Flaming combustion", "Fuel vapour reacts with oxygen in a visible flame — most common in workplace fires", "Paper, wood, liquids"],
          ["Smouldering", "Slow oxidation without flame — significant CO production, dangerous in confined spaces", "Cigarettes, upholstery"],
          ["Spontaneous combustion", "Material self-heats without external ignition source until ignition temperature is reached", "Oily rags, hay bales"],
        ]} />
      </Card>
      <Card title="Key temperatures" icon="🌡️">
        <DataTable rows={[
          ["Flash point", "Lowest temperature at which a liquid produces enough vapour to ignite momentarily"],
          ["Fire point", "Temperature at which sustained combustion occurs (slightly above flash point)"],
          ["Ignition temperature", "Minimum temperature at which a substance self-ignites without an external source"],
        ]} />
      </Card>
      <Box type="warning" title="Practical implications for wardens" icon="⚠️">
        <p>Understanding the fire triangle means actively reducing risk by separating fuel from ignition sources, maintaining good housekeeping, and choosing the correct extinguishing method during an incident.</p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── STAGES ──────────────────────────────────────────────────────────────────
export function Stages({ onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 3 of 11" icon="📈" title="Stages of fire development"
        desc="Understanding how a fire develops helps wardens assess risk, make decisions and brief emergency services." />
      <Card title="Stage 1 — Incipient (ignition)" icon="🔥">
        <p>A small flame or smoulder. Limited heat output. Smoke detectors are most likely to activate here. Early-stage fires can generally be tackled with a portable extinguisher by a trained warden — but only if safe and escape is not compromised.</p>
      </Card>
      <Card title="Stage 2 — Growth" icon="🔥">
        <p>Fire grows rapidly consuming available fuel. Heat release increases significantly. Hot gases accumulate at ceiling level. <strong>Flashover risk increases.</strong> Evacuation must be underway.</p>
        <Box type="danger" title="Flashover" icon="⚠️">
          <p>Flashover occurs when accumulated radiant heat raises all exposed combustible surfaces to ignition temperature simultaneously — the entire room ignites at once. Firefighters cannot survive inside without BA and full PPE. Wardens must never re-enter a building where growth-stage fire is present.</p>
        </Box>
      </Card>
      <Card title="Stage 3 — Fully developed" icon="🔥">
        <p>Maximum heat release. All combustible materials burning. Temperatures can exceed 1,000°C. Structural integrity may be at risk. Fire service intervention is essential — no warden role inside the building.</p>
        <Box type="warning" title="Backdraught" icon="⚠️">
          <p>If a fully-developed fire is oxygen-depleted, sudden introduction of fresh air (opening a door) can cause explosive ignition. Signs: smoke drawn back under a door, bulging doors, pulsing smoke. <strong>Never open a hot door — feel it first.</strong></p>
        </Box>
      </Card>
      <Card title="Stage 4 — Decay" icon="🔥">
        <p>Fuel is exhausted or fire suppressed. Risk of structural collapse remains. Re-entry only under fire service direction.</p>
      </Card>
      <Box type="info" title="Time and life safety" icon="⏱️">
        <p>In modern buildings with synthetic materials, a fire can reach flashover in as little as <strong>3–5 minutes</strong> from ignition. Immediate alarm activation and fast evacuation are critical.</p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── SPREAD ──────────────────────────────────────────────────────────────────
export function Spread({ onNext, onBack }) {
  return (
    <div>
      <SectionHeader tag="Module 4 of 11" icon="↔️" title="How fire spreads"
        desc="Fire spreads through three physical mechanisms. Understanding these allows wardens to identify risks and make decisions during an evacuation." />
      <div className="grid-3">
        <Card title="Radiation" icon="☀️">
          <p>Heat energy travels as electromagnetic waves through air and transparent materials. A fire can ignite a surface metres away through radiant heat alone. Mitigated by fire-resistant glazing and separation distances.</p>
        </Card>
        <Card title="Convection" icon="💨">
          <p>Hot gases and smoke rise and travel horizontally at ceiling level. The most common cause of spread to upper floors and via ductwork. <strong>Fire and smoke doors</strong> are the primary defence against convective spread.</p>
        </Card>
        <Card title="Conduction" icon="〰️">
          <p>Heat transfers through solid materials — particularly metals. Steel beams, pipes and ductwork can conduct heat from a fire compartment into adjacent areas.</p>
        </Card>
      </div>
      <Card title="Fire doors — the critical control measure" icon="🚪">
        <p>Fire doors are the single most important passive protection against fire and smoke spread in a building. A correctly fitted FD30 door provides 30 minutes of resistance. FD60 doors provide 60 minutes.</p>
        <Box type="danger" title="Warden responsibility" icon="⚠️">
          <p>As a Fire Warden you must: <strong>never</strong> wedge or prop fire doors open; report any defects (damaged seals, missing closers, excessive gaps) immediately; ensure doors are closed during sweeps; and actively challenge any staff propping them open.</p>
        </Box>
      </Card>
      <Card title="Other pathways for spread" icon="🏢">
        <DataTable headers={["Pathway", "Description", "Control measure"]} rows={[
          ["Voids and cavities", "Hidden roof spaces and wall cavities allow fire to travel unseen", "Fire stopping, compartmentation"],
          ["Service penetrations", "Pipes, cables and ducts penetrating fire-resisting walls/floors", "Intumescent collars, fire stopping"],
          ["Ductwork", "HVAC systems can carry smoke rapidly throughout a building", "Fire dampers at compartment boundaries"],
          ["External spread", "Fire can travel up external cladding or between buildings", "Non-combustible cladding, separation distances"],
        ]} />
      </Card>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── CLASSES ─────────────────────────────────────────────────────────────────
export function Classes({ onNext, onBack }) {
  const classes = [
    { letter: "A", color: "#dc2626", name: "Class A", desc: "Ordinary solid combustibles: wood, paper, textiles, plastics, rubber" },
    { letter: "B", color: "#d97706", name: "Class B", desc: "Flammable liquids: petrol, oil, paint, solvents, paraffin" },
    { letter: "C", color: "#7c3aed", name: "Class C", desc: "Flammable gases: LPG, butane, methane, hydrogen" },
    { letter: "D", color: "#2563eb", name: "Class D", desc: "Combustible metals: lithium, magnesium, titanium, sodium" },
    { letter: "E", color: "#0891b2", name: "Electrical", desc: "Live electrical equipment — not a formal EN class but used in UK guidance" },
    { letter: "F", color: "#dc2626", name: "Class F", desc: "Cooking oils and fats at high temperature: chip fryers, woks" },
  ];
  return (
    <div>
      <SectionHeader tag="Module 5 of 11" icon="🏷️" title="Fire classification"
        desc="Fires are classified by the type of material burning. This determines which extinguishing agent is appropriate — using the wrong one can make a fire worse." />
      <div className="class-grid">
        {classes.map(c => (
          <div className="class-card" key={c.letter}>
            <div className="class-letter" style={{ color: c.color }}>{c.letter}</div>
            <div className="class-name">{c.name}</div>
            <div className="class-desc">{c.desc}</div>
          </div>
        ))}
      </div>
      <Card title="Classes relevant to Caswells Group sites" icon="🏷️">
        <p>At Billingham and Macclesfield the most likely fire classes are:</p>
        <ul>
          <li><strong>Class A</strong> — cardboard packaging, paper, timber racking, plastic products</li>
          <li><strong>Class B</strong> — cleaning chemical concentrates and flammable liquid products</li>
          <li><strong>Class E</strong> — electrical equipment, charging equipment, server and comms rooms</li>
          <li><strong>Class F</strong> — kitchen and canteen cooking facilities</li>
        </ul>
      </Card>
      <Box type="danger" title="Critical warnings" icon="⚠️">
        <p><strong>Never use water on Class B fires</strong> — it can cause burning liquid to spread explosively.</p>
        <p style={{ marginTop: "0.5rem" }}><strong>Never use water on Class F fires</strong> — cold water on superheated oil causes a violent steam explosion projecting burning oil. A chip pan fire can engulf a kitchen in seconds.</p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── PREVENTION ──────────────────────────────────────────────────────────────
export function Prevention({ cfg, site, onNext, onBack }) {
  const sd = site !== null ? cfg.sites[site] : cfg.sites[0];
  return (
    <div>
      <SectionHeader tag="Module 6 of 11" icon="🛡️" title="Fire prevention"
        desc="The most effective fire safety measure is prevention. As a Fire Warden you have an active role in identifying and eliminating fire risks in your area." />
      <Card title="Electrical ignition sources" icon="⚡">
        <ul>
          <li>Ensure PAT testing is current for all portable appliances</li>
          <li>Report damaged cables, plugs, sockets or appliances immediately</li>
          <li>Never daisy-chain extension leads or overload sockets</li>
          <li>Ensure fixed-wire inspections (NICEIC) are carried out on schedule</li>
          <li>Switch off and unplug equipment not in use overnight</li>
        </ul>
      </Card>
      <Card title="Housekeeping and fuel management" icon="📦">
        <ul>
          <li>Keep escape routes, stairwells and corridors free from all combustible materials at all times</li>
          <li>Remove waste regularly — never allow build-up of cardboard, packaging or paper</li>
          <li>Separate combustible stock from potential ignition sources</li>
          <li>Store flammable liquids in approved COSHH/hazchem cupboards with correct labelling</li>
        </ul>
      </Card>
      <Card title="Human factors" icon="👥">
        <ul>
          <li>Enforce the no-smoking policy rigorously — only in the designated external area</li>
          <li>Report any evidence of illicit smoking or vaping immediately</li>
          <li>Brief contractors on site-specific fire risks before work commences — ensure hot-work permits are issued</li>
          <li>Challenge any unsafe behaviour you observe — this is an explicit warden responsibility</li>
        </ul>
      </Card>
      <Card title="Arson prevention" icon="🔒">
        <ul>
          <li>Both sites have perimeter security (fencing, CCTV) — report any damage immediately</li>
          <li>Do not allow combustible materials (pallets, waste) to accumulate externally close to the building</li>
          <li>Ensure the building is secured when unoccupied</li>
          <li>Report suspicious activity to your manager and consider calling 999</li>
        </ul>
      </Card>
      <Box type="success" icon="✅">
        <p><strong>Proactive vs reactive:</strong> A Fire Warden who completes daily visual checks, challenges poor housekeeping and reports hazards promptly provides more fire safety value than any amount of reactive training. Prevention is the primary function.</p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── EXTINGUISHERS ───────────────────────────────────────────────────────────
export function Extinguishers({ onNext, onBack }) {
  const exts = [
    { icon: "🔴", name: "Water", label: "Red label", labelClass: "label-water", use: "Class A only — solids (wood, paper, textiles)", not: "Never on electrical, B, C, D or F fires" },
    { icon: "🟡", name: "Foam", label: "Cream label", labelClass: "label-foam", use: "Class A & B — solids and flammable liquids", not: "Never on electrical, C, D or F fires" },
    { icon: "⬛", name: "CO₂", label: "Black label", labelClass: "label-co2", use: "Electrical & Class B — live equipment, liquids", not: "Not effective on A, C, D or F. Do not use in confined spaces — asphyxiation risk" },
    { icon: "🔵", name: "Dry powder", label: "Blue label", labelClass: "label-powder", use: "Class A, B, C & electrical", not: "Not for F fires. Impairs visibility, causes damage. Avoid in enclosed spaces" },
    { icon: "🟢", name: "Wet chemical", label: "Yellow label", labelClass: "label-wetchem", use: "Class F — cooking oils/fats. Also Class A", not: "Not for electrical, B, C or D fires" },
  ];
  return (
    <div>
      <SectionHeader tag="Module 7 of 11" icon="🧯" title="Fire extinguisher types & use"
        desc="In the UK all portable extinguishers have a red body — the label colour identifies the agent. Only use one if trained, the fire is early stage, you have a clear escape route, and your evacuation duties are complete." />
      <div className="ext-grid">
        {exts.map((e) => (
          <div className="ext-card" key={e.name}>
            <span className="ext-icon">{e.icon}</span>
            <div className="ext-name">{e.name}</div>
            <span className={`ext-label ${e.labelClass}`}>{e.label}</span>
            <div className="ext-use">{e.use}</div>
            <div className="ext-not">❌ {e.not}</div>
          </div>
        ))}
      </div>
      <Card title="The PASS technique" icon="🔧">
        <DataTable rows={[
          ["P — Pull", "Remove the safety pin from the handle"],
          ["A — Aim", "Direct the nozzle at the base of the fire"],
          ["S — Squeeze", "Squeeze the handle to discharge the agent"],
          ["S — Sweep", "Sweep side to side across the base of the fire"],
        ]} />
      </Card>
      <Card title="Maintenance requirements" icon="📅">
        <ul>
          <li>Annual service by a competent person per BS 5306 — carried out at both sites by <strong>Chubb</strong></li>
          <li>Five-yearly discharge test for most types; 10-yearly for CO₂</li>
          <li>Monthly visual check by warden — check pin, label, pressure gauge, body and hose condition</li>
          <li>Any used or damaged extinguisher must be reported immediately — never return a discharged extinguisher to its station</li>
        </ul>
      </Card>
      <Box type="danger" title="When NOT to fight the fire" icon="⚠️">
        <p>Do not attempt to fight the fire if: the fire is large or spreading; the room is filling with smoke; your escape route could be cut off; you are not trained; or your evacuation duties are not yet complete. <strong>Evacuation always takes priority over fire-fighting.</strong></p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── RISK ASSESSMENT ─────────────────────────────────────────────────────────
export function Risk({ cfg, site, onNext, onBack }) {
  const sd = site !== null ? cfg.sites[site] : cfg.sites[0];
  return (
    <div>
      <SectionHeader tag="Module 8 of 11" icon="📋" title="Fire risk assessment"
        desc="The FRA is the foundation of all fire safety management. As a Fire Warden you must understand how it works and your role in its implementation." />
      <Card title="The 5-step risk assessment process" icon="🔢">
        <DataTable rows={[
          ["1", "Identify fire hazards — ignition sources, fuel sources and oxygen sources"],
          ["2", "Identify people at risk — employees, visitors, vulnerable persons, contractors"],
          ["3", "Evaluate, remove or reduce the risks — implement proportionate control measures"],
          ["4", "Record, plan, instruct and train — document findings, implement emergency plan"],
          ["5", "Review and update — at minimum annually, or after any significant change"],
        ]} />
      </Card>
      <Card title="Risk rating matrix" icon="📊">
        <DataTable headers={["", "Slight harm", "Moderate harm", "Extreme harm"]} rows={[
          ["Low likelihood", "Trivial", "Tolerable", "Moderate"],
          ["Medium likelihood", "Tolerable ✓ (Both sites)", "Moderate", "Substantial"],
          ["High likelihood", "Moderate", "Substantial", "Intolerable"],
        ]} />
        <p style={{ marginTop: "0.5rem", fontSize: "0.82rem" }}>Both Caswells Group sites are currently rated <strong>Tolerable</strong> (Medium likelihood / Slight harm).</p>
      </Card>
      <Card title={`Your site FRA — ${sd.name}`} icon="🏢">
        <p>Conducted by <strong>Absolute Health Fire Safety Ltd</strong> to PAS79-1:2020. Responsible person: <strong>{sd.responsiblePerson}</strong>.</p>
        <p style={{ fontWeight: 700, marginTop: "0.75rem", marginBottom: "0.4rem" }}>Outstanding actions (P2 — within 3 months of assessment):</p>
        <ul>{sd.fraActions.map((a, i) => <li key={i}>{a}</li>)}</ul>
        <Box type="warning" icon="⚠️" style={{ marginTop: "0.75rem" }}>
          <p>As a Fire Warden, you have a direct responsibility to support the completion of these actions. Escalate any that are not progressing to {cfg.qhseManager || "QHSE"}.</p>
        </Box>
      </Card>
      <Box type="info" title="When must the FRA be reviewed?" icon="🔄">
        <ul>
          <li>At the recommended review date (annually for both sites)</li>
          <li>Following any significant change to premises, occupancy or processes</li>
          <li>If a fire occurs on the premises</li>
          <li>If there is reason to believe the current assessment is no longer valid</li>
        </ul>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── ARRANGEMENTS ────────────────────────────────────────────────────────────
export function Arrangements({ cfg, site, onNext, onBack }) {
  const sd = site !== null ? cfg.sites[site] : cfg.sites[0];
  return (
    <div>
      <SectionHeader tag="Module 9 of 11" icon="🏢" title={`Fire safety arrangements — ${sd.name}`}
        desc="Fire safety arrangements are the documented procedures, systems and schedules that give the FRA practical effect day-to-day." />
      <div className="grid-2">
        <Card title="Site details" icon="📍">
          <DataTable rows={[
            ["Entity", sd.entity],
            ["Address", sd.address],
            ["Assembly point", sd.assembly],
            ["Evacuation", sd.evac],
            ["Fire service", sd.fireService],
            ["Nearest station", sd.nearestStation],
          ]} />
        </Card>
        <Card title="Testing schedule" icon="📅">
          <DataTable rows={[
            ["Alarm test", sd.alarm],
            ["Drills", sd.drill],
            ["Extinguisher service", "Annual (Chubb, BS 5306)"],
            ["Alarm service", "6-monthly (Chubb, BS 5839-1)"],
            ["Em. lighting", "Weekly test + annual full discharge"],
            ["Fixed-wire test", "5-yearly + annual partial (NICEIC)"],
          ]} />
        </Card>
      </div>
      <Card title="Daily warden inspection duties" icon="✅">
        <ul>
          <li>Confirm fire alarm panel shows normal condition (no faults)</li>
          <li>Check emergency escape lighting for faults</li>
          <li>Confirm fire safety signs and extinguishers are in position</li>
          <li>Ensure all escape routes are unobstructed</li>
          <li>Check fire resisting doors are closed and functioning</li>
          <li>Log any defects in the Fire Safety Logbook and report immediately</li>
        </ul>
      </Card>
      <Card title="Documentation you must know" icon="📄">
        <ul>
          <li><strong>Fire Safety Policy</strong> — organisational commitment and responsibilities</li>
          <li><strong>Fire Risk Assessment</strong> — current FRA for your site</li>
          <li><strong>Fire Safety Logbook</strong> — record of all tests, maintenance, drills and training. Available for fire authority inspection at any time</li>
          <li><strong>Emergency evacuation plan</strong> — posted in circulation areas</li>
          <li><strong>Fire Action Notices</strong> — posted at alarm call points and exits</li>
        </ul>
      </Card>
      <Box type="info" title="Chubb maintenance portal" icon="🔧">
        <p>Fire safety equipment at both sites is maintained by Chubb. Service records and certificates are accessible via the Chubb portal. Contact {cfg.qhseManager || "QHSE"} for portal access.</p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} />
    </div>
  );
}

// ─── ROLES ───────────────────────────────────────────────────────────────────
export function Roles({ cfg, site, onNext, onBack }) {
  const sd = site !== null ? cfg.sites[site] : cfg.sites[0];
  return (
    <div>
      <SectionHeader tag="Module 10 of 11" icon="⛑️" title="Warden roles & responsibilities"
        desc="Fire Wardens and Fire Marshals have specific duties defined under Articles 15 and 21 of the RR(FS)O 2005 — going significantly beyond the general duties of all staff." />
      <Card title="Fire Warden — core responsibilities" icon="⛑️">
        <div className="role-card">
          <span className="role-badge badge-warden">Prevention</span>
          <ul>
            <li>Conduct regular visual inspections of your allocated area</li>
            <li>Identify and report fire hazards — electrical, housekeeping, storage, blocked exits</li>
            <li>Challenge unsafe behaviour and brief new starters in your area</li>
            <li>Ensure fire doors are closed and undamaged in your area</li>
          </ul>
        </div>
        <div className="role-card">
          <span className="role-badge badge-warden">On alarm activation</span>
          <ul>
            <li>Direct occupants in your area to evacuate immediately via the nearest safe exit</li>
            <li>Conduct a thorough sweep of your area — check all rooms, toilets and remote areas</li>
            <li>Close doors and windows as you sweep — this limits fire and smoke spread</li>
            <li>Confirm to the Fire Marshal that your area is clear</li>
            <li>Do not re-enter the building for any reason until authorised</li>
          </ul>
        </div>
        <div className="role-card">
          <span className="role-badge badge-warden">At the assembly point</span>
          <ul>
            <li>Account for all persons in your area using the register</li>
            <li>Report any missing persons to the Fire Marshal immediately — include last known location</li>
            <li>Keep occupants calm and away from the building</li>
            <li>Prevent unauthorised re-entry</li>
          </ul>
        </div>
        <div className="role-card">
          <span className="role-badge badge-warden">Ongoing duties</span>
          <ul>
            <li>Maintain currency of training — attend six-monthly refresher sessions</li>
            <li>Participate in and support fire drill planning and debrief</li>
            <li>Ensure adequate warden cover is arranged during your absence</li>
          </ul>
        </div>
      </Card>
      <Card title="Fire Marshal — additional responsibilities" icon="👤">
        <p>The Fire Marshal takes overall control of the evacuation. At {sd.name} this is the most senior person present or their nominated deputy.</p>
        <ul>
          <li>Receive reports from all Fire Wardens confirming area clearance</li>
          <li>Confirm 999 has been called and provide site address and access information</li>
          <li>Conduct the final roll call from the digital/printed register</li>
          <li>Meet the fire brigade on arrival — brief on: evacuation status, fire location and type, known hazards, alarm panel and isolation point locations</li>
          <li>Only authorise building re-entry when the fire service confirms it is safe</li>
          <li>Complete the post-incident log entry in the Fire Safety Logbook</li>
        </ul>
      </Card>
      <Card title={`Current warden provision — ${sd.name}`} icon="👥">
        <p>There are currently <strong>{sd.wardens} trained Fire Wardens</strong> at {sd.name}. The FRA recommends increasing this number. As a newly trained warden you are contributing to closing this gap.</p>
        <Box type="warning" icon="⚠️" style={{ marginTop: "0.75rem" }}>
          <p>Ensure adequate cover exists during any absence, holiday or sickness. Notify {cfg.qhseManager || "QHSE"} of any periods when warden numbers fall below the required minimum.</p>
        </Box>
      </Card>
      <Box type="danger" title="Limits of the warden role" icon="⚠️">
        <p>A Fire Warden is not a firefighter. Your role is to protect life — not property. <strong>Never</strong> re-enter a burning building. <strong>Never</strong> attempt to fight a fire beyond early stage. <strong>If in doubt, get out.</strong></p>
      </Box>
      <NavRow onBack={onBack} onNext={onNext} nextLabel="Start assessment →" />
    </div>
  );
}

// ─── ASSESSMENT ──────────────────────────────────────────────────────────────
export function Assessment({ cfg, questions, attempts, maxAttempts, onSubmit, onBack }) {
  const [answers, setAnswers] = useState({});
  const needed = Math.ceil(questions.length * cfg.passmark / 100);
  const answered = Object.keys(answers).length;

  return (
    <div>
      <SectionHeader tag="Assessment" icon="✏️" title="Knowledge assessment"
        desc={`Answer all ${questions.length} questions. Pass mark: ${cfg.passmark}% (${needed} correct). Attempt ${attempts + 1} of ${maxAttempts}.`} />
      {questions.map((q, i) => (
        <div className="q-block" key={i}>
          <div className="q-head">
            <div className="q-num">Question {i + 1} of {questions.length}</div>
            <div className="q-text">{q.q}</div>
          </div>
          <div className="q-opts">
            {q.opts.map((opt, j) => (
              <label key={j} className={`q-opt${answers[i] === j ? " selected" : ""}`}>
                <input type="radio" name={`q${i}`} value={j} checked={answers[i] === j}
                  onChange={() => setAnswers(a => ({ ...a, [i]: j }))} />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="nav-row">
        <span style={{ fontSize: "0.82rem", color: "var(--text3)" }}>{answered} of {questions.length} answered</span>
        <button className="btn btn-primary" disabled={answered < questions.length} onClick={() => onSubmit(answers)}>
          Submit answers →
        </button>
      </div>
    </div>
  );
}

// ─── CERTIFICATE ─────────────────────────────────────────────────────────────
export function Certificate({ cfg, questions, answers, passed, attempts, site, onRetake, onBack }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const total = questions.length;
  const needed = Math.ceil(total * cfg.passmark / 100);
  const score = questions.filter((q, i) => answers[i] === q.correct).length;
  const pct = Math.round(score / total * 100);
  const sd = site !== null ? cfg.sites[site] : cfg.sites[0];
  const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  const ref = `FW-${sd.name.substring(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  const handleSubmit = async () => {
    if (!name.trim() || !role.trim()) { window.alert("Please enter your full name and job title."); return; }
    setSending(true);
    try {
      const { serviceId, templateId, publicKey, toEmail } = cfg.emailjs || {};
      if (serviceId && serviceId !== "YOUR_SERVICE_ID" && templateId && publicKey) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(serviceId, templateId, {
          to_email: toEmail,
          name, role,
          site: sd.name,
          entity: sd.entity,
          score: `${pct}% (${score}/${total})`,
          date: today,
          reference: ref,
          refresher_due: nextYear,
        }, publicKey);
      }
    } catch (e) {
      console.warn("EmailJS error:", e);
    }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div>
      <SectionHeader tag={passed ? "Assessment passed" : "Assessment result"} icon={passed ? "🏆" : "✕"}
        title={passed ? "Training complete" : "Assessment result"} />
      <div className={`score-ring ${passed ? "pass" : "fail"}`}>
        <div className="score-num">{pct}%</div>
        <div className="score-sub">{score}/{total}</div>
      </div>

      {!passed && (
        <>
          <Box type="danger" title="Not passed" icon="✕">
            <p>You scored {score}/{total} ({pct}%). Pass mark is {cfg.passmark}% ({needed} correct).{" "}
              {attempts < cfg.maxAttempts ? "Please review the answers below and retake." : `You have used all ${cfg.maxAttempts} permitted attempts. Please contact ${cfg.qhseManager || "QHSE"} for guidance.`}
            </p>
          </Box>
          {attempts < cfg.maxAttempts && (
            <div style={{ textAlign: "right", marginBottom: "1rem" }}>
              <button className="btn btn-primary" onClick={onRetake}>↻ Retake assessment</button>
            </div>
          )}
        </>
      )}

      {passed && !submitted && (
        <Box type="success">
          <p>You have passed the Fire Warden assessment. Complete the declaration below to generate your certificate.</p>
        </Box>
      )}

      {/* Answer review */}
      <Card title="Answer review" icon="📋">
        {questions.map((q, i) => {
          const ok = answers[i] === q.correct;
          return (
            <div className="rev-row" key={i}>
              <span className="rev-icon">{ok ? "✅" : "❌"}</span>
              <div>
                <div className="rev-q">Q{i + 1}: {q.q}</div>
                {!ok && <>
                  <div className="rev-ans" style={{ color: "#991b1b" }}><strong>Your answer:</strong> {q.opts[answers[i]] || "Not answered"}</div>
                  <div className="rev-ans" style={{ color: "#166534" }}><strong>Correct:</strong> {q.opts[q.correct]}</div>
                  <div className="rev-ans" style={{ color: "var(--text3)" }}>{q.explain}</div>
                </>}
              </div>
            </div>
          );
        })}
      </Card>

      {/* Declaration & Certificate */}
      {passed && !submitted && (
        <div className="cert" id="cert-block">
          <h3 style={{ marginBottom: "0.75rem" }}>Declaration</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text2)", marginBottom: "1rem" }}>
            I confirm that I have completed the {cfg.orgName} Fire Warden Training course, understand my duties and responsibilities
            as a Fire Warden at <strong>{sd.name}</strong>, and will fulfil those responsibilities in accordance with the
            Regulatory Reform (Fire Safety) Order 2005 and the company Fire Safety Policy.
          </p>
          <div className="sig-grid">
            <div><label>Full name</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" /></div>
            <div><label>Job title / department</label><input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="Your role" /></div>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text3)", marginTop: "0.75rem" }}>
            Date: <strong>{today}</strong> &nbsp;·&nbsp; Site: <strong>{sd.name}</strong> &nbsp;·&nbsp; Score: <strong>{pct}%</strong>
          </p>
          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={sending}>
              {sending ? "Sending..." : "✓ Confirm & generate certificate →"}
            </button>
          </div>
        </div>
      )}

      {passed && submitted && (
        <>
          <Box type="success" style={{ textAlign: "center", padding: "1.5rem" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 700 }}>🏆 Fire Warden Training complete</p>
            <p>{name} is now a certified Fire Warden for {sd.name}</p>
          </Box>
          <div className="cert" id="printable-cert">
            <div className="cert-header">
              {cfg.logoUrl && <img src={cfg.logoUrl} alt={cfg.orgName} style={{ maxHeight: "48px", marginBottom: "12px", display: "block", marginLeft: "auto", marginRight: "auto" }} />}
              <div className="cert-org">{cfg.orgName}</div>
              <div className="cert-title">Fire Warden Training Certificate</div>
              <div className="cert-subtitle">Regulatory Reform (Fire Safety) Order 2005 — Article 15 &amp; 21 compliant</div>
            </div>
            <table className="cert-table">
              <tbody>
                <tr><td>Name</td><td>{name}</td></tr>
                <tr><td>Role / department</td><td>{role}</td></tr>
                <tr><td>Site</td><td>{sd.name} — {sd.entity}</td></tr>
                <tr><td>Address</td><td>{sd.address}</td></tr>
                <tr><td>Date of completion</td><td>{today}</td></tr>
                <tr><td>Assessment score</td><td className="cert-score">{pct}% ({score}/{total}) — Passed</td></tr>
                <tr><td>Certificate reference</td><td style={{ fontSize: "0.78rem", color: "var(--text3)" }}>{ref}</td></tr>
                <tr><td>Issued by</td><td>{cfg.orgName} — {cfg.qhseManager || "QHSE"}</td></tr>
                <tr><td>Refresher due</td><td>{nextYear}</td></tr>
                <tr><td>Topics covered</td><td style={{ fontSize: "0.78rem" }}>Legislation, fire chemistry, fire triangle, stages of fire, fire spread, classification, prevention, extinguisher types, risk assessment, fire safety arrangements, warden duties</td></tr>
              </tbody>
            </table>
          </div>
          <Box type="warning" style={{ marginTop: "1rem" }}>
            <p>🖨️ <strong>Action required:</strong> Print or screenshot this certificate and submit to {cfg.qhseManager || "QHSE"} for your personnel training file.</p>
          </Box>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Print certificate</button>
          </div>
        </>
      )}
    </div>
  );
}
