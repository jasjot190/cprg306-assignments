const Item = (propsList) => {
  return propsList.map((props) => (
    <ul className="m-4 p-2 max-w-sm bg-slate-900" key={props.id}>
      <li className="text-xl font-bold">{props.name}</li>
      <li className="text-sm">
        Buy {props.quantity} in {props.category}{" "}
      </li>
    </ul>
  ));
};

export default Item;
