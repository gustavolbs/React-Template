import { useCounter } from "../../context/CounterContex";
import { Container } from "./styles";
import "./index.css";

function Page2() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Hello World</h1>
      <div className="counter">
        <span>Counter: {counter}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Page2;
