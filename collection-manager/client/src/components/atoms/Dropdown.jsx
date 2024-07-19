import React from "react";

const Dropdown = ({ collections, onSelect, position }) => {
  const { offsetTop, offsetLeft } = position;

  const handleButtonClick = (col) => {
    onSelect(col);
  };

  return (
    <div
      className="mt-3"
      style={{ position: "absolute", top: offsetTop, left: offsetLeft + 70 }}
    >
      <ul className="list-group">
        {collections.map((col, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => handleButtonClick(col)}
            style={{ cursor: "pointer" }}
          >
            {col}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
