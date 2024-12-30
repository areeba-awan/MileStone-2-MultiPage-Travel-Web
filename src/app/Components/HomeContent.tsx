import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/h3.jpg"}
        layout="fill" 
        objectFit="cover" 
        alt="Background Image"
        className="filter brightness-50"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-gray-200 leading-tight">
          Welcome to TRIPI World
        </h1>
        <h2 className="font-mono text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-red-50">
        "Chase sunsets in lands unknown, where the sky kisses the horizon in shades of fiery gold."
        </h2>
        <Link
          href={"/Destinations"}
          className="bg-sky-500 hover:bg-green-900 text-white font-medium px-4 py-2 rounded-lg mt-4 text-[16px] sm:text-[18px]"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;