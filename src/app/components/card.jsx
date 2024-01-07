const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-lg border-2 border-grey-100 p-2 rounded-md flex flex-col justify-start mb-5 overflow-hidden min-w-14 ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;
