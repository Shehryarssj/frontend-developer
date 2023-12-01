import CustomField from "./CustomField";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="container">
        <div className="title">Sign In</div>
        <CustomField label="First name" placeholder="Enter your first name" />
        <CustomField label="Last name" placeholder="Enter your last name" />
        <div className="password-options">
          <div className="remember">
            <input type="checkbox" id="remeber-password" />
            <label htmlFor="remember-password">Remember Password</label>
          </div>
          <a href="#">Forgot Password</a>
        </div>
        <button className="submit">Sumbit</button>
        <a href="#">Already Have An Account?</a>
      </div>
    </div>
  );
};

export default SignIn;
