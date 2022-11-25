import React, { useEffect } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

// Component
import Input from "./Input";

// Style
import "./index.css";

// Type
interface ISearch {
  setFocus: (props: string) => void;
}

// Create focusable component
const FocusableInput = withFocusable()(Input);

export default function Search({ setFocus }: ISearch) {
  useEffect(() => {
    setFocus("search-screen-input");
  }, []);

  return (
    <div className="search-screen">
      <FocusableInput
        focusKey={`search-screen-input`}
        _className={"search-input"}
        focusClassName={"search-input-focused"}
      />
    </div>
  );
}
