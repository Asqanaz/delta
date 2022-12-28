import React from "react";
import { Carousel } from "../components/Carousel";
import { Heading } from "../components/Heading";
import { MobileItems } from "../components/MobileItems";

export const Home = () => {
  return (
    <div>
      <Carousel arrows={true} slidesToScroll={1} slidesToShow={1}>
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
        <img src="/carousel_item1.png" className="object-cover" />
      </Carousel>

      <Heading colored = {"Smartphones"} uncolored = {"Grab the best deal on"}/>
      <div className="flex items-center">
        <MobileItems title = {"Samsung"} newPrice = {"2134"} prevPrice = {"123132"} image = {"/samsung.png"}/>
      </div>
    </div>
  );
};
