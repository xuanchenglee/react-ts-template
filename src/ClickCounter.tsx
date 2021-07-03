import * as React from "react";
import { useState } from "react";

const ClickCounter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  );
};

export default ClickCounter;
