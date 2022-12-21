import React from "react";
import { useFormGroup } from "../hooks/useFormGroup";
import "../style.css";
interface LoginForm {
  username: string;
  password: string;
}

interface LoginProps {
  onAction: (formData: LoginForm) => void;
}

export const Login = (props: LoginProps) => {
  const { onAction } = props;

  const [loginForm, updateForm] = useFormGroup<LoginForm>();

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAction(loginForm);
  };
  return (
    <div className="item-container">
      <div className="feature-header">
        <strong>Login</strong>
      </div>

      <form onSubmit={handleClick}>
        <div>
          <input
            placeholder="Username"
            id="username"
            onChange={updateForm}
            value={loginForm.username}
          ></input>
        </div>
        <div>
          <input
            placeholder="Password"
            id="password"
            type="password"
            onChange={updateForm}
            value={loginForm.password}
          ></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
