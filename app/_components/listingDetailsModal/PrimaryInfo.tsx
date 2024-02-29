import React, { FC } from "react";
import styles from "./primaryInfo.module.css";
import { ListingModel } from "@/app/_lib/apiModels";
import ShareListing from "../ShareListing/ShareListing";
import IconBadge from "../UI/iconBadge/IconBadge";
import { Grid, Users } from "react-feather";
import AddToWishList from "../addToWishlist/AddToWishlist";

type Props = {
  listing: ListingModel;
};

const PrimaryInfo: FC<Props> = ({ listing }) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{listing.title}</h1>
          <p>
            {listing.location.street}, {listing.location.state},{" "}
            {listing.location.country}
          </p>
        </div>
        <div className={styles.ctaContainer}>
          <ShareListing />
          <AddToWishList />
        </div>
      </div>
      <div className={styles.badgesContainer}>
        {listing.maxGuests && (
          <IconBadge
            icon={<Users />}
            text={`${listing.maxGuests - 1}+ guests`}
          />
        )}
        {listing.numberOfBedrooms && (
          <IconBadge icon={<Grid />} text="Bedrooms" />
        )}
        {listing.numberOfBeds && <IconBadge icon={<Grid />} text="Beds" />}
        {listing.numberOfBathroom && (
          <IconBadge icon={<Grid />} text="numberOfBathroom" />
        )}
      </div>
    </>
  );
};

export default PrimaryInfo;
