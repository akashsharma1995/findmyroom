import { FC, ReactNode, SelectHTMLAttributes } from "react";
import styles from "./select.module.css";

type Props = {
  label?: string;
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select: FC<Props> = ({ label, children, ...otherProps }) => {
  return (
    <div className={styles.selectContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.input} {...otherProps}>
        {children}
      </select>
    </div>
  );
};
export default Select;


