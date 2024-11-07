import Item from "./item";

const Groups = (propsList) => {
  return Object.keys(propsList).map((props) => (
    <div key={Math.random().toString()}>
      <h1 className="capitalize text-xl">{props}</h1>
      {Item(propsList[props])}
    </div>
  ));
};

export default Groups;
