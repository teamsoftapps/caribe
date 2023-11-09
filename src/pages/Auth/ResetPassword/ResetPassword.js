import React from "react";
import classes from "./ResetPassword.module.css";
import { CustomInput } from "../../../common/Input/CustomInput";
import { useNavigate } from "react-router-dom";
import carib from "../../../utils/carib.svg";
import { useFormik } from "formik";
import { resetSchema } from "../../../schemas/ResetPassword";
import { useState, useEffect } from "react";

export const ResetPassword = () => {
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
  const navigate = useNavigate();
  const onResetPassword = () => {
    navigate("/");
  };

  const initialValues = {
    code: "",
    newpassword: "",
  };

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
  const { errors, touched, handleBlur, handleChange, handleSubmit, values } =
    useFormik({
      validationSchema: resetSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        alert("Password Reset successfully");
        action.resetForm();
        onResetPassword();
      },
    });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.navBar}>
        <img className={classes.image} src={carib} alt="caribE logo"></img>
      </div>
      <div className={classes.screen}>
        <div className={classes.form}>
          <div className={classes.title}>Reset Password</div>
          {/* <div className={classes.subText}>
            Enter your email to reset your password
          </div> */}
          <CustomInput
            invalitStyle={invalitStyle}
            errors={errors.newpassword}
            name={"newpassword"}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.newpassword}
            value={values.newpassword}
            id={"newpassword"}
            placeholder={" New Password"}
            inputstyle={inputStyles}
            containerStyle={{ width: "25vw" }}
          ></CustomInput>
          <CustomInput
            invalitStyle={invalitStyle}
            errors={errors.code}
            name={"code"}
            onBlur={handleBlur}
            onChange={handleChange}
            touched={touched.code}
            value={values.code}
            id={"code"}
            placeholder={"Verification code"}
            inputstyle={inputStyles}
            containerStyle={{ width: "25vw" }}
          ></CustomInput>
          <button
            onClick={handleSubmit}
            className={classes.resetButton}
            type="submit"
          >
            Confirm Reset Password
          </button>
        </div>

        <div className={classes.screen}></div>
      </div>
    </div>
  );
};
