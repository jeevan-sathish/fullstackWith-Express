import React, { useEffect, useState, type ChangeEvent } from "react";

const products = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "React Hooks" },
  { id: 3, title: "JavaScript Arrays" },
  { id: 4, title: "JavaScript Objects" },
  { id: 5, title: "TypeScript Basics" },
  { id: 6, title: "Node.js Fundamentals" },
  { id: 7, title: "Express.js Routing" },
  { id: 8, title: "MongoDB CRUD" },
  { id: 9, title: "PostgreSQL Joins" },
  { id: 10, title: "REST API Development" },
  { id: 11, title: "Authentication with JWT" },
  { id: 12, title: "CSS Flexbox" },
  { id: 13, title: "CSS Grid Layout" },
  { id: 14, title: "Tailwind CSS" },
  { id: 15, title: "Redux Toolkit" },
  { id: 16, title: "Zustand State Management" },
  { id: 17, title: "Data Structures" },
  { id: 18, title: "Algorithms in JavaScript" },
  { id: 19, title: "Binary Search" },
  { id: 20, title: "Dynamic Programming" },
];

const Debouncing: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [prod, setProd] = useState(products);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value.toLocaleLowerCase());
  }

  function debouncingTrigger() {
    const filterProd = products.filter((ele) =>
      ele.title.toLocaleLowerCase().includes(text),
    );
    setProd(text ? filterProd : products);
  }

  useEffect(() => {
    const setter = setTimeout(() => {
      debouncingTrigger();
    }, 300);

    return () => {
      clearTimeout(setter);
    };
  }, [text]);
  return (
    <div>
      <p>{text}</p>
      <input type="text" value={text} onChange={handleChange} />

      {prod.map((ele) => (
        <ul>
          <li>{ele.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Debouncing;
