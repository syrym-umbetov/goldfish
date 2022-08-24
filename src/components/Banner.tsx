import React, { FC } from "react";

type BannerProps = {
  title: string;
  img: string;
  advertText: string;
};

const Banner: FC<BannerProps> = ({ title, img, advertText }) => {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
};

export default Banner;
