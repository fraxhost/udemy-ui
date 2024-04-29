import Image from "next/image"

const LocalizationButton = () => {
  return (
    <button className="w-10 h-10 bg-transparent hover:bg-gray-200 border border-black flex justify-center items-center">
      <Image
        src="images/icons/world.svg"
        alt="world icon"
        width={15}
        height={15}
      />
    </button>
  )
}

export default LocalizationButton