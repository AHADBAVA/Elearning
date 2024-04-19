import React from 'react';
import Stars from 'react-stars'

const Carts = () => {
  return (
    <div className="cartvideos">
      <h3 className="heading ml-8 mt-3 text-blue-500 text-lg">Cart's</h3>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="border border-gray-400 rounded-lg p-2 mt-3 lg:ml-8 md:mx-4 md:ml-30">
          <div className=" mb-2">
            <img src="/public/1.png" alt="Course Image" className="w-73 h-45" />
          </div>
          <div className="text-lg font-semibold mb-0">
            10 Days of code : The Complete Python Pro Bootcamp
          </div>
          <p className="text-sm text-gray-500 mb-1">Mentor: Fathima Shamly</p>
          <div className="text-sm text-gray-700 mb-1">
            <Stars
              count={5}
              value={4.7}
              edit={false}
              size={24}
              color2={"#ffd700"}
            />
          </div>
          <div className="flex text-sm text-gray-700">
            <div className="mr-4 my-2">Pricing: $10</div>
            <button className="mr-4 bg-orange-500 text-white px-2 ml-11 rounded-xl">
              Buy now
            </button>
            <div><img src="/public/bookmark-solid.svg" className="w-7 h-7" alt="saved"></img></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Carts