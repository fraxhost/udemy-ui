import CategoryCardComponent from "@/components/cards/CategoryCardComponent";
import TestimonialCardComponent from "@/components/cards/TestimonialCardComponent";
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

export default function Home() {
  const images = ["/images/working-woman.jpg", "/images/working-people.jpg"];

  return (
    <main className="bg-slate-50">
      <PrimaryCarouselComponent images={images}></PrimaryCarouselComponent>

      <section className="w-full h-60 bg-gray-100 flex flex-col mt-12">
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

      <section className="max-w-[1340px] mt-10 p-5 mx-auto">
        <h2 className="font-bold text-3xl font-serif">
          A broad selection of courses
        </h2>
        <p className="font-normal text-xl mt-4">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>

        <TopicTabContainer></TopicTabContainer>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-[1340px] mt-10 p-5 mx-auto ">
          <h2 className="font-bold text-3xl font-serif">
            How learners like you are achieving their goals
          </h2>
          <div className="mt-4">
            <TestimonialCarouselComponent />
          </div>
        </div>
      </section>

      <section className="max-w-[1340px] mt-10 p-5 mx-auto">
        <h2 className="font-bold text-3xl font-serif">Learners are viewing</h2>
        <div className="mt-4">
          <SecondaryCarouselComponent />
        </div>
      </section>

      <section className="max-w-[1340px] mt-10 p-5 mx-auto">
        <h2 className="font-bold text-3xl font-serif mb-4">Top categories</h2>
        <div className="flex flex-wrap gap-5">
          <CategoryCardComponent
            title="Design"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
          />
          <CategoryCardComponent
            title="Development"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
          />
          <CategoryCardComponent
            title="Marketing"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
          />
          <CategoryCardComponent
            title="IT and Software"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
          />
          <CategoryCardComponent
            title="Personal Development"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
          />
          <CategoryCardComponent
            title="Business"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
          />
          <CategoryCardComponent
            title="Photography"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
          />
          <CategoryCardComponent
            title="Music"
            imageUrl="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
          />
        </div>
      </section>
    </main>
  );
}
