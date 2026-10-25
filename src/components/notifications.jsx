
import "./notifications.css";
import { useState, useEffect } from "react";

function Notifications() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAlerts() {
      try {
        const response = await fetch("http://localhost:5002/api/cdc");

        if (!response.ok) {
          throw new Error("Failed to load CDC data.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The server did not return a list of updates.");
        }

        setAlerts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadAlerts();
  }, []);

  function getLevelClass(level) {
    const value = String(level ?? "").toLowerCase();

    if (value.includes("very high") || value.includes("high")) {
      return "high";
    }

    if (value.includes("moderate") || value.includes("medium")) {
      return "moderate";
    }

    if (value.includes("low") || value.includes("minimal")) {
      return "low";
    }

    return "unknown";
  }

  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <div className="notifications-hero">
          <div className="notifications-hero-content">
            <span className="notifications-eyebrow">
              VIRUSWATCH HEALTH UPDATES
            </span>

            <h1>Health Notifications</h1>

            <p>
              Stay informed about respiratory illness activity
              across the United States with the latest available
              CDC updates.
            </p>

            <div className="notifications-source">
              <span className="source-dot"></span>
              Data provided by CDC
            </div>
          </div>

          <div className="notifications-hero-icon">
            <svg
              width="66"
              height="66"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>
          </div>
        </div>

        <div className="notifications-overview">
          <div className="overview-icon">
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          </div>

          <div className="overview-content">
            <span className="overview-label">
              Available Health Updates
            </span>
            <h2>{loading ? "—" : error ? "—" : alerts.length}</h2>
          </div>

          <span className="overview-status">
            {loading ? "Loading" : error ? "Unavailable" : "CDC Data"}
          </span>
        </div>

        <div className="notifications-section-heading">
          <div>
            <h2>Respiratory Illness Updates</h2>
            <p>
              Explore reported activity levels and health
              information by state.
            </p>
          </div>

          <span className="notifications-section-tag">
            United States
          </span>
        </div>

        {loading && (
          <div className="notifications-message">
            <div className="notifications-spinner"></div>
            <h3>Loading health updates</h3>
            <p>Retrieving the latest available information.</p>
          </div>
        )}

        {error && (
          <div className="notifications-message">
            <div className="message-icon">!</div>
            <h3>Unable to load updates</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && alerts.length === 0 && (
          <div className="notifications-message">
            <div className="message-icon">✓</div>
            <h3>No updates available</h3>
            <p>
              There are currently no health updates to display.
              Check back later for new information.
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="notifications-grid">
            {alerts.map((alert, index) => (
              <article className="health-alert-card" key={index}>
                <div className="alert-card-top">
                  <div className="alert-location">
                    <div className="alert-location-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>

                    <span>{alert.state || "United States"}</span>
                  </div>

                  <span
                    className={`activity-badge ${getLevelClass(alert.level)}`}
                  >
                    <span className="activity-dot"></span>
                    {alert.level ?? "Unknown"}
                  </span>
                </div>

                <div className="alert-card-body">
                  <span className="alert-category">
                    RESPIRATORY HEALTH
                  </span>

                  <h3>{alert.title || "Health Activity Update"}</h3>

                  <p>
                    Review the reported respiratory illness
                    activity level for this location.
                  </p>
                </div>

                <div className="alert-card-footer">
                  <span className="alert-date">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                    </svg>
                    {alert.date || "Date unavailable"}
                  </span>

                  <span className="alert-source-label">
                    CDC Update
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="notifications-disclaimer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 11v5M12 8h.01" />
          </svg>

          <p>
            <strong>About these updates:</strong> Activity levels
            are provided for informational purposes only and
            may not reflect current conditions. VirusWatch
            does not provide medical diagnoses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
