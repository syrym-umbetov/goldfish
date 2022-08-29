import React, { FC } from "react";
import { BannerProps } from "../types/props";

const Banner: FC<BannerProps> = ({ title, img, advertText }) => {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
};

export default Banner;
