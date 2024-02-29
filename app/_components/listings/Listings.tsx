"use client";

import React, { FC, useState } from "react";
import styles from "./listings.module.css";
import { ListingModel } from "../../_lib/apiModels";
import Image from "next/image";
import ListingDetailsModal from "../listingDetailsModal";
import PricePerNight from "../pricePerNight/PricePerNight";
import Rating from "../overallRating/Rating";
import AddToWishList from "../addToWishlist/AddToWishlist";

type OwnProps = {
  listings: ListingModel[];
};

const Listings: FC<OwnProps> = ({ listings }) => {
  const [selectedListing, setSelectedListing] = useState<ListingModel>();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsDetailsModalOpen(false);
  };

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
                className={styles.imageContainer}
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
      {isDetailsModalOpen && selectedListing && (
        <ListingDetailsModal
          listing={selectedListing}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Listings;
