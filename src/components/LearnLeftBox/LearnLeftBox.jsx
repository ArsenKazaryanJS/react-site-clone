import { ChevronDown, ChevronRight } from "lucide-react";
import "./learnLeftBox.css";
import { useState } from "react";

export const LearnLeftBox = () => {
  const [activeLinkId, setActiveLinkId] = useState();
  const components = [
    {
      name: "GET STARTED",
      links: [
        { id: 1, title: "Quick Start" },
        { id: 2, title: "Installation" },
        { id: 3, title: "Setup" },
      ],
    },
    {
      name: "LEARN REACT",
      links: [
        { id: 4, title: "Describing the UI" },
        { id: 5, title: "Adding interactivity" },
        { id: 6, title: "Managing State" },
        { id: 7, title: "Escape Hatches" },
      ],
    },
  ];

  return (
    <aside className="learnLeftBox">
      {components.map((component, index) => (
        <div className="learnSection" key={index}>
          <h3>{component.name}</h3>
          <div className="links">
            {component.links.map((link) => (
              <a
                key={link.id}
                href="#"
                onClick={() => setActiveLinkId(link.id)}
                className={activeLinkId === link.id ? "active" : ""}
              >
                {link.title} {activeLinkId === link.id ? <ChevronDown/> : <ChevronRight />}
              </a>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};
