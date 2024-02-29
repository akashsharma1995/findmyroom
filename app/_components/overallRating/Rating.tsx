import React, { FC } from "react";
import styles from "./rating.module.css";
import { Star } from "react-feather";

type OwnProps = {
  rating: number;
};

const Rating: FC<OwnProps> = ({ rating }) => {
  return (
    <div className={styles.container}>
      <Star />
      <span className={styles.ratingText}>{rating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
