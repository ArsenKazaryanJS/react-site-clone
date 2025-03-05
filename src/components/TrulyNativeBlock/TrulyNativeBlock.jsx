import "./trulynative.css";
import apple from "../../assets/apple.svg";
import android from "../../assets/android.svg";
import { Battery, Bluetooth, Wifi } from "../Icons/Icons";
import { useEffect, useState } from "react";

export const TrulyNativeBlock = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setTime(formattedTime);
      };
      updateTime(); 
    }, []);

  return (
    <div className="truly_native_container">
  <div className="truly_native_content">
      <div className="status_bar">
        <span className="time">{time}</span> 
        <div className="statuses"> 
          <Bluetooth className="satus_icon"/>
          <Wifi className="satus_icon"/>
          <Battery className="satus_icon"/>
        </div>
      </div>
      <div className="text_content">
        <h2 className="title">Go truly native</h2>
        <p className="text">
          People expect native apps to look and feel like their platform. 
          <span><a className="url" href="#"> React Native</a></span> and <span> <a className="url" href="#">Expo</a></span>  let you build apps in React for Android, iOS, and
          more. They look and feel native because their UIs are truly native.
          It’s not a web view—your React components render real Android and iOS
          views provided by the platform.
        </p>
      </div>
      <div className="platform_items">
        <div className="platform"><img src={apple} alt="" /></div>
        <div className="platform"><img src={android} alt="" /></div>
      </div>
    </div>
    </div>
  
  );
};
