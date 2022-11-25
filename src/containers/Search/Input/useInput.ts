import { useState, useRef, useEffect } from "react";

export default function useInput(focused: boolean) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      if (focused) {
        return inputRef.current.focus();
      }
      return inputRef.current.blur();
    }
  }, [focused]);

  const inputHandler = (value: string) => {
    setInputValue(value);
  };
  return { inputRef, inputValue, inputHandler };
}
