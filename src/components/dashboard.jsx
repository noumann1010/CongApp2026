import React from 'react';
import { useUser } from "@clerk/react";
import "./dashboard.css";


function Dashboard() {
  const { user, isSignedIn, isLoading } = useUser();
  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h1 className="dashboard-logo">VirusWatch</h1>

        <nav className="dashboard-nav">
          <a href="/" className="active">Home</a>
          <a href="/SelectedSymptoms">Symptoms</a>
            
          <a href="/about">About</a>
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

          <a href="/SelectedSymptoms" className="dashboard-check-button">
            Check Symptoms
          </a>
        </section>

        <section className="dashboard-symptoms">
          <h2>Check Your Symptoms</h2>

          <p>
            Enter your symptoms to learn about possible
            illnesses and get helpful information.
          </p>

          <a href="/SelectedSymptoms" className="dashboard-start-button">
            Get Started
          </a>
        </section>
      </main>
    </div>
  );

 
} 

export default Dashboard;