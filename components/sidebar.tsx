"use client"

import type React from "react"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  onClose?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onClose }) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    if (window.innerWidth <= 768 && onClose) {
      onClose()
    }
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="10" fill="#5EE7F5" />
            <circle cx="12" cy="12" r="3" fill="white" />
          </svg>
        </div>
        <span>Tech Music</span>
      </div>

      <div className="sidebar-section">
        <div
          className={`sidebar-item ${activeTab === "forYou" ? "active" : ""}`}
          onClick={() => handleTabClick("forYou")}
        >
          <i className="fas fa-compass" aria-hidden="true"></i>
          <span>For You</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div
          className={`sidebar-item ${activeTab === "topTracks" ? "active" : ""}`}
          onClick={() => handleTabClick("topTracks")}
        >
          <i className="fas fa-chart-line" aria-hidden="true"></i>
          <span>Top Tracks</span>
        </div>

        <div
          className={`sidebar-item ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => handleTabClick("favorites")}
        >
          <i className="fas fa-heart" aria-hidden="true"></i>
          <span>Favourites</span>
        </div>

        <div
          className={`sidebar-item ${activeTab === "recentlyPlayed" ? "active" : ""}`}
          onClick={() => handleTabClick("recentlyPlayed")}
        >
          <i className="fas fa-clock" aria-hidden="true"></i>
          <span>Recently Played</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <span className="status-dot" aria-hidden="true"></span>
        <span>Ready to play</span>
      </div>

      {onClose && (
        <button className="close-sidebar" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  )
}

export default Sidebar

