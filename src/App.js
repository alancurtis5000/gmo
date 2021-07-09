import "./App.css";
import LoginButton from "./components/login-button/login-button.component";
import LogoutButton from "./components/logout-button/logout-button.component";
import Profile from "./components/profile/profile.component";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      this is my app
      {/* {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />} */}
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
