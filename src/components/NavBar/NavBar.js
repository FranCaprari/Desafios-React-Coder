import React, {useState} from 'react';
import "./NavBar.css";
import bodybest_logo from "../../assets/images/bodybest_logo.png"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';


const menuItems = [
    {id: 1, label: "Inicio", path: "/"},
    {id: 2, label: "Proteinas", path: "/category/proteinas"},
    {id: 3, label: "Creatinas", path: "/category/creatinas"},
    {id: 4, label: "Vitaminas", path: "/category/vitaminas"},
]
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="nav">
        <a href="/">
          <span className="nav-logo"><img src={bodybest_logo} alt='logo bodybest'></img></span>
        </a>
        <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.id} className="nav-item">{item.label}</Link>
          ))}
       </div>
       <div className="cart">
        <CartWidget/>
       </div>
     </div>
    )}

export default NavBar;