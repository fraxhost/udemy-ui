import React, { useState } from "react";
import ExploreButton from "../buttons/ExploreButton";

interface TabItem {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
}

interface TabsProps {
  items: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className="flex border-b">
        {items.map((item, index) => (
          <button
            key={index}
            className={`p-4 text-lg font-bold text-gray-500 ${
              activeTab === index ? "text-gray-700" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="p-6 border w-full h-96">
        <div className="text-2xl font-bold text-gray-800">
          {items[activeTab].heading}
        </div>
        <div className="w-2/3 mt-4">{items[activeTab].description}</div>
        <div className="mt-4">
          <ExploreButton title={items[activeTab].buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
