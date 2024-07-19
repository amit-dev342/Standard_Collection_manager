import React, { useRef } from "react";

const InputField = ({ value, onChange, setPositon }) => {
  const inputRef = useRef(null);

  const logCursorPosition = () => {
    const input = inputRef.current;
    if (input) {
      const { selectionStart } = input;

      // Create a dummy div to calculate the cursor position
      const dummyDiv = document.createElement("div");
      dummyDiv.style.position = "absolute";
      dummyDiv.style.whiteSpace = "pre-wrap";
      dummyDiv.style.visibility = "hidden";
      dummyDiv.style.pointerEvents = "none";
      dummyDiv.style.font = window.getComputedStyle(input).font;
      document.body.appendChild(dummyDiv);

      dummyDiv.textContent = input.value.substring(0, selectionStart);
      const cursorSpan = document.createElement("span");
      cursorSpan.textContent = "|";
      dummyDiv.appendChild(cursorSpan);

     
      const { offsetTop, offsetLeft } = cursorSpan;
      setPositon({ offsetTop: 145, offsetLeft });
      document.body.removeChild(dummyDiv);
    }
  };

  return (
    <div className="input-group mt-3">
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder="select @collection @ column1 column2 ..."
        onKeyUp={logCursorPosition}
      />
    </div>
  );
};

export default InputField;
