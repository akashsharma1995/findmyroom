import React, { FC, ReactNode } from "react";
import styles from "./iconButton.module.css";

const IconButton: FC<{ icon: ReactNode; shape: "circle" | "rectangle" }> = ({
  icon,
  shape,
}) => {
  return <div className={`${styles.container} ${styles[shape]}`}>{icon}</div>;
};

export default IconButton;
