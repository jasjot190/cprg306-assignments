import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { deleteItem } from "../_services/shopping-list-service.js";

const Item = ({ propsList, onSelect, removeItem }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { user } = useUserAuth();
  const onSelectPreFunction = (name) => {
    selectedItem === name
      ? setSelectedItem(null) & onSelect(null)
      : setSelectedItem(name) & onSelect(name);
  };

  const handleDelete = async (uid, pid, pname) => {
    if (selectedItem === pname) {
      onSelectPreFunction(pname);
    }
    deleteItem(uid, pid);
    removeItem();
  };
  return propsList.map((props) => (
    <div className="flex" key={props.id}>
      <button
        className="border-white  border-2 w-8 h-8 rounded-full bg-red-800 hover:text-yellow-500 my-auto"
        onClick={() => {
          handleDelete(user.uid, props.id, props.name);
        }}
      >
        x
      </button>
      <ul
        className={`m-3 p-4 min-w-96 cursor-pointer
        ${selectedItem === props.name ? "bg-orange-700" : "bg-slate-900"}
     hover:bg-orange-700`}
        onClick={() => onSelectPreFunction(props.name)}
      >
        <li className="text-xl font-bold">{props.name}</li>
        <li className="text-sm">
          Buy {props.quantity} in {props.category}{" "}
        </li>
      </ul>
    </div>
  ));
};

export default Item;
