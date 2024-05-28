"use client";

import React, { ReactNode } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCardComponent from "../cards/TestimonialCardComponent";

const TestimonialCarouselComponent = () => {
  const slides: ReactNode[] = [
    <TestimonialCardComponent />,
    <TestimonialCardComponent />,
    <TestimonialCardComponent />,
    <TestimonialCardComponent />,
    <TestimonialCardComponent />,
    <TestimonialCardComponent />,
    <TestimonialCardComponent />,
  ];

  const responsive = {
    // the naming can be any, depends on you.
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    latop: {
      breakpoint: { max: 1920, min: 1368 },
      items: 4,
    },
    smallLatop: {
      breakpoint: { max: 1368, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 850 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 790, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-[1340px] h-[400px] mx-auto secondary-carousel">
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

export default TestimonialCarouselComponent;
