import React from "react";
import styled from 'styled-components'
import {Route, Link, Switch} from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import Logo from '../assets/img/logo.png'
import HomeHeroSlider from "./HomeHero/HomeHeroSlider";


const array = [
    {link: 'Home', active:''},{link:'Login',active: ''} ,{link:'Register', active: ''} ];

const NavLink = styled(Link)`
  font-size: 20px;
  font-family: monospace;
  padding: 20px;
  text-decoration: none;
  color: #000000;

`
const Img = styled.img`
  margin: 10px;
  width: 100px;
  height: 100px;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
`

function Navbar() {
    return (
        <div >
            <Div>
                <Img  src={Logo}/>
                <NavLink  to={'/'} >{array[0].link}</NavLink>
                <NavLink to={'/Login'}>{array[1].link}</NavLink>
                <NavLink to={'/Register'}>{array[2].link}</NavLink>



            </Div>
            <hr/>

        </div>

    );
}

export default Navbar;
