import React from "react"
import './css/main.css'
import MainMenuItems from "./MainMenuItems";
import MainMenuName from "./MainMenuName";

const Main = () => {
  return (
    <div className='mainContainer'>
      <div className='mainBackDrop'></div>
      <div className='menuItems'>
        <MainMenuName/>
        <MainMenuItems/>
      </div>
    </div>
  );
}

export default Main