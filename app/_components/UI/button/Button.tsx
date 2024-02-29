import React, { FC, ReactNode } from "react";
import styles from "./button.module.css";

type Props = {
  variant: "primary" | "secondary";
  children: ReactNode;
}

const Button: FC<Props> = ({ variant, children, ...otherProps }) => {
  return (
    <button className={`${styles[variant]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
