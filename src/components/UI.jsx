// ─── SHARED UI COMPONENTS ────────────────────────────────────────────────────
import React from "react";

export function Card({ title, icon, children, style }) {
  return (
    <div className="card" style={style}>
      {title && <div className="card-title"><span className="card-title-icon">{icon}</span> {title}</div>}
      {children}
    </div>
  );
}

export function Box({ type = "info", title, icon, children }) {
  return (
    <div className={`box box-${type}`}>
      {title && <h3>{icon && <span>{icon}</span>} {title}</h3>}
      {children}
    </div>
  );
}

export function SectionHeader({ tag, icon, title, desc }) {
  return (
    <div className="section-header">
      <div className="section-tag">{icon} {tag}</div>
      <h2>{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

export function NavRow({ onBack, onNext, nextLabel = "Continue →", nextDisabled = false }) {
  return (
    <div className="nav-row">
      {onBack ? (
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
      ) : <span />}
      <button className="btn btn-primary" onClick={onNext} disabled={nextDisabled}>
        {nextLabel}
      </button>
    </div>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <table className="data-table">
      {headers && <thead><tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>}
      <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
    </table>
  );
}

export function LegItem({ year, title, desc }) {
  return (
    <div className="leg-item">
      <span className="leg-year">{year}</span>
      <div><div className="leg-title">{title}</div><p className="leg-desc">{desc}</p></div>
    </div>
  );
}
