import { url } from "inspector";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BreakingDatas } from "../Core/api/BreakingBadApi";

const BreakingBadCharacter = () => {
  let { pathname } = useLocation();

  const id = pathname.split("/")[2];

  const [character, setCharacter] = useState<Character>();
  const [bgimage, setBgImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await BreakingDatas(`characters/${id}`, {});
      setCharacter(data.data[0]);
      setBgImage(data.data[0]?.img);
    };
    fetchData();
  }, []);
  console.log(character);

  return (
    <div className="h-[100vh] relative overflow-hidden">
      <div
        style={{
          background: `url(${bgimage})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
        className={`h-[100%] w-[100%] blur-sm absolute`}
      />
      <div className="top-[50%] left-[50%] blur-none absolute z-10">
        <div key="name" className="blur-none">
          {character?.name}
          <img className="h-[200px]" src={character?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BreakingBadCharacter;
