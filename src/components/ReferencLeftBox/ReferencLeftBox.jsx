import { ChevronRight } from "lucide-react";
import "./referencLeftBox.css";
import { useState } from "react";

export const ReferencLeftBox = () => {
  const [activeLinkId, setActiveLinkId] = useState(); 
  const components = [
    {
      name: "react@19",
      links: [
        { id: 1, title: "Overview" },
        { id: 2, title: "Hooks" },
        { id: 3, title: "Components" },
        { id: 4, title: "APIs" },
      ],
    },
    {
      name: "react-dom@19",
      links: [
        { id: 5, title: "Hooks" },
        { id: 6, title: "Components" },
        { id: 7, title: "APIs" },
        { id: 8, title: "Client APIs" },
        { id: 9, title: "Server APIs" },
        { id: 10, title: "Static APIs" },
      ],
    },
    {
      name: "Rules of React",
      links: [
        { id: 11, title: "Overview" },
      ],
    },
    {
      name: "React Server Components",
      links: [
        { id: 12, title: "Server Components" },
        { id: 13, title: "Server Functions" },
        { id: 14, title: "Directives" },
      ],
    },
    {
      name: "Legacy APIs",
      links: [
        { id: 15, title: "Legacy React Apis" },
      ],
    },
  ];

  return (
    <aside className="referencLeftBox-box">
      {components.map((component, index) => (
        <div className="react19" key={index}>
          <h3>{component.name}</h3>
          <div className="links">
            {component.links.map((link) => (
              <a 
                key={link.id} 
                href="#" 
                onClick={() => setActiveLinkId(link.id)} 
                className={activeLinkId === link.id ? 'active' : ''}
              >
                 {link.title} {link.id !== 1 && link.id !== 12 && <ChevronRight />} </a>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};