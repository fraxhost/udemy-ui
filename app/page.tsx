import CarouselComponent from "@/components/carousels/CarouselComponent";
import UdemyTopicTab from "@/components/tabs/UdemyTopicTab";

export default function Home() {
  const images = ["/images/working-woman.jpg", "/images/working-people.jpg"];
  
  return (
    <main>
      <CarouselComponent images={images}></CarouselComponent>

      <section className="w-full h-60 bg-gray-100 mt-10">

      </section>

      <section className="max-w-[1340px] mt-10 p-5 mx-auto">
        <h2 className="font-serif font-bold text-4xl">A broad selection of courses</h2>
        <p className="font-normal text-xl">Choose from over 210,000 online video courses with new additions published every month</p>

        <UdemyTopicTab></UdemyTopicTab>

      </section>
    </main>
  );
}
