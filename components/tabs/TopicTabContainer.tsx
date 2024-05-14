"use client";

import { useRef, useState } from "react";

import { Tabs, TabsRef } from "flowbite-react";
import CourseCardComponent from "../cards/CourseCardComponent";

const TopicTabContainer = () => {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Python",
      content: "Python",
    },
    {
      title: "Excel",
      content: "Excel",
    },
    {
      title: "Web Development",
      content: "Web Development",
    },
    {
      title: "JavaScript",
      content: "JavaScript",
    },
    {
      title: "Data Science",
      content: "Data Science",
    },
    {
      title: "Amazon AWS",
      content: "Amazon AWS",
    },
    {
      title: "Drawing",
      content: "Drawing",
    },
  ];

  return (
    <div className="mt-4">
      <Tabs
        id="udemy-topic-tab"
        ref={tabsRef}
        onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        {tabs.map((tab, index) => (
          <Tabs.Item key={index} title={tab.title}>
            <CourseCardComponent />
            <p className="text-md text-gray-500 dark:text-gray-400">
              {/* {tab.content} */}
            </p>
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
};

export default TopicTabContainer;
