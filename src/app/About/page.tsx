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
          <h1 className="font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-stone-700 font-serif mb-4 leading-tight">
            About Us
          </h1>
          <h2 className="font-sans text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-zinc-700 leading-tight">
            Welcome to TRIPI WORLD, We believe that every journey is more than just a destination,its an adventure that begins the moment you step out your door.
            Imagine wandering through the vibrant souks of Marrakech, where the scent of spices fills the air, and the colors of intricate tapestries dazzle your senses. Or picture yourself on the pristine beaches of the Maldives, where turquoise waters and white sands create the perfect paradise. With Tripi, these exotic locations are within your reach, offering unique experiences that enrich your soul."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;