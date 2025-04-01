import { useState } from "react";
import "./referencRightBox.css";

export const ReferencRightBox = () => {
    const [active,setActive] = useState()
  const items = [
      {
        id: 1,
        name: "Overview",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "React DOM",
      },
      {
        id: 4,
        name: "Rules of React",
      },
      {
        id: 5,
        name: "Legacy APIs",
      },
    ]
  
  return (
    <aside className="referencRightBox">
          <h3>GET THIS PAGE</h3>
      <div className="onThisPage-box">
        {
          items.map((el) => 
            <a 
              key={el.id} 
              onClick={() => setActive(el.id)} 
              className={el.id === active ? 'active' : ''} 
              href="#"
            >
              {el.name}
            </a>
          )
        }
      </div>
    </aside>
  );
};
