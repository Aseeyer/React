import { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // dummy register success
    navigate("/login");
  };

  return (
    <div className={styles.Login}>
      <div className={styles.SectionOne}>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button className={styles.button}>Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            Log In
          </span>
        </p>
      </div>

      <div className={styles.SectionTwo}>
        <p>
          Start your journey with us and discover products you’ll love.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
