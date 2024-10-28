"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, { ...item, id: crypto.randomUUID() }]);
  };

  return (
    <main className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
        <NewItem onAddItem={handleAddItem} />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Shopping List</h2>
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
