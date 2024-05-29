import React from "react";

interface CategoryCardComponentProps {
  imageUrl: string;
  title: string;
}

const CategoryCardComponent = (props: CategoryCardComponentProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-[300px] h-[300px] relative">
        <img
          src={props.imageUrl}
          alt="category design"
          className="transform hover:scale-105 z-10 mx-auto mt-10 absolute top-0 left-5"
          width={250}
          height={250}
        />
        <div className="bg-[#f8f9fb] w-[300px] h-[300px] pointer-events-none"></div>
      </div>
      <div className="font-bold text-l mt-2">{props.title}</div>
    </div>
  );
};

export default CategoryCardComponent;
