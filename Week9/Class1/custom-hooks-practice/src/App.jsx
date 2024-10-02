import { useState } from "react";
import useInterval from "./custom-hooks/useInterval";
import useIsOnline from "./custom-hooks/useIsOnline";
import useMousePointer from "./custom-hooks/useMousePointer";
import useDebounce from "./custom-hooks/useDebounce";

function App() {
  const { isOnline } = useIsOnline();
  const mousePointer = useMousePointer();
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return (
    <>
      <div>
        Your mouse position is {mousePointer.x} {mousePointer.y}
      </div>
      <div>Timer is at {count}</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
}

export default App;
