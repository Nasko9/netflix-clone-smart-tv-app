import React from "react";

// Style
import "./index.css";

// Hook
import useInput from "./useInput";

// Type
interface IInput {
  focused: boolean;
  _className: string;
  focusClassName: string;
}

export default function Input({ focused, _className, focusClassName }: IInput) {
  const { inputRef, inputValue, inputHandler } = useInput(focused);

  return (
    <>
      <input
        ref={inputRef}
        name="search"
        id="search"
        value={inputValue}
        onChange={(e) => inputHandler(e.target.value)}
        className={focused ? `${_className} ${focusClassName}` : _className}
      />
    </>
  );
}
