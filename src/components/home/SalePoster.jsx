const SalePoster = () => {
  return (
    <div className="w-full h-[710px] posterBg my-8 rounded-lg flex items-center justify-center">
      <div className="hero-overlay bg-opacity-80 rounded-xl p-8 text-center flex items-center justify-center">
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4">
            THE SEASON BEGINS
          </h3>

          <h2 className="text-white  mb-4 text-7xl">
            PROMOTION <span className="text-yellow-300 ">SALE OFF 50%</span>
          </h2>
          <div className="relative">
            <div className="relative z-10">
              <button className="text-white bg-[#571F7C] w-44 h-14 my-auto">
                SHOP NOW
              </button>
            </div>
            <div className="absolute  top-12 left-26 flex justify-center items-center w-full h-full z-0">
              <h1 className="text-white font-semibold text-9xl opacity-30">
                HURRY
              </h1>
            </div>
          </div>

          <h4 className="text-white text-5xl mt-24">BEFORE OFFER ENDS</h4>
        </div>
      </div>
    </div>
  );
};

export default SalePoster;
