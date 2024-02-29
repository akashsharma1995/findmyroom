import React, { FC } from "react";
import { Heart } from "react-feather";
import IconButton from "../UI/IconButton/IconButton";

const AddToWishList: FC = () => {
  return <IconButton icon={<Heart />} shape="circle"/>;
};

export default AddToWishList;
