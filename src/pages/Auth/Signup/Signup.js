import "./Signup.css";
import carib from "../../../utils/carib.svg";
import { useState } from "react";
import { images } from "../../../utils/Images";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../../../schemas/SignupSchema";

export default function Signup() {
  const navigate = useNavigate();
  const onSuccessSignup = () => {
    navigate("/");
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const invalitStyle = {
    color: "red",
    textAlign: "start",
    fontSize: "1.2vh",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        onSuccessSignup();
      },
      validationSchema: signupSchema,
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

  const onLogin = () => {
    navigate("/login");
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
            <div className="heading">Signup</div>
            <div>
              <div className="inputContainer">
                <label className="labels" htmlFor="firstname">
                  First name
                </label>
                <input
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstname"
                  placeholder="Firstname"
                  type="text"
                  required
                  className="loginInput"
                />
              </div>
              {touched.firstname && errors.firstname ? (
                <div style={invalitStyle}>{errors.firstname}</div>
              ) : (
                ""
              )}
              <div className="inputContainer">
                <label className="labels" htmlFor="lastname">
                  Last name
                </label>
                <input
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="lastname"
                  placeholder="Lastname"
                  type="text"
                  required
                  className="loginInput"
                />
                {touched.lastname && errors.lastname ? (
                  <div style={invalitStyle}>{errors.lastname}</div>
                ) : (
                  ""
                )}
              </div>
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
            </div>
            <button
              onClick={handleSubmit}
              className="loginButton"
              type="submit"
              disabled={false}
            >
              Sugnup
            </button>

            <span onClick={onLogin} className="signup">
              Already have an account?
              <span
                onClick={onLogin}
                style={{ fontWeight: "bold", color: "red" }}
              >
                {" "}
                Login
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
