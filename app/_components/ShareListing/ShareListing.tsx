import React, { FC } from "react";
import { Share } from "react-feather";
import IconButton from "../UI/IconButton/IconButton";

const AddToWishList: FC = () => {
  return <IconButton icon={<Share />} shape="circle"/>;
};

export default AddToWishList;
