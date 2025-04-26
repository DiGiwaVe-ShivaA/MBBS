const SuccessBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-center border-4 border-green-400 rounded-2xl overflow-hidden bg-white shadow-md">
        {/* Left Section */}
        <div className="flex-1 w-full p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight md:leading-snug antialiased">
            10 YEARS <br /> OF SUCCESS
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full bg-gray-800 text-white p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[200px]">
          <p className="text-lg md:text-xl font-semibold leading-relaxed antialiased">
            Transform Confusion Into Confidence – Schedule Your Free Career
            Counselling Call!
          </p>
          <button className="bg-green-400 text-white px-5 py-2 min-w-[150px] rounded-md font-semibold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-150 ease-in-out">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessBanner;
