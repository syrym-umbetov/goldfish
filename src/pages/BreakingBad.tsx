import React, { useState, useEffect } from "react";
import { BreakingDatas } from "../Core/api/BreakingBadApi";
import BreakingBadCharacterCard from "./../components/BreakingBadCharacterCard";

const BreakingBad = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await BreakingDatas("characters", {});
      setCharacter(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-4">
      {character &&
        character.map((item) => <BreakingBadCharacterCard {...item} />)}
    </div>
  );
};

export default BreakingBad;
