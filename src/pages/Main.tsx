import React, { useState, useEffect } from "react";
import Banner from "./../components/Banner";
import { gameDatas } from "../Core/api/REST";

import { dummyJSON } from "../dummydata/dummyJSON";
import MainPageCatalog from "../components/MainPageCatalog";
import ProductsList from "./../components/ProductsList";
import { Map } from "./../Core/map/Map";

const Main = () => {
  const [randomGame, setRandomGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const objectData = await gameDatas("/api/search", {
        categories: "hBqZ3Ar4RJ",
        limit: 5,
      });
      setRandomGame(objectData.data.games);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="flex space-x-4">
        {dummyJSON.map(({ title, img, advertText }) => (
          <Banner key={title} title={title} img={img} advertText={advertText} />
        ))}
      </div>
      <div className="mt-2 mb-4 ml-[100px]">
        <MainPageCatalog randomGame={randomGame} loading={loading} />
        <ProductsList />
      </div>
      <div id="map" className="w-[100%] h-[400px]">
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default Main;
