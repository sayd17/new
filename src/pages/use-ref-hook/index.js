import { useRef } from "react";

function Counter() {
  let ref = useRef(0);

  let text = useRef();

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
    text.current.innerText = "Hello";
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p ref={text}>World</p>
    </>
  );
}

export default Counter;
