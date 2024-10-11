"use client";
import { itemList } from "./item-list";
export default function page() {
  return (
    <main className="bg-slate-950 p-4">
      <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
      {itemList()}
    </main>
  );
}
