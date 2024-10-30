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
    let filteredName = null;
    name === null
      ? ""
      : (filteredName = name.replace(
          /([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g,
          ""
        ));
    filteredName === null
      ? ""
      : (filteredName = filteredName.slice(0, filteredName.indexOf(",")));
    setSelectedItemName(filteredName);
  };
  return (
    <main className="bg-slate-950 p-4 flex gap-4">
      <div>
        <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
        <div className="flex items-center w-fit">
          <Form onAddItem={handleAddItem} />
        </div>
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="p-4">
        <MealIdea ingredient={selectedItemName} />
      </div>
    </main>
  );
}
