import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  title: string;
  noItemMessage: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, noItemMessage, title, onSelectItem }: Props) {
  //   const items: string[] = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const getMessage = ()=> {
  //     return items.length > 0 ? <p>No item found</p> : null
  //   }

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1> {title} </h1>
      {/* {getMessage()} */}
      {/* {items.length > 0 ? <p>No item found</p> : null} */}

      {items.length === 0 && <p> {noItemMessage} </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //   <li className="list-group-item" key={item} onClick={()=> console.log(item, index)}>
          //     {item}
          //   </li>
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
