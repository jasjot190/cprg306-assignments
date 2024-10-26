import { useState } from "react";

const Item = ({ propsList }, onItemSelect) => {
  // const [selectedItem, setSelectedItem] = useState(null);
  // const onSelect = (id, name) => {
  //   selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  //   selectedItem === null ? ingredient({ null: any }) : ingredient({ name });
  // };

  const onSelect = (name) => {
    onItemSelect(name);
  };

  return propsList.map((props) => (
    <ul
      className={`m-4 p-2 max-w-sm  
        ${
          // selectedItem === props.id ? "bg-orange-700" : "bg-slate-900"
          ""
        }
     hover:bg-orange-700`}
      onClick={() => onSelect(props.name)}
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
