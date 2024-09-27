import React, { useMemo, useState } from "react";

function ThirdTask() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("memo got called")
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Find sum from 1 to n"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      sum from 1 to {inputValue} is {count}
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
}

export default ThirdTask;
