import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src={"/image.png"}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="filter brightness-50"
        />

        <div className="absolute inset-y-0 right-0 flex flex-col justify-center text-left bg-purple-300/80 px-6   py-8 sm:px-8 md:px-12 lg:px-16 w-full sm:w-[60%] md:w-[50%] lg:w-[40%]">
          <h1 className="font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-stone-700 mb-4 leading-tight">
            About Us
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-zinc-700 leading-tight">
            Welcome to TRIPI WORLD, Travel is more than just the act of moving from one place to another, it is an enriching experience that broadens our horizons, introduces us to new cultures, and creates lifelong memories. Whether it&apos;s a weekend getaway or a month-long journey, the joys of travel are truly unparalleled.One of the most exciting aspects of travel is the opportunity to explore new destinations.</p>
        </div>
      </div>
    </div>
  );
};

export default page;