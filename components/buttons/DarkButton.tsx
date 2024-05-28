interface DarkButtonProps {
  title: string;
}

const DarkButton = (props: DarkButtonProps) => {
  return (
    <button className="p-3 bg-gray-900 hover:bg-gray-800 border border-black font-bold text-white">
      {props.title}
    </button>
  );
};

export default DarkButton;
