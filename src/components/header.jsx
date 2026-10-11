import "./EnterDuration.css";
import "./header.css";
import {
    Show,
    SignInButton,
    SignUpButton,
    UserButton,
  } from "@clerk/react";
  

  
  function Header() {
    return (
      <header className="vw-header">
        <a className="vw-logo" href="/">
          VirusWatch
        </a>
  
        <nav className="vw-header-actions">
          <Show when="signed-out">
            <SignInButton>
              <button className="vw-login-button">
                Sign In
              </button>
            </SignInButton>
  
            <SignUpButton>
              <button className="vw-signup-button">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
  
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>
      </header>
    );
  }
  
  export default Header;
  
