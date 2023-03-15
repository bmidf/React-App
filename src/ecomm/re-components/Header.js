import React from 'react'
import { Link } from "react-router-dom";
import {BsSearch,BsPersonCircle,BsBag} from "react-icons/bs";
import Logo from "../assets/images/logo.png"
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Container>
        <div className="commHeader">
               <Link to="/react-app" className="headerText headerHome"> 
                       <img src={Logo} alt="logo" className="logo"/>
                        </Link>
            
            <div className="middleHeader">
         
                <Link to="/Shop" className="headerText" >All events</Link>
                
                <p className="headerText">BEST SELLERS</p>
                <p className="headerText">ABOUT US</p>
            </div>
            <div className="rightHeader">
            <div className="searchHeader">
                <BsSearch/>
            </div>
            <BsPersonCircle/>
            <Link to="/Cart"><BsBag/></Link>
            </div>
        </div>
        </Container>
    )
}
export default Header