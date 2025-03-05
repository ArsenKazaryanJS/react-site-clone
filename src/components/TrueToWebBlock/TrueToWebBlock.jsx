import "./truetoweb.css";
import google from "../../assets/google.svg";
import firefox from "../../assets/Firefox.svg";
import compass from "../../assets/compass.svg";
import { Lock } from "../Icons/Icons";

export const TrueToWebBlock = () => {
  return (
    <div className="true_to_web_content">
      <div className="exemple_block">
        <div className="exemple">
          <Lock className="lock_icon"/>
          <p>exemple.com</p>
        </div>
      </div>
      <div className="text_content">
        <h2 className="title">Stay true to the web</h2>
        <p>
          People expect web app pages to load fast. On the server, React lets
          you start streaming HTML while you’re still fetching data,
          progressively filling in the remaining content before any JavaScript
          code loads. On the client, React can use standard web APIs to keep
          your UI responsive even in the middle of rendering.
        </p>
      </div>
      <div className="web_items">
        <div className="web">
          <img src={google} alt="" />
        </div>
        <div className="web">
          <img src={firefox} alt="" />
        </div>
        <div className="web">
          <img src={compass} alt="" />
        </div>
      </div>
    </div>
  );
};
