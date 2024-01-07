import { TbDots } from "react-icons/tb";

const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-lg border-2 border-grey-100 p-2 rounded-md flex flex-col justify-start mb-5 overflow-hidden hover:scale-105 duration-200 cursor-pointer  ${className} `}
    >
      <button className="self-end text-white px-2 py-1  rounded-md">
        <TbDots />
      </button>

      {children}
    </div>
  );
};

export default Card;
