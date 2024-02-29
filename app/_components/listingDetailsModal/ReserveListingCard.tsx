import React, { FC } from "react";
import styles from "./reserveListing.module.css";
import { ListingModel } from "@/app/_lib/apiModels";
import Divider from "../UI/divider/Divider";
import { centsToDollars } from "@/app/_lib/helper";
import Select from "../UI/inputs/select/Select";
import Button from "../UI/button/Button";
import PriceBreakup from "./PriceBreakup";
import Rating from "../overallRating/Rating";
import DateInput from "../UI/inputs/dateInput/DateInput";


type Props = {
  listing: ListingModel;
};

const TotalSection: FC<{ value: number }> = ({ value }) => {
  return (
    <div className={styles.totalSection}>
      <div className={styles.totalContainer}>
        <span className={styles.totalText}>Total</span>
        <span className={styles.totalDescText}>Before taxes</span>
      </div>
      <span className={styles.totalValue}>${value}</span>
    </div>
  );
};

const ReserveListingCard: FC<Props> = ({ listing }) => {
  const guestOptions = Array.apply(null, Array(listing.maxGuests)).map(
    (item, i) => i
  );

  const total = centsToDollars(
    listing.pricePerNightInCents +
      listing.cleaningPricePerNightInCents +
      listing.servicePricePerNightInCents
  );

  return (
    <div className={styles.container}>
      <div className={styles.priceAndRatings}>
        <div className={styles.priceContainer}>
          <h2>${centsToDollars(listing.pricePerNightInCents)}</h2>
          <span className={styles.perNightText}>&nbsp;/Night</span>
        </div>
        <Rating rating={listing.overallRating} />
      </div>
      <div className={styles.datesContainer}>
        <DateInput label="Check In" />
        <DateInput label="Check Out" />
      </div>
      <div className={styles.guestOptionsContainer}>
        <Select label="Guests" defaultValue={2}>
          {guestOptions.map((item, i) => {
            return (
              <option value={i}>{`${item} guest${i > 1 ? "s" : ""}`}</option>
            );
          })}
        </Select>
      </div>

      <Divider />
      <PriceBreakup listing={listing} />
      <Divider />
      <TotalSection value={total} />
      <Button variant="primary">Reserve</Button>
    </div>
  );
};

export default ReserveListingCard;
