import React from "react";

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
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ItemList;
