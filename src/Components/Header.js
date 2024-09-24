import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function Header() {
  const[screensize, setScreenSize] = useState(0);
  const [isActive, setActive] = useState(false);
  useEffect(()=>{
    setScreenSize(window.screen.width)
  },[])
  console.log(screensize)
  const toggleNav = ()=>{
    setActive(!isActive);
  }
  const navbar = useRef();
  return (
    <header className= "main-header">
      
        <a className={'brand' + (screensize <767 ? " hidden":"")} href="#">Dashboard UI</a>
        <a className={'navbar'+ (screensize <767 ? " hidden":"")} onClick={toggleNav} href='javascript:void(0)'><FontAwesomeIcon icon={faBars} /></a>
       <div className={"mobile-nav" +  (screensize <767 ? "":" hidden")}>
          <a className='brand' href="#">Dashboard UI</a>
          <a className='navbar' onClick={toggleNav} href='javascript:void(0)'><FontAwesomeIcon icon={faBars} /></a>
       </div>
        <nav className={"navbar-main " + (isActive? "nav-active":"nav-hidden") }>
          <Link to="/" className="active">Dashboard</Link> 
          <Link to="/app">Apps</Link>
          <Link to="/uielements">UI Elements</Link>
          <Link to="/widgets">Widgets</Link>
          <Link to="/charts">Charts</Link>
        </nav>
      </header>
  )
}

export default Header