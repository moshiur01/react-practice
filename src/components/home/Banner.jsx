const Banner = () => {
  return (
    <div className="hero h-[610px] bannerBg rounded-lg">
      <div className="hero-overlay bg-opacity-20 rounded-xl"></div>
      <div className="hero-content text-neutral-content ml-auto my-auto">
        <div className="max-w-md flex flex-col gap-2 text-black">
          <p className="text-lg tracking-wide font-bold">summer canvas</p>
          <h1 className="mb-5 text-5xl font-medium text-black">
            FROM THE SUMMER
          </h1>
          <p className="mb-5">
            Step into summer with style and discover our latest collection of
            sandals, flip-flops, and sneakers. Our lightweight, breathable
            designs are perfect for all your summer adventures. Shop now and
            enjoy up to 50% off!
          </p>
          <button className="btn btn-neutral w-24 inline-block text-nowrap ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
