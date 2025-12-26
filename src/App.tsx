import { useLaunches } from "./hooks/useLaunches";
import LaunchList from "./components/LauchList";
import "./App.css";
import { useState } from "react";
import type { Launch } from "./types/launch";
import earth from "./assets/earth.png";
import moon from "./assets/moon.png";
// Main application component
// Responsible for deciding what to render based on app states
function App() {
  const { loading, error, launches } = useLaunches();
  const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);
// Converts different YouTube URL formats into an embeddable iframe URL
  function handleSelectedLaunch(launch: Launch) {
    setSelectedLaunch(launch);
  }

  function getYouTubeEmbedUrl(url: string) {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("youtube.com")) {
      const videoId = new URL(url).searchParams.get("v");
      return videoId
        ? `https://www.youtube.com/embed/${videoId}`
        : null;
    }

    return null;
  }
// Memo-like derived value for the selected launch video
  const embedUrl =
    selectedLaunch?.videoLink
      ? getYouTubeEmbedUrl(selectedLaunch.videoLink)
      : null;

  return (
    <div>
      {/* Decorative background elements */}
      <img src={earth} alt="Earth" className="earth" />
      <img src={moon} alt="Moon" className="moon" />
      {/* Loading and error states */}
      {loading && <p>Loading...</p>}
      {error && <p>Error loading launches</p>}
      {/* Main layout */}
      {!loading && !error && launches.length === 0 && (
        <p>No launches found</p>
      )}

      {!loading && !error && (
        <div className="layout">
          <div className="sidebar">
            <div className="sidebar-list">
              <LaunchList
                launches={launches}
                onSelectedLaunch={handleSelectedLaunch}
              />
            </div>
          </div>

          <div className="panel">
            {!selectedLaunch && (
              <p className="panel-placeholder">Select a launch to see details</p>
            )}

            {selectedLaunch && (
              <div className="panel-content">
                <h2>{selectedLaunch.name}</h2>

                <p>{selectedLaunch.date}</p>

                <p>
                  {selectedLaunch.success === null
                    ? "Status unknown"
                    : selectedLaunch.success
                    ? "Mission successful"
                    : "Mission failed"}
                </p>

                <p>{selectedLaunch.details ?? "No details available"}</p>

                {embedUrl && (
                  <div className="video-container">
                    <iframe
                      src={embedUrl}
                      title="Launch video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
