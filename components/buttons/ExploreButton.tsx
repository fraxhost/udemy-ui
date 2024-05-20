import React from "react";

interface ExploreButtonProps {
  title: string;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ title }) => {
  return (
    <button className="inline-block p-2 bg-transparent hover:bg-gray-200 border border-black font-semibold">
      {title}
    </button>
  );
};

export default ExploreButton;
