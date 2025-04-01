import { ChevronDown } from "lucide-react";
import "./communityLeftBox.css";
import { useState } from "react";

export const CommunityLeftBox = () => {
  const [active, setActive] = useState(1);
  const items = [
    { id: 2, name: "React Conferences" },
    { id: 3, name: "React Meetups" },
    { id: 4, name: "React Videos" },
    { id: 5, name: "Meet the Team" },
    { id: 6, name: "Docs Contributors" },
    { id: 7, name: "Translations" },
    { id: 8, name: "Acknowledgements" },
    { id: 9, name: "Versioning Policy" },
  ];



  return (
    <aside className="communityLeftBox">
      <h3>GET INVOLVED</h3>
      <div className="involved-box">
        <a 
          href="#" 
          onClick={() => setActive(1)} 
          className={active === 1 ? 'active lead' : 'lead'}
        >
          Community <ChevronDown />
        </a>
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