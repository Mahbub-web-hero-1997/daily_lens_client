import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Daily Lens</h1>
      <p>This is the home page.</p>
      <p>
        <a href="/about">Go to About</a>
      </p>
      <p>
        <a href="/contact">Go to Contact</a>
      </p>
      <p>
        <a href="/login">Log in</a>
      </p>
      <p>
        <a href="/logout">Log out</a>
      </p>
      <p>
        <a href="/dashboard">Dashboard</a>
      </p>
      <p>
        <a href="/settings">Settings</a>
      </p>
      <p>
        <a href="/profile">Profile</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot Password</a>
      </p>
    </div>
  );
};

export default Home;
