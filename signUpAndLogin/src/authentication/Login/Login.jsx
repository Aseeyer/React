import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return;

    // fake auth for now
    dispatch(
      login({
        email,
      })
    );

    navigate("/home");
  };

  return (
    <div className={styles.Login}>
      <div className={styles.SectionOne}>
        <h2>Log In</h2>

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button} onClick={handleLogin}>
          Log In
        </button>

        <span onClick={() => navigate("/resetPassword")} style={{ cursor: "pointer" }}>
          Forgot password?
        </span>

        <button
          className={styles.buttonLinks}
          onClick={() => navigate("/loginWithGoogle")}
        >
          Google
        </button>

        <button
          className={styles.buttonLinks}
          onClick={() => navigate("/loginWithFacebook")}
        >
          Facebook
        </button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>
            Sign Up
          </span>
        </p>
      </div>

      <div className={styles.SectionTwo}>
        <p>
          The future belongs to those who <span>believe</span> in the{" "}
          <span>beauty of their dreams</span>
        </p>
        <p>- Eleanor Roosevelt</p>
      </div>
    </div>
  );
};

export default Login;
