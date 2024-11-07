"use client";
import Form from "./new-item.js";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <main className="bg-slate-950 p-4">
      <div className="flex items-center w-fit">
        <Form onAddItem={handleAddItem} />
      </div>
      <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
