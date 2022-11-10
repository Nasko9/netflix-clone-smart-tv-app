import { useState, useEffect } from "react";

// Type
interface IUseContent {
  setFocus: () => void;
}

interface IProgramProps {
  foucsKey: string;
  id: number;
  title: string;
  color: string;
}

// Data
const KEY_ENTER = "enter";
const B_KEY = 66;

export default function useContent({ setFocus }: IUseContent) {
  const [currentProgram, setCurrentProgram] = useState<IProgramProps | null>(
    null
  );
  const [blockNavigationOut, setBlockNavigationOut] = useState(false);

  // Handle arrow press
  const onPressKey = (event: KeyboardEvent) => {
    console.log(event);
    if (event.keyCode === B_KEY) {
      setBlockNavigationOut(true);
    }
  };

  // Handle Enter press
  const onProgramPress = (
    programProps: IProgramProps,
    { pressedKeys }: { pressedKeys: { [key: string]: number } }
  ) => {
    console.log(programProps);
    if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
      return;
    }
    setCurrentProgram(programProps);
  };

  useEffect(() => {
    setFocus();
    window.addEventListener("keydown", onPressKey);
    return window.removeEventListener("keydown", onPressKey);
  }, []);

  return { currentProgram, onProgramPress, blockNavigationOut };
}
