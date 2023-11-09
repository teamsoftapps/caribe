import "./Login.css";
// import { CaribLogo } from "../../utils/CaribLogo";

import carib from "../../../utils/carib.svg";
import { useState } from "react";
import { images } from "../../../utils/Images";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../../schemas/LoginSchema";
// import { useForm } from "react-hook-form";

export default function Login() {
  const onLoginSuccess = () => {
    navigate("/");
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const { errors, touched, handleBlur, handleChange, handleSubmit, values } =
    useFormik({
      validationSchema: loginSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        onLoginSuccess();
      },
    });
  const handleClick = (e) => {
    e.preventDefault();
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 620);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 620);
      // setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmpasswordVisible);
  };

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const Signup = () => {
    navigate("/");
  };
  const onSignup = () => {
    navigate("/signup");
  };

  const onForgetPassword = () => {
    navigate("/forgetpassword");
  };

  const invalitStyle = {
    color: "red",
    textAlign: "start",
    fontSize: "1.2vh",
  };
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img className="image" src={carib} alt="caribE logo"></img>
        </div>
      </div>

      <div className={isMobile ? "" : "login"}>
        <div className="loginContainer">
          <form
            className={isMobile ? "loginMblbox" : "loginBox"}
            onSubmit={handleClick}
          >
            <div className="heading">Login</div>
            <div>
              <div className="inputContainer">
                <label className="labels" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  placeholder="Email"
                  type="email"
                  required
                  className="loginInput"
                />
                {touched.email && errors.email ? (
                  <div style={invalitStyle}>{errors.email}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="inputContainer">
                <label className="labels" htmlFor="password">
                  Password
                </label>

                <input
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password"
                  placeholder="Password"
                  type={passwordVisible ? "text" : "password"}
                  required
                  className="loginInput"
                />
                {touched.password && errors.password ? (
                  <div style={invalitStyle}>{errors.password}</div>
                ) : (
                  ""
                )}

                <img
                  onClick={togglePasswordVisibility}
                  src={passwordVisible ? images.Showeye : images.Hideeye}
                  className="PassEye"
                ></img>
              </div>
              <div className="inputContainer"></div>

              <p onClick={onForgetPassword} className="forget">
                forget password?
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="loginButton"
              type="submit"
              disabled={false}
            >
              Log in
            </button>
            <span onClick={onSignup} className="signup">
              Create a new account?
              <span
                onClick={onSignup}
                style={{ fontWeight: "bold", color: "red" }}
              >
                Signup
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
