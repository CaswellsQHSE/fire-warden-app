import React, { useState } from "react";

export default function AdminPanel({ cfg, questions, onSave, onClose }) {
  const [tab, setTab] = useState("branding");
  const [localCfg, setLocalCfg] = useState({ ...cfg });
  const [localQs, setLocalQs] = useState(questions.map(q => ({ ...q, opts: [...q.opts] })));

  const updateCfg = (key, val) => setLocalCfg(c => ({ ...c, [key]: val }));
  const updateEmailjs = (key, val) => setLocalCfg(c => ({ ...c, emailjs: { ...c.emailjs, [key]: val } }));

  const updateSite = (siteIdx, key, val) => {
    setLocalCfg(c => {
      const sites = c.sites.map((s, i) => i === siteIdx ? { ...s, [key]: val } : s);
      return { ...c, sites };
    });
  };

  const updateSiteActions = (siteIdx, text) => {
    const actions = text.split("\n").filter(l => l.trim());
    updateSite(siteIdx, "fraActions", actions);
  };

  const updateQ = (qi, key, val) => {
    setLocalQs(qs => qs.map((q, i) => i === qi ? { ...q, [key]: val } : q));
  };

  const updateOpt = (qi, oi, val) => {
    setLocalQs(qs => qs.map((q, i) => {
      if (i !== qi) return q;
      const opts = q.opts.map((o, j) => j === oi ? val : o);
      return { ...q, opts };
    }));
  };

  const removeQ = (qi) => {
    if (window.confirm(`Remove question ${qi + 1}?`)) {
      setLocalQs(qs => qs.filter((_, i) => i !== qi));
    }
  };

  const addQ = () => {
    setLocalQs(qs => [...qs, { q: "New question", opts: ["Option A", "Option B", "Option C", "Option D"], correct: 0, explain: "Explanation here." }]);
  };

  const handleSave = () => {
    onSave(localCfg, localQs);
    window.alert("Changes saved for this session. To make permanent: update src/data/config.js and redeploy.");
  };

  const tabs = ["branding", "emailjs", "sites", "questions", "settings"];

  return (
    <div className="admin-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="admin-modal">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <h2 style={{ margin: 0 }}>Admin panel</h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <button className="btn btn-primary btn-sm" onClick={handleSave}>✓ Save changes</button>
            <button className="btn btn-ghost btn-sm" onClick={onClose}>✕ Close</button>
          </div>
        </div>

        <div className="box box-warning" style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "0.82rem" }}>
            <strong>To save permanently:</strong> update <code>src/data/config.js</code> in your project and redeploy to Vercel.
            Changes made here persist for the current session only.
          </p>
        </div>

        <div className="admin-tabs">
          {tabs.map(t => (
            <button key={t} className={`admin-tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* BRANDING */}
        {tab === "branding" && (
          <div>
            <div className="admin-sec-title">Organisation &amp; branding</div>
            <div className="grid-2">
              <div className="admin-field"><label>Organisation name</label>
                <input value={localCfg.orgName} onChange={e => updateCfg("orgName", e.target.value)} /></div>
              <div className="admin-field"><label>Course title</label>
                <input value={localCfg.courseTitle} onChange={e => updateCfg("courseTitle", e.target.value)} /></div>
            </div>
            <div className="grid-2">
              <div className="admin-field"><label>Primary colour (hex)</label>
                <input value={localCfg.brandPrimary} onChange={e => updateCfg("brandPrimary", e.target.value)} style={{ fontFamily: "monospace" }} /></div>
              <div className="admin-field"><label>Secondary / accent colour</label>
                <input value={localCfg.brandSecondary} onChange={e => updateCfg("brandSecondary", e.target.value)} style={{ fontFamily: "monospace" }} /></div>
            </div>
            <div className="grid-2">
              <div className="admin-field"><label>QHSE Manager name</label>
                <input value={localCfg.qhseManager || "Mike"} onChange={e => updateCfg("qhseManager", e.target.value)} /></div>
              <div className="admin-field"><label>Logo URL</label>
                <input value={localCfg.logoUrl} onChange={e => updateCfg("logoUrl", e.target.value)} placeholder="https://..." />
                {localCfg.logoUrl && <img src={localCfg.logoUrl} alt="logo preview" className="logo-preview" />}
              </div>
            </div>
            <div className="admin-field"><label>Admin password</label>
              <input type="password" value={localCfg.adminPassword} onChange={e => updateCfg("adminPassword", e.target.value)} /></div>
          </div>
        )}

        {/* EMAILJS */}
        {tab === "emailjs" && (
          <div>
            <div className="admin-sec-title">EmailJS completion notifications</div>
            <div className="box box-info" style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.82rem" }}>Sign up free at <a href="https://www.emailjs.com" target="_blank" rel="noreferrer">emailjs.com</a>.
                Create a service and email template. Your template can use variables: <code>{"{{name}}"}</code>, <code>{"{{role}}"}</code>,
                <code>{"{{site}}"}</code>, <code>{"{{score}}"}</code>, <code>{"{{date}}"}</code>, <code>{"{{reference}}"}</code>.
              </p>
            </div>
            <div className="grid-2">
              <div className="admin-field"><label>Service ID</label>
                <input value={localCfg.emailjs?.serviceId || ""} onChange={e => updateEmailjs("serviceId", e.target.value)} placeholder="service_abc123" style={{ fontFamily: "monospace" }} /></div>
              <div className="admin-field"><label>Template ID</label>
                <input value={localCfg.emailjs?.templateId || ""} onChange={e => updateEmailjs("templateId", e.target.value)} placeholder="template_xyz789" style={{ fontFamily: "monospace" }} /></div>
            </div>
            <div className="grid-2">
              <div className="admin-field"><label>Public Key</label>
                <input value={localCfg.emailjs?.publicKey || ""} onChange={e => updateEmailjs("publicKey", e.target.value)} placeholder="abcDEFghiJKL" style={{ fontFamily: "monospace" }} /></div>
              <div className="admin-field"><label>Send completion emails to</label>
                <input type="email" value={localCfg.emailjs?.toEmail || ""} onChange={e => updateEmailjs("toEmail", e.target.value)} placeholder="qhse@caswellsgroup.com" /></div>
            </div>
          </div>
        )}

        {/* SITES */}
        {tab === "sites" && (
          <div>
            {localCfg.sites.map((site, si) => (
              <div key={si} style={{ marginBottom: "2rem" }}>
                <div className="admin-sec-title">{site.name}</div>
                <div className="grid-2">
                  <div className="admin-field"><label>Site name</label>
                    <input value={site.name} onChange={e => updateSite(si, "name", e.target.value)} /></div>
                  <div className="admin-field"><label>Legal entity</label>
                    <input value={site.entity} onChange={e => updateSite(si, "entity", e.target.value)} /></div>
                </div>
                <div className="admin-field"><label>Address</label>
                  <input value={site.address} onChange={e => updateSite(si, "address", e.target.value)} /></div>
                <div className="grid-2">
                  <div className="admin-field"><label>Assembly point</label>
                    <input value={site.assembly} onChange={e => updateSite(si, "assembly", e.target.value)} /></div>
                  <div className="admin-field"><label>Alarm test schedule</label>
                    <input value={site.alarm} onChange={e => updateSite(si, "alarm", e.target.value)} /></div>
                </div>
                <div className="grid-2">
                  <div className="admin-field"><label>Fire service</label>
                    <input value={site.fireService} onChange={e => updateSite(si, "fireService", e.target.value)} /></div>
                  <div className="admin-field"><label>Responsible person</label>
                    <input value={site.responsiblePerson} onChange={e => updateSite(si, "responsiblePerson", e.target.value)} /></div>
                </div>
                <div className="admin-field"><label>Outstanding FRA actions (one per line)</label>
                  <textarea rows={4} value={site.fraActions.join("\n")} onChange={e => updateSiteActions(si, e.target.value)} /></div>
              </div>
            ))}
          </div>
        )}

        {/* QUESTIONS */}
        {tab === "questions" && (
          <div>
            <div className="admin-sec-title">Question bank ({localQs.length} questions)</div>
            {localQs.map((q, qi) => (
              <div className="q-admin" key={qi}>
                <div className="q-admin-head">
                  <span className="q-admin-num">Q{qi + 1}</span>
                  <button className="btn btn-ghost btn-sm" style={{ color: "#991b1b", borderColor: "#fca5a5" }}
                    onClick={() => removeQ(qi)}>🗑 Remove</button>
                </div>
                <div className="admin-field"><label>Question text</label>
                  <textarea rows={2} value={q.q} onChange={e => updateQ(qi, "q", e.target.value)} /></div>
                {q.opts.map((opt, oi) => (
                  <div className="opt-row" key={oi}>
                    <input type="radio" name={`correct-${qi}`} checked={q.correct === oi}
                      onChange={() => updateQ(qi, "correct", oi)} title="Mark as correct" />
                    <input type="text" value={opt} onChange={e => updateOpt(qi, oi, e.target.value)} />
                  </div>
                ))}
                <div className="admin-field" style={{ marginTop: "8px" }}>
                  <label>Explanation (shown on incorrect answer)</label>
                  <textarea rows={2} value={q.explain || ""} onChange={e => updateQ(qi, "explain", e.target.value)} />
                </div>
              </div>
            ))}
            <button className="btn btn-dark btn-sm" onClick={addQ} style={{ marginTop: "0.5rem" }}>+ Add question</button>
          </div>
        )}

        {/* SETTINGS */}
        {tab === "settings" && (
          <div>
            <div className="admin-sec-title">Course settings</div>
            <div className="grid-2">
              <div className="admin-field"><label>Pass mark (%)</label>
                <input type="number" min={50} max={100} value={localCfg.passmark} onChange={e => updateCfg("passmark", parseInt(e.target.value))} /></div>
              <div className="admin-field"><label>Max attempts</label>
                <input type="number" min={1} max={5} value={localCfg.maxAttempts} onChange={e => updateCfg("maxAttempts", parseInt(e.target.value))} /></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
