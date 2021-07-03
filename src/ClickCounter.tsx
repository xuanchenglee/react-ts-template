import * as React from "react";
import { useState } from "react";

export interface ClickCounterProps {}

const ClickCounter: React.FunctionComponent<ClickCounterProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  );
};

export default ClickCounter;
