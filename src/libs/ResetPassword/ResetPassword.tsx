import React from "react";
import { useFormGroup } from "../hooks/useFormGroup";
import "../style.css";

interface ResetPasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
interface ResetPasswordProps {
  onAction: (formData: ResetPasswordForm) => void;
}
export const ResetPassword = (props: ResetPasswordProps) => {
  const { onAction } = props;

  const [resetForm, updateForm] = useFormGroup<ResetPasswordForm>();

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAction(resetForm);
  };

  return (
    <div className="item-container">
      <div className="feature-header">
        <strong>Reset password</strong>
      </div>
      <form onSubmit={handleClick}>
        <div>
          <input
            placeholder="Current Password"
            id="currentPassword"
            type="password"
            value={resetForm.currentPassword}
            onClick={updateForm}
          ></input>
        </div>
        <div>
          <input
            placeholder="New Password"
            id="newPassword"
            type="password"
            value={resetForm.newPassword}
            onClick={updateForm}
          ></input>
        </div>
        <div>
          <input
            placeholder="Confirm New Password"
            id="confirmPassword"
            type="password"
            value={resetForm.confirmPassword}
            onClick={updateForm}
          ></input>
        </div>
        <div>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
};
