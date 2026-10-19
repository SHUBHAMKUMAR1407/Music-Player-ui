"use client"

import type React from "react"
import type { Song } from "@/types/song"
import { formatTime } from "@/utils/format-utils"

interface SongsListProps {
  songs: Song[]
  currentSong: Song | null
  isPlaying: boolean
  onPlaySong: (song: Song) => void
  onToggleFavorite: (song: Song) => void
  favorites: Song[]
  activeTab: string
}

const SongsList: React.FC<SongsListProps> = ({
  songs,
  currentSong,
  isPlaying,
  onPlaySong,
  onToggleFavorite,
  favorites,
  activeTab,
}) => {
  const getTabTitle = () => {
    switch (activeTab) {
      case "favorites":
        return "Favourites"
      case "recentlyPlayed":
        return "Recently Played"
      case "topTracks":
        return "Top Tracks"
      default:
        return "For You"
    }
  }

  return (
    <div className="songs-list">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Your collection</div>
          <h2 className="section-title">{getTabTitle()}</h2>
        </div>
        <span className="track-count">{songs.length} {songs.length === 1 ? "track" : "tracks"}</span>
      </div>

      {songs.length === 0 ? (
        <div className="empty-state">
          <p>
            {activeTab === "favorites"
              ? "No favorite songs yet. Mark songs as favorite to see them here."
              : activeTab === "recentlyPlayed"
                ? "No recently played songs. Start playing some music!"
                : "No songs found."}
          </p>
        </div>
      ) : (
        <div className="songs-container">
          {songs.map((song, index) => (
            <div key={song.id} className={`song-item ${currentSong?.id === song.id ? "active" : ""}`}>
              <span className="song-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="song-thumbnail" onClick={() => onPlaySong(song)}>
                <img src={song.thumbnail || "/placeholder.svg"} alt={song.title} />
                <div className="play-overlay">
                  <i className={`fas ${currentSong?.id === song.id && isPlaying ? "fa-pause" : "fa-play"}`}></i>
                </div>
              </div>

              <div className="song-info" onClick={() => onPlaySong(song)}>
                <div className="title">{song.title}</div>
                <div className="artist">{song.artistName}</div>
              </div>

              <div className="song-duration">{formatTime(song.duration)}</div>

              <div className="song-actions">
                <button
                  type="button"
                  className={`favorite-song-btn ${favorites.some((fav) => fav.id === song.id) ? "active" : ""}`}
                  aria-label={favorites.some((fav) => fav.id === song.id) ? `Remove ${song.title} from favourites` : `Add ${song.title} to favourites`}
                  onClick={(event) => {
                    event.stopPropagation()
                    onToggleFavorite(song)
                  }}
                >
                  <i className={favorites.some((fav) => fav.id === song.id) ? "fas fa-heart" : "far fa-heart"}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SongsList

