import React from "react";

export default function Sidebar({ cfg, modules, current, completed, progress, open, onNavigate }) {
  return (
    <nav className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-logo">
        {cfg.logoUrl
          ? <img src={cfg.logoUrl} alt={cfg.orgName} />
          : <div className="sidebar-flame">🔥</div>}
        <div className="sidebar-org">{cfg.orgName}</div>
        <div className="sidebar-course">{cfg.courseTitle}</div>
      </div>
      <div className="sidebar-section">Course modules</div>
      {modules.map((m, i) => {
        const isDone = completed.includes(i);
        const isActive = current === i;
        const canNav = isActive || isDone || i <= current;
        return (
          <div
            key={m.id}
            className={`nav-item${isActive ? " active" : ""}${isDone ? " done" : ""}`}
            onClick={() => canNav && onNavigate(i)}
            style={{ cursor: canNav ? "pointer" : "default", opacity: !canNav && !isActive ? 0.45 : 1 }}
          >
            <span className="nav-num">{i + 1}</span>
            <span className="nav-icon">{m.icon}</span>
            <span>{m.label}</span>
          </div>
        );
      })}
      <div className="sidebar-footer">
        <div className="prog-label">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="prog-track">
          <div className="prog-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </nav>
  );
}
