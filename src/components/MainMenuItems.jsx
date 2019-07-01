import React from "react"
import {Link} from "react-router-dom";
import './css/mainMenuItems.css'

const MainMenuItems = () => {
  const menuItems = ["About", "Skills", "Projects", "Contact"]

  const mapMenuItems = menuItems.map((item, index) => {
    return (
      <div className='menuItem' key={index}>
        <Link to={`/main/${item.toLowerCase()}`}>
          {item}
        </Link>
      </div>
    )
  })

  return (
    <div className="mainMenuItemsContainer">
      {mapMenuItems}
    </div>
  );
}

export default MainMenuItems
