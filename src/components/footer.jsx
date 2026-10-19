import "./footer.css";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";   


function Footer() { 
    return (
        <footer className="vw-footer">
            <div className="vw-footer-content">
                <p>&copy; 2026 VirusWatch. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;