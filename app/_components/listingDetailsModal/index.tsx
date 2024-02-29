import React, { FC } from "react";
import Modal from "../UI/modal/modal";
import { ListingModel } from "@/app/_lib/apiModels";

import styles from "./listingDetails.module.css";
import RareFind from "./RareFind";
import Divider from "../UI/divider/Divider";
import ImagesSection from "./ImagesSection";
import PrimaryInfo from "./PrimaryInfo";
import About from "./About";
import Ammenities from "./Ammenities";
import Host from "./Host";
import ReserveListingCard from "./ReserveListingCard";
import Reviews from "./Reviews";


type Props = {
  handleClose: () => void;
  listing: ListingModel;
};

const ListingDetailsModal: FC<Props> = ({ handleClose, listing }) => {
  return (
    <Modal handleClose={handleClose}>
      <div>
        <ImagesSection imageUrls={listing.imageUrls} />
        <div className={styles.infoContainer}>
          <div>
            <PrimaryInfo listing={listing} />
            <Divider />
            <About
              about={listing.about}
              spaceDescription={listing.spaceDescription}
            />
            <Divider />
            <Ammenities ammenities={listing.amenities} />
            <Divider />
            <Reviews
              totalReviews={listing.reviews.length}
              overallRating={listing.overallRating}
              ratings={listing.ratings}
            />
            <Divider />
            <Host host={listing.host} />
          </div>
          <div>
            <div className={styles.cardSection}>
              <ReserveListingCard listing={listing} />
              <RareFind hostName={listing.host.name} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ListingDetailsModal;
