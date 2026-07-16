import React, { useRef, useState, type ChangeEvent } from "react";

const Throttle: React.FC = () => {
  const [text, setText] = useState("");
  const [throttleMessage, setThrottleMessage] = useState("");

  const waiting = useRef(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setText(value);

    if (!waiting.current) {
      setThrottleMessage(value);
      waiting.current = true;

      setTimeout(() => {
        waiting.current = false;
      }, 1000);
    }
  }

  return (
    <div>
      <p>{text}</p>
      <input type="text" value={text} onChange={handleChange} />
      <h1>Throttle: {throttleMessage}</h1>
    </div>
  );
};

export default Throttle;
