import Image from "next/image";

interface LocalizationButtonProps {
  title: string;
}

const LocalizationButton = (props: LocalizationButtonProps) => {
  return (
    <button className="w-36 h-10 bg-transparent border border-gray flex justify-start items-center gap-2 pl-4">
      <Image
        src="images/icons/white-world.svg"
        alt="world icon"
        width={18}
        height={18}
      />
      <p className="text-base">{props.title}</p>
    </button>
  );
};

export default LocalizationButton;
