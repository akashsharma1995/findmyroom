import React, { FC } from "react";
import styles from "./ammenities.module.css";
import { Grid } from "react-feather";

type Props = {
  ammenities: string[];
};

const Ammenities: FC<Props> = ({ ammenities }) => {
  return (
    <div className={styles.container}>
      <h2>What this place offers</h2>
      <div className={styles.content}>
        {ammenities.map((item) => {
          return (
            <div key={item} className={styles.ammenity}>
              <Grid />
              <span>{item}</span>
            </div>
          );
        })}
        
      </div>
      <span className={styles.viewMore}>View More</span>
    </div>
  );
};

export default Ammenities;
