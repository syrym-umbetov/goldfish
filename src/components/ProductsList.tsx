import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { gameDatas } from "../Core/api/REST";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import "../hideScrollbar.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <ChevronLeftIcon
      className="mt-[200px] cursor-pointer hover:scale-150 hover:ease-in-out w-[50px] absolute z-[1]"
      onClick={() => scrollPrev()}
    />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <ChevronRightIcon
      className="mt-[200px] cursor-pointer hover:scale-150 hover:ease-in-out w-[50px] absolute z-[1] right-[20px] "
      onClick={() => scrollNext()}
    />
  );
};

const ProductsList = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const objectData = await gameDatas("/api/search", { skip: 5 });
      setGame(objectData.data.games);
      setLoading(false);
    };
    fetch();
  }, []);
  // {players, playtime, year_published}
  return (
    <div>
      <div className="text-lg font-bold mb-5 mt-10">Be first to buy</div>
      {loading && <div>...Loading</div>}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {game.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ScrollMenu>

      <div className="text-lg font-bold mb-5 mt-10">Special offers</div>
      {loading && <div>...Loading</div>}
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {game.reverse().map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ProductsList;
