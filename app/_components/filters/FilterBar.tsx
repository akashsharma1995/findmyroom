"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./filters.module.css";
import IconButton from "../UI/IconButton/IconButton";
import { Filter, Grid, Map } from "react-feather";
import Select from "../UI/inputs/select/Select";
import DateInput from "../UI/inputs/dateInput/DateInput";

const GuestsCounter: FC = () => {
  const [guests, setGuests] = useState(2);
  return (
    <div className={styles.guestsCounter}>
      <span
        className={styles.counterCta}
        onClick={() => setGuests((value) => value - 1)}
      >
        -
      </span>
      <span className={styles.guestText}>{guests}&nbsp;guests</span>
      <span
        className={styles.counterCta}
        onClick={() => setGuests((value) => value + 1)}
      >
        +
      </span>
    </div>
  );
};

const FilterBar: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
          {/* <IconButton icon={<Grid />} shape="rectangle" />
          <IconButton icon={<Map />} shape="rectangle" /> */}
        </div>
        <div className={styles.wrapper}>
          <Select className={styles.select}>
            <option>Anywhere</option>
          </Select>
          <DateInput className={styles.date} />
          <GuestsCounter />
        </div>
        <div className={styles.wrapper}>
          {/* <IconButton icon={<Filter />} shape="rectangle" /> */}
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
