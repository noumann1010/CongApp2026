import "./notifications.css";
import { useState, useEffect } from "react";

function Notifications() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAlerts() {
      try {
        const response = await fetch(
          "http://localhost:5002/api/cdc"
        );

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

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <p>
        Stay updated with respiratory illness updates
        in the United States.
      </p>

      {loading && <p>Loading updates...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && alerts.length === 0 && (
        <p>No updates available.</p>
      )}

      {alerts.map((alert, index) => (
        <div className="notification" key={index}>
          <h3>{alert.state}</h3>
          <p>{alert.title}</p>
          <p>Activity level: {alert.level}</p>
          <p>{alert.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;