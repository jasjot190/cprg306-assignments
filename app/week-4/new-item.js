"use client";
import React, { useState } from "react";

const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  const Increment = () => setQuantity((prev) => prev + 1);
  const Decrement = () => setQuantity((prev) => prev - 1);

  return (
    <div className=" flex items-center w-fit bg-white  p-3 gap-4 rounded-lg">
      <div className="bg-black py-1 min-w-14  text-center">{quantity}</div>
      <div className="space-x-2">
        <button
          type="button"
          disabled={(() => {
            if (quantity != 1) {
              return false;
            } else {
              return true;
            }
          })()}
          className="bg-blue-500 hover:bg-blue-700 px-3 rounded-md disabled:bg-gray-400"
          onClick={Decrement}
        >
          &minus;
        </button>
        <button
          type="button"
          disabled={(() => {
            if (quantity != 20) {
              return false;
            } else {
              return true;
            }
          })()}
          className="bg-blue-500 hover:bg-blue-700 px-3 rounded-md disabled:bg-gray-400"
          onClick={Increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
