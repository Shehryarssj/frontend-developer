import React from "react";
import "./Auth.css";
import SignIn from "./SignIn";
import { useState } from "react";

const Auth = () => {
  const [state, setState] = useState("sign-in");

  return (
    <div className="auth">
      <SignIn />
    </div>
  );
};

export default Auth;
