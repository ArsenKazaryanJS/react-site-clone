import { useState } from "react";
import "./learnRightBox.css";

export const LearnRightBox = () => {
  const [active, setActive] = useState();
  const items = [
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Creating and nesting components",
    },
    {
      id: 3,
      name: "Writing markup with JSX",
    },
    {
      id: 4,
      name: "Adding styles",
    },
    {
      id: 5,
      name: "Displaying data",
    },
    {
      id: 6,
      name: "Conditional rendering",
    },
    {
      id: 7,
      name: "Rendering lists",
    },
    {
      id: 8,
      name: "Responding to events",
    },
    {
      id: 9,
      name: "Updating the screen",
    },
    {
      id: 10,
      name: "Using Hooks",
    },
    {
      id: 11,
      name: "Sharing data between components",
    },
    {
      id: 12,
      name: "Next Steps",
    },
  ];
  return (
    <aside className="learnRightBox">
      <h3>GET THIS PAGE</h3>
      <div className="onThisPage-box">
        {items.map((el) => (
          <a
            key={el.id}
            onClick={() => setActive(el.id)}
            className={el.id === active ? "active" : ""}
            href="#"
          >
            {el.name}
          </a>
        ))}
      </div>
    </aside>
  );
};
