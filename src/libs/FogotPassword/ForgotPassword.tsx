import React from "react";
import { useFormGroup } from "../hooks/useFormGroup";
import "../style.css";
interface ForgotPasswordForm {
  email: string;
}
interface ForgotPasswordProps {
  onAction: (formData: ForgotPasswordForm) => void;
}
export const ForgotPassword = (props: ForgotPasswordProps) => {
  const { onAction } = props;
  const [forgotPasswordForm, updateForm] = useFormGroup<ForgotPasswordForm>();
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAction(forgotPasswordForm);
  };
  return (
    <div className="item-container">
      <div className="feature-header">
        <strong>Forgot Password</strong>
      </div>
      <form onSubmit={handleClick}>
        <div>
          <input
            placeholder="Enter email address"
            id="email"
            onChange={updateForm}
            value={forgotPasswordForm.email}
          ></input>
        </div>
        <div>
          <button>Send Link</button>
        </div>
      </form>
    </div>
  );
};
