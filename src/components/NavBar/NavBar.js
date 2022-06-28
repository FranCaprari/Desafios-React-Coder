import React, {useState} from 'react';
import "./NavBar.css";
import bodybest_logo from "../../assets/images/bodybest_logo.png"
import CartWidget from "../CartWidget/CartWidget";


const menuItems = [
    {id: 1, label: "Inicio"},
    {id: 2, label: "Productos"},
    {id: 3, label: "Contacto"},
    {id: 4, label: "Nosotros"},
    {id: 5, label: "FAQs"},
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
            <a href="/" className="nav-item" key={item.id}>
              {item.label}
            </a>
          ))}
       </div>
       <div className="cart">
        <CartWidget/>
       </div>
     </div>
    )}

export default NavBar;