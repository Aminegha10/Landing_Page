import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-1 bg-[url('./assets/image.png')] bg-cover items-center text-white pl-[137px]">
      <div className="flex flex-col ">
        <div className="text-[34px] leading-8 Jost">Every piece of</div>
        <div className="text-[56px] font-medium mb-4 Cormorant">
          Jewelry tells a story
        </div>
        <p className="w-[397px] mb-[40px] text-gray-200">
          “A gentleman knows his appearance is very important that show his
          characteristic.” - Unknown
        </p>
        <div className="flex gap-[16px] Jost">
          <button className="rounded-[4px] p-[12px] bg-white font-medium text-black">
            Shop Now
          </button>
          <button className="rounded-[4px] p-[12px] border-2 border-white text-white font-medium">
            New Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
