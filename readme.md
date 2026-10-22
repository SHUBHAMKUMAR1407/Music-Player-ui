# Tech Music

A modern, responsive music player UI built with Next.js and React. The app includes a searchable song library, browser-based audio playback, favourites, recently played tracks, and a responsive layout that works across desktop and mobile screens.

## Preview

The interface includes:

- A sidebar for navigation
- A searchable track list
- A now-playing panel with album art
- Previous, play/pause, next, seek, and volume controls
- Responsive mobile navigation
- Dynamic background colours derived from the current cover image

## Features

- **Responsive layout** - The sidebar and player adapt to smaller screens, with a menu toggle for mobile users.
- **Audio playback** - Play tracks directly in the browser using the native HTML audio element.
- **Playback controls** - Pause, resume, skip tracks, seek through a track, and adjust volume.
- **Search** - Filter tracks by title or artist name as you type.
- **Favourites** - Add or remove tracks from Favourites. The selection is saved in `localStorage`.
- **Recently Played** - Keeps the latest 10 played tracks in `sessionStorage`.
- **Dynamic player theme** - The player background uses the dominant colour from the current thumbnail.
- **Smooth UI transitions** - Includes hover states, loading effects, and animated visual feedback.
- **Accessible controls** - Interactive player actions include labels for screen readers.

## Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- TypeScript
- SCSS and CSS
- Bootstrap and React Bootstrap
- Lucide React and Font Awesome icons
- Native HTML5 Audio API

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
git clone <your-repository-url>
cd Music-Player-ui
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Create a production build
npm start       # Start the production server
npm run lint    # Run the configured lint command
```

## Project Structure

```text
.
|-- app/
|   |-- page.tsx           # Main music player screen
|   |-- layout.tsx         # Root layout and metadata
|   `-- globals.scss       # Application styles and responsive rules
|-- components/
|   |-- music-player.tsx   # Audio player and playback controls
|   |-- sidebar.tsx        # Navigation and mobile sidebar
|   |-- songs-list.tsx     # Track list and favourite actions
|   `-- ui/                # Reusable UI components
|-- data/
|   `-- songs.ts           # Demo track data
|-- types/
|   `-- song.ts            # Song TypeScript interface
|-- utils/
|   `-- color-utils.ts     # Thumbnail colour extraction helpers
|-- public/                # Static assets and fallback images
`-- package.json           # Scripts and dependencies
```

## Adding or Replacing Songs

Demo songs are defined in [`data/songs.ts`](data/songs.ts). Each song follows this shape:

```ts
export interface Song {
  id: string
  title: string
  artistName: string
  thumbnail: string
  musicUrl: string
  duration: number // duration in seconds
}
```

To use your own music, replace the `thumbnail` and `musicUrl` values in `data/songs.ts`. The current demo uses remote image and audio URLs, so the browser must be able to access those URLs.

## Storage Behaviour

| Feature | Storage | Key | Behaviour |
| --- | --- | --- | --- |
| Favourites | `localStorage` | `favorites` | Persists between browser sessions |
| Recently played | `sessionStorage` | `recentlyPlayed` | Persists for the current browser tab session |

## Customisation

- Update the catalogue in `data/songs.ts`.
- Adjust colours, spacing, breakpoints, and animations in `app/globals.scss`.
- Change the app name and metadata in `app/layout.tsx`.
- Replace `public/favicon.svg` and other assets to customise the branding.

## Notes

- This is a frontend-only project and does not include authentication, a database, or a music upload service.
- The audio player depends on the remote `musicUrl` for each track.
- Favourites and recently played tracks are stored locally in the browser and are not shared between users or devices.

## License

This project is intended for learning, experimentation, and frontend portfolio use. Add a project-specific licence before distributing it publicly.
