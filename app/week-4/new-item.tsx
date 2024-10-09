"use client";

import React, { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
      <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-3 py-1 bg-red-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-3 py-1 bg-green-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
      >
        +
      </button>
    </div>
  );
};

export default NewItem;
