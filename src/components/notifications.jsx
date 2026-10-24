import "./notifications.css";
import useState from "react";
import useEffect from "react";






function notifications({notifications = []}) {
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
                    throw new Error("Failed to load CDC data");
                }

                const data = await response.json();
                setAlerts(data);
            } catch (err) {
                console.error(err);
                setError("Unable to load CDC updates.");
            } finally {
                setLoading(false);
            }
        }

        loadAlerts();
    }, []);


    return (
        <div className="notifications">
            <h1>Notifications</h1>
            <p>Stay updated with recent outbreaks in the United States.</p>
            <h3>{alert.state}</h3>

<p>{alert.title}</p>

<p>
                                   Activity Level:
                                    <strong> {alert.level}</strong>
                             </p>

            {notifications.map((notification, index) => (
                <div className="notification" key={index}>
                    <p>{notification}</p>
                </div>
            ))}

        </div>
    );

}

export default notifications;