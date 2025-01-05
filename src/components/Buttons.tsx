interface ButtonsProps {
  activeFilter: boolean | null;
  setActiveFilter: React.Dispatch<React.SetStateAction<boolean | null>>;
}

function Buttons({ activeFilter, setActiveFilter }: ButtonsProps) {
  return (
    <div>
      <button
        onClick={() => setActiveFilter(false)}
        className={`p-2 transition-all border ${
          activeFilter === false ? "bg-green-500" : "bg-gray-600"
        }`}
      >
        غير المنجزة
      </button>

      <button
        onClick={() => setActiveFilter(true)}
        className={`p-2 transition-all border ${
          activeFilter === true ? "bg-green-500" : "bg-gray-600"
        }`}
      >
        المنجزة
      </button>

      <button
        onClick={() => setActiveFilter(null)}
        className={`p-2 transition-all border ${
          activeFilter === null ? "bg-green-500" : "bg-gray-600"
        }`}
      >
        الكل
      </button>
    </div>
  );
}

export default Buttons;
