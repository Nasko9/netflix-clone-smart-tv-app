import { useRef } from "react";

// Type
interface IUseMenu {
  categories: string[];
  setFocus: (text: string) => void;
}

// Data
const programs = [
  {
    id: 0,
    title: "Program 1",
    color: "#cfcfc4",
  },
  {
    id: 1,
    title: "Program 2",
    color: "#dd4558",
  },
  {
    id: 2,
    title: "Program 3",
    color: "#7ddd6a",
  },
  {
    id: 3,
    title: "Program 4",
    color: "#dddd4d",
  },
  {
    id: 4,
    title: "Program 5",
    color: "#8299dd",
  },
  {
    id: 5,
    title: "Program 6",
    color: "#edab83",
  },
  {
    id: 6,
    title: "Program 7",
    color: "#60ed9e",
  },
  {
    id: 7,
    title: "Program 8",
    color: "#d15fb6",
  },
  {
    id: 8,
    title: "Program 9",
    color: "red",
  },
];

export default function useMenu({ categories, setFocus }: IUseMenu) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // What happend when i focus the program -> move 250px right
  const onProgramFocused = ({ x }: { x: number }) => {
    if (x < 1250) {
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(-${x}px)`;
      }
    }
  };

  // Handle arrow press and move on menu
  const onProgramArrowPress = (
    direction: string,
    {
      categoryIndex,
      programIndex,
    }: { categoryIndex: number; programIndex: number }
  ) => {
    if (
      direction === "right" &&
      programIndex === programs.length - 1 &&
      categoryIndex < categories.length - 1
    ) {
      setFocus(`card-${categoryIndex + 1}`);

      return false;
    }
    return true;
  };

  return { programs, scrollRef, onProgramFocused, onProgramArrowPress };
}
