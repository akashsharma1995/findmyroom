import React, { FC } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Avatar from "../UI/avatar/Avatar";

const About: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <Image
          priority
          src="/airbnb-logo.svg"
          height={60}
          width={60}
          alt="logo"
        />
        <nav className={styles.nav}>
          <a href="#stays" className={styles.active}>
            Stays
          </a>
          <a href="#experiences">Experiences</a>
          <a href="#online-experiences">Online Experiences</a>
        </nav>
        <Avatar type="text" text="A" size={40} />
      </div>
    </div>
  );
};

export default About;
