import React, { FC, ReactElement, ReactNode } from "react";
import styles from "./host.module.css";
import { HostModel } from "@/app/_lib/apiModels";
import { Award, Shield, Star } from "react-feather";
import Image from "next/image";
import IconBadge from "../UI/iconBadge/IconBadge";
import Button from "../UI/button/Button";
import Avatar from "../UI/avatar/Avatar";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type Props = {
  host: HostModel;
};

const Host: FC<Props> = ({ host }) => {
  const date = new Date(host.joinedAt);
  const joiningMonth = monthNames[date.getMonth()];
  const joiningDate = date.getDate();
  return (
    <div className={styles.container}>
      <h2>Host</h2>
      <div>
        <div className={styles.headSection}>
          <div className={styles.hostContainer}>
            <Avatar imageSrc={host.profileUrl} type="image" altText="host"/>
            <div>
              <h3 className={styles.hostName}>Hosted by {host.name}</h3>
              <span>
                Joined in {joiningMonth} {joiningDate}
              </span>
            </div>
          </div>
          <Button variant="secondary">Contact Host</Button>
        </div>
        <div className={styles.badges}>
          <IconBadge icon={<Star />} text={`${host.totalReviews} reviews`} />
          {host.isVerified && (
            <IconBadge icon={<Shield />} text="Identity Verified" />
          )}
          {host.isSuperHost && <IconBadge icon={<Award />} text="Superhost" />}
        </div>
        <p>{host.bio}</p>
      </div>
      <span className={styles.viewMore}>View More</span>
    </div>
  );
};

export default Host;
