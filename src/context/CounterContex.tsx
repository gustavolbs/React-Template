import { createContext, useState, ReactNode, useContext } from "react";

type CounterContextData = {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = createContext({} as CounterContextData);

type CounterContextProps = {
  children: ReactNode;
};

export function CounterContextProvider({ children }: CounterContextProps) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        decrement,
        increment,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  return useContext(CounterContext);
};
