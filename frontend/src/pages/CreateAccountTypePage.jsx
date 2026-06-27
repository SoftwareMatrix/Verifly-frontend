import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";

const CreateAccountTypePage = () => {
  const navigate = useNavigate();

  return (
    <AuthShell>
      <h1>Create an account as:</h1>

      <div className="auth-choice-card">
        <button
          className="auth-primary-option"
          type="button"
          onClick={() => navigate("/register/customer")}
        >
          <span className="auth-user-icon" aria-hidden="true" />
          A costumer
        </button>

        <div className="auth-divider">
          <span />
          or
          <span />
        </div>

        <button
          className="auth-primary-option"
          type="button"
          onClick={() => navigate("/register/entrepreneur")}
        >
          <span className="auth-dollar-icon" aria-hidden="true">$</span>
          An entrepreneur
        </button>
      </div>
    </AuthShell>
  );
};

export default CreateAccountTypePage;
