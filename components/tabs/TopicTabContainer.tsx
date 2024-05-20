"use client";

import { useRef, useState } from "react";

import Tabs from "./Tabs";
import CourseCardComponent from "../cards/CourseCardComponent";

const TopicTabContainer = () => {
  const tabs = [
    {
      title: "Python",
      heading: "Expand your career opportunities with Python",
      description:
        "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
      buttonText: "Explore Python",
    },
    {
      title: "Excel",
      heading: "Analyze and visualize data with Excel",
      description:
        "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to",
      buttonText: "Explore Excel",
    },
    {
      title: "Web Development",
      heading: "Build websites and applications with Web Development",
      description:
        "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
      buttonText: "Explore Web Development",
    },
    {
      title: "JavaScript",
      heading: "Grow your software development skills with JavaScript",
      description:
        "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build",
      buttonText: "Explore JavaScript",
    },
    {
      title: "Data Science",
      heading: "Lead data-driven decisions with Data Science",
      description:
        "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics,",
      buttonText: "Explore Data Science",
    },
    {
      title: "Amazon AWS",
      heading: "Become an expert in cloud computing with AWS Certification",
      description:
        "Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more",
      buttonText: "Explore Amazon AWS",
    },
    {
      title: "Drawing",
      heading: "Expand your creative skillset with Drawing",
      description:
        "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area",
      buttonText: "Explore Drawing",
    },
  ];

  return (
    <div className="mt-4">
      <Tabs items={tabs}></Tabs>
    </div>
  );
};

export default TopicTabContainer;
