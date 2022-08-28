import React, { FC } from "react";
import { Link } from "react-router-dom";

const BreakingBadCharacterCard: FC<Character> = ({ name, img, char_id }) => {
  return (
    <div className="shadow-[#F9A43F] shadow-md font-poppins h-[409px] m-[10px] border-2 w-[255px] border-white rounded-lg py-[28px] px-[50px] text-center">
      <Link to={`/character/${char_id}`}>
        <div>
          <img
            src={img}
            alt={name}
            className="object-cover h-[175px] w-[175px]"
          />
        </div>
        <p className="text-xs h-10">{name}</p>
      </Link>
    </div>
  );
};

export default BreakingBadCharacterCard;
