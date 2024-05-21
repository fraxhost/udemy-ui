import PrimaryCarouselComponent from "@/components/carousels/PrimaryCarouselComponent";
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
    <main>
      <PrimaryCarouselComponent images={images}></PrimaryCarouselComponent>

      <section className="w-full h-60 bg-gray-100 flex flex-col">
        <h2 className="text-xl font-sans font-normal text-gray-500 flex justify-center">
          <span className="mt-16">
            Trusted by over 15,000 companies and millions of learners around the
            world
          </span>
        </h2>
        <div className="flex flex-row justify-evenly mt-8">
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
    </main>
  );
}
