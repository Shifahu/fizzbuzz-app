import { useState } from "react";

export default function FizzBuzzApp(): JSX.Element {
  const [count, setCountState] = useState<number>(1);
  const [numArr, setNumArrState] = useState<(number | string)[]>([]);

  const handleNextNumber = () => setCountState(count + 1);

  function fizzBuzz(count: number) {
    if (count % 3 === 0) {
      setNumArrState([...numArr, "Fizz"]);
      handleNextNumber();
      // return "Fizz";
    } else if (count % 5 === 0) {
      setNumArrState([...numArr, "Buzz"]);
      handleNextNumber();
      //return "Buzz";
    } else {
      setNumArrState([...numArr, count]);
      handleNextNumber();
      //return count};
    }
  }
  return (
    <>
      <h1>FizzBuzz App</h1>
      <p>Numbers:{numArr.join(" ")}</p>
      {/* <p>Current Number:{numArr[numArr.length - 1]}</p> */}
      <p>Current Number:{count}</p>
      <button onClick={() => fizzBuzz(count)}>NEXT</button>
    </>
  );
}
