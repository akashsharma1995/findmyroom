import { FC, InputHTMLAttributes } from "react";
import styles from "./dateInput.module.css";

type Props = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const DateInput: FC<Props> = ({ label, ...otherProps }) => {
  return (
    <div className={styles.dateComp}>
      {label && <label className={styles.dateLabel}>{label}</label>}
      <input
        type="date"
        className={styles.date}
        {...otherProps}
      />
    </div>
  );
};

export default DateInput;
