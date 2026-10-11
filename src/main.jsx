import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/react";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Missing Clerk publishable key in .env");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <App />
    </ClerkProvider>
  </StrictMode>
);