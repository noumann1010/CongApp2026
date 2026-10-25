
import React from "react";
import { useUser } from "@clerk/react";
import "./dashboard.css";

function Dashboard({ onStart, onNotifications, onAbout }) {
  const { user, isSignedIn, isLoaded } = useUser();

  const notifications = [
    {
      id: 1,
      title: "Welcome to VirusWatch!",
      message: "Start by checking your symptoms to get helpful insights.",
      date: "Today"
    },
    {
      id: 2,
      title: "Symptom Checker",
      message: "Use our symptom checker to explore possible illnesses.",
      date: "Today"
    }
  ];

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h1 className="dashboard-logo">VirusWatch</h1>

        <nav className="dashboard-nav">
          <a href="/" className="active">Home</a>
          <button onClick={onStart}>Symptoms</button>
          <button onClick={onNotifications}>
            Notifications ({notifications.length})
          </button>
          <button onClick={onAbout}>About</button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Home</h1>
          <p>Track your health and stay informed.</p>
        </header>

        <section className="dashboard-welcome">
          <h2>
            {isSignedIn
              ? `Welcome to VirusWatch, ${user?.firstName || "User"}!`
              : "Welcome to VirusWatch!"}
          </h2>

          <p>
            Track your symptoms and get AI-powered insights
            to stay informed and healthy.
          </p>

          <button onClick={onStart} className="dashboard-check-button">
            Check Symptoms
          </button>
        </section>

        <section className="dashboard-symptoms">
          <h2>Check Your Symptoms</h2>
          <p>
            Enter your symptoms to learn about possible
            illnesses and get helpful information.
          </p>

          <button onClick={onStart} className="dashboard-check-button">
            Get Started
          </button>
        </section>

        <section className="dashboard-notifications">
  <div className="notifications-top">
    <div>
      <h2>Notifications</h2>
      <p>Stay updated with VirusWatch</p>
    </div>
    <span className="notifications-badge">
      {notifications.length} New
    </span>
  </div>

  <div className="notifications-list">
    {notifications.map((notification) => (
      <div className="notification-card" key={notification.id}>
        <div className="notification-icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
        </div>

        <div className="notification-details">
          <div className="notification-title-row">
            <h3>{notification.title}</h3>
            <span className="notification-time">
              {notification.date}
            </span>
          </div>

          <p>{notification.message}</p>
        </div>

        <span className="notification-unread"></span>
      </div>
    ))}
  </div>

  <button
    className="notifications-view-all"
    onClick={onNotifications}
  >
    View All Notifications <span>→</span>
  </button>
</section>
      </main>
    </div>
  );
}

export default Dashboard;
