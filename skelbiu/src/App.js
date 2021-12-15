
import './App.css';
import styled from 'styled-components'
import {Route, Link, Switch} from "react-router-dom";
import Header from "./component/Header/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import HomeHeroSlider from "./component/HomeHero/HomeHeroSlider";
import React from "react";
import Login from "./component/Login";
import Footer from "./component/Footer/Footer";

const Container = styled.div`
  left: 15%;
  position: relative;
  display: inline-block;
  width: 1500px;
  margin-right: auto;
  margin-left: auto;
  
  
  
  

`
function App() {
  return (
    <div className="App">
        <Container>

            <Switch>
                <Route path='/' exact={'/'}>
                    <Header/>

                </Route>
                <Route path={'/Login'}>
                    <LoginPage/>
                </Route>
                <Route path={'/Register'}>
                    <RegisterPage/>
                </Route>
            </Switch>
            <Footer/>




        </Container>



    </div>
  );
}

export default App;
