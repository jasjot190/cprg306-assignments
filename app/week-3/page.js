import Items from "./item.js";

export default function Page() {
  return (
    <main className="bg-slate-950">
      <h1 className="m-2 font-bold text-3xl">Shopping List</h1>
      <Items />
    </main>
  );
}
