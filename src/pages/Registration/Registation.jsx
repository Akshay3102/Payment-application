import styles from "./Registration.module.css";

import {
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import useAuthStore from "../../store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const register = useAuthStore((state) => state.register);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Must contain 1 uppercase letter, 1 number and minimum 8 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    register(form);

    navigate("/business-loan");
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.iconBox}>
          <FaUserPlus />
        </div>

        <h2>Create your account</h2>

        <p>
          Set up your Kojo Partner Account
          <br />
          to start accessing leads.
        </p>

        <hr />

        <div className={styles.row}>
          <div>
            <label>First Name *</label>

            <div
              className={`${styles.input} ${
                errors.firstName ? styles.errorInput : ""
              }`}
            >
              <FaUser />

              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            {errors.firstName && (
              <span className={styles.error}>{errors.firstName}</span>
            )}
          </div>

          <div>
            <label>Last Name *</label>

            <div
              className={`${styles.input} ${
                errors.lastName ? styles.errorInput : ""
              }`}
            >
              <FaUser />

              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            {errors.lastName && (
              <span className={styles.error}>{errors.lastName}</span>
            )}
          </div>
        </div>

        <label>Email Address *</label>

        <div
          className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
        >
          <FaEnvelope />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {errors.email && <span className={styles.error}>{errors.email}</span>}

        <label>Password *</label>

        <div
          className={`${styles.input} ${
            errors.password ? styles.errorInput : ""
          }`}
        >
          <FaLock />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {showPassword ? (
            <FaEyeSlash
              onClick={() => setShowPassword(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FaEye
              onClick={() => setShowPassword(true)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}

        <small>
          Must contain 1 uppercase letter, 1 number, minimum 8 characters.
        </small>

        <label>Confirm Password *</label>

        <div
          className={`${styles.input} ${
            errors.confirmPassword ? styles.errorInput : ""
          }`}
        >
          <FaLock />

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {showConfirmPassword ? (
            <FaEyeSlash
              onClick={() => setShowConfirmPassword(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FaEye
              onClick={() => setShowConfirmPassword(true)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword}</span>
        )}

        <button type="submit" className={styles.submit}>
          Continue
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Registration;
