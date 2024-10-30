import { useState } from "react";

const Item = ({ propsList, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelectPreFunction = (name) => {
    selectedItem === name
      ? setSelectedItem(null) & onSelect(null)
      : setSelectedItem(name) & onSelect(name);
  };

  return propsList.map((props) => (
    <ul
      className={`m-4 p-2 max-w-sm cursor-pointer
        ${selectedItem === props.name ? "bg-orange-700" : "bg-slate-900"}
     hover:bg-orange-700`}
      onClick={() => onSelectPreFunction(props.name)}
      key={props.id}
    >
      <li className="text-xl font-bold">{props.name}</li>
      <li className="text-sm">
        Buy {props.quantity} in {props.category}{" "}
      </li>
    </ul>
  ));
};

export default Item;
