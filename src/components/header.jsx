import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/react";

export default function Header() {
  return (
    <header className="header">
      <h1>VirusWatch</h1>
      <nav>
        <SignInButton />
        <SignUpButton />
        <UserButton />
      </nav>
    </header>
  );
}