import React, { FC } from "react";
import styles from "./pricePerNight.module.css";
import { centsToDollars } from "@/app/_lib/helper";

type OwnProps = {
  price: number;
};

const PricePerNight: FC<OwnProps> = ({ price }) => {
  return (
    <div className={styles.container}>
      <span className={styles.ratingText}>${centsToDollars(price)}</span>
      <span>/ Night</span>
    </div>
  );
};

export default PricePerNight;
