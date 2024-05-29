import React from "react";

interface LightButtonProps {
  title: string;
}

const LightButton = (props: LightButtonProps) => {
  return (
    <button className="px-3 py-2 bg-transparent hover:bg-gray-200 border border-black font-bold text-sm">
      {props.title}
    </button>
  );
};

export default LightButton;
