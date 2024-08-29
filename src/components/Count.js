import { useContext } from "react";
import { CountContext } from "../countContext";

const Count = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="flex items-center justify-center space-x-6 mt-16">
        <button
          className="bg-black text-white font-bold font-serif rounded-md px-10 text-2xl py-2 flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -
        </button>
        <p className="text-4xl font-bold text-black">{count}</p>
        <button
          className="bg-black text-white font-bold font-serif rounded-md px-10 text-2xl py-2 flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCount(count + 1)}
          disabled={count === 20}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
