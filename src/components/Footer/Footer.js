import React from "react";
import { images } from "../../utils/Images";
import carib from "../../utils/carib.svg";
import classes from "./Footer.module.css";
export const Footer = () => {
  return (
    <div style={{ marginTop: "5vw" }}>
      <img style={{ width: "100%", height: "auto" }} src={images.shopnow} />

      <div
        className={classes.main}
        style={{ width: "100%", backgroundColor: "#FEF7F7" }}
      >
        <div
          style={{
            width: "80%",

            display: "flex",

            justifyContent: "space-between",
            marginLeft: "10vw",
            marginRight: "10vw",
            borderBottom: ".1vw solid #d5d5d5",
            alignItems: "center",
          }}
        >
          <div className={classes.contentContainer}>
            <img style={{ width: "10vw" }} src={carib} />
            <p className={classes.text}>
              lorem jdlsiopacdn cd cfdwjrlkf dcldfkjldcf sdvcj
              <br />
              cd cfdwjrlkf dcldfkjldcf sdvcj
            </p>
            <p className={classes.text}>+1234567890</p>
            <p className={classes.text}>lovia@support.com</p>
          </div>
          <div
            style={{
              display: "flex",

              alignItems: "flex-start",

              justifyContent: "space-between",
              paddingBottom: "30px",
            }}
          >
            <div className={classes.contentContainer}>
              <div className={classes.heading}>Company</div>

              <p className={classes.text}>About</p>
              <p className={classes.text}>Products</p>
              <p className={classes.text}>Contacts</p>
              <p className={classes.text}>Blog</p>
              <p className={classes.text}>Careers</p>
            </div>
            <div className={classes.contentContainer}>
              <div className={classes.heading}>Information</div>
              <p className={classes.text}>Help center</p>
              <p className={classes.text}>Payment methods</p>
              <p className={classes.text}>Return & Fund</p>
              <p className={classes.text}>Privacy policy</p>
            </div>
            <div className={classes.contentContainer}>
              <div className={classes.heading}>Follow us</div>
              <p className={classes.text}>About</p>
              <p className={classes.text}>Products</p>
              <p className={classes.text}>Contacts</p>
              <p className={classes.text}>Blog</p>
              <p className={classes.text}>Careers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginLeft: "10vw",
        }}
      >
        <p className={classes.text} style={{ color: "gray" }}>
          Copyright @ 2023 Carib. All Right Reserved
        </p>
      </div>
    </div>
  );
};
