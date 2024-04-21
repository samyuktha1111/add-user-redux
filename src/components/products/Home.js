import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const shopHandler = () => {
    navigate('/tailwind');
  };
  return (
    <div className=" grid grid-flow-row gap-7 pt-36 ">
      <h1 className="text-4xl font-bold text-yellow-500 md:text-green-500 lg:text-pink-500 sm:text-blue-500">
        OUR BRANDS
      </h1>
      <p className=" px-72 text-gray-400">
        Our Brands Superstore currently provides 500 products across categories
        like fresh fruits, fresh vegetables, groceries, home care and packaged
        food among others.
      </p>
      <div>
        <button
          onClick={shopHandler}
          className="animate-bounce bg-green-500 sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-500 hover:bg-pink-700 text-white text-md font-bold py-4 px-6 mt-5 rounded-full hover:scale-125 transition ease-in-out duration-1000"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
