"use client";

import React, { FC, useState } from "react";
import styles from "./listings.module.css";
import { ListingModel } from "../../_lib/apiModels";
import Image from "next/image";
import AddToWishList from "../addToWishlist/AddToWishlist";
import PricePerNight from "../pricePerNight/PricePerNight";
import Rating from "../overallRating/Rating";

type OwnProps = {
  listings: ListingModel[];
};

const Listings: FC<OwnProps> = ({ listings }) => {

  return (
    <>
      <div className={styles.container}>
        {listings.map((listing) => {
          return (
            <div
              className={styles.card}
              key={listing.id}
              onClick={() => {
                setSelectedListing(listing);
                setIsDetailsModalOpen(true);
              }}
            >
              <div className={styles.addToWishlistWrapper}>
                <AddToWishList />
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  height: "200px",
                }}
              >
                <Image
                  src={listing.thumbnailUrl}
                  alt="listing image"
                  className={styles.image}
                  width={500}
                  height={300}
                  priority
                />
              </div>

              <div className={styles.info}>
                <div className={styles.titleWrapper}>
                  <span className={styles.listingTitle}>{listing.title}</span>
                  <span>{`${listing.location.street}, ${listing.location.state}, ${listing.location.country}`}</span>
                </div>

                <div className={styles.priceinfo}>
                  <PricePerNight price={listing.pricePerNightInCents} />
                  <Rating rating={listing.overallRating} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listings;
