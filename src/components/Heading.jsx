import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export const Heading = ({ uncolored, colored }) => {
  return (
    <div className="flex items-center justify-between mt-[120px] border-b-2 border-b-light">
      <h2 className="text-[24px] font-semibold text-heading border-b-4 border-b-primary pb-1">
        {uncolored}
        <span className="text-primary"> {colored}</span>
      </h2>
      <span className="flex items-center gap-2 text-base">
        View All <AiOutlineRight size = "16"/>
      </span>
    </div>
  );
};
