import React from 'react';
import { useUser } from "@clerk/react";
import "./dashboard.css";



function Dashboard({ onStart, onNotifications, onAbout }) {
  const { user, isSignedIn, isLoaded } = useUser();

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
          <button onClick={onNotifications}>Notifications</button>
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
      </main>
    </div>
  );

 
} 

export default Dashboard;