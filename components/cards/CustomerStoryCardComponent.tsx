import React from "react";
import FaceAvatar from "../ui/FaceAvatar";

const CustomerStoryCardComponent = () => {
  return (
    <div className="border border-zinc-200 bg-white w-full min-h-72">
      <div className="flex flex-row m-6">
        <div className="flex flex-col h-60 w-1/2">
          <div id="customer-story-card-text-section">
            <img
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              alt="open quote"
              width={20}
            />
          </div>
          <div className="mt-2">
            <p className="tracking-tight leading-2">
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div>
            <button className="underline text-indigo-700 font-bold">
              Read full story
            </button>
          </div>
        </div>
        <div id="customer-story-card-avatar-section" className="w-1/2">
          <div className="flex flex-col items-center">
            <FaceAvatar />
            <h2 className="font-bold text-xl mt-4 text-zinc-800">
              Ismaeel Ameen
            </h2>
            <p className="font-light">Head of Data Engineering</p>
            <p className="font-light">Development and Data Management</p>
            <p className="text-base mt-6">Robert Walters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStoryCardComponent;
