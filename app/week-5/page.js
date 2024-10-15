import React from "react";
import NewItem from "./new-item";

const NewItemPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Add New Item
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Item Quantity
          </h2>
          <NewItem />
          <p className="mt-4 text-sm text-gray-600">
            Use the buttons to change the number! (good to pass time)
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewItemPage;
