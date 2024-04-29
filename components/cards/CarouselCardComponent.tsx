import { Card } from 'flowbite-react';
import Link from 'next/link';

const CarouselCardComponent = () => {
  return (
    <Card className="max-w-md rounded-sm">
      <h5 className="font-serif font-semibold tracking-tighter text-4xl text-gray-900 dark:text-white rounded-sm">
        Skills that drive you forward
      </h5>
      <p className="font-sans font-normal text-md text-gray-700 dark:text-gray-400 rounded-sm">
        Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.
      </p>
      <Link href="#" className="rounded-sm w-1/2 bg-gray-800 text-md">
        <div className="font-bold text-white w-full mx-4 my-3">
            <span>Plan for organizations</span>
        </div>
      </Link>
    </Card>
  )
}

export default CarouselCardComponent