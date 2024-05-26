import React from "react";

interface NameAvatarProps {
  name: string;
}

const NameAvatar: React.FC<NameAvatarProps> = ({ name }) => {
  // Function to generate initials from the name
  const getInitials = (name: string): string => {
    if (!name) return "NN"; // Default to "NN" if no name is provided

    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase());
    return initials.slice(0, 2).join("");
  };

  return (
    <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex justify-center items-center">
      <p className="text-xs text-white font-bold">{getInitials(name)}</p>
    </div>
  );
};

export default NameAvatar;
