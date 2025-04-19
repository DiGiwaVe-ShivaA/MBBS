const SuccessBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-center border-4 border-green-400 rounded-2xl overflow-hidden bg-white shadow-md">
        {/* Left Section */}
        <div className="flex-1 w-full p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-extrabold text-black leading-snug">
            10 YEARS <br /> OF SUCCESS
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full bg-gray-800 text-white p-6 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-xl font-semibold">
            Transform Confusion Into Confidence – Schedule Your Free Career
            Counselling Call!
          </p>
          <button className="bg-green-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-500 transition">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessBanner;
