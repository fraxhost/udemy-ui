import React from "react";

import { formatPrice } from "@/utilities/PriceFormatter";
import Rating from "../ui/Rating";

const CourseCardComponent = () => {
  const props = {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    // image: "https://source.unsplash.com/random/250x150",
    image: `https://picsum.photos/seed/${new Date().getTime()}/220/150`,
    altText: "random",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    enrolled: 294593,
    actualPrice: 74.99,
    discountedPrice: 9.99,
    isBestseller: true,
  };

  return (
    <div className="flex flex-col w-[240px] mx-auto">
      <img src={props.image} alt={props.altText}></img>
      <h1 className="font-bold leading-5 text-gray-700 mt-2">{props.title}</h1>
      <p className="font-sans font-normal text-xs mt-1">{props.instructor}</p>
      <div className="mt-1">
        <Rating rating={3.7} />
      </div>
      <div className="flex flex-row items-center mt-1">
        <p className="font-bold text-md text-gray-700 mr-2">
          {formatPrice(props.discountedPrice)}
        </p>
        <s className="font-normal text-sm">{formatPrice(props.actualPrice)}</s>
      </div>
      <div className="mt-1">
        <span className="bg-lime-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded">
          Bestseller
        </span>
      </div>
    </div>
  );
};

export default CourseCardComponent;
