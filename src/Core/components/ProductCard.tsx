import React, { FC } from "react";
import Button from "./Button";
import imagePlaceholder from "../../assets/NoImage.png";
import { UserGroupIcon, ClockIcon } from "@heroicons/react/solid";

type ProductCardProps = {
  name: string;
  images: Images;
  price: string;
  players: string;
  playtime: string;
  year_published: number;
  price_text: string;
};

const ProductCard: FC<ProductCardProps> = ({
  name,
  images,
  price,
  players,
  playtime,
  price_text,
  year_published,
}) => {
  const { original } = images;

  return (
    <div className="shadow-[#F9A43F] shadow-md font-poppins h-[409px] m-[10px] border-2 w-[255px] border-white rounded-lg py-[28px] px-[50px] text-center">
      <div>
        <img
          src={
            original ===
            "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/carcassonne-board-game.jpg?v=1609629064"
              ? imagePlaceholder
              : original
          }
          alt={name}
          className="object-cover h-[175px] w-[175px]"
        />
      </div>

      <div className="flex space-x-2 items-center mt-2 mb-2">
        <div className="flex space-x-2 items-center ">
          <UserGroupIcon className="w-[15px] h-[15px]" />
          <div className="text-xs">{players}</div>
        </div>
        <div className="flex space-x-1 items-center ">
          <ClockIcon className="w-[15px] h-[15px]" />
          <div className="text-xs">{playtime}</div>
        </div>
        <div className="flex space-x-2 items-center ">
          <div className="text-xs">{year_published}</div>
        </div>
      </div>
      <p className="text-xs h-10">{name}</p>
      <p>{price_text}</p>
      <div>
        <Button name="Add to basket" contained />
        <Button name="Buy in a click" />
      </div>
    </div>
  );
};

export default ProductCard;
