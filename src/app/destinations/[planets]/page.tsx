import React from "react";

import styles from "./destination.module.scss";

const Planets = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <h5>
          <span style={{ opacity: 0.25 }}>01</span> PICK YOUR DESTINATION
        </h5>
      </div>
      <div className={styles.details}></div>
    </div>
  );
};

export default Planets;
