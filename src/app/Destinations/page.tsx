import React from "react";
import Image from 'next/image'

const page = () => {
  const destinations = [
    {
      id: 1,
      name: "Destination 1",
      price: 399.99,
      description: "Sunset View",
      image: "/h4.jpg",
    },
    {
      id: 2,
      name: "Destination 2",
      price: 299.99,
      description: "Full Coverage Master Bedroom",
      image: "/h1.jpg",
    },
    {
      id: 3,
      name: "Destination 3",
      price: 399.99,
      description: "Maldives View",
      image: "/n4.jpg",
    },
    {
      id: 4,
      name: "Destination 4",
      price: 499.99,
      description: "Enlightning Bright Buildings",
      image: "/d4.jpg",
    },
    {
      id: 5,
      name: "Destination 5",
      price: 599.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d5.jpg",
    },
    {
      id: 6,
      name: "Destination 6",
      price: 699.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d6.jpg",
    },
    {
      id: 7,
      name: "Destination 7",
      price: 799.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d7.jpg",
    },
    {
      id: 8,
      name: "Destination 8",
      price: 899.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d8.jpg",
    },
    {
      id: 9,
      name: "Destination 9",
      price: 999.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/n3.jpg",
    },
    {
      id: 10,
      name: "Destination 10",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d3.jpg",
    },
    {
      id: 11,
      name: "Destination 11",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d2.jpg",
    },
    {
      id: 12,
      name: "Destination 12",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/d1.jpg",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <Image
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 lg:h-64 object-cover"
              width={500}
              height={300}
            
            />
            <div>
              <h2 className="text-sm tracking-widest text-gray-700 uppercase font-semibold">
                {destination.name}
              </h2>
              <p className="text-sm text-gray-500">{destination.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-gray-900">
                  ${destination.price}
                </span>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-md  transition-transform hover:scale-105">
                  Add to WishList
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;