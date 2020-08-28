import React from "react";

import "./SignIn.scss";
export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <h2>Login Your Account</h2>
        <form>
          <input type="text" placeholder="UserName" required={true} />
          <input type="password" placeholder="Password" required={true} />
          <button type="submit" className="auth-btn">
            Log In
          </button>
        </form>
        <button className="google-btn">Continue with Google</button>
        <p>
          have no account?<em>Here</em>
        </p>
      </div>
    </div>
  );
}
