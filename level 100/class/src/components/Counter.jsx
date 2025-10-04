import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(1);
  // let count = 0
  const changeIncrease = () => {
    setIncrease(increase * 2);
  };
  const handleIncrease = () => {
    setCount(count + increase);
    console.log("Increase", count);
  };
  const handleDecrease = () => {
    setCount(count - increase);
    console.log("Decrease", count);
  };
  return (
    <>
      <div>
        <span className="mx-20">{count}</span>
        <br />
        <button onClick={handleIncrease} className="mx-3 bg-amber-300 text-black rounded-md p-3">Increase</button>
        <button onClick={handleDecrease} className="mx-3 bg-black text-white rounded-md p-3">Decrease </button>
        <button className="mx-3 bg-orange-950 h-10 inline-flex min-w-[50px] justify-center items-center p-4" onClick={changeIncrease}>+{increase}</button>
      </div>
    </>
  );
}
