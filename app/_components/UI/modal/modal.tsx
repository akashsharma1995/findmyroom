import React, { FC, ReactNode, useEffect } from "react";
import styles from "./modal.module.css";
import { X } from "react-feather";

type OwnProps = {
  handleClose: () => void;
  children: ReactNode;
};

const Modal: FC<OwnProps> = ({ handleClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={styles.backdrop} onClick={() => handleClose()}>
      <div  className={styles.closeButtonContainer}>
        <div className={styles.closeButton}>
          <X onClick={() => handleClose()} />
        </div>
      </div>

      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
