import React from "react";
import { useFormGroup } from "../hooks/useFormGroup";
import "../style.css";

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProps {
  onAction: (formData: RegisterForm) => void;
}

export const Register = (props: RegisterProps) => {
  const { onAction } = props;
  const [registerForm, updateForm] = useFormGroup<RegisterForm>();
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAction(registerForm);
  };

  return (
    <div className="item-container">
      <div className="feature-header">
        <strong>Register</strong>
      </div>
      <form onSubmit={handleClick}>
        <div>
          <input
            placeholder="Email Address"
            onChange={updateForm}
            id="email"
            value={registerForm.email}
          ></input>
        </div>
        <div>
          <input
            placeholder="Password"
            onChange={updateForm}
            id="password"
            type="password"
            value={registerForm.password}
          ></input>
        </div>
        <div>
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={updateForm}
            id="confirmPassword"
            value={registerForm.confirmPassword}
          ></input>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};
