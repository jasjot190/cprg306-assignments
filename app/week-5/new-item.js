"use client";
import { useState } from "react";
import Counter from "../week-4/new-item";

export default function Form() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = () => {};

  return (
    // <div>
    // </div>
    <form
      action="submit"
      className="bg-slate-900 p-2 m-4"
      // onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Item name"
        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg text-gray-500 font-bold"
      />
      <div className="my-4">
        <Counter />
        <select name="" id=""></select>
      </div>
      <button type="submit">+</button>
    </form>
  );
}
