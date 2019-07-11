import React from "react"
import './css/main.css'
import MainMenuItems from "./MainMenuItems";
import MainMenuName from "./MainMenuName";
import ContactPoints from "./ContactPoints";

const Main = () => {
  return (
    <div className='mainContainer'>
      <div className='mainBackDrop'></div>
      <div className='menuItems'>
        <MainMenuName/>
        <MainMenuItems/>
        <ContactPoints/>
      </div>
    </div>
  );
}

export default Main