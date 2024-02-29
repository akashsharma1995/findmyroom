import React, { FC } from "react";
import styles from "./reviews.module.css";
import { RatingsModel } from "@/app/_lib/apiModels";
import Rating from "../overallRating/Rating";

type Props = {
  ratings: RatingsModel;
  overallRating: number;
  totalReviews: number;
};

const RatingComp: FC<{ type: string; value: number }> = ({ type, value }) => {
  return (
    <div className={styles.ratingCompContainer}>
      <span className={styles.ratingType}>{type}</span>
      <div className={styles.ratingBarContainer}>
        <div className={styles.ratingBar}>
          <div
            className={styles.ratingBarFiller}
            style={{ width: `${(value * 100) / 5}%` }}
          ></div>
        </div>
        <span className={styles.ratingValue}>{value.toFixed(1)}</span>
      </div>
    </div>
  );
};

const Reviews: FC<Props> = ({ ratings, overallRating, totalReviews }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2>Reviews</h2>
        <div className={styles.headingRight}>
          <Rating rating={overallRating} />
          &nbsp;-&nbsp;<span>{totalReviews} reviews</span>
        </div>
      </div>
      <div className={styles.ratingContainer}>
        <RatingComp type="Cleanliness" value={ratings.cleanliness} />
        <RatingComp type="Accuracy" value={ratings.accuracy} />
        <RatingComp type="Location" value={ratings.location} />
        <RatingComp type="Service" value={ratings.service} />
        <RatingComp type="Value" value={ratings.value} />
      </div>
      <span className={styles.viewMore}>View More</span>
    </div>
  );
};

export default Reviews;
