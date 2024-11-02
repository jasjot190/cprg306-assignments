import Item from "./item";

const Groups = ({ propsCategoryList, onItemSelection }) => {
  return Object.keys(propsCategoryList).map((props) => (
    <div key={Math.random().toString()}>
      <ul className="capitalize text-xl">{props}</ul>
      <Item propsList={propsCategoryList[props]} onSelect={onItemSelection} />
    </div>
  ));
};

export default Groups;
