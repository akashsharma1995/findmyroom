import React, { FC } from "react";
import styles from "./imagesSection.module.css";
import Image from "next/image";
import Button from "../UI/button/Button";

type Props = {
  imageUrls: string[];
};

const ImagesSection: FC<Props> = ({ imageUrls }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.image} ${styles.image1}`}>
        <Image src={imageUrls[0]} alt="property" fill={true} priority />
      </div>
      <div className={`${styles.image} ${styles.image2}`}>
        <Image src={imageUrls[1]} alt="property" fill={true} priority />
      </div>
      <div className={`${styles.image} ${styles.image3}`}>
        <Image src={imageUrls[2]} alt="property" fill={true} priority />
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="secondary">View All Photos</Button>
      </div>
    </div>
  );
};

export default ImagesSection;
