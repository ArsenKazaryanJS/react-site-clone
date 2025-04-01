import { useState } from "react";
import "./communityRightBox.css";

export const CommunityRightBox = () => {
    const [active,setActive] = useState()
  const items = [
      {
        id: 1,
        name: "Overview",
      },
      {
        id: 2,
        name: "Code of Conduct",
      },
      {
        id: 3,
        name: "Stack Overflow",
      },
      {
        id: 4,
        name: "Popular Discussion Forums",
      },
      {
        id: 5,
        name: "News",
      },
    ]
  
  return (
    <aside className="communityRightBox">
          <h3>GET INVOLVED</h3>
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
