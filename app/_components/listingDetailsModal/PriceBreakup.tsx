import React, { FC } from "react";
import styles from "./priceBreakup.module.css";
import { Grid, Info } from "react-feather";
import { ListingModel } from "@/app/_lib/apiModels";
import { centsToDollars } from "@/app/_lib/helper";

type Props = {
  listing: ListingModel;
};

const Price: FC<{ label: string; value: number }> = ({ label, value }) => {
  return (
    <div className={styles.priceContainer}>
      <span className={styles.label}>
        {label}
        <Info className={styles.infoIcon} />
      </span>
      <span className={styles.value}>${centsToDollars(value)}</span>
    </div>
  );
};

const PriceBreakup: FC<Props> = ({ listing }) => {
  return (
    <div className={styles.container}>
      {listing.cleaningPricePerNightInCents && (
        <Price
          label="Cleaning fee"
          value={listing.cleaningPricePerNightInCents}
        />
      )}
      {listing.servicePricePerNightInCents && (
        <Price
          label="Airbnb service fee"
          value={listing.servicePricePerNightInCents}
        />
      )}
    </div>
  );
};

export default PriceBreakup;
