import React from "react";

export const MobileItems = ({ image, newPrice, prevPrice, title }) => {
  return (
    <div className="flex flex-col rounded-2xl relative">
      <div className="relative pb-[150%] bg-[#F5F5F5]">
        <img src={image} alt="" className="absolute left-auto top-auto" />
      </div>
      <div className="p-5">
        <p>{title}</p>
        <p>
          <span className="font-bold">{newPrice}</span>
          <span className="line-through">{prevPrice}</span>
        </p>
      </div>
    </div>
  );
};
