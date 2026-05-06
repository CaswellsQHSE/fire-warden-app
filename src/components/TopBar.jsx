import React from "react";

export default function TopBar({ title, subtitle, onMenuClick, onAdminClick }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Open menu">☰</button>
        <div>
          <div className="topbar-title">{title}</div>
          <div className="topbar-sub">{subtitle}</div>
        </div>
      </div>
      <button className="admin-btn" onClick={onAdminClick}>⚙ Admin</button>
    </div>
  );
}
