import React from 'react';
import { useUser } from "@clerk/react";


function Dashboard() {
  const { user, isSignedIn, isLoading } = useUser();
  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {isSignedIn ? (
        <p>Welcome, {user.firstName}!</p>
      ) : (
        <p>Please sign in to view your dashboard.</p>
      )}
      <p>Welcome to the VirusWatch!</p>
    </div>
  );

 
} 

export default Dashboard;