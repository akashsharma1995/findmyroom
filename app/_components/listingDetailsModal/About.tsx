import React, { FC } from "react";
import styles from "./about.module.css";

type Props = {
  about: string;
  spaceDescription: string;
};

const About: FC<Props> = ({ about, spaceDescription }) => {
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <p>{about}</p>
      <h3>The Space</h3>
      <p>{spaceDescription}</p>
    </div>
  );
};

export default About;
