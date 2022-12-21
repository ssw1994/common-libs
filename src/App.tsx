import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ForgotPassword, Login, Register, ResetPassword } from "./libs";

function App() {
  const loginClick = (data: any) => {
    console.log(data);
  };
  const registerClick = (data: any) => {
    console.log(data);
  };
  const resetClick = (data: any) => {
    console.log(data);
  };
  const forgotClick = (data: any) => {
    console.log(data);
  };
  const flags = {
    login: true,
    register: true,
    forgotPassword: true,
    resetPassword: true,
  };

  return (
    <div className="App">
      {flags.login && <Login onAction={loginClick} />}
      {flags.register && <Register onAction={registerClick} />}
      {flags.forgotPassword && <ForgotPassword onAction={forgotClick} />}
      {flags.resetPassword && <ResetPassword onAction={resetClick} />}
    </div>
  );
}

export default App;
