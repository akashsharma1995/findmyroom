import React, { FC } from "react";
import styles from "./avatar.module.css";
import Image from "next/image";

type Props = {
  type: "text" | "image";
  imageSrc?: string;
  text?: string;
  altText?: string;
  size?: number;
};

const Avatar: FC<Props> = ({ imageSrc, type, text, altText, size }) => {
  return (
    <div
      className={`${type === "image" ? styles.imageAvatar : styles.textAvatar}`}
      style={{
        height: size || 80,
        width: size || 80,
      }}
    >
      {type === "image" && imageSrc && altText && (
        <Image src={imageSrc} alt="host" fill={true} priority />
      )}
      {type === "text" && text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default Avatar;
