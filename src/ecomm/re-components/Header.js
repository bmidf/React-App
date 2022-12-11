import React from 'react'
import { Link } from "react-router-dom";
import {BsSearch,BsPersonCircle,BsBag} from "react-icons/bs";
const Header = () => {
    return (
        <div className="commHeader">
            <div className="searchHeader">
                <BsSearch/>
            </div>
            <div className="middleHeader">
                <Link to="/Shop" className="headerText" >SHOP</Link>
                <p className="headerText">ESSENTIALS</p>
                <Link to="/react-app" className="headerText headerHome"> 
                        <span>Macc<br/></span>
                        <span className="headerHomeSpan">Essentials</span></Link>
                <p className="headerText">BEST SELLERS</p>
                <p className="headerText">ABOUT US</p>
            </div>
            <div className="rightHeader">
            <BsPersonCircle/>
            <Link to="/Cart"><BsBag/></Link>
            </div>
        </div>
    )
}
export default Header