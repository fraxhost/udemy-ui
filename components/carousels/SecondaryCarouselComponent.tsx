import React, { ReactNode, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import ExploreButton from "../buttons/ExploreButton";

interface SecondaryCarouselComponentProps {
  slides: ReactNode[];
}

const SecondaryCarouselComponent: React.FC<SecondaryCarouselComponentProps> = ({
  slides,
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="secondary-carousel" className="max-w-[1340px] h-[400px] mx-auto">
      <Carousel arrows responsive={responsive}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default SecondaryCarouselComponent;
