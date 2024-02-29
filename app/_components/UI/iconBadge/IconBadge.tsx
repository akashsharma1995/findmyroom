import styles from "./iconBadge.module.css";
import { FC, ReactElement } from "react";

const IconBadge: FC<{ icon: ReactElement; text: string }> = ({
  icon,
  text,
}) => {
  return (
    <div className={styles.iconBadge}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default IconBadge;
