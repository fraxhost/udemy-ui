import React from "react";

const CustomerStoryCardComponent = () => {
  return (
    <div className="border border-zinc-200 bg-white w-full min-h-72">
      <div className="flex flex-row  m-6">
        <div className="flex flex-col">
          <div className="">
            <img
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              alt="open quote"
              width={20}
            />
          </div>
          <div className="mt-2 w-1/2">
            <p className="tracking-tight leading-2">
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its data scientists, with highly relevant and
              in-demand tech skills that are enabling consultants to stay ahead
              of big data trends and raise the bar on proficiency, skills, and
              competencies to meet client demand.
            </p>
          </div>
          <div>
            <button className="underline text-indigo-700 font-bold">
              Read full story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStoryCardComponent;
