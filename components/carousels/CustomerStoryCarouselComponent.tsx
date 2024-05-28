"use client";

import React, { ReactNode } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomerStoryCardComponent from "../cards/CustomerStoryCardComponent";

const CustomerStoryCarouselComponent = () => {
  const slides: ReactNode[] = [
    <CustomerStoryCardComponent />,
    <CustomerStoryCardComponent />,
    <CustomerStoryCardComponent />,
    <CustomerStoryCardComponent />,
  ];

  const responsive = {
    // the naming can be any, depends on you.
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    latop: {
      breakpoint: { max: 1920, min: 1368 },
      items: 1,
    },
    smallLatop: {
      breakpoint: { max: 1368, min: 1100 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1100, min: 850 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 790, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-[800px] h-[315px] mx-auto secondary-carousel">
      <Carousel arrows responsive={responsive}>
        {slides.map((slide, index) => (
          <div key={index} className="mx-2">
            {slide}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerStoryCarouselComponent;
