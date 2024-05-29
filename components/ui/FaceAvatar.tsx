import React from "react";

const FaceAvatar = () => {
  return (
    <div className="w-[120px] h-[120px] bg-gray-800 rounded-full flex justify-center items-center overflow-hidden">
      <img
        src="https://s.udemycdn.com/home/ub-case-studies/Ismaeel_Ameen.png"
        alt="face avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FaceAvatar;
