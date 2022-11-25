import { useState } from "react";

// Type

interface IProgramProps {
  foucsKey: string;
  id: number;
  title: string;
  color: string;
}

export default function useHomePage() {
  const [currentProgram, setCurrentProgram] = useState<IProgramProps | null>(
    null
  );
  const onProgramPress = (programProps: IProgramProps) => {
    setCurrentProgram(programProps);
  };

  return { currentProgram, onProgramPress };
}
