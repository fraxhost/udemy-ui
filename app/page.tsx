import DarkButton from "@/components/buttons/DarkButton";
import LightButton from "@/components/buttons/LightButton";
import CategoryCardComponent from "@/components/cards/CategoryCardComponent";
import CustomerStoryCarouselComponent from "@/components/carousels/CustomerStoryCarouselComponent";
import PrimaryCarouselComponent from "@/components/carousels/PrimaryCarouselComponent";
import SecondaryCarouselComponent from "@/components/carousels/SecondaryCarouselComponent";
import TestimonialCarouselComponent from "@/components/carousels/TestimonialCarouselComponent";
import AttIcon from "@/components/icons/AttIcon";
import CiscoIcon from "@/components/icons/CiscoIcon";
import CitiIcon from "@/components/icons/CitiIcon";
import EricssonIcon from "@/components/icons/EricssonIcon";
import HewlettPackardEnterpriseIcon from "@/components/icons/HewlettPackardEnterpriseIcon";
import ProcterGambleIcon from "@/components/icons/ProcterGambleIcon";
import SamsungIcon from "@/components/icons/SamsungIcon";
import VolkswagenIcon from "@/components/icons/VolkswagenIcon";
import TopicTabContainer from "@/components/tabs/TopicTabContainer";
import { formatNumber } from "@/utilities/NumberFormatter";

export default function Home() {
  const images = ["/images/working-woman.jpg", "/images/working-people.jpg"];
  const categories = [
    {
      title: "Design",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
    },
    {
      title: "Development",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
    },
    {
      title: "Marketing",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
    },
    {
      title: "IT and Software",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    },
    {
      title: "Personal Development",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
    },
    {
      title: "Business",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
    },
    {
      title: "Photography",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
    },
    {
      title: "Music",
      imageUrl:
        "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
    },
  ];
  const featuredTopics = [
    {
      category: "Development",
      topics: [
        {
          title: "Python",
          learners: 36354994,
        },
        {
          title: "Web Development",
          learners: 11415615,
        },
        {
          title: "Machine Learning",
          learners: 7070015,
        },
      ],
    },
    {
      category: "Business",
      topics: [
        {
          title: "Financial Analysis",
          learners: 1195282,
        },
        {
          title: "SQL",
          learners: 5977561,
        },
        {
          title: "PMP",
          learners: 1733398,
        },
      ],
    },
    {
      category: "IT and Software",
      topics: [
        {
          title: "Amazon AWS",
          learners: 6123456,
        },
        {
          title: "Ethical Hacking",
          learners: 10931066,
        },
        {
          title: "Cyber Security",
          learners: 3998037,
        },
      ],
    },
    {
      category: "Design",
      topics: [
        {
          title: "Photoshop",
          learners: 10909736,
        },
        {
          title: "Graphic Design",
          learners: 3381052,
        },
        {
          title: "Drawing",
          learners: 2410849,
        },
      ],
    },
  ];

  return (
    <main className="bg-white">
      <PrimaryCarouselComponent images={images}></PrimaryCarouselComponent>

      <section
        id="home-partners"
        className="w-full h-60 bg-gray-100 flex flex-col mt-12"
      >
        <h2 className="text-xl font-sans font-normal text-gray-500 flex justify-center">
          <span className="mt-16">
            Trusted by over 15,000 companies and millions of learners around the
            world
          </span>
        </h2>
        <div className="flex flex-row justify-evenly mt-8 w-[1340px] mx-auto">
          <VolkswagenIcon />
          <SamsungIcon />
          <CiscoIcon />
          <AttIcon />
          <ProcterGambleIcon />
          <HewlettPackardEnterpriseIcon />
          <CitiIcon />
          <EricssonIcon />
        </div>
      </section>

      <section id="home-courses" className="max-w-[1340px] mt-10 p-5 mx-auto">
        <h2 className="font-bold text-3xl font-serif">
          A broad selection of courses
        </h2>
        <p className="font-normal text-xl mt-4">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>

        <TopicTabContainer></TopicTabContainer>
      </section>

      <section id="home-testimonial" className="bg-gray-100">
        <div className="max-w-[1340px] mt-10 p-5 pt-16 mx-auto ">
          <h2 className="font-bold text-3xl font-serif">
            How learners like you are achieving their goals
          </h2>
          <div className="mt-4">
            <TestimonialCarouselComponent />
          </div>
        </div>
      </section>

      <section
        id="home-learners-view"
        className="max-w-[1340px] mt-10 p-5 mx-auto"
      >
        <h2 className="font-bold text-3xl font-serif">Learners are viewing</h2>
        <div className="mt-4">
          <SecondaryCarouselComponent />
        </div>
      </section>

      <section
        id="home-categories"
        className="max-w-[1340px] mt-10 p-5 mx-auto"
      >
        <h2 className="font-bold text-3xl font-serif mb-4">Top categories</h2>
        <div className="flex flex-wrap gap-5">
          {categories.map((category) => (
            <CategoryCardComponent
              title={category.title}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </section>

      <section id="home-featured-topics" className="w-full bg-gray-100 py-16">
        <div className="max-w-[1340px] p-5 mx-auto">
          <h2 className="font-bold text-3xl font-serif mb-4">
            Featured topics by category
          </h2>
          <div className="flex flex-row justify-between mr-40">
            {featuredTopics.map((featuredTopic) => (
              <div className="flex flex-col">
                <h2 className="font-bold text-lg">{featuredTopic.category}</h2>
                {featuredTopic.topics.map((topic) => (
                  <div className="flex flex-col">
                    <h3 className="mt-4 font-bold text-indigo-700 underline">
                      {topic.title}
                    </h3>
                    <p className="font-light text-sm mt-2">
                      {formatNumber(topic.learners)} learners
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <LightButton title="Explore more topics" />
          </div>
        </div>
      </section>

      <section id="home-udemy-business" className="bg-white">
        <div className="flex flex-row m-8 max-w-[1000px] p-5 mx-auto">
          <div className="w-1/2 flex flex-col mr-24">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
              alt="udemy business logo"
              width={192}
              height={33}
            />
            <h3 className="font-bold font-serif text-3xl mt-6">
              Upskill your team with Udemy Business
            </h3>
            <div className="my-4 ml-6 text-xl font-sans tracking-tight">
              <ul className="list-disc gap-2">
                <li className="mt-2">
                  Unlimited access to 25,000+ top Udemy courses, anytime,
                  anywhere
                </li>
                <li className="mt-2">
                  International course collection in 14 languages
                </li>
                <li className="mt-2">
                  Top certifications in tech and business
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-2">
              <DarkButton title="Get Udemy Business" />
              <LightButton title="Learn more" />
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
              alt="image of two people laughing"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section id="home-customer-stories" className="w-full bg-gray-100 py-16">
        <div className="mt-4">
          <CustomerStoryCarouselComponent />
        </div>
        <div className="flex flex-row justify-center mt-4">
          <button className="text-indigo-700 font-bold">
            <p>
              View more customer stories &nbsp;
              <span className="text-xl">&rsaquo;</span>
            </p>
          </button>
        </div>
      </section>

      <section id="home-instructor" className=" mt-10 p-5 bg-white">
        <div className="max-w-[1000px] flex flex-row my-10 mx-auto">
          <div>
            <img
              src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg"
              alt="instructor"
              width={400}
            />
          </div>
          <div className="ml-24 mt-24 w-96">
            <h1 className="font-bold font-serif text-3xl">
              Become an instructor
            </h1>
            <p className="text-lg my-4">
              Instructors from around the world teach millions of learners on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <DarkButton title="Start teaching today" />
          </div>
        </div>
      </section>
    </main>
  );
}
