import { useState } from "react";
export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [err, setErr] = useState(false);

  const handleNameChange = (e) => {
    let name = e.target.value;
    name = name.replace(/[^a-zA-Z\s]/g, "");

    name.length > 0 ? setErr(false) & setName(name) : setName(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let Id = Math.random().toString();
    let newName = name + " ";
    onAddItem({
      id: Id,
      name: newName,
      quantity,
      category,
    });

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      action="submit"
      className="bg-slate-900 p-4 m-4"
      onSubmit={
        name.length == 0
          ? (e) => e.preventDefault() & setErr(true)
          : (e) => handleSubmit(e)
      }
    >
      <input
        type="text"
        placeholder="Item name"
        value={name}
        // required
        onChange={(e) => handleNameChange(e)}
        className="w-full mt-1 border-2 border-gray-300 p-3 rounded-lg text-gray-500 font-semibold"
      />
      {err && <p className="text-red-700 mt-1">*Name cannot be empty</p>}
      <div className="my-4 flex gap-10">
        <div className=" flex items-center w-fit bg-white  p-3 gap-4 rounded-lg">
          <div className="bg-black py-1 min-w-14  text-center">{quantity}</div>
          <div className="space-x-2">
            <button
              type="button"
              disabled={quantity <= 1 ? true : false}
              className="bg-blue-500 hover:bg-blue-700 px-3 rounded-md disabled:bg-gray-400"
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              &minus;
            </button>
            <button
              type="button"
              disabled={quantity >= 20 ? true : false}
              className="bg-blue-500 hover:bg-blue-700 px-3 rounded-md disabled:bg-gray-400"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
        <select
          name="Produce"
          id=""
          placeholder="Produce"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans text-gray-500 font-semibold"
        >
          <option value disabled>
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 rounded-lg p-3 font-bold text-lg hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
