const Square = ({value, onSquareClick}) => {
  return (
    <button
      className="h-12 w-12  flex justify-center items-center cursor-pointer border border-gray-300 text-2xl font-semibold"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
