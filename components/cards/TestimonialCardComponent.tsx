import React from "react";
import QuoteOpenIcon from "../icons/QuoteOpenIcon";
import PlayIcon from "../icons/PlayIcon";
import NameAvatar from "../ui/NameAvatar";

const TestimonialCardComponent = () => {
  const description =
    "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.";
  const author = "Will A";
  const course = "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022";

  return (
    <div className="bg-white border-2 p-6">
      <div className="mb-2">
        <QuoteOpenIcon />
      </div>
      <div className="mb-2">{description}</div>
      <div className="flex flex-row mb-4">
        <div className="mr-2">
          <NameAvatar name={author} />
        </div>
        <div className="font-bold text-sm text-gray-700">{author}</div>
      </div>
      <hr className="border-gray-300" />
      <div className="flex flex-row items-center mt-4">
        <div className="flex-none mr-2">
          <PlayIcon />
        </div>
        <div className="font-bold">{course}</div>
      </div>
    </div>
  );
};

export default TestimonialCardComponent;
