import { useRef } from "react";

// Type
interface IUseMenu {
  categories: string[];
  setFocus: (text: string) => void;
  programs: { id: number; title: string; color: string }[];
}

export default function useMenu({ categories, setFocus, programs }: IUseMenu) {
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
