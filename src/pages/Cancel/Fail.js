import React from "react";
import styles from "./Fail.module.css";
import { images } from "../../utils/Images";

const Fail = () => {
  return (
    <body className={styles.body}>
      <div className={styles.content}></div>
      <img src={images.checked} className={styles.checked} />
    </body>
  );
};

export default Fail;
