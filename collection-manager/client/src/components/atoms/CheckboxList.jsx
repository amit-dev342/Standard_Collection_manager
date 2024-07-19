import React, { useEffect, useRef } from "react";

const CheckboxList = ({
  columns,
  selectedColumns,
  onChange,
  position,
  setShowCheckboxes,
}) => {
  const { offsetTop, offsetLeft } = position;

  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setShowCheckboxes(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowCheckboxes]);

  return (
    <ul
      ref={listRef}
      className="list-unstyled"
      style={{
        padding: 0,
        position: "absolute",
        top: offsetTop + 30,
        left: offsetLeft + 70,
      }}
    >
      {columns.map((col, index) => (
        <li key={index} className="mb-2">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`checkbox-${index}`}
              value={col}
              checked={selectedColumns.includes(col)}
              onChange={() => onChange(col)}
            />
            <label
              className="form-check-label ml-2"
              htmlFor={`checkbox-${index}`}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              {col}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
