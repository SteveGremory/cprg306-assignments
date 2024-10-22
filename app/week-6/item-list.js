"use client";

import React, { useState } from "react";
import items from "./items.json";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{name}</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          {category}
        </span>
      </div>
      <div className="mt-2">
        <span className="text-gray-600">Quantity: {quantity}</span>
      </div>
    </li>
  );
};

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const sortedGroupedItems = Object.entries(groupedItems)
    .sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB))
    .map(([category, items]) => ({
      category,
      items: items.sort((a, b) => a.name.localeCompare(b.name)),
    }));

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            sortBy === "grouped"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {sortedGroupedItems.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-xl font-semibold mb-3 capitalize">
                {category}
              </h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
