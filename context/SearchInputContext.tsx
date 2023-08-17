import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface InputData {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const input_data = createContext<InputData>({
  input: "",
  setInput: () => {},
  active: false,
  setActive: () => {}
});

interface props {
  children: JSX.Element;
}

export function SearchInputProvider({ children }: props) {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);

  let init_state: InputData = {
    input: input,
    setInput: setInput,
    active: active,
    setActive: setActive
  };

  return <input_data.Provider value={init_state}>{children}</input_data.Provider>;
}

export function useSearchInputContext() {
  return useContext(input_data);
}
