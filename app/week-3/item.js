import Item_list, { Cart } from "./items-list.js";

export default function Items() {
  return Cart.map((item) => (
    <div className="m-4 p-2 max-w-sm bg-slate-900">
      <h1 className="text-xl font-bold">{item.name}</h1>
      <p className="text-sm">
        Buy {item.quantity} in {item.category}{" "}
      </p>
    </div>
  ));
}
