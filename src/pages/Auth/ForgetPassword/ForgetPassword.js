import React from "react";
import classes from "./ForgetPassword.module.css";
import { CustomInput } from "../../../common/Input/CustomInput";
import { useNavigate } from "react-router-dom";
import carib from "../../../utils/carib.svg";
import { useFormik } from "formik";
import { forgetSchema } from "../../../schemas/ForgetPassword";
import { useState, useEffect } from "react";

// height: 11vw;

export const ForgetPassword = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const onResetPassword = () => {
    navigate("/resetpassword");
  };
  const initialValues = { email: "" };
  const invalitStyle = {
    color: "red",
    textAlign: "start",
    fontSize: "1.4vh",
    marginLeft: "2vh",
  };

  let inputStyles = {
    height: "5vh",
    borderRadius: "1vh",
  };

  if (isMobile) {
    inputStyles = {
      height: "11vw",
      borderRadius: "1vh",
      width: "85%",
    };
  }
  const { handleBlur, errors, touched, values, handleChange, handleSubmit } =
    useFormik({
      validationSchema: forgetSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        alert("Check your inbox for OTP code");
        onResetPassword();
        action.resetForm();
      },
    });
  const navigate = useNavigate();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.navBar}>
        <img className={classes.image} src={carib} alt="caribE logo"></img>
      </div>
      <div className={classes.screen}>
        <div className={classes.form}>
          <div className={classes.title}>Forget Password</div>
          {/* <div className={classes.subText}>
            Enter your email to reset your password
          </div> */}
          <CustomInput
            invalitStyle={invalitStyle}
            errors={errors.email}
            id={"email"}
            name={"email"}
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            touched={touched.email}
            placeholder={"Email"}
            inputstyle={inputStyles}
            containerStyle={{ width: "25vw" }}
          ></CustomInput>
          <button
            onClick={handleSubmit}
            className={classes.resetButton}
            type="submit"
          >
            Reset Password
          </button>
        </div>

        <div className={classes.screen}></div>
      </div>
    </div>
  );
};
