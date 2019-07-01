import React from "react"
import './css/NavBar.css'
import {Link} from "react-router-dom";

const NavBar = () => {

  const menuItems = ['About', 'Skills', 'Projects', 'Contact']

  const mapMenuItems = menuItems.map((item, index) => {
    return (
      <Link to={`/main/${item.toLowerCase()}`}>
        <div className='navMenuItem'>
          {item}
        </div>
      </Link>
    )
  })

  return (
    <div className="navBar">
      {mapMenuItems}
    </div>
  );
}

export default NavBar