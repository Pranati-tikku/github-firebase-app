import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {Nav,NavItem,Collapse,Navbar,NavbarText,NavbarToggler,NavbarBrand} from "reactstrap";
import userContext from "../context/UserContext";



const Header=()=>{
    const navigate=useNavigate();
    const [isOpen,setIsOpen]=useState(false)
    const context=useContext(userContext)
    const toggle=()=>{setIsOpen(!isOpen)}
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <NavLink to="/" className="text-white" style={{ textDecoration: 'none' }}>Github Firebase App</NavLink>
            </NavbarBrand>
            <NavbarText className="text-white">{context.user?.email ? context.user.email:""}</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse navbar isOpen={isOpen}>
            
                {context.user ? 
                <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink to="/" className="text-white p-2" style={{ textDecoration: 'none' }} onClick={()=>{
                        context.setUser(null)
                        navigate("/signup");
                    }}>LogOut</NavLink>
                </NavItem>
                </Nav>:
                 <Nav className="ms-auto" navbar>
                <NavItem>
                <NavLink to="/signin" className="text-white p-2" style={{ textDecoration: 'none' }}>SignIn</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signup" className="text-white p-2" style={{ textDecoration: 'none' }}>SignUp</NavLink>
            </NavItem>
             </Nav> }
                
                
           
            </Collapse>
        </Navbar>
    )
}
export default Header;