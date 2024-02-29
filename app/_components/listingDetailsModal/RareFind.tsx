import React, { FC } from "react";
import styles from "./rareFind.module.css";
import { Framer } from "react-feather";

type Props = {
  hostName: string;
};

const RareFind: FC<Props> = ({ hostName }) => {
  return (
    <div className={styles.container}>
      <Framer className={styles.icon}/>
      <div>
        <span className={styles.heading}>This is a rare find</span>
        <span>{`${hostName}'s place on Airbnb is usually fully booked.`}</span>
      </div>
    </div>
  );
};

export default RareFind;
