import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = (clickedIndex) => {
      if (expandedIndex === clickedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(clickedIndex);
      }
    };

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className="flex p-3 bg-grey-50 border-b items-center cursor-pointer justify-between"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x porder-t rounded">{renderedItems}</div>;
}

export default Accordion;
