"use client";
import { ItemList } from "./item-list";
export default function Page() {
  return (
    <main className="bg-slate-950 p-4">
      <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
      {ItemList()}
    </main>
  );
}
