import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD_CART, GET_PRODUCTS } from '../Types';

import Ratings from './Ratings';
import Alert from './Alert';

const Tailwind = (props) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);

  const navigate = useNavigate();
  const orderHandler = (id) => {
    console.log(id);
    dispatch({ type: ADD_CART, payload: { id } });
    setDisplay(true);
  };
  const addToCartHandler = () => {
    navigate('/cart');
  };
  useEffect(() => {
    dispatch({ type: GET_PRODUCTS });
  },[]);

  return (
    <>
      {display && <Alert />}
      <h1 className="mt-10 mb-2 text-center capitalize text-4xl text-yellow-500 md:text-green-500 lg:text-pink-500 sm:text-blue-500 ">
        Our products
      </h1>

      <button
        className="justify-items-end bg-pink-400 text-white mt-6  px-4 py-2"
        onClick={addToCartHandler}
      >
        Go to cart
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20">
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-xs ">
            <div className="px-6 py-4">
              <Ratings />
              <div className="font-bold text-xl mt-4 mb-2"></div>
              <p className="text-gray-400 text-md mb-2 ">
                Bye Bye Blemishes Face Cream for Reducing Pigmentation
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-3">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                $16
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Flat 50%
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Hurry
              </span>
            </div>
            <button
              onClick={() => orderHandler(1)}
              class="bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4  mt-2 mb-5 rounded hover:scale-125 transition ease-in-out duration-1000"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-xs ">
            <img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtZ86cK4PMqMQ9sBaH5c8xEhAV-A9gwD4buGBtjbpmaG0wG4ZlUQHKjRYe8jgYt3g5foWSqljthBg&usqp=CAc"
              alt="cream"
              className="max-w-xs transform transition ease-in-out duration-1000 hover:rotate-45"
            />
            <div className="px-6 py-4">
              <Ratings />
              <div className="font-bold text-xl mt-4 mb-2">Baby powder</div>
              <p className="text-gray-400 text-md mb-2 ">
                specially made to be gentle to your baby’s skin and eliminates
                friction
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-3">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                $30
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Flat 50%
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Hurry
              </span>
            </div>
            <button
              onClick={() => orderHandler(2)}
              class="bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4  mt-2 mb-5 rounded hover:scale-125 transition ease-in-out duration-1000"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-xs ">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkhNTJq_kDo0rGHt5rIbvcFms7xunSRrFN8eC1lvthbMaVIoJf1RClIU4Sw0tqGHUO5vq0r97lrqQ&usqp=CAc"
              alt="cream"
              className="max-w-xs transform transition ease-in-out duration-1000 hover:skew-x-6"
            />
            <div className="px-6 py-4">
              <Ratings />
              <div className="font-bold text-xl mt-4 mb-2">Dettol Handwash</div>
              <p className="text-gray-400 text-md mb-2 ">
                Dettol Liquid Hand Wash - Skincare, Moisturising
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-3">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                $16
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Flat 50%
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Hurry
              </span>
            </div>
            <button
              onClick={() => orderHandler(3)}
              class="bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4  mt-2 mb-5 rounded hover:scale-125 transition ease-in-out duration-1000"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-xs ">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTw5Up1P3wyGOF_UEWpO4bMkWA8A4daTf71K2_58TPGPgduOToupXJVkHXFH_kB3H_iTkWq7dO6cg&usqp=CAc"
              alt="shampoo"
              className="max-w-xs transform transition ease-in-out duration-1000 hover:translate-x-4"
            />
            <div className="px-6 py-4">
              <Ratings />
              <div className="font-bold text-xl mt-4 mb-2">Dove shampoo</div>
              <p className="text-gray-400 text-md mb-2 ">
                Dove Hair Fall Rescue Shampoo, Reduces dandruff
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-3">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                $20
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Flat 50%
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2">
                Hurry
              </span>
            </div>
            <button
              onClick={() => orderHandler(4)}
              class="bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4  mt-2 mb-5 rounded hover:scale-125 transition ease-in-out duration-1000"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state.products);
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Tailwind);
