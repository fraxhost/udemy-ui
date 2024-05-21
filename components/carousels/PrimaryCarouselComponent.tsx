import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import CarouselCardComponent from "../cards/CarouselCardComponent";

const PrimaryCarouselComponent: React.FC<{ images: string[] }> = ({
  images,
}) => {
  return (
    <div className="max-w-[1340px] h-[400px] mx-auto">
      <Carousel id="carousel-component" slide={false} indicators={false}>
        {images.map((item, index) => (
          <div className="relative" key={index}>
            <img src={item} alt="..." />
            <div className="absolute left-20 top-14 text-black">
              <CarouselCardComponent />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PrimaryCarouselComponent;
