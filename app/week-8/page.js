"use client";
import Form from "./new-item.js";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdea from "./meal-idea";

export default function page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (name) => {
    setSelectedItemName(name);
  };
  return (
    <main className="bg-slate-950 p-4 flex gap-4">
      <div>
        <div className="flex items-center w-fit">
          <Form onAddItem={handleAddItem} />
        </div>
        <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="p-4">
        <MealIdea MealIdea={selectedItemName} />
      </div>
    </main>
  );
}
